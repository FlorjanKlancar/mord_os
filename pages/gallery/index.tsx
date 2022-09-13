import type { NextPage } from "next";
import GalleryView from "../../components/Gallery/GalleryView";
import OSWrapper from "../../components/OSWrapper";

const GalleryPage: NextPage = () => {
  return (
    <OSWrapper pageTitle="Gallery">
      <GalleryView />
    </OSWrapper>
  );
};

export default GalleryPage;
