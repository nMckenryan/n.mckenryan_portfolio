import React from "react";

export default function SummaryBlock({
  title,
  startDate,
  endDate,
  points,
}: {
  title: string;
  startDate: Date;
  endDate: Date | null;
  points: string[];
}) {
  const startDateString: string =
    startDate.toLocaleString("en-US", { month: "long" }) +
    " " +
    startDate.getFullYear().toString();

  const endDateString: string = endDate
    ? endDate.toLocaleString("en-US", { month: "long" }) +
      " " +
      endDate.getFullYear().toString()
    : "Present";

  function printYears(): string {
    const date1Ms = startDate.getTime();
    const date2Ms = endDate ? endDate.getTime() : Date.now();

    const diffMs = Math.abs(date2Ms - date1Ms);
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffYears = Math.floor(diffDays / 365.25);
    const diffMonths = Math.floor((diffDays % 365.25) / 30.44);

    const yearsWorked = diffYears > 1 ? diffYears + " years" : "";

    const monthsWorked = diffMonths > 1 ? diffMonths + " months" : "";

    return yearsWorked + " " + monthsWorked;
  }

  return (
    <div className="flex flex-col mx-auto px-8 pb-4">
      <div id="summary-header" className="flex flex-row justify-between">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex flex-col items-end">
          <p className="text-md">{printYears()}</p>
          <p className="text-md">{startDateString + " - " + endDateString}</p>
        </div>
      </div>
      <div id="summary-points" className="flex flex-col">
        <ul className="list-disc list-inside px-5">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
