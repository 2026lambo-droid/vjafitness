export default function VideoModal({
  isTrue,
  iframeSrc,
  handelClose,
  fallbackUrl,
  fallbackLabel,
}) {
  return (
    <div className={`cs_video_popup ${isTrue === true ? "active" : ""}`}>
      <div className="cs_video_popup-overlay"></div>
      <div className="cs_video_popup-content">
        <div className="cs_video_popup-layer"></div>
        <div className="cs_video_popup-container">
          <div className="cs_video_popup-align">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={iframeSrc}
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            {fallbackUrl && fallbackLabel && (
              <p className="cs_video_popup-fallback">
                <a
                  href={fallbackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs_video_popup-fallback-link"
                >
                  {fallbackLabel}
                </a>
              </p>
            )}
          </div>
          <div className="cs_video_popup-close" onClick={handelClose} />
        </div>
      </div>
    </div>
  );
}
