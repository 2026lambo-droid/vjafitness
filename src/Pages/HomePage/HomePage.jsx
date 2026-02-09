import React from "react";
import HeroSection from "../../Components/Hero";
import ValueSection from "../../Components/ValueSection";
import FeatureSection from "../../Components/FeatureSection";
import WorkingProcess from "../../Components/WorkingProcess";
import ServicesSection from "../../Components/ServicesSection";
import TestimonialSection from "../../Components/TestimonialSection";
import WorksSection from "../../Components/WorksSection";
import CTASection from "../../Components/CTASection";
import { pageTitle } from "../../helper";
import { fitnessImages } from "../../constants/images";

const heroData = {
  title: "Transformaciones reales",
  subtitle: "Entrenamiento enfocado en glúteos y piernas",
  credibility: "+100 mujeres han transformado su cuerpo conmigo",
  btnText1: "Reserva tu sesión",
  btnUrl1: "/contact",
  btnText2: "Mis Servicios",
  btnUrl2: "/services",

  funfact: {
    trustIndicators: [
      {
        icon: "fa6-solid:certificate",
        text: "Entrenamiento certificado",
      },
      {
        icon: "fa6-solid:phone",
        text: "Consulta inicial gratuita",
      },
      {
        icon: "fa6-solid:user-check",
        text: "Programas personalizados",
      },
    ],
  },
  box: {
    title: "Da el primer paso",
    subtitle:
      "Agenda tu consulta con Valeria y descubre cómo lograr la transformación que buscas.",
    link: "/contact",
  },

  backgrounds: [
    fitnessImages.hero1,
    fitnessImages.hero2,
    fitnessImages.hero3,
    fitnessImages.hero4,
  ],
};

const valueData = {
  sectionTitle: "EXPERTISE",
  values: [
    { text: "Glúteos y pierna" },
    { text: "Entrenamiento certificado" },
    { text: "Resultados reales" },
    { text: "Disciplina y constancia" },
  ],
};

const featureData = {
  sectionTitle: "POR QUÉ ELEGIR <span>VJAFITNESS</span>",
  buttonText: "Reserva tu sesión",
  buttonUrl: "/contact",
  image: fitnessImages.feature,
  features: [
    {
      icon: "fa6-solid:certificate",
      title: "Entrenamiento certificado",
      description:
        "Coaching profesional especializado en glúteos y pierna. Metodología probada para transformaciones reales.",
    },
    {
      icon: "fa6-solid:phone",
      title: "Consulta inicial gratuita",
      description:
        "Agenda tu primera sesión sin compromiso. Evaluamos tus metas y diseñamos un plan a tu medida.",
    },
    {
      icon: "fa6-solid:dumbbell",
      title: "Especialista en glúteos y pierna",
      description:
        "Enfoque dedicado al desarrollo de glúteos y piernas con rutinas efectivas y técnicas comprobadas.",
    },
    {
      icon: "fa6-solid:user-group",
      title: "Online y presencial",
      description:
        "Entrenamiento flexible: sesiones presenciales o programas online para que entrenes desde donde estés.",
    },
  ],
};

const workingProcessData = {
  sectionTitle: "CÓMO EMPEZAR CON <span>VJAFITNESS</span>",
  subtitle: "CÓMO FUNCIONA",
  logo: "/assets/img/logo.svg",
  steps: [
    {
      title: "01 | Consulta inicial",
      description:
        "Agenda tu primera sesión gratuita. Hablamos de tus metas, tu historial y qué tipo de entrenamiento prefieres (online o presencial).",
    },
    {
      title: "02 | Evaluación y plan",
      description:
        "Evaluamos tu nivel actual y diseñamos un programa personalizado enfocado en glúteos y piernas. Sin promesas falsas, solo un plan real.",
    },
    {
      title: "03 | Entrenamiento constante",
      description:
        "Sesiones guiadas con rutinas efectivas. Ya sea en persona o en línea, trabajamos juntas para alcanzar tus objetivos.",
    },
    {
      title: "04 | Resultados visibles",
      description:
        "Disciplina, constancia y seguimiento. Las transformaciones reales se logran con compromiso y el acompañamiento adecuado.",
    },
  ],
};

