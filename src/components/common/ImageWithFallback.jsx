import React from "react";

export default function ImageWithFallback({
  src,
  alt = "",
  className = "",
  style = {},
  fallback = "/assets/image-fallback.jpg"
}) {
  const [errored, setErrored] = React.useState(false);

  return (
    <img
      src={errored ? fallback : src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setErrored(true)}
      loading="lazy"
    />
  );
}