import React from "react";
import BrowserView from "../../components/Browser/BrowserView";
import OSWrapper from "../../components/OSWrapper";

function BrowserPage() {
  return (
    <OSWrapper pageTitle="Browser">
      <iframe
        src="https://www.google.com"
        title="W3Schools Free Online Web Tutorials"
      ></iframe>
    </OSWrapper>
  );
}

export default BrowserPage;
