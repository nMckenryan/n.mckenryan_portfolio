import Hero from "@/app/component/Hero";
import SectionBlock from "./component/SectionBlock";
import SummaryBlock from "./component/SummaryBlock";
import { caPoints, ecotPoints, fieldAtWorkPoints } from "./jobParagraphs";
import { FaTools, FaUserTie } from "react-icons/fa";
import fawLogo from "../public/fawLogo.png";
import caLogo from "../public/ca.webp";
import ecotLogo from "../public/ecotricity.png";

export default function Home() {
  return (
    <div>
      <Hero />
      <SectionBlock>
        <div className="flex flex-row">
          <FaTools size={36} color="white" />
          <h1
            id="experience"
            className="text-4xl text-left mb-8 px-4"
            style={{ fontFamily: "'Tropical Organic', sans-serif" }}
          >
            Projects
          </h1>
        </div>
      </SectionBlock>

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
            <div className="divider h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8 mx-4"></div>

            <SummaryBlock
              title="Camp Australia"
              position="Web Developer"
              startDate={new Date("2022-03-11")}
              points={caPoints}
              endDate={new Date("2024-06-17")}
              imageUrl={caLogo}
              isPhotoLeft={false}
            />
            <div className="divider h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8 mx-4"></div>

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
    </div>
  );
}
