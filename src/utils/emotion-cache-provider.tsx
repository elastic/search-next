'use client';
import React from 'react';
//
import createCache, { EmotionCache, Options } from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { ComponentType, PropsWithChildren, useMemo } from 'react';

type ProviderComponentProps<TCacheKey extends string> = {
  [T in TCacheKey]: EmotionCache;
};

export interface EmotionCacheProviderProps<TProviderCacheKey extends string>
  extends PropsWithChildren {
  options: Omit<Options, 'insertionPoint'>;
  providerCacheKey: TProviderCacheKey;
  providerComponent: ComponentType<
    ProviderComponentProps<TProviderCacheKey> & PropsWithChildren
  >;
}

export const EmotionCacheProvider = <
  TProviderCacheKey extends string = string,
>({
  children,
  options,
  providerCacheKey,
  providerComponent: ProviderComponent,
}: EmotionCacheProviderProps<TProviderCacheKey>) => {
  const registry = useMemo(() => {
    const cache = createCache(options);
    cache.compat = true;

    const originalInsert = cache.insert;
    let inserted: Array<{ name: string; isGlobal: boolean }> = [];

    cache.insert = (...args) => {
      const [selector, serialized] = args;
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push({
          name: serialized.name,
          isGlobal: !selector,
        });
      }
      return originalInsert(...args);
    };

    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };

    return { cache, flush };
  }, []);

  useServerInsertedHTML(() => {
    const inserted = registry.flush();
    if (inserted.length === 0) {
      return null;
    }

    let styles = '';
    let dataEmotionAttribute = registry.cache.key;
    const globals: Array<{ name: string; style: string }> = [];

    inserted.forEach(({ name, isGlobal }) => {
      const style = registry.cache.inserted[name];

      if (typeof style === 'boolean') {
        return;
      }

      if (isGlobal) {
        globals.push({ name, style });
      } else {
        styles += style;
        dataEmotionAttribute += ` ${name}`;
      }
    });

    return (
      <>
        {globals.map(({ name, style }) => (
          <style
            key={name}
            data-emotion={`${registry.cache.key}-global ${name}`}
            dangerouslySetInnerHTML={{ __html: style }}
          />
        ))}
        {!!styles.length && (
          <style
            data-emotion={dataEmotionAttribute}
            dangerouslySetInnerHTML={{ __html: styles }}
          />
        )}
      </>
    );
  });

  // Loose provider cache key type to make typescript happy
  const props: ProviderComponentProps<string> = {
    [providerCacheKey]: registry.cache,
  };

  return (
    <ProviderComponent
      {...(props as ProviderComponentProps<TProviderCacheKey>)}
    >
      {children}
    </ProviderComponent>
  );
};
