import React from "react";
import Polaroid from "./Polaroid";
import { StaticImageData } from "next/image";

interface SummaryBlockProps {
  title: string;
  position: string;
  startDate: Date | null;
  endDate: Date | null;
  points: string[];
  imageUrl: string | StaticImageData | null;
  isPhotoLeft: boolean;
}

export default function SummaryBlock({
  title,
  position,
  startDate,
  endDate,
  points,
  imageUrl,
  isPhotoLeft,
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
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div
        className={`flex flex-col ${
          !isPhotoLeft ? "md:flex-row-reverse" : "md:flex-row"
        } items-start gap-6`}
      >
        {/* Image Section */}
        {imageUrl && (
          <div className="w-full max-w-[240px] mx-auto md:mx-0 md:w-1/4 flex-shrink-0">
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
        <div className="flex-1 min-w-0 w-full">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-4">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {title}
              </h3>
              <h4 className="text-base sm:text-lg text-gray-300">{position}</h4>
            </div>

            {hasDates && (
              <div className="text-left sm:text-right mt-1 sm:mt-0">
                <p className="text-xs sm:text-base font-medium text-cyan-400">
                  {calculateDuration()}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">{duration}</p>
              </div>
            )}
          </div>

          <div className="prose prose-invert max-w-none">
            <ul className="space-y-2 pl-5 list-disc">
              {points.map((point, index) => (
                <li key={index} className="text-gray-300 text-xs sm:text-base">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
