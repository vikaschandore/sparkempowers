import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
import ShanyaScansInfo from "../../components/sections/projectDetails/ShanyaScansInfo";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";

const breadcumb_data = {
  title: "Shanya Scans",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Shanya Scans",
      url: "/shanya-scans",
    },
  ],
};
export default function ShanyaScansDetailsPage() {
  return (
    <>
      <BreadCrumb data={breadcumb_data} />
      <ShanyaScansInfo />
      <NewslatterStyle3 />
    </>
  );
}
