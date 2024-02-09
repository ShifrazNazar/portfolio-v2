// Section structure
import Section from "../../../structure/section";
import Container from "../../../structure/container";

// Section general blocks
import SectionTitle from "../../../blocks/section.title";

// Career scss
import career from "../../../../styles/scss/sections/index/career.module.scss";

export default function Education() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Education"
          preTitle="Formal"
          subTitle="I am currently studying computer science at the Velammal college of engineering and technology."
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>
                  Asia Pacific University of Technology & Innovation (APU)
                </h3>
                <h5>Malaysia, Kuala Lumpur</h5>
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
        </section>
      </Container>
    </Section>
  );
}
