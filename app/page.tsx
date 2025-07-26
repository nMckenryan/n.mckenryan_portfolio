import Hero from "@/app/component/Hero";
import SectionBlock from "./component/SectionBlock";
import SummaryBlock from "./component/SummaryBlock";
import {
  caPoints,
  ecotPoints,
  wecPoints,
  fieldAtWorkPoints,
  pokemonProjectPoints,
  projectPoints,
  publicWebsitePoints,
  thisWebsitePoints,
} from "./jobParagraphs";
import { FaGithub, FaTools, FaUniversity, FaUserTie } from "react-icons/fa";
import Polaroid from "./component/Polaroid";
import { list } from "@vercel/blob";
import terracottaHeadshotLocal from "@/public/static/headshots/terracotta-warriors-cropped.webp";
import fawLogoLocal from "@/public/static/joblogos/fawLogo.webp";
import caLogoLocal from "@/public/static/joblogos/ca.webp";
import ecotLogoLocal from "@/public/static/joblogos/ecotricity.webp";
import autLocal from "@/public/static/joblogos/AUT.webp";
import { StaticImageData } from "next/image";

function Divider() {
  return (
    <div className="divider h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-6 mx-4" />
  );
}

function EducationBlock() {
  return (
    <div className="flex-1 min-w-0 w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-4">
        <div className="flex-1">
          <h3 className="text-md sm:text-lg font-semibold text-white">
            Graduate Diploma of Computing and Information Sciences
          </h3>
          <h4 className="text-base sm:text-lg text-gray-300">2017 - 2018</h4>
        </div>

        <div className="text-left sm:text-right mt-1 sm:mt-0">
          <p className="text-sm sm:text-base font-medium text-cyan-400">AUT</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-4">
        <div className="flex-1">
          <h3 className="text-md sm:text-lg font-semibold text-white">
            Bachelor of Communications (Radio Major)
          </h3>
          <h4 className="text-base sm:text-lg text-gray-300">2012 - 2014</h4>
        </div>

        <div className="text-left sm:text-right mt-1 sm:mt-0">
          <p className="text-sm sm:text-base font-medium text-cyan-400">AUT</p>
        </div>
      </div>
    </div>
  );
}

export default async function Home() {
  let terracottaHeadshot: string | StaticImageData = terracottaHeadshotLocal;
  //let aut: string | StaticImageData = autLocal;
  let caLogo: string | StaticImageData = caLogoLocal;
  let ecotLogo: string | StaticImageData = ecotLogoLocal;
  let fawLogo: string | StaticImageData = fawLogoLocal;

  try {
    const response = await list();

    const terracottaBlob = response.blobs.find((blob) =>
      blob.url.includes("terracotta.webp")
    );
    // const autBlob = response.blobs.find((blob) =>
    //   blob.url.includes("AUT.webp")
    // );
    const caLogoBlob = response.blobs.find((blob) =>
      blob.url.includes("ca.webp")
    );
    const ecotLogoBlob = response.blobs.find((blob) =>
      blob.url.includes("ecotricity.webp")
    );
    const fawLogoBlob = response.blobs.find((blob) =>
      blob.url.includes("fawLogo.webp")
    );

    if (terracottaBlob) terracottaHeadshot = terracottaBlob.url;
    //if (autBlob) aut = autBlob.url;
    if (caLogoBlob) caLogo = caLogoBlob.url;
    if (ecotLogoBlob) ecotLogo = ecotLogoBlob.url;
    if (fawLogoBlob) fawLogo = fawLogoBlob.url;
  } catch (error) {
    console.error("Error loading blobs:", error);
    // Fall back to local images if there's an error
  }

  return (
    <div>
      <Hero headshot={terracottaHeadshot} />

      <SectionBlock>
        <div className="flex flex-row align-middle">
          <FaUserTie size={36} color="white" />
          <h1
            id="experience"
            className="text-4xl text-left mb-8 px-4"
            style={{ fontFamily: "'Tropical Organic', sans-serif" }}
          >
            Experience
          </h1>
        </div>

        <div className="flex flex-col">
          <SummaryBlock
            title="Field At Work"
            position="Software Engineer"
            startDate={new Date("2025-03-17")}
            points={fieldAtWorkPoints}
            endDate={null}
            imageUrl={fawLogo}
            isPhotoLeft={true}
          />
          <Divider />
          <SummaryBlock
            title="Camp Australia"
            position="Web Developer"
            startDate={new Date("2022-03-11")}
            points={caPoints}
            endDate={new Date("2024-06-17")}
            imageUrl={caLogo}
            isPhotoLeft={false}
          />
          <Divider />
          <SummaryBlock
            title="Cash Kings"
            position="Web Developer (Contract)"
            startDate={new Date("2021-03-1")}
            points={wecPoints}
            endDate={new Date("2021-06-29")}
            imageUrl={null}
            isPhotoLeft={true}
          />
          <Divider />
          <SummaryBlock
            title="Ecotricity"
            position="Information Technology Administrator"
            startDate={new Date("2019-08-10")}
            points={ecotPoints}
            endDate={new Date("2020-10-10")}
            imageUrl={ecotLogo}
            isPhotoLeft={true}
          />
        </div>
      </SectionBlock>

      <SectionBlock>
        <div className="flex flex-row align-middle">
          <FaTools size={36} color="white" />
          <h1
            id="projects"
            className="text-4xl text-left mb-8 px-4"
            style={{ fontFamily: "'Tropical Organic', sans-serif" }}
          >
            Projects
          </h1>
        </div>

        <div className="flex flex-col">
          <>
            <SummaryBlock
              title="CringeTV"
              position="A TV Show Content Review Platform"
              startDate={null}
              points={projectPoints}
              endDate={null}
              imageUrl={null}
              isPhotoLeft={true}
              links={[
                {
                  linkIcon: FaGithub,
                  url: "https://github.com/nmckenryan/CringeTV",
                },
              ]}
            />
            <Divider />
            <SummaryBlock
              title="Pokemon Unbound Scraper"
              position="Web Scraper and API for the Pokemon Unbound Fan Game"
              startDate={null}
              points={pokemonProjectPoints}
              endDate={null}
              imageUrl={null}
              isPhotoLeft={true}
              links={[
                {
                  linkIcon: FaGithub,
                  url: "https://github.com/nmckenryan/PokemonUnboundScraper",
                },
              ]}
            />
            <Divider />

            <SummaryBlock
              title="Camp Australia Public Website"
              position="Developing a revamped Public Website for Camp Australia"
              startDate={null}
              points={publicWebsitePoints}
              endDate={null}
              imageUrl={null}
              isPhotoLeft={true}
            />

            <Divider />

            <SummaryBlock
              title="This Website!"
              position="Built a Portfolio/CV site"
              startDate={null}
              points={thisWebsitePoints}
              endDate={null}
              imageUrl={null}
              isPhotoLeft={true}
            />
            <div className="mb-4" />
          </>
        </div>
      </SectionBlock>

      <SectionBlock>
        <div className="flex flex-row align-middle">
          <FaUniversity size={36} color="white" />
          <h1
            id="education"
            className="text-4xl text-left mb-8 px-4"
            style={{ fontFamily: "'Tropical Organic', sans-serif" }}
          >
            Education
          </h1>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <EducationBlock />

          <Polaroid
            className="mx-auto"
            title="AUT"
            position="-rotate-0"
            imageUrl={autLocal}
            width={200}
            height={240}
          />
        </div>
      </SectionBlock>
    </div>
  );
}
