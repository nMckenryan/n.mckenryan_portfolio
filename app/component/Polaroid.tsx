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

  // Convert width/height to numbers if they're strings with 'px'
  const getNumericValue = (
    value: string | number | undefined
  ): number | undefined => {
    if (typeof value === "number") return value;
    if (typeof value === "string" && value.endsWith("px")) {
      return parseInt(value, 10) || undefined;
    }
    return undefined;
  };

  const numericWidth = getNumericValue(width);
  const numericHeight = getNumericValue(height);

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
      id="photo"
      className={`rimRotate ${position} ${className} transform sm:scale-100 scale-75 origin-top sm:origin-center transition-transform duration-200`}
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
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={imgSrc}
              alt={title}
              width={numericWidth || 240}
              height={numericHeight}
              className="w-full h-full object-contain"
              priority
              onError={() => {
                console.error("Error loading image:", imgSrc);
                setImgSrc(placeholder);
              }}
            />
          </div>
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
