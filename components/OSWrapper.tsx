import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

type OSWrapperProps = {
  pageTitle: string;
  children: React.ReactNode;
};

function OSWrapper({ pageTitle, children }: OSWrapperProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Navbar>{children}</Navbar>
    </>
  );
}

export default OSWrapper;
