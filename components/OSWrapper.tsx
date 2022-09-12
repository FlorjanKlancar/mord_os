import Head from "next/head";
import React from "react";
import BottomNavbar from "./BottomNavbar";

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

      <BottomNavbar children={children} />
    </>
  );
}

export default OSWrapper;
