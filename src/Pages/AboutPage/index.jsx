import React from "react";
import PageHeading from "../../Components/PageHeading";
import AboutUs from "../../Components/Aboutus";
import ValueSection from "../../Components/ValueSection";
import FeatureSection from "../../Components/FeatureSection";
import TeamMember from "../../Components/Team";
import BrandSection from "../../Components/BrandSection";
import WorkSection1 from "../../Components/WorksSection/WorkSection1";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";
import { fitnessImages } from "../../constants/images";

const BreadcrumbsData = {
  backgroundImage: fitnessImages.headingBg,
  title: "SOBRE NOSOTRAS",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "About", active: true },
  ],
};

const aboutUsData = {
  title: `Valeria Jimenez Acosta<br><span>Personal Coach</span>`,

  introduction:
    "Especialista en glúteos y pierna<br />Entrenamiento online & presencial.",
  introduction1:
    "TRANSFORMACIONES REALES<br />+100 mujeres han transformado su cuerpo conmigo",

  video: {
    videoUrl: "https://www.instagram.com/p/DUi2oR1ia27/embed",
    backgroundImage: fitnessImages.video,
    fallbackUrl: "https://www.instagram.com/p/DUi2oR1ia27/?hl=en",
    fallbackLabel: "Ver video en Instagram",
  },
  cta: {
    backgroundImage: fitnessImages.ctaAbout,
    buttonUrl: "/projects",
    buttonText: "Ver transformaciones",
  },
};

const valueData = {
  sectionTitle: "VALORES",
  values: [{ text: "Glúteos y pierna" }, { text: "Resultados reales" }],
};

const featureData = {
  sectionTitle: "POR QUÉ ELEGIR <span>VJAFITNESS</span>",
  buttonText: "Reserva tu sesión",
  buttonUrl: "/contact",
  image: fitnessImages.feature,
  features: [
    {
      icon: "fa6-solid:dumbbell",
      title: "Especialista en glúteos y pierna",
      description:
        "Enfoque dedicado al desarrollo de glúteos y piernas con rutinas efectivas y técnicas comprobadas para transformaciones reales.",
    },
    {
      icon: "fa6-solid:users",
      title: "Coaching personalizado",
      description:
        "Valeria trabaja contigo de cerca. Programas diseñados a tu medida, con seguimiento constante y comunicación directa.",
    },
    {
      icon: "fa6-solid:certificate",
      title: "Entrenamiento certificado",
      description:
        "Metodología probada y enfoque profesional. Sin promesas falsas, solo disciplina, constancia y resultados visibles.",
    },
    {
      icon: "fa6-solid:user-group",
      title: "Online y presencial",
      description:
        "Flexibilidad total: sesiones presenciales en el gym o programas online para entrenar desde donde estés.",
    },
  ],
};

const teamMembersData = {
  title: `NUESTRA <span>COACH</span>`,
  subtitle: "FUNDADORA",
  teamMembers: [
    {
      img: fitnessImages.avatar,
      name: "Valeria Jimenez Acosta",
      role: "Personal Coach",
      description: "Especialista en glúteos y pierna<br />Entrenamiento online & presencial.",
    },
  ],
};

const brandLogos = [
  "/assets/img/brand_logo_1.svg",
  "/assets/img/brand_logo_2.svg",
  "/assets/img/brand_logo_3.svg",
  "/assets/img/brand_logo_4.svg",
  "/assets/img/brand_logo_5.svg",
  "/assets/img/brand_logo_6.svg",
  "/assets/img/brand_logo_3.svg",
];

const WorkingData = {
  title: "TRANSFORMACIONES <span>REALES</span>",
  subtitle: "RESULTADOS DE NUESTRAS CLIENTAS",
  galleryItems: [
    {
      imgSrc: fitnessImages.project1,
      title: "Glúteos y pierna",
      year: "2024",
      height: "694px",
    },
    {
      imgSrc: fitnessImages.project2,
      title: "Entrenamiento online",
      year: "2024",
      height: "287px",
    },
    {
      imgSrc: fitnessImages.project3,
      title: "Transformación",
      year: "2024",
      height: "383px",
    },
    {
      imgSrc: fitnessImages.project4,
      title: "Coaching presencial",
      year: "2024",
      height: "480px",
    },
    {
      imgSrc: fitnessImages.project5,
      title: "Gym",
      year: "2024",
      height: "190px",
    },
  ],
};

const cardData = {
  backgroundImage: fitnessImages.ctaAbout,
  tags: ["Glúteos", "Pierna", "Transformaciones reales"],
  title: "¿LISTA PARA TU <br /> TRANSFORMACIÓN?",
  buttonLink: "/contact",
};

export default function AboutPage() {
  pageTitle("Sobre nosotros | VJAFitness");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <AboutUs data={aboutUsData} />
      <div className="cs_heading_bg cs_white_color">
        <ValueSection data={valueData} />
        <FeatureSection data={featureData} />
      </div>
      <TeamMember data={teamMembersData} />
      <BrandSection data={brandLogos} />
      <WorkSection1 data={WorkingData} />
      <CardSection data={cardData} />
    </>
  );
}
