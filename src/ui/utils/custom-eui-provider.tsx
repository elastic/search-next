'use client';

import { EuiProvider } from "@elastic/eui";
const CustomEuiProvider = (props: Partial<EuiProviderProps<{}>>) => (
  <EuiProvider
    {...props}
  />
);

export default CustomEuiProvider;
