import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import SectionBlock from "./SectionBlock";
import Polaroid from "./Polaroid";
import "../styles/headshot.css";
import { StaticImageData } from "next/image";
import "../styles/crt-eff.scss";

function SocialLinks({ customStyle }: { customStyle: string }) {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/nmckenryan",
      icon: FaLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/nmckenryan",
      icon: FaGithubSquare,
    },
  ];

  return (
    <div
      id="social-links"
      className={
        "flex justify-center lg:justify-start sm:space-x-8 m-4" + customStyle
      }
      style={{ display: "flex", justifyContent: "center" }}
    >
      {socialLinks.map(({ name, url, icon: Icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-400 transition-colors duration-200"
          aria-label={name}
        >
          <Icon className="w-8 h-8 sm:w-9 sm:h-9" id="icon-crt" />
        </a>
      ))}
    </div>
  );
}

export default async function Hero({
  headshot,
}: {
  headshot: string | StaticImageData;
}) {
  return (
    <SectionBlock className="overflow-x-hidden">
      <h1
        className="mb-4 text-4xl sm:text-5xl md:text-6xl font-bold text-center"
        style={{ fontFamily: "'Beauty Mountains', sans-serif" }}
      >
        Nigel Mckenzie-Ryan
      </h1>
      <p className="mb-4 text-md sm:text-lg md:text-xl font-semibold text-center">
        Web Developer - Melbourne, Australia
      </p>

      <div className="py-4 sm:py-6 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-12">
        <div className="flex flex-col items-center md:flex-row lg:justify-center">
          <div className="w-full max-w-[200px] sm:max-w-xs mx-auto lg:mx-0 lg:flex-shrink-0 mt-4 sm:mt-0">
            <Polaroid
              title="Welcome to my Webzone"
              position="rotate-0"
              imageUrl={headshot}
              className="mx-auto"
            />
            <SocialLinks customStyle="hidden sm:flex sm:mt-4" />
          </div>

          <div className="text-left lg:text-left max-w-2xl w-full mt-2 sm:mt-0">
            <p className="mb-6 sm:mb-8 text-base sm:text-lg   text-gray-200 leading-relaxed px-2 sm:px-4 lg:px-0">
              Hello! I&apos;m a Full Stack Web Developer from New Zealand with
              three years of professional experience. I specialize in building
              web applications using React, Vue, Typescript/Javascript and .NET.
            </p>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg   text-gray-200 leading-relaxed px-2 sm:px-4 lg:px-0">
              I enjoy learning new technologies and building new projects with
              them. Feel free to contact me on LinkedIn!
            </p>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
