import React from "react";
import PageHeading1 from "../../Components/PageHeading/PageHeading1";
import Sidebar from "../../Components/Sidebar/Sidebar";
import BlogDetailsSection from "../../Components/BlogsDetails";
import CardSection from "../../Components/CardSection";
import PageHeading from "../../Components/PageHeading";
import { pageTitle } from "../../helper";
import { fitnessImages } from "../../constants/images";

const BreadcrumbsData = {
  backgroundImage: fitnessImages.headingBg,
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "Blog Details", active: true },
  ],
  title: "Hip thrust: técnica correcta para glúteos fuertes",
};

const SidebarData = {
  categoriesData: {
    category: "Categorías",

    categories: [
      { name: "Glúteos", url: "/blog" },
      { name: "Pierna", url: "/blog" },
      { name: "Entrenamiento", url: "/blog" },
      { name: "Transformación", url: "/blog" },
      { name: "Online", url: "/blog" },
    ],
  },

  recentPostsData: {
    recentPost: "Posts recientes",

    recentPosts: [
      {
        title: "Hip thrust: técnica correcta para glúteos fuertes",
        date: "07 Mar 2025",
        image: fitnessImages.post1,
        url: "/blog/hip-thrust-tecnica-correcta-gluteos",
      },
      {
        title: "Sentadillas: variaciones para piernas tonificadas",
        date: "04 Mar 2025",
        image: fitnessImages.post2,
        url: "/blog/sentadillas-variaciones-piernas",
      },
      {
        title: "Claves para una transformación real sin filtros",
        date: "02 Mar 2024",
        image: fitnessImages.post3,
        url: "/blog/claves-transformacion-real",
      },
    ],
  },

  archivesData: {
    archive: "Archives",

    archives: [
      { name: "Archives", url: "/archives" },
      { name: "15 Aug 2025", url: "/archives/2025-08-15" },
      { name: "20 Sep 2024", url: "/archives/2024-09-20" },
      { name: "11 Dec 2023", url: "/archives/2023-12-11" },
      { name: "25 Jun 2022", url: "/archives/2022-06-25" },
    ],
  },

  tagsData: {
    tag: "Tags",

    tags: [
      { name: "Fitness", url: "/blog" },
      { name: "Glúteos", url: "/blog" },
      { name: "Pierna", url: "/blog" },
      { name: "Entrenamiento", url: "/blog" },
      { name: "Transformación", url: "/blog" },
      { name: "Coaching", url: "/blog" },
    ],
  },
};

const blogData = {
  postThumb: fitnessImages.post1,
  date: "07 Mar 2022",
  category: { title: "Glúteos", url: "/" },

  title: "Hip thrust: técnica correcta para glúteos fuertes",
  content: [
    {
      type: "p",
      text: `El hip thrust es uno de los ejercicios más efectivos para desarrollar glúteos fuertes y definidos. La técnica correcta es clave para maximizar resultados y evitar lesiones. En VJAFitness trabajamos la ejecución paso a paso para que cada repetición cuente. <br/> Aprende la posición correcta del cuerpo, el ángulo de la espalda, y cómo activar los glúteos en cada fase del movimiento.`,
    },
    {
      type: "blockquote",
      quote: `Las transformaciones reales se logran con técnica correcta, disciplina y constancia. No hay atajos—solo trabajo constante y el plan adecuado para tus objetivos.`,
      author: "Valeria Jimenez Acosta, VJAFitness",
    },
    {
      type: "p",
      text: `Errores comunes incluyen arquear demasiado la espalda, no alcanzar la extensión completa de cadera, o usar peso antes de dominar la técnica. Con el acompañamiento de un coach, corriges estos detalles y los resultados se notan.`,
    },
  ],
  images: [fitnessImages.project1, fitnessImages.project2],
  sections: [
    {
      heading: "Posición y ejecución",
      paragraph: `La espalda debe apoyarse en el banco a la altura de las escápulas. Los pies separados al ancho de caderas, rodillas en línea con los dedos. Al subir, empuja con los talones y aprieta los glúteos en la parte superior. Mantén el mentón neutro y evita hiperextender el cuello.<br/> La técnica correcta asegura que el glúteo sea el músculo principal en acción. Si sientes más en cuádriceps o espalda, revisa la posición de los pies y el ángulo de la cadera.`,
    },
    {
      heading: "Progresión y resultados",
      paragraph: `Empieza sin peso para dominar el patrón de movimiento. Luego añade carga gradualmente. Con disciplina y constancia, el hip thrust puede transformar tu tren inferior en 8-12 semanas. Sin filtros ni promesas falsas—solo resultados reales.`,
    },
  ],
  videoUrl: "https://www.youtube.com/embed/uqWykluW2e4",
  closingParagraph: `¿Lista para empezar tu transformación? Agenda tu consulta inicial en vjafitness.com. Evaluamos tu nivel, diseñamos un plan personalizado y trabajamos juntas para lograr los resultados que buscas. Glúteos y piernas que sí cambian.`,

  property: {
    title: "Transformaciones reales",
    description: `VJAFitness trabaja con mujeres reales para lograr transformaciones reales. Sin filtros ni falsas expectativas—solo disciplina, constancia y un plan que funciona. Entrenamiento de glúteos y pierna, online o presencial, con seguimiento constante. Visita vjafitness.com para más información.`,
  },

  formTitle: "Deja un comentario",
  formNote:
    "Tu email no será publicado. Los campos obligatorios están marcados con *",
};

const cardData = {
  backgroundImage: fitnessImages.cta,
  tags: ["Fitness", "Glúteos", "Pierna", "Transformaciones"],
  title: "¿LISTA PARA TU <br /> TRANSFORMACIÓN?",
  buttonLink: "/contact",
};
export default function BlogDetailsPage() {
  pageTitle("Blog | VJAFitness");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <section>
        <div className="cs_height_100 cs_height_lg_70" />
        <div className="container">
          <div className="row">
            <BlogDetailsSection data={blogData} />
            <Sidebar data={SidebarData} />
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_70" />
      </section>

      <CardSection data={cardData} />
    </>
  );
}
