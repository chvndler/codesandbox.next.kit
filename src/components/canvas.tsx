"use client";

import { Canvas } from "@atlrdsgn/kit";

const AppCanvas = ({ children }: { children: React.ReactNode }) => {
  return <Canvas>{children}</Canvas>;
};

export default AppCanvas;
