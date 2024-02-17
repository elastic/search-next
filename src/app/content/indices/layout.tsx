'use client'
//
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
//
import { EuiButton, EuiPageTemplate } from '@elastic/eui';

export default function IndicesLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const params = usePathname();

  const handleClick = (path: string) => {
    router.push(`/content/indices${path}`);
  }

  const checkParams = (path: string) => {
    return params?.includes(path);
  }


  return (
    <>
      <EuiPageTemplate.Header
        pageTitle={"Index detail"}
        tabs={[
          {
            id: 'overview',
            label: 'Overview',
            isSelected: checkParams("overview"),
            onClick: () => handleClick("/overview"),
          },
          {
            id: 'documents',
            label: 'Documents',
            isSelected: checkParams("documents"),
            onClick: () => handleClick("/documents"),
          },
          {
            id: 'mappings',
            label: 'Mappings',
            isSelected: checkParams("mappings"),
            onClick: () => handleClick("/mappings"),
          },
          {
            id: 'pipelines',
            label: 'Pipelines',
            isSelected: checkParams("pipelines"),
            onClick: () => handleClick("/pipelines"),
          },
        ]}
      />
      <EuiPageTemplate.Section>
        {children}
      </EuiPageTemplate.Section>
    </>
  )
}
