import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import SectionBlock from "./SectionBlock";
import Polaroid from "./Polaroid";
import "../styles/headshot.css";
import { StaticImageData } from "next/image";

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

export default async function Hero({
  headshot,
}: {
  headshot: string | StaticImageData;
}) {
  return (
    <SectionBlock className="overflow-x-hidden">
      <div className="py-4 sm:py-6 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-12">
        <div className="flex flex-col items-center md:flex-row lg:justify-center">
          <div className="w-full max-w-[200px] sm:max-w-xs mx-auto lg:mx-0 lg:flex-shrink-0 mt-4 sm:mt-0">
            <Polaroid
              title="Welcome!"
              position="lg:-rotate-3"
              imageUrl={headshot}
              className="mx-auto"
            />
          </div>

          <div className="text-center lg:text-left max-w-2xl w-full mt-2 sm:mt-0">
            <h1
              className="mb-4 text-4xl sm:text-5xl md:text-6xl font-bold"
              style={{ fontFamily: "'Beauty Mountains', sans-serif" }}
            >
              Nigel Mckenzie-Ryan
            </h1>

            <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed px-2 sm:px-4 lg:px-0">
              Hi! I&apos;m a software engineer from New Zealand with three years
              of experience. I specialize in building web applications using
              React, DotNet and TypeScript.
            </p>

            <div className="flex justify-center lg:justify-start space-x-6 sm:space-x-8 mb-6 sm:mb-8">
              {socialLinks.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 transition-colors duration-200"
                  aria-label={name}
                >
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
                </a>
              ))}
            </div>

            <div className="mt-2">
              <a
                href="#projects"
                className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-medium rounded-full bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/20 whitespace-nowrap"
                aria-label="View my projects"
              >
                View My Projects
                <ArrowDown />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
