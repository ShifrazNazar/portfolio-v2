// Section structure
import Section from "../../../structure/section";
import Container from "../../../structure/container";

// Section general blocks
import SectionTitle from "../../../blocks/section.title";

// Career scss
import career from "../../../../styles/scss/sections/index/career.module.scss";
// import technical from "../../../../styles/scss/sections/index/about.module.scss";
import Image from "next/image";

export default function Education() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Education"
          preTitle="Formal"
          subTitle="I am currently pursuing a BSc in Software Engineering at Asia Pacific University of Technology & Innovation (APU) in Kuala Lumpur, Malaysia."
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>
                  Asia Pacific University of Technology & Innovation (APU) |
                  Malaysia, Kuala Lumpur | 2022 - 2025
                </h3>
                <h4> BSc in Software Engineering</h4>
              </span>
              <p>
                <strong>Relevant Coursework:</strong> Data Structure &
                Algorithms, Object Oriented Programming, Data Analysis, Web
                Design, Networking, Database, Computer Architecture, Software
                Architecture, System Analysis & Design, Requirements
                Engineering, System Development Methods, Software Quality
                Engineering
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
            {/* <div className={`${technical.image} ${technical.technicalSvg}`}>
              <Image
                src="/gif/tech-guy.gif"
                width={200}
                height={200}
                alt="data string background"
                loading="eager"
              />
            </div> */}
        </section>
      </Container>
    </Section>
  );
}
