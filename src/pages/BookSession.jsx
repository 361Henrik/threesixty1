import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function BookSession() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to Get In Touch
    navigate(createPageUrl("Contact"), { replace: true });
    // Fallback in case navigate is delayed
    const t = setTimeout(() => {
      window.location.href = createPageUrl("Contact");
    }, 500);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <p className="text-sm text-gray-600">Redirecting to Get In Touch…</p>
    </div>
  );
}