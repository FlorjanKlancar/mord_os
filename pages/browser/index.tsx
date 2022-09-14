import React from "react";
import BrowserView from "../../components/Browser/BrowserView";
import OSWrapper from "../../components/OSWrapper";

function BrowserPage() {
  return (
    <OSWrapper pageTitle="Browser">
      <BrowserView />
    </OSWrapper>
  );
}

export default BrowserPage;
