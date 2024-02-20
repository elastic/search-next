'use client';
import React from 'react';
import { EuiProvider, EuiProviderProps } from "@elastic/eui";
//
const CustomEuiProvider = (props: Partial<EuiProviderProps<{}>>) => (
  <EuiProvider
    {...props}
  />
);

export { CustomEuiProvider };
