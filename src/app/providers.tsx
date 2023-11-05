"use client";

import ScrollToTop from "@/components/ScrollToTop";

type Props = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};
