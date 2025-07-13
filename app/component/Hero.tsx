import Image from "next/image";
import mainHeadshot from "@/public/headshots/cropped.webp";
import SectionBlock from "./SectionBlock";
import "../styles/headshot.css";

export default function Hero() {
  return (
    <SectionBlock>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div className="mx-auto flex items-center justify-center">
          <div className="rimRotate">
            <div className="inner">
              <Image
                src={mainHeadshot}
                alt={"Me at the Terracotta Warriors in Xi'An, China"}
                width={400}
                height={400}
                priority
                style={{ borderRadius: "50%" }}
              />
            </div>
          </div>
          <div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Nigel Mckenzie-Ryan
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Hi! I&apos;m a software engineer with three years of experience. I
              specialize in building web applications using React, Next.js,
              DotNet and TypeScript
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Check out my experience
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
