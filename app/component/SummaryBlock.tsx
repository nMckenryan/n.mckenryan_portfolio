import React from "react";
import Polaroid from "./Polaroid";
import { StaticImageData } from "next/image";

interface LinksProp {
  linkIcon: React.ComponentType<{ className?: string }>;
  url: string;
}

interface SummaryBlockProps {
  title: string;
  position: string;
  startDate: Date | null;
  endDate: Date | null;
  points: string[];
  imageUrl: string | StaticImageData | null;
  isPhotoLeft: boolean;
  links?: LinksProp[] | null;
}

export default function SummaryBlock({
  title,
  position,
  startDate,
  endDate,
  points,
  imageUrl,
  isPhotoLeft,
  links,
}: SummaryBlockProps) {
  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    return date.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  const startDateString = formatDate(startDate);
  const endDateString = endDate ? formatDate(endDate) : "Present";

  const calculateDuration = (): string => {
    const start = startDate?.getTime() || 0;
    const end = endDate?.getTime() || Date.now();

    const diffMs = Math.abs(end - start);
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffYears = Math.floor(diffDays / 365.25);
    const diffMonths = Math.floor((diffDays % 365.25) / 30.44);

    const parts = [];
    if (diffYears > 0) {
      parts.push(`${diffYears} year${diffYears > 1 ? "s" : ""}`);
    }
    if (diffMonths > 0) {
      parts.push(`${diffMonths} month${diffMonths > 1 ? "s" : ""}`);
    }

    return parts.join(" ");
  };

  const hasDates = startDateString != "" && endDateString != "";

  const duration = hasDates
    ? startDateString + " - " + (endDateString ? endDateString : "Present")
    : "";

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className={`flex flex-col ${
          !isPhotoLeft ? "md:flex-row-reverse" : "md:flex-row"
        } items-start gap-6 lg:gap-8 xl:gap-10`}
      >
        {/* Image Section */}
        {imageUrl && (
          <div className="flex lg:hidden flex-col w-full h-full max-w-[240px] mx-auto md:mx-0 md:w-1/4">
            <Polaroid
              title={title}
              position={isPhotoLeft ? "md:-rotate-3" : "md:rotate-3"}
              imageUrl={imageUrl}
              className="mx-auto"
              width={200}
              height={240}
            />
          </div>
        )}
        {/* Content Section */}
        <div className="min-w-0 w-full flex flex-col lg:flex">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-4 lg:mb-6 xl:mb-8">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                {title}
              </h3>
              <h4 className="text-sm sm:text-base lg:text-lg text-gray-300">
                {position}
              </h4>
            </div>

            {hasDates && (
              <div className="text-left sm:text-right mt-1 sm:mt-0">
                <p className="text-xs sm:text-base lg:text-lg font-medium">
                  {calculateDuration()}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-400">
                  {duration}
                </p>
              </div>
            )}

            {links && (
              <div className="text-center align-center sm:text-right mt-1 sm:mt-0">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.linkIcon className="text-2xl lg:text-3xl xl:text-4xl" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start xl:gap-8">
            {/* Image Section */}
            {imageUrl && (
              <div className="hidden lg:flex lg:flex-col w-full h-full max-w-[240px] mx-auto md:mx-0 md:w-1/4 lg:w-1/3 xl:w-1/4">
                <Polaroid
                  title={title}
                  position={isPhotoLeft ? "md:-rotate-3" : "md:rotate-3"}
                  imageUrl={imageUrl}
                  className="mx-auto lg:mx-0"
                  width={200}
                  height={240}
                />
              </div>
            )}

            <div className="flex flex-col">
              <div className="prose prose-invert max-w-none">
                <ul className="space-y-2 pl-5 list-disc">
                  {points.map((point, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-xs sm:text-sm lg:text-base"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
