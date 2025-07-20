import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import mainHeadshot from "@/public/static/headshots/terracotta-warriors-cropped.webp";
import SectionBlock from "./SectionBlock";
import Polaroid from "./Polaroid";
import "../styles/headshot.css";

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

const ArrowDown = () => (
  <svg
    className="ml-2 w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </svg>
);

export default function Hero() {
  return (
    <SectionBlock>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
        <div className="flex flex-row items-center lg:justify-center lg:space-x-12">
          <div className="mb-8 lg:mb-0 lg:flex-shrink-0">
            <Polaroid
              title="Nigel Mckenzie-Ryan"
              position="-rotate-3"
              imageUrl={mainHeadshot}
            />
          </div>

          <div className="text-center lg:text-left max-w-2xl">
            <h1
              className="mb-6 text-5xl md:text-6xl font-bold"
              style={{ fontFamily: "'Beauty Mountains', sans-serif" }}
            >
              Nigel Mckenzie-Ryan
            </h1>

            <p className="mb-8 text-lg md:text-xl text-gray-200 leading-relaxed px-4 sm:px-8 lg:px-0">
              Hi! I&apos;m a software engineer from New Zealand with three years
              of experience. I specialize in building web applications using
              React, DotNet and TypeScript.
            </p>

            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              {socialLinks.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 transition-colors duration-200"
                  aria-label={name}
                >
                  <Icon size={36} />
                </a>
              ))}
            </div>

            <div className="mt-2">
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/20"
                aria-label="View my projects"
              >
                Check out what I&apos;ve built!
                <ArrowDown />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