const servicesData = {
  title: "SERVICIOS",
  btnText: " Ver todos los servicios",
  btnUrl: "/services",
  service: [
    {
      title: "ENTRENAMIENTO DE GLÚTEOS",
      subtitle:
        "Rutinas especializadas para desarrollar glúteos fuertes y definidos. Hip thrust, sentadillas, puentes y más, con técnica correcta.",
      image: fitnessImages.service1,
      link: "services/entrenamiento-gluteos",
      tags: [
        { label: "Glúteos", url: "/" },
        { label: "Fuerza", url: "/" },
        { label: "Técnica", url: "/" },
        { label: "Resultados", url: "/" },
      ],
    },
    {
      title: "ENTRENAMIENTO DE PIERNA",
      subtitle:
        "Programas diseñados para piernas tonificadas y fuertes. Sentadillas, prensa, lunges y ejercicios efectivos para transformar tu tren inferior.",
      image: fitnessImages.service2,
      link: "services/entrenamiento-pierna",
      tags: [
        { label: "Pierna", url: "/" },
        { label: "Tonificación", url: "/" },
        { label: "Resistencia", url: "/" },
        { label: "Forma", url: "/" },
      ],
    },
    {
      title: "ENTRENAMIENTO ONLINE",
      subtitle:
        "Programas personalizados que puedes seguir desde casa o el gym. Rutinas, seguimiento y apoyo constante para que logres tus metas.",
      image: fitnessImages.service3,
      link: "services/entrenamiento-online",
      tags: [
        { label: "Online", url: "/" },
        { label: "Flexible", url: "/" },
        { label: "Personalizado", url: "/" },
        { label: "Seguimiento", url: "/" },
      ],
    },
    {
      title: "ENTRENAMIENTO PRESENCIAL",
      subtitle:
        "Sesiones one-on-one o en grupo en el gym. Acompañamiento directo, corrección de técnica y motivación en cada entrenamiento.",
      image: fitnessImages.service4,
      link: "services/entrenamiento-presencial",
      tags: [
        { label: "Presencial", url: "/" },
        { label: "Personal", url: "/" },
        { label: "Gym", url: "/" },
        { label: "Coaching", url: "/" },
      ],
    },
  ],
};

const testimonialData = {
  sectionTitle: "TESTIMONIOS",
  testimonials: [
    {
      text: `Valeria me ayudó a lograr una <span>transformación real</span> en mis glúteos y piernas. Sin filtros ni promesas falsas—solo disciplina y resultados que se ven.`,
      name: "MARÍA G.",
      designation: "Cliente VJAFitness",
    },
    {
      text: `El entrenamiento online fue perfecto para mi horario. Las rutinas son exigentes pero efectivas. En 3 meses vi cambios que nunca imaginé.`,
      name: "ANA L.",
      designation: "Cliente, entrenamiento online",
    },
    {
      text: `Me encanta que Valeria trabaja con mujeres reales. No hay expectativas irreales, solo constancia y un plan que funciona. Mi cuerpo cambió de verdad.`,
      name: "CARLA S.",
      designation: "Cliente, transformación completa",
    },
  ],
};

const worksData = {
  title: "TRANSFORMACIONES <span>REALES</span>",
  subtitle: "+100 mujeres han transformado su cuerpo conmigo",
  slides: [
    {
      image: fitnessImages.project1,
      name: "TRANSFORMACIÓN GLÚTEOS",
      location: "Entrenamiento presencial",
      description:
        "12 semanas de entrenamiento enfocado en glúteos y pierna. Rutinas personalizadas, disciplina y resultados visibles sin filtros.",
    },
    {
      image: fitnessImages.project2,
      name: "PROGRAMA ONLINE",
      location: "Entrenamiento virtual",
      description:
        "Cliente con programa online desde casa. Seguimiento constante y rutinas adaptadas a su nivel. Cambios reales en 8 semanas.",
    },
    {
      image: fitnessImages.project3,
      name: "PIERNA Y DEFINICIÓN",
      location: "Coaching personal",
      description:
        "Trabajo de pierna y glúteos con énfasis en técnica correcta. Constancia y resultados que hablan por sí solos.",
    },
  ],
};

const ctaData = {
  backgroundImage: fitnessImages.cta,
  title: "¿LISTA PARA <br /> TU TRANSFORMACIÓN?",
  buttonText: "Reserva tu sesión",
  buttonUrl: "/contact",
};

export default function HomePage() {
  pageTitle("Inicio");
  return (
    <>
      <HeroSection data={heroData} />
      <ValueSection data={valueData} />
      <FeatureSection data={featureData} />
      <WorkingProcess data={workingProcessData} />
      <ServicesSection data={servicesData} />
      <TestimonialSection data={testimonialData} />
      <WorksSection data={worksData} />
      <CTASection data={ctaData} />
    </>
  );
}