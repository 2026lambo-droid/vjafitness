import ServiceDetailsSection from "../../Components/ServiceDetails";
import WorkingProcess from "../../Components/WorkingProcess";
import TestimonialSection1 from "../../Components/TestimonialSection/TestimonialSection1";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";
import { fitnessImages } from "../../constants/images";

const serviceDetailsData = {
  breadcrumb: [
    { label: "Home", url: "/" },
    { label: "Servicios", url: "/services" },
    { label: "Entrenamiento glúteos" },
  ],
  titleHighlight: "<span>ENTRENAMIENTO</span> DE GLÚTEOS",
  video: {
    url: "https://www.youtube.com/embed/rRid6GCJtgc",
    bgImage: fitnessImages.service1,
  },
  cta: {
    buttonUrl: "/contact",
    buttonText: "Reserva tu sesión",
    bgImage: fitnessImages.cta,
  },
  description: `
    Desarrolla glúteos fuertes y definidos con entrenamiento especializado de VJAFitness. Rutinas de hip thrust, sentadillas, puentes y más, con técnica correcta para resultados reales. <br><br>
    Cada mujer es diferente. Evaluamos tu nivel, objetivos y disponibilidad para diseñar un programa personalizado. Online o presencial, trabajamos juntas para lograr la transformación que buscas—sin filtros ni promesas falsas, solo disciplina y constancia.
  `,
  iconBoxes: [
    {
      iconClass: "fa6-solid:dumbbell",
      title: "Glúteos y pierna",
    },
    {
      iconClass: "fa6-solid:shield-heart",
      title: "Técnica correcta",
    },
    {
      iconClass: "fa6-solid:user-group",
      title: "Online y presencial",
    },
    {
      iconClass: "fa6-solid:certificate",
      title: "Programas personalizados",
    },
    {
      iconClass: "fa6-solid:handshake",
      title: "Resultados reales",
    },
  ],
};

const workingProcessData = {
  sectionTitle: "CÓMO FUNCIONA <span>VJAFITNESS</span>",

  subtitle: "PASOS",
  logo: "/assets/img/logo.svg",
  steps: [
    {
      title: "01 | Consulta inicial",
      description:
        "Agenda tu primera sesión gratuita. We’ll Hablamos de tus metas, historial y preferencias. Evaluamos tu nivel y diseñamos un plan personalizado.",
    },
    {
      title: "02 | Evaluación",
      description:
        "Definimos objetivos y tipo de entrenamiento (online o presencial). Sin promesas falsas, solo un plan real enfocado en glúteos y piernas.",
    },
    {
      title: "03 | Entrenamiento",
      description:
        "Sesiones guiadas con rutinas efectivas. Corrección de técnica, seguimiento constante y motivación para alcanzar tus metas.",
    },
    {
      title: "04 | Resultados",
      description:
        "Disciplina, constancia y acompañamiento. Las transformaciones reales se logran con compromiso y el plan adecuado.",
    },
  ],
};

const testimonialData = {
  title: "TESTIMONIOS",
  testimonialData: [
    {
      text: `Valeria me ayudó a lograr una <span>transformación real</span> en mis glúteos y piernas. Sin filtros ni promesas falsas—solo disciplina y resultados que se ven.`,
      img: fitnessImages.avatar,
      name: "MARÍA G.",
      designation: "Cliente VJAFitness",
    },
    {
      text: `El entrenamiento online fue perfecto para mi horario. Las rutinas son exigentes pero efectivas. En 3 meses vi cambios que nunca imaginé.`,
      img: fitnessImages.avatar,
      name: "ANA L.",
      designation: "Cliente, entrenamiento online",
    },
    {
      text: `Me encanta que Valeria trabaja con mujeres reales. No hay expectativas irreales, solo constancia y un plan que funciona. Mi cuerpo cambió de verdad.`,
      img: fitnessImages.avatar,
      name: "CARLA S.",
      designation: "Cliente, transformación completa",
    },
  ],
};

const cardData = {
  backgroundImage: fitnessImages.cta,
  tags: ["Fitness", "Glúteos", "Pierna", "Transformaciones"],
  title: "¿LISTA PARA TU <br /> TRANSFORMACIÓN?",
  buttonLink: "/contact",
};

export default function ServiceDetailsPage() {
  pageTitle("Detalles del servicio | VJAFitness");
  return (
    <>
      <ServiceDetailsSection data={serviceDetailsData} />{" "}
      <WorkingProcess data={workingProcessData} />
      <TestimonialSection1 data={testimonialData} />
      <CardSection data={cardData} bgColor={"cs_color_1"} />
    </>
  );
}
