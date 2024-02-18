'use client'
//
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
//
import { EuiButton, EuiPageTemplate } from '@elastic/eui';

export default function IndicesLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = (path: string) => {
    router.push(`/content/indices${path}`);
  }

  const checkPathname = (path: string) => {
    return pathName?.includes(path);
  }


  return (
    <>
      <EuiPageTemplate.Header
        pageTitle={"Index detail"}
        tabs={[
          {
            id: 'overview',
            label: 'Overview',
            isSelected: checkPathname("overview"),
            onClick: () => handleClick("/overview"),
          },
          {
            id: 'documents',
            label: 'Documents',
            isSelected: checkPathname("documents"),
            onClick: () => handleClick("/documents"),
          },
          {
            id: 'mappings',
            label: 'Mappings',
            isSelected: checkPathname("mappings"),
            onClick: () => handleClick("/mappings"),
          },
          {
            id: 'pipelines',
            label: 'Pipelines',
            isSelected: checkPathname("pipelines"),
            onClick: () => handleClick("/pipelines"),
          },
          {
            id: 'configuration',
            label: 'Configuration',
            isSelected: checkPathname("configuration"),
            onClick: () => handleClick("/configuration"),
          },
        ]}
      />
      <EuiPageTemplate.Section>
        {children}
      </EuiPageTemplate.Section>
    </>
  )
}
