"use client";
import React, { useEffect } from "react";

export default function InstallBootstrap() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <div></div>;
}
