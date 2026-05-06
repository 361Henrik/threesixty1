
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Mail, Phone, Linkedin } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageContext";
import ImageWithFallback from "../components/common/ImageWithFallback";

export default function Contact() {
  const { lang } = useLanguage();

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Legacy back arrow removed – global PageNav handles navigation */}

        {/* Intro section */}
        <div className="mb-10">
          <div className="grid gap-6 items-start">
            <div>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 text-left"
                style={{ fontFamily: "Playfair Display, serif" }}>
                {lang === "no" ? "Vi hjelper deg gjerne" : "Turning Ideas Into Impact"}
              </h1>
              {/* Intro directly under the heading, left-aligned */}
              <div className="text-gray-700 mt-2 no-underline leading-relaxed max-w-2xl space-y-3">
                {lang === "no" ? (
                  <>
                    <p>
                      Er du nysgjerrig på hvordan AI kan bidra til flyt og produktivitet i din bedrift? Eller er du interessert i å diskutere hvordan vi kan hjelpe deg å bidra til vekst?
                    </p>
                    <p>
                      Ring eller send meg en e-post – jeg tar gjerne en prat om hvordan smart teknologi kan skape ekte resultater. Vi snakkes!
                    </p>
                    <p>/Henrik</p>
                  </>
                ) : (
                  <>
                    <p>
                      If you’re curious about how AI can make work flow better, or just want to talk through a business challenge, I’d be happy to listen and share ideas.
                    </p>
                    <p>
                      Give me a call or send an email — I’m always up for a good conversation about turning smart technology into real results.
                    </p>
                    <p>/Henrik</p>
                  </>
                )}
              </div>
            </div>
            {/* ... removed top portrait (moved next to contact info below) ... */}
          </div>
        </div>

        {/* Contact info with photo to the left */}
        <div className="grid md:grid-cols-[auto,1fr] gap-2 md:gap-3 items-start">
          <div className="justify-self-center md:justify-self-end md:mr-2">
            <ImageWithFallback
              src="/assets/henrik-portrait.jpg"
              alt={lang === "no" ? "Portrett av Henrik C. Høst" : "Portrait of Henrik C. Høst"}
              className="w-40 h-40 md:w-56 md:h-56 object-cover"
              style={{ objectPosition: "center 10%" }}
            />
          </div>
          <div className="max-w-xl">
            <div className="text-lg font-semibold text-gray-900 mb-4">
              Henrik C. Høst
            </div>
            <div className="space-y-4">
              <a
                href="mailto:henrik@threesixty1.com"
                className="group flex items-center gap-4">
                <div className="h-10 w-10 flex items-center justify-center border-2 border-black">
                  <Mail className="h-5 w-5 text-gray-900" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">
                    {lang === "no" ? "E‑post" : "Email"}
                  </div>
                  <div className="font-semibold text-gray-900">
                    henrik@threesixty1.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/henrikhost/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4">
                <div className="h-10 w-10 flex items-center justify-center border-2 border-black">
                  <Linkedin className="h-5 w-5 text-gray-900" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">
                    LinkedIn
                  </div>
                  <div className="font-semibold text-gray-900">
                    linkedin.com/in/henrikhost
                  </div>
                </div>
              </a>

              <a
                href="tel:+4794152361"
                className="group flex items-center gap-4">
                <div className="bg-slate-50 h-10 w-10 flex items-center justify-center border-2 border-black">
                  <Phone className="h-5 w-5 text-gray-900" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">
                    {lang === "no" ? "Telefon" : "Phone"}
                  </div>
                  <div className="font-semibold text-gray-900">
                    +47 941 52 361
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
