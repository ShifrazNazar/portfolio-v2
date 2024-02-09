// Core packages
import Badges from "../../../utils/badge.list";

// Section structure
import Section from "../../../structure/section";
import Container from "../../../structure/container";

// Section general blocks
import SectionTitle from "../../../blocks/section.title";

// Career scss
import career from "../../../../styles/scss/sections/index/career.module.scss";
import Education from "./education";

export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="I am a Software Engineer, My primary goal is to enhance my skills and expand my knowledge to gain valuable experience in complex project development. I am dedicated to continuously improving and staying updated with the latest advancements in the industry."
        />
		 <section className={career.area}>
          <div className={career.position}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>
                  Xsolla | Frontend Developer Intern | Kuala Lumpur, Malaysia
                </h3>
                <h4>Dec 2023 - Present</h4>
              </span>

              <p>
                ● Contributed to the creation of 3 custom web pages using the
                site builder.
              </p>
              <p>
                ● Utilized javascript DOM manipulation to ensure pre-built code
                block adheres closely to project’s Figma design.
              </p>
              <p>
                ● Employed API endpoints to fetch data from the backend,
                seamlessly displaying it on t
              </p>
            </div>
            <div className={career.companyAlt}></div>

            <Badges
              list={theWebSushi}
              block="stack"
              fullContainer="fullContainer"
              color={undefined}
            />
          </div>
        </section>

        <section className={career.area}>
          <div className={career.position}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>
                  The Web Sushi | Software Engineering Intern | Colombo, Sri
                  Lanka
                </h3>
                <h4>Sept 2023 - Nov 2023</h4>
              </span>
              <p>
                ● Transformed a newly acquired NextJS dashboard template to
                match the project’s Figma design.
              </p>
              <p>
                ● Implemented server-side filtering with NextJS to create
                RESTful API endpoints for table data filtering, resulting in a
                30% decrease in data retrieval time.
              </p>
              <p>
                ● Transformed a newly acquired NextJS dashboard template to ●
                Developed a multi-page form for a payment gateway leveraging
                react-form-hook for state management, MUI stepper to incorporate
                multi page and Yup for form validations.
              </p>
            </div>
            <div className={career.companyAlt}></div>

            <Badges
              list={Xsolla}
              block="stack"
              fullContainer="fullContainer"
              color={undefined}
            />
          </div>
        </section>

       
      </Container>
      <Education />
    </Section>
  );
}

const theWebSushi = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "tailwindcss", name: "TailwindCSS", type: "devicon" },
  { key: "yarn", name: "Yarn", type: "devicon" },
];


const Xsolla = [
	{ key: "javascript", name: "JavaScript", type: "devicon" },
	{ key: "html5", name: "HTML5", type: "devicon" },
	{ key: "css3", name: "CSS3", type: "devicon" },
  ];