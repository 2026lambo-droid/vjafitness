import ErrorSection from "../../Components/Error_404";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PageHeading from "../../Components/PageHeading";
import { pageTitle } from "../../helper";
import { fitnessImages } from "../../constants/images";

const Error404 = () => {
  const BreadcrumbsData = {
    backgroundImage: fitnessImages.headingBg,
    title: "Página no encontrada",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "404", active: true },
    ],
  };

  const errData = {
    title: "404",
    subtitle: "Página no encontrada",
    message:
      "Sorry, the page you're seeking isn't here. It could have been relocated or removed.",
    buttonText: "Return Home",
    buttonLink: "/",
  };
  pageTitle("Error");
  return (
    <>
      {/* Start Header Section */}
      <Header />
      <div className="cs_site_header_spacing_100" />
      {/* End Header Section */}
      {/* Start Page Heading */}

      <PageHeading data={BreadcrumbsData} />
      {/* End Page Heading */}
      {/* Start Error Section */}
      <ErrorSection data={errData} />
      {/* End Error Section */}
      <Footer />
    </>
  );
};

export default Error404;
