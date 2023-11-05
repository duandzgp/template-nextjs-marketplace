"use client";

import ScrollToTop from "@/components/ScrollToTop";
import { ReduxProviders } from "@/redux/provider";

type Props = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <ReduxProviders>
      <ScrollToTop />
      {children}
    </ReduxProviders>
  );
};
