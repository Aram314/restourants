import React, { Suspense } from "react";
import Loader from "../Loader";

const SuspenseLoader = ({ Fallback = Loader, children }) => {
  return <Suspense fallback={<Fallback />}>{children}</Suspense>;
};

export default SuspenseLoader;
