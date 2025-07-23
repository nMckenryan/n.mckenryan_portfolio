"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
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

export default function Polaroid({
  title,
  position,
  imageUrl,
  width = 200, // Default width in pixels
  height,
  className = "",
}: PolaroidProps) {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(placeholder);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (imageUrl) {
      const img = new window.Image();
      img.src = typeof imageUrl === "string" ? imageUrl : imageUrl.src;

      img.onload = () => {
        setImgSrc(imageUrl);
        setIsLoading(false);
      };

      img.onerror = () => {
        console.error(`Failed to load image: ${imageUrl}`);
        setImgSrc(placeholder);
        setIsLoading(false);
      };
    } else {
      setImgSrc(placeholder);
      setIsLoading(false);
    }
  }, [imageUrl]);

  if (isLoading || !imgSrc) {
    return (
      <div
        className={`${position} ${className} bg-gray-200 animate-pulse`}
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: height
            ? typeof height === "number"
              ? `${height}px`
              : height
            : "auto",
        }}
      />
    );
  }

  return (
    <div
      id="photo-crt"
      className={`${position} ${className} transform sm:scale-100 scale-75 origin-top sm:origin-center transition-transform duration-200`}
      style={{
        width: typeof width === "number" ? `${width}px` : width || "100%",
        maxWidth: "100%",
        aspectRatio: "3/4", // Classic Polaroid aspect ratio (3:4)
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="bg-yellow-50 p-2 rounded-sm shadow-lg h-full w-full flex flex-col flex-1 min-h-0">
        <div className="relative flex-1 min-h-0 w-full">
          <div className="absolute inset-0 flex items-center justify-center p-2">
            <Image
              src={imgSrc}
              alt={title}
              fill
              className="object-contain"
              style={{
                filter:
                  "blur(0.05em) saturate(0.7) contrast(1.5) brightness(1.1)",
              }}
              loading="lazy"
              onError={() => {
                console.error("Error loading image:", imgSrc);
                setImgSrc(placeholder);
              }}
            />
          </div>
        </div>

        <h4
          className="text-center text-xs xl:text-md mt-2 mb-4 font-serif flex-shrink-0"
          style={{ fontFamily: "'Dallia Bold', sans-serif", color: "black" }}
        >
          {title}
        </h4>
      </div>
    </div>
  );
}
