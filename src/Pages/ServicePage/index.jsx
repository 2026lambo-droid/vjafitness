import React from "react";
import PageHeading from "../../Components/PageHeading";
import ServiceSection1 from "../../Components/ServicesSection/ServiceSection1";
import CtaSection from "../../Components/CTASection/CtaSection";
import { pageTitle } from "../../helper";
import { fitnessImages } from "../../constants/images";

export default function ServicePage() {
  const BreadcrumbsData = {
    backgroundImage: fitnessImages.headingBg,
    title: "NUESTROS SERVICIOS",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Servicios", active: true },
    ],
  };

  const servicesData = [
    {
      title: "ENTRENAMIENTO DE GLÚTEOS",
      description:
        "Rutinas especializadas para desarrollar glúteos fuertes y definidos. Hip thrust, sentadillas, puentes y más, con técnica correcta.",
      imgSrc: fitnessImages.service1,
      link: "/services/entrenamiento-gluteos",
    },
    {
      title: "ENTRENAMIENTO DE PIERNA",
      description:
        "Programas diseñados para piernas tonificadas y fuertes. Sentadillas, prensa, lunges y ejercicios efectivos para transformar tu tren inferior.",
      imgSrc: fitnessImages.service2,
      link: "/services/entrenamiento-pierna",
    },
    {
      title: "ENTRENAMIENTO ONLINE",
      description:
        "Programas personalizados que puedes seguir desde casa o el gym. Rutinas, seguimiento y apoyo constante para que logres tus metas.",
      imgSrc: fitnessImages.service3,
      link: "/services/entrenamiento-online",
    },
    {
      title: "ENTRENAMIENTO PRESENCIAL",
      description:
        "Sesiones one-on-one o en grupo en el gym. Acompañamiento directo, corrección de técnica y motivación en cada entrenamiento.",
      imgSrc: fitnessImages.service4,
      link: "/services/entrenamiento-presencial",
    },
  ];

  const ctaData = {
    backgroundImage: fitnessImages.ctaServices,
    title: "¿LISTA PARA TU TRANSFORMACIÓN?",
    buttonText: "Reserva tu sesión",
    buttonUrl: "/contact",
  };

  pageTitle("Servicios | VJAFitness");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />

      <ServiceSection1 data={servicesData} />

      <CtaSection data={ctaData} />
    </>
  );
}
