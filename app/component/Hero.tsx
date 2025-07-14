import mainHeadshot from "@/public/headshots/cropped.webp";
import SectionBlock from "./SectionBlock";
import "../styles/headshot.css";
import Polaroid from "./Polaroid";

export default function Hero() {
  return (
    <SectionBlock>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div className="mx-auto flex items-center justify-center">
          <Polaroid
            title="Nigel Mckenzie-Ryan"
            position="-rotate-10"
            imageUrl={mainHeadshot}
          />
          <div>
            <h1
              className="mb-8 text-6xl dark:text-white"
              style={{
                fontFamily: "'Beauty Mountains', sans-serif",
              }}
            >
              Nigel Mckenzie-Ryan
            </h1>
            <br />
            <p className="mb-8 xs:text-md md:text-lg font-normal lg:text-xl sm:px-16 xl:px-48">
              Hi! I&apos;m a software engineer with three years of experience. I
              specialize in building web applications using React, Next.js,
              DotNet and TypeScript
            </p>
            <br />
            <div className="mt-6">
              <a
                href="#experience"
                className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-full bg-cyan-500 hover:bg-cyan-600 text-white transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Check out my experience
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
