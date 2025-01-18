"use client";

import { Suspense } from "react";

function Protected({ children }) {
  return (
    <>
      <Suspense>{children}</Suspense>
    </>
  );
}

export default Protected;
