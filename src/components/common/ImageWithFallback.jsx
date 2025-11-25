import React from "react";

export default function ImageWithFallback({
  src,
  alt = "",
  className = "",
  style = {},
  fallback = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a59a4990a82f121fd2e394/0ca5d5af9_582f911c-37e6-4510-b5d9-18f6dae2a7d0.jpg"
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