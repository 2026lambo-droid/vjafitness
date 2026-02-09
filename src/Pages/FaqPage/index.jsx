import React from "react";
import PageHeading from "../../Components/PageHeading";
import CardSection from "../../Components/CardSection";
import AccordionSection2 from "../../Components/Accordion/AccordionSection2";
import { pageTitle } from "../../helper";
import AccordionSection from "../../Components/Accordion";
import { fitnessImages } from "../../constants/images";

const BreadcrumbsData = {
  backgroundImage: fitnessImages.headingBg,
  title: "PREGUNTAS FRECUENTES",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "FAQ", active: true },
  ],
};

const cardData = {
  backgroundImage: fitnessImages.cta,
  tags: ["Fitness", "Glúteos", "Pierna", "Transformaciones"],
  title: "¿LISTA PARA TU <br /> TRANSFORMACIÓN?",
  buttonLink: "/contact",
};

const faqData = {
  sectionTitle: "VJAFITNESS <span>FAQ</span>",
  image: fitnessImages.faq,
  items: [
    {
      question: "¿Cómo funciona la consulta inicial?",
      answer:
        "Agenda tu primera sesión gratuita en vjafitness.com o por teléfono. We’ll Hablamos de tus metas, historial y preferencias. Evaluamos tu nivel y diseñamos un plan personalizado enfocado en glúteos y piernas.",
    },
    {
      question: "¿Cuánto tiempo para ver resultados?",
      answer:
        "Las transformaciones reales requieren disciplina y constancia. Con el plan adecuado, muchas clientas ven cambios visibles en 8-12 semanas. Sin filtros ni promesas falsas.",
    },
    {
      question: "¿Ofrecen entrenamiento online?",
      answer:
        "Sí. Programas personalizados que puedes seguir desde casa o el gym. Rutinas, seguimiento constante y apoyo para que logres tus metas.",
    },
    {
      question: "¿Necesito experiencia previa?",
      answer:
        "No. Trabajamos con mujeres de todos los niveles. Adaptamos las rutinas a tu condición y avanzamos de forma segura y efectiva.",
    },
  ],
};

const faqData2 = {
  sectionTitle: "ENTRENAMIENTO & <span>RESULTADOS</span>",
  image: fitnessImages.faq2,
  items: [
    {
      question: "¿Dónde ofrecen entrenamiento presencial?",
      answer:
        "Entrenamiento presencial en el gym. If you’re nearby and not sure whether you’re in our service area, reach out with your address and we’ll let you know if we can schedule a visit.",
    },
    {
      question: "¿Qué incluye el programa personalizado?",
      answer:
        "Rutinas de glúteos y pierna, seguimiento constante, corrección de técnica y apoyo. Online o presencial según tu preferencia.",
    },
    {
      question:
        "¿Hay planes de largo plazo?",
      answer:
        "Sí. Programas de 8, 12 o más semanas según tus metas. Disciplina, constancia y resultados reales sin promesas falsas.",
    },
    {
      question:
        "¿Qué servicios ofrecen?",
      answer:
        "Entrenamiento de glúteos y pierna, programas online, sesiones presenciales y coaching personalizado. Consulta inicial gratuita en vjafitness.com.",
    },
  ],
};

export default function FaqPage() {
  pageTitle("FAQ | VJAFitness");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <div className="cs_height_100 cs_height_lg_70" />
      <AccordionSection2 data={faqData} />
      <div className="cs_height_100 cs_height_lg_70" />
      <AccordionSection2 data={faqData2} />
      <div className="cs_height_100 cs_height_lg_70" />
      <CardSection data={cardData} />
    </>
  );
}
