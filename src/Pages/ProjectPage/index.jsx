import React from "react";
import PageHeading from "../../Components/PageHeading";
import InfoList from "../../Components/InfoSection";
import CardSection1 from "../../Components/CardSection/CardSection1";
import ProjectSlider from "../../Components/ProjectsSection/ProjectSlider";
import AccordionSection from "../../Components/Accordion";
import { pageTitle } from "../../helper";
import { fitnessImages } from "../../constants/images";

export default function ProjectPage() {
  const BreadcrumbsData = {
    backgroundImage: fitnessImages.headingBg,
    title: "TRANSFORMACIONES",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Projects", active: true },
    ],
  };

  const infoData = {
    imageSrc: fitnessImages.project1,
    imageAlt: "Transformación glúteos",
    projectUrl: "/projects/project-details",
    title: "TRANSFORMACIÓN GLÚTEOS",
    info: [
      { label: "AÑO", value: "2024" },
      { label: "UBICACIÓN", value: "Entrenamiento presencial" },
      { label: "SERVICIO", value: "GLÚTEOS Y PIERNA" },
    ],
  };

  const infoData1 = {
    imageSrc: fitnessImages.project2,
    imageAlt: "Entrenamiento online",
    projectUrl: "/projects/project-details",
    title: "PROGRAMA ONLINE",
    info: [
      { label: "AÑO", value: "2024" },
      { label: "UBICACIÓN", value: "Virtual" },
      { label: "SERVICIO", value: "ENTRENAMIENTO ONLINE" },
    ],
  };

  const cardData = {
    backgroundImage: fitnessImages.project3,
    projectUrl: "/projects/project-details",
    title: "PIERNA Y DEFINICIÓN",
    info: [
      { label: "AÑO", value: "2024" },
      { label: "UBICACIÓN", value: "Gym" },
      { label: "SERVICIO", value: "COACHING PERSONAL" },
    ],
    descriptionTitle: "DESCRIPCIÓN",
    descriptionText:
      "Trabajo de pierna y glúteos con énfasis en técnica correcta. Rutinas personalizadas, disciplina y constancia. Resultados visibles en 12 semanas sin filtros ni falsas expectativas.",
    outcomesTitle: "RESULTADOS",
    outcomesText:
      "Piernas tonificadas <br> Glúteos definidos <br> Transformación real",
  };

  const projectData = [
    {
      title: "TRANSFORMACIÓN COMPLETA",
      year: "2024",
      location: "Entrenamiento presencial",
      service: "GLÚTEOS Y PIERNA",
      image: fitnessImages.project4,
      url: "/projects/project-details",
    },
    {
      title: "PROGRAMA ONLINE",
      year: "2024",
      location: "Virtual",
      service: "ENTRENAMIENTO ONLINE",
      image: fitnessImages.project1,
      url: "/projects/project-details",
    },
    {
      title: "COACHING PERSONAL",
      year: "2024",
      location: "Gym",
      service: "ENTRENAMIENTO PRESENCIAL",
      image: fitnessImages.project2,
      url: "/projects/project-details",
    },
  ];

  const faqData = {
    sectionTitle: "VJAFITNESS <br><span>FAQ</span>",
    highlightedText: "FAQ",
    subtitle: "PREGUNTAS FRECUENTES",
    image: fitnessImages.faq,
    items: [
      {
        question: "¿Cómo funciona la consulta inicial?",
        answer:
          "Agenda tu primera sesión gratuita. Hablamos de tus metas, historial y preferencias (online o presencial). Evaluamos tu nivel y diseñamos un plan personalizado enfocado en glúteos y piernas.",
      },
      {
        question: "¿Ofrecen entrenamiento online?",
        answer:
          "Sí. Programas personalizados que puedes seguir desde casa o el gym. Rutinas, seguimiento constante y apoyo para que logres tus metas sin importar dónde entrenes.",
      },
      {
        question: "¿Cuánto tiempo para ver resultados?",
        answer:
          "Las transformaciones reales requieren disciplina y constancia. Con el plan adecuado y seguimiento, muchas clientas ven cambios visibles en 8-12 semanas. Sin filtros ni promesas falsas.",
      },
      {
        question: "¿Necesito experiencia previa en el gym?",
        answer:
          "No. Trabajamos con mujeres de todos los niveles. Adaptamos las rutinas a tu condición actual y avanzamos de forma segura y efectiva.",
      },
    ],
  };
  pageTitle("Transformaciones | VJAFitness");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />

      <InfoList data={infoData} />

      <CardSection1 data={cardData} />

      <InfoList data={infoData1} />
      <hr />

      <ProjectSlider data={projectData} />
      <div className="cs_height_100 cs_height_lg_70" />
      <AccordionSection data={faqData} />
    </>
  );
}
