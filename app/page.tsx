import Hero from "@/app/component/Hero";
import SectionBlock from "./component/SectionBlock";
import SummaryBlock from "./component/SummaryBlock";
import {
  caPoints,
  ecotPoints,
  fieldAtWorkPoints,
  pokemonProjectPoints,
  projectPoints,
  publicWebsitePoints,
} from "./jobParagraphs";
import { FaTools, FaUniversity, FaUserTie } from "react-icons/fa";
import Polaroid from "./component/Polaroid";
import { list } from "@vercel/blob";
import terracottaHeadshotLocal from "@/public/static/headshots/terracotta-warriors-cropped.webp";
import fawLogoLocal from "@/public/static/joblogos/fawLogo.webp";
import caLogoLocal from "@/public/static/joblogos/ca.webp";
import ecotLogoLocal from "@/public/static/joblogos/ecotricity.webp";
import autLocal from "@/public/static/joblogos/AUT.webp";
import { StaticImageData } from "next/image";

export default async function Home() {
  let terracottaHeadshot: string | StaticImageData = terracottaHeadshotLocal;
  let aut: string | StaticImageData = autLocal;
  let caLogo: string | StaticImageData = caLogoLocal;
  let ecotLogo: string | StaticImageData = ecotLogoLocal;
  let fawLogo: string | StaticImageData = fawLogoLocal;

  try {
    const response = await list();

    const terracottaBlob = response.blobs.find((blob) =>
      blob.url.includes("terracotta.webp")
    );
    const autBlob = response.blobs.find((blob) =>
      blob.url.includes("AUT.webp")
    );
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
    if (autBlob) aut = autBlob.url;
    if (caLogoBlob) caLogo = caLogoBlob.url;
    if (ecotLogoBlob) ecotLogo = ecotLogoBlob.url;
    if (fawLogoBlob) fawLogo = fawLogoBlob.url;
  } catch (error) {
    console.error("Error loading blobs:", error);
    // Fall back to local images if there's an error
  }

  return (
    <div className="px-4">
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
          <>
            <SummaryBlock
              title="Field At Work"
              position="Software Engineer"
              startDate={new Date("2025-03-17")}
              points={fieldAtWorkPoints}
              endDate={null}
              imageUrl={fawLogo}
              isPhotoLeft={true}
            />
            <div className="divider h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8 mx-4" />

            <SummaryBlock
              title="Camp Australia"
              position="Web Developer"
              startDate={new Date("2022-03-11")}
              points={caPoints}
              endDate={new Date("2024-06-17")}
              imageUrl={caLogo}
              isPhotoLeft={false}
            />
            <div className="divider h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8 mx-4" />

            <SummaryBlock
              title="Ecotricity"
              position="Information Technology Administrator"
              startDate={new Date("2019-08-10")}
              points={ecotPoints}
              endDate={new Date("2020-10-10")}
              imageUrl={ecotLogo}
              isPhotoLeft={true}
            />
          </>
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
              title="A TV Show Content Review Platform"
              position="CringeTV"
              startDate={null}
              points={projectPoints}
              endDate={null}
              imageUrl={null}
              isPhotoLeft={true}
            />
            <div className="divider h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8 mx-4" />
            <SummaryBlock
              title="Web Scraper and API"
              position="Pokemon Unbound Scraper"
              startDate={null}
              points={pokemonProjectPoints}
              endDate={null}
              imageUrl={null}
              isPhotoLeft={true}
            />
            <div className="divider h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8 mx-4" />

            <SummaryBlock
              title="Building a Public Website for Camp Australia using Strapi and React"
              position="Camp Australia Public Website"
              startDate={null}
              points={publicWebsitePoints}
              endDate={null}
              imageUrl={null}
              isPhotoLeft={true}
            />
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

        <div className="flex flex-row">
          <div className="flex flex-col w-3/4">
            <h1>Graduate Diploma of Computing and Information Sciences</h1>
            <h2>Auckland University of Technology</h2>
            <h2>2017 - 2018</h2>
            <div className="divider h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8 mx-4" />
            <h1>Bachelor of Communications (Radio Major)</h1>
            <h2>Auckland University of Technology</h2>
            <h2>2012 - 2014</h2>
          </div>
          <Polaroid
            title="AUT"
            position="-rotate-2"
            imageUrl={aut}
            width={240}
            height={240}
          />
        </div>
      </SectionBlock>
    </div>
  );
}
