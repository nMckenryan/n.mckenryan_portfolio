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
import fawLogo from "../public/fawLogo.png";
import caLogo from "../public/ca.webp";
import ecotLogo from "../public/ecotricity.png";
import aut from "../public/AUT.jpeg";
import Polaroid from "./component/Polaroid";

export default function Home() {
  return (
    <div className="px-4">
      <Hero />

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
          />
        </div>
      </SectionBlock>
    </div>
  );
}
