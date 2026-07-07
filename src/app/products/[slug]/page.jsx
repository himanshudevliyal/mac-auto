import BasicFAQ from "../_components/faq-section";
import Features from "../_components/Features";
import FinancerLogos from "../_components/financers";
import Gallery from "../_components/gallery";
import MainProductViewer from "../_components/MainProductViewer";
import VehicleSpecsTable from "../_components/table";
import VideoSection from "../_components/troubleshoot";
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const response = await fetch(
    `https://api.mack-ev.com/v1/vehicles/get-by-slug/${slug}`,
  );
  const data = await response.json();
  if (!data) return <div>Not Found</div>;
  const vehicles = data.data;
  return {
    title:
      vehicles?.meta_title && vehicles?.meta_title !== ""
        ? vehicles?.meta_title
        : vehicles?.title,
    description: vehicles?.meta_description,
    keywords: vehicles?.meta_keywords,
    alternates: {
      canonical: `/products/${vehicles?.slug}`,
    },
  };
}
export default async function Page({ params }) {
  const { slug } = await params;
  const response = await fetch(
    `https://api.mack-ev.com/v1/vehicles/get-by-slug/${slug}`,
  );
  const data = await response.json();

  if (!data) return <div>Not Found</div>;
  return (
    <div className="  overflow-hidden">
      <MainProductViewer product={data.data} />
      <Features product={data.data}></Features>
      <FinancerLogos></FinancerLogos>
      <VehicleSpecsTable product={data.data}></VehicleSpecsTable>
      <Gallery product={data.data}></Gallery>
      <VideoSection></VideoSection>
      <BasicFAQ product={data.data}></BasicFAQ>
    </div>
  );
}
