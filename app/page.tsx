import Hero from "@/app/component/Hero";
import SectionBlock from "./component/SectionBlock";
import SummaryBlock from "./component/SummaryBlock";

export default function Home() {
  return (
    <div>
      <Hero />
      <SectionBlock>
        <h2
          className="text-4xl text-left mb-8 px-4"
          style={{ fontFamily: "'Tropical Organic', sans-serif" }}
        >
          Projects
        </h2>
        <div className="mx-auto px-8">
          <ul>
            <li> Bullet</li>
            <li> </li>
          </ul>
        </div>
      </SectionBlock>

      <SectionBlock>
        <h2
          className="text-4xl text-left mb-8 px-4"
          style={{ fontFamily: "'Tropical Organic', sans-serif" }}
        >
          Experience
        </h2>
        <SummaryBlock
          title="Bullet"
          startDate={new Date("2025-01-01")}
          points={["yes"]}
          endDate={null}
        />
      </SectionBlock>
    </div>
  );
}
