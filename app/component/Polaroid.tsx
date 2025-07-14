import Image, { StaticImageData } from "next/image";
import "../styles/headshot.css";

export default function Polaroid({
  title,
  position,
  imageUrl,
}: {
  title: string;
  position: string;
  imageUrl: StaticImageData;
}) {
  return (
    <div id="photo" className={`rimRotate ${position}`}>
      <div className="inner bg-amber-50 pt-2 px-2 rounded-2xl shadow-lg">
        <Image
          className="old-photo"
          src={imageUrl}
          alt={title}
          width={400}
          height={400}
        />
        <h4 className="text-gray-900 text-center text-sm m-5 font-serif">
          {title}
        </h4>
      </div>
    </div>
  );
}
