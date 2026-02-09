import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGE_FALLBACK } from "../../constants/images";

export default function PageHeading({ data }) {
  const [imgError, setImgError] = useState(false);
  const bg = imgError ? IMAGE_FALLBACK : data.backgroundImage;
  return (
    <>
      <section
        className="cs_page_heading cs_style_1 cs_bg_filed cs_heading_bg"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <img
          src={data.backgroundImage}
          alt=""
          aria-hidden="true"
          className="visually-hidden"
          onError={() => setImgError(true)}
        />
        <div className="container">
          <ol className="breadcrumb">
            {data.breadcrumbs.map((item, index) => (
              <li
                key={index}
                className={`breadcrumb-item ${item.active ? "active" : ""}`}
              >
                {item.link ? (
                  <Link to={item.link}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ol>
          <h1
            className="cs_page_title mb-0 cs_fs_80"
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h1>
        </div>
      </section>
    </>
  );
}
