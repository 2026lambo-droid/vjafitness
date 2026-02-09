import React from "react";
import PageHeading from "../../Components/PageHeading";
import BlogSection from "../../Components/BlogSection";
import CardSection from "../../Components/CardSection";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { pageTitle } from "../../helper";
import { fitnessImages } from "../../constants/images";

const BreadcrumbsData = {
  backgroundImage: fitnessImages.headingBg,
  title: "BLOG VJAFITNESS",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "Blog", active: true },
  ],
};

const blogData = {
  posts: [
    {
      id: 1,
      image: fitnessImages.post1,
      date: "07 Mar 2025",
      category: "Glúteos",
      title: "Hip thrust: técnica correcta para glúteos fuertes",
      description:
        "Aprende la técnica correcta del hip thrust para desarrollar glúteos fuertes y definidos. Errores comunes y cómo evitarlos para resultados reales.",
      link: "/blog/hip-thrust-tecnica-correcta-gluteos",
    },
    {
      id: 2,
      image: fitnessImages.post2,
      date: "04 Mar 2025",
      category: "Pierna",
      title: "Sentadillas: variaciones para piernas tonificadas",
      description:
        "Diferentes tipos de sentadillas y cómo incorporarlas en tu rutina para lograr piernas tonificadas. Ejercicios efectivos",
      link: "/blog/sentadillas-variaciones-piernas",
    },
    {
      id: 3,
      image: fitnessImages.post3,
      date: "02 Mar 2024",
      category: "Transformación",
      title: "Claves para una transformación real sin filtros",
      description:
        "Disciplina, constancia y un plan adecuado. Cómo lograr resultados visibles sin promesas falsas ni expectativas irreales.",
      link: "/blog/claves-transformacion-real",
    },
  ],
  pagination: [1, 2, 3, 4],
};

const cardData = {
  backgroundImage: fitnessImages.cta,
  tags: ["Fitness", "Glúteos", "Pierna", "Transformaciones"],
  title: "¿LISTA PARA TU <br /> TRANSFORMACIÓN?",
  buttonLink: "/contact",
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

export default function BlogPage() {
  pageTitle("Blog | VJAFitness");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />

      <section>
        <div className="cs_height_100 cs_height_lg_70" />
        <div className="container">
          <div className="row">
            <BlogSection data={blogData} />
            <Sidebar data={SidebarData} />
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_70" />
      </section>

      <CardSection data={cardData} />
    </>
  );
}
