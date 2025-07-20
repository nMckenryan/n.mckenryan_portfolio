import React from "react";
import Polaroid from "./Polaroid";
import { StaticImageData } from "next/image";

export default function SummaryBlock({
  title,
  position,
  startDate,
  endDate,
  points,
  imageUrl,
  isPhotoLeft,
}: {
  title: string;
  position: string;
  startDate: Date | null;
  endDate: Date | null;
  points: string[];
  imageUrl: string | StaticImageData | null;
  isPhotoLeft: boolean;
}) {
  const formatDate = (date: Date): string => {
    return date.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  const startDateString = startDate ? formatDate(startDate) : "";
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
    <div className="flex flex-row items-start w-full max-w-6xl mx-auto px-8 py-6">
      {isPhotoLeft && imageUrl && (
        <div className="w-1/4 pr-6 flex-shrink-0">
          <Polaroid title={title} position="-rotate-3" imageUrl={imageUrl} />
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
          <div className="mb-2 md:mb-0">
            <h3 className="text-xl font-semibold text-gray-200">{position}</h3>
            <h4 className="text-lg text-gray-300">{title}</h4>
          </div>
          {hasDates && (
            <div className="text-right">
              <p className="text-md font-semibold text-gray-200">
                {calculateDuration()}
              </p>
              <p className="text-sm text-gray-400">{duration}</p>
            </div>
          )}
        </div>

        <div className="prose prose-invert max-w-none">
          <ul className="space-y-2 pl-5">
            {points.map((point, index) => (
              <li key={index} className="text-gray-300">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {!isPhotoLeft && imageUrl && (
        <div className="w-1/4 pl-6 flex-shrink-0">
          <Polaroid title={title} position="rotate-3" imageUrl={imageUrl} />
        </div>
      )}
    </div>
  );
}
