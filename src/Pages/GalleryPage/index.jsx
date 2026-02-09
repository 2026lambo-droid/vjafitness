import PageHeading from "../../Components/PageHeading";
import GallerySection from "../../Components/GallerySection";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";
import { fitnessImages } from "../../constants/images";

const BreadcrumbsData = {
  backgroundImage: fitnessImages.headingBg,
  title: "GALERÍA",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "Gallery", active: true },
  ],
};

const galleryData = [
  {
    imgSrc: fitnessImages.gallery1,
    title: "Entrenamiento glúteos",
    year: "2024",
    height: "694px",
  },
  {
    imgSrc: fitnessImages.gallery2,
    title: "Pierna y fuerza",
    year: "2024",
    height: "383px",
  },
  {
    imgSrc: fitnessImages.gallery3,
    title: "Coaching presencial",
    year: "2024",
    height: "383px",
  },
  {
    imgSrc: fitnessImages.gallery4,
    title: "Gym",
    year: "2024",
    height: "383px",
  },
  {
    imgSrc: fitnessImages.gallery5,
    title: "Transformación",
    year: "2024",
    height: "287px",
  },
  {
    imgSrc: fitnessImages.gallery6,
    title: "Entrenamiento online",
    year: "2024",
    height: "480px",
  },
  {
    imgSrc: fitnessImages.gallery7,
    title: "Resultados reales",
    year: "2024",
    height: "190px",
  },
  {
    imgSrc: fitnessImages.gallery8,
    title: "VJAFitness",
    year: "2024",
    height: "383px",
  },
];

const cardData = {
  backgroundImage: fitnessImages.cta,
  tags: ["Fitness", "Glúteos", "Pierna", "Transformaciones"],
  title: "¿LISTA PARA TU <br /> TRANSFORMACIÓN?",
  buttonLink: "/contact",
};
export default function GalleryPage() {
  pageTitle("Galería | VJAFitness");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <div className="cs_height_100 cs_height_lg_70" />
      <GallerySection data={galleryData} />
      <div className="cs_height_100 cs_height_lg_70" />
      <CardSection data={cardData} />
    </>
  );
}
