
import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import LanguageToggle from "../i18n/LanguageToggle";

export default function SectionNav({ items = [] }) {
  const { lang } = useLanguage();
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="mb-4">
      {/* Desktop: centered horizontal menu, language toggle on the right */}
      <div className="w-full bg-transparent items-center hidden md:flex">
        <div className="flex-1" />
        <ul className="flex flex-col md:flex-row md:flex-nowrap gap-2 md:gap-4 items-center justify-center">
          {items.map((item) => (
            <li key={item.to || item.targetId || item.label} className="inline-flex">
              {item.children && Array.isArray(item.children) ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-xs md:text-sm uppercase tracking-wide font-semibold text-gray-900 px-2 md:px-3 py-1.5 hover:underline hover:decoration-2 hover:underline-offset-4 transition-colors">
                    {item.label}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.to || child.targetId || child.label} asChild>
                        {child.to ? (
                          <Link to={child.to}>
                            {child.label}
                          </Link>
                        ) : (
                          <a
                            href={"#" + child.targetId}
                            onClick={(e) => handleClick(e, child.targetId)}
                           >
                            {child.label}
                          </a>
                        )}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : item.to ? (
                <Link
                  to={item.to}
                  className="text-xs md:text-sm uppercase tracking-wide font-semibold text-gray-900 px-2 md:px-3 py-1.5 hover:underline hover:decoration-2 hover:underline-offset-4 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={"#" + item.targetId}
                  onClick={(e) => handleClick(e, item.targetId)}
                  className="text-xs md:text-sm uppercase tracking-wide font-semibold text-gray-900 px-2 md:px-3 py-1.5 hover:underline hover:decoration-2 hover:underline-offset-4 transition-colors"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="flex-1 flex justify-end">
          <LanguageToggle variant="minimal" />
        </div>
      </div>

      {/* Mobile: vertical list, left-aligned; EN/NO above the list on the left */}
      <div className="block md:hidden text-left">
        <div className="w-full flex justify-start mb-2">
          <LanguageToggle variant="minimal" />
        </div>
        <ul className="flex flex-col items-start gap-2 w-full">
          {items.map((item) => (
            <li key={(item.to || item.targetId || item.label) + "-mobile"} className="w-full">
              {item.children && Array.isArray(item.children) ? (
                <div className="w-full">
                  <div className="text-sm uppercase tracking-wide font-semibold text-gray-900 py-1">
                    {item.label}
                  </div>
                  <ul className="pl-4 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <li key={(child.to || child.targetId || child.label) + "-child"} className="w-full">
                        {child.to ? (
                          <Link to={child.to} className="block w-full text-left text-sm text-gray-900 hover:underline underline-offset-4">
                            {child.label}
                          </Link>
                        ) : (
                          <a href={"#" + child.targetId} onClick={(e) => handleClick(e, child.targetId)} className="block w-full text-left text-sm text-gray-900 hover:underline underline-offset-4">
                            {child.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : item.to ? (
                <Link
                  to={item.to}
                  className="block w-full text-left text-sm uppercase tracking-wide font-semibold text-gray-900 py-1 hover:underline underline-offset-4"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={"#" + item.targetId}
                  onClick={(e) => handleClick(e, item.targetId)}
                  className="block w-full text-left text-sm uppercase tracking-wide font-semibold text-gray-900 py-1 hover:underline underline-offset-4"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
