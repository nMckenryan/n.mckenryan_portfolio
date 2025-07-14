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
          width={300}
          height={300}
        />
        <h4
          className="text-gray-900 text-center text-md m-5 font-serif"
          style={{ fontFamily: "'Dallia Bold', sans-serif" }}
        >
          {title}
        </h4>
      </div>
    </div>
  );
}
