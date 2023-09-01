"use client";

import { KitProvider as Provider } from "@atlrdsgn/kit";

const KitProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider background="transparent">{children}</Provider>;
};

export default KitProvider;
