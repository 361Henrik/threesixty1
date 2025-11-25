
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  service,
  compact = false,
  revealOnHover = true,
  clickableCard = false,
  hideDetails = false,
  expandOnClick = false,
  hideSubtitle = false,
  lockLayout = false,
  showExploreInline = false,
  fromSection = null
}) {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = React.useState(false);

  const targetUrl = React.useMemo(() => {
    if (!service?.ctaUrl) return null;
    const hasQuery = service.ctaUrl.includes("?");
    return fromSection ? `${service.ctaUrl}${hasQuery ? "&" : "?"}from=${fromSection}` : service.ctaUrl;
  }, [service, fromSection]);

  const handleCardClick = () => {
    if (expandOnClick) {
      setIsExpanded((prev) => !prev);
      return;
    }
    if (clickableCard && service?.ctaUrl) {
      if (targetUrl) navigate(targetUrl);
    }
  };

  const handleKeyDown = (e) => {
    if (expandOnClick && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setIsExpanded((prev) => !prev);
      return;
    }
    if (!clickableCard) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <div
      className={`group bg-white border-2 border-black p-6 hover:shadow-xl hover:border-black transition-all duration-300 ${compact ? "" : "flex flex-col"} focus-within:shadow-xl ${clickableCard || expandOnClick ? "cursor-pointer" : ""} ${lockLayout ? "relative overflow-visible" : ""}`}
      tabIndex={clickableCard || expandOnClick ? 0 : -1}
      role={clickableCard || expandOnClick ? "button" : undefined}
      aria-expanded={expandOnClick ? isExpanded : undefined}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}>

      <div className="mb-2">
        <h3
          className="font-bold text-gray-900 text-xl leading-tight mb-1"
          style={{ fontFamily: "Playfair Display, serif" }}>

          {service.title}
        </h3>
        {!hideSubtitle && service?.subtitle &&
        <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
            {service.subtitle}
          </div>
        }
      </div>

      {/* Expandable details */}
      {!hideDetails && !lockLayout &&
      <div
        className={
        expandOnClick ?
        isExpanded ?
        "transition-all duration-300 ease-in-out max-h-[2000px] opacity-100" :
        "transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0" :
        revealOnHover ?
        "transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0 group-hover:max-h-[1000px] group-hover:opacity-100 group-focus-within:max-h-[1000px] group-focus-within:opacity-100" :
        "transition-all duration-300 ease-in-out max-h-none opacity-100"
        }>

          {service.description &&
        <p className="text-sm text-gray-900 leading-relaxed my-4">
              {service.description}
            </p>
        }

          {(service.humanProblem || service.aiSolution) &&
        <div className="bg-gray-50 border-2 border-gray-700 p-3 mb-4">
              {service.humanProblem &&
          <div className="mb-2">
                  <div className="text-[10px] uppercase tracking-wider text-gray-900 font-semibold">
                    Common Problem
                  </div>
                  <p className="text-xs text-gray-900">{service.humanProblem}</p>
                </div>
          }
              {service.aiSolution &&
          <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-900 font-semibold">
                    Our AI solution
                  </div>
                  <p className="text-xs text-gray-900">{service.aiSolution}</p>
                </div>
          }
            </div>
        }

          <div className="border-t-2 border-gray-700 pt-4">
            <div className="text-sm uppercase font-bold tracking-wider text-gray-900 mb-2">
              Key Deliverables:
            </div>
            <ul className="space-y-1 mb-4">
              {service.deliverables?.map((deliverable, idx) =>
            <li key={idx} className="text-xs text-gray-900 flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  {deliverable}
                </li>
            )}
            </ul>

            <div className="mt-4 pt-4 border-t-2 border-gray-700 flex justify-between items-center">
              {expandOnClick && isExpanded &&
            <button
              type="button"
              className="text-xs text-gray-500 hover:text-gray-700 underline underline-offset-2"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}>

                  Hide details
                </button>
            }
              {service?.ctaUrl && (
            showExploreInline ?
            <Link
              to={targetUrl || service.ctaUrl} className="ml-auto text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center"

              onClick={(e) => e.stopPropagation()}>Se mer


            </Link> :

            !clickableCard &&
            <Link
              to={targetUrl || service.ctaUrl}
              className="ml-auto text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center"
              onClick={(e) => e.stopPropagation()}>

                      Learn More <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>)


            }
            </div>
          </div>
        </div>
      }

      {/* Always-visible subtle hint to explore (shows when collapsed) */}
      {service?.ctaUrl && (!isExpanded || hideDetails) &&
      <div className="mt-4">
          <Link
          to={targetUrl || service.ctaUrl} className="text-sm font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center"

          onClick={(e) => e.stopPropagation()}>Mer info


        </Link>
        </div>
      }
    </div>);

}