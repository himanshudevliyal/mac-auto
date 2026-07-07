import Breadcrumb from "@/components/breadcrumb";

const { default: GridGallery } = require("./data");

export default function Gallery(params) {
  return (
    <>
      <Breadcrumb title="Gallery" />

      <GridGallery />
    </>
  );
}
