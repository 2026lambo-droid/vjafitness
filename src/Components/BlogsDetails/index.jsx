import React from "react";
import { Link } from "react-router-dom";

export default function BlogDetailsSection({ data }) {
  return (
    <div className="col-lg-8">
      <div className="cs_post cs_style_1 cs_type_1">
        <div className="cs_post_thumb cs_radius_15">
          <img src={data.postThumb} alt="Post" className="w-100 cs_radius_15" />
        </div>
        <div className="cs_post_info">
          <div className="cs_post_meta cs_style_1 cs_ternary_color cs_semi_bold cs_primary_font">
            <span className="cs_posted_by">{data.date}</span>
            <Link to={data.category.url} className="cs_post_avatar">
              {data.category.title}
            </Link>
          </div>
          <h2
            className="cs_post_title"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h2>

          {data.content.map((item, index) => {
            if (item.type === "p") {
              return (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></p>
              );
            }
            if (item.type === "blockquote") {
              return (
                <blockquote key={index}>
                  {item.quote} <small>{item.author}</small>
                </blockquote>
              );
            }
            return null;
          })}

          <div className="row">
            {data.images.map((img, index) => (
              <div className="col-md-6" key={index}>
                <img
                  src={img}
                  alt="Blog Details"
                  className="cs_radius_15 w-100"
                />
                <div className="cs_height_35 cs_height_lg_20" />
              </div>
            ))}
          </div>

          {data.sections.map((section, index) => (
            <div key={index}>
              <h3 dangerouslySetInnerHTML={{ __html: section.heading }}></h3>
              <p dangerouslySetInnerHTML={{ __html: section.paragraph }}></p>
            </div>
          ))}

          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={data.videoUrl}
              allowFullScreen
            />
          </div>

          <p dangerouslySetInnerHTML={{ __html: data.closingParagraph }}></p>

          <div>
            <h3
              dangerouslySetInnerHTML={{ __html: data?.property?.title }}
            ></h3>
            <p
              dangerouslySetInnerHTML={{ __html: data?.property?.description }}
            ></p>
          </div>
        </div>
      </div>

      <div className="cs_height_30 cs_height_lg_30" />
      <h2 className="cs_fs_32 mb-0">{data.formTitle}</h2>
      <div className="cs_height_5 cs_height_lg_5" />
      <p className="mb-0">{data.formNote}</p>
      <div className="cs_height_40 cs_height_lg_30" />

      <form action="#" className="row">
        <div className="col-lg-6">
          <label>Full Name*</label>
          <input type="text" className="cs_form_field" />
          <div className="cs_height_20 cs_height_lg_20" />
        </div>

        <div className="col-lg-6">
          <label>Email*</label>
          <input type="text" className="cs_form_field" />
          <div className="cs_height_20 cs_height_lg_20" />
        </div>
        <div className="col-lg-12">
          <label>Website*</label>
          <input type="text" className="cs_form_field" />
          <div className="cs_height_20 cs_height_lg_20" />
        </div>
        <div className="col-lg-12">
          <label>Write Your Comment*</label>
          <textarea className="cs_form_field" rows="7" />
        </div>
        <div className="cs_height_25 cs_height_lg_25" />

        <div className="col-lg-12">
          <button className="cs_btn cs_style_1 cs_bold cs_heading_bg cs_white_color">
            <span>Send Message</span>
          </button>
        </div>
      </form>
    </div>
  );
}
