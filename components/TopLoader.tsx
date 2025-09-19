"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// NProgress config
NProgress.configure({ showSpinner: false, speed: 500 });

export default function TopLoader() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      NProgress.start();
      setTimeout(() => {
        NProgress.done();
      }, 600); // small delay for smoothness
    }
  }, [pathname]);

  return null;
}
