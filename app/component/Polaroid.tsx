import Image, { StaticImageData } from "next/image";
import "../styles/headshot.css";
import placeholder from "../../public/landscape-placeholder.svg";

interface PolaroidProps {
  title: string;
  position: string;
  imageUrl: StaticImageData | string | null;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export default async function Polaroid({
  title,
  position,
  imageUrl,
  width = 240, // Default width in pixels
  height,
  className = "",
}: PolaroidProps) {
  return (
    <div
      id="photo"
      className={`rimRotate ${position} ${className}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: height
          ? typeof height === "number"
            ? `${height}px`
            : height
          : "auto",
        maxWidth: "100%",
        aspectRatio: "3/4", // Maintain polaroid aspect ratio
      }}
    >
      <div className="inner bg-yellow-50 pt-2 px-2 shadow-lg h-full w-full flex flex-col">
        <div className="flex-1 relative overflow-hidden">
          <Image
            className="old-photo object-cover w-full h-full border-1 border-white"
            src={imageUrl || placeholder}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <h4
          className="text-center xs:text-xs lg:text-md m-5 font-serif"
          style={{ fontFamily: "'Dallia Bold', sans-serif", color: "black" }}
        >
          {title}
        </h4>
      </div>
    </div>
  );
}
