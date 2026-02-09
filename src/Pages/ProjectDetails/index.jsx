import React from "react";
import PageHeading from "../../Components/PageHeading";
import ProjectDetailsSection from "../../Components/ProjectDetails";
import RelatedProject from "../../Components/RelatedProject/RelatedProject";
import { pageTitle } from "../../helper";
import { fitnessImages } from "../../constants/images";

const BreadcrumbsData = {
  backgroundImage: fitnessImages.headingBg,
  title: "DETALLES",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "Evening garden", active: true },
  ],
};

const projectData = {
  projectInfo: [
    { label: "AÑO", value: "2024" },
    { label: "UBICACIÓN", value: "Entrenamiento presencial" },
    { label: "SERVICIO", value: "GLÚTEOS Y PIERNA" },
  ],
  video: {
    url: "https://www.youtube.com/embed/rRid6GCJtgc",
    thumbnail: fitnessImages.video,
  },
  sliderImages: [
    fitnessImages.project1,
    fitnessImages.project2,
    fitnessImages.project3,
  ],
  description: `Transformación real de una clienta VJAFitness. 12 semanas de entrenamiento enfocado en glúteos y pierna, con rutinas personalizadas, disciplina y constancia. Resultados visibles sin filtros ni promesas falsas.`,
  outcomes: `Valeria Jimenez Acosta trabaja con mujeres reales para lograr transformaciones reales. Entrenamiento online y presencial, programas personalizados y seguimiento constante. Aquí no hay falsas expectativas—solo disciplina, constancia y resultados que se ven.`,
  features: [
    {
      iconClass: "fa6-solid:dumbbell",
      title: "Glúteos y pierna",
    },
    {
      iconClass: "fa6-solid:user-group",
      title: "Online y presencial",
    },
    { iconClass: "fa6-solid:certificate", title: "Programas personalizados" },
    {
      iconClass: "fa6-solid:shield-heart",
      title: "Técnica correcta",
    },
    {
      iconClass: "fa6-solid:handshake",
      title: "Resultados reales",
    },
    {
      iconClass: "fa6-solid:phone",
      title: "Seguimiento constante",
    },
  ],
};

const accordionData = {
  sectionTitle: "NUESTROS <br /> <span>SERVICIOS</span>",
  highlightedText: "SERVICIOS",
  serviceData: [
    {
      img: fitnessImages.service1,
      title: "ENTRENAMIENTO GLÚTEOS",
      description:
        "Rutinas especializadas para glúteos fuertes y definidos. Hip thrust, sentadillas, puentes y más con técnica correcta.",
      link: "/services/entrenamiento-gluteos",
    },
    {
      img: fitnessImages.service2,
      title: "ENTRENAMIENTO PIERNA",
      description:
        "Programas para piernas tonificadas. Sentadillas, prensa, lunges y ejercicios efectivos.",
      link: "/services/entrenamiento-pierna",
    },
    {
      img: fitnessImages.service3,
      title: "ENTRENAMIENTO ONLINE",
      description:
        "Programas personalizados desde casa o el gym. Rutinas y seguimiento constante.",
      link: "/services/entrenamiento-online",
    },
    {
      img: fitnessImages.service4,
      title: "ENTRENAMIENTO PRESENCIAL",
      description:
        "Sesiones one-on-one o en grupo. Acompañamiento directo y corrección de técnica.",
      link: "/services/entrenamiento-presencial",
    },
  ],
};

export default function ProjectDetailsPage() {
  pageTitle("Detalles | VJAFitness");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <ProjectDetailsSection data={projectData} />
      <RelatedProject data={accordionData} />
    </>
  );
}
