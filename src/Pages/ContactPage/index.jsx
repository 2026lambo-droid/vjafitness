import React from "react";
import PageHeading from "../../Components/PageHeading";
import ContactSection from "../../Components/Contact";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";
import { fitnessImages } from "../../constants/images";

export default function ContactPage() {
  const BreadcrumbsData = {
    backgroundImage: fitnessImages.headingBg,
    title: "CONTACTO",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Contacto", active: true },
    ],
  };

  const contactData = {
    mapTitle: "AGENDA TU <span>CONSULTA INICIAL</span>",
    sectionTitle: "CONTACTO",
    contactList: [
      {
        label: "TELÉFONO",
        value: "831-710-9655",
      },
      {
        label: "EMAIL",
        value: "contacto@vjafitness.com",
      },
      {
        label: "HORARIO",
        value: "Lunes - Sábado",
      },
    ],
    locationUrl:
      "https://www.google.com/maps?q=Monterey,+CA+93940&output=embed",
    formButtonText: "Enviar mensaje",
  };

  const cardData = {
    backgroundImage: fitnessImages.cta,
    tags: ["Fitness", "Glúteos", "Pierna", "Transformaciones"],
    title: "¿LISTA PARA <br /> TU TRANSFORMACIÓN?",
    buttonLink: "/services",
  };
  pageTitle("Contacto | VJAFitness");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <ContactSection data={contactData} />
      <CardSection data={cardData} />
    </>
  );
}
