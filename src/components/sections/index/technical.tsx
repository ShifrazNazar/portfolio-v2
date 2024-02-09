// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges";
import CopyBlock from "../../blocks/about.copy";

// Section scss
import technical from "../../../styles/scss/sections/index/about.module.scss";

export default function Technical() {
  return (
    <Section classProp={`${technical.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Technical"
          preTitle="Hard Skills"
          subTitle="As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
        />
        <section className={`${technical.content} ${technical.container}`}>
          <div>
            <BadgesBlock
              title="Programming Languages"
              copy="I am proficient in a variety of programming languages, allowing me to create efficient and effective solutions."
              list={programmingLanguages}
              block="tech"
              fullContainer="fullContainer"
              icon="code"
              containerClass={technical.container}
              headerIcon={technical.icon}
              invertedColor={undefined}
            />
            <BadgesBlock
              title="Front-End Development"
              copy="I specialize in creating beautiful, responsive, and user-friendly front-end experiences. I'm proficient in a variety of front-end technologies and frameworks."
              list={frontEnd}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={technical.container}
              headerIcon={technical.icon}
              invertedColor={undefined}
            />
            <BadgesBlock
              title="Back-End Development"
              copy="I have experience working with back-end technologies and frameworks, allowing me to create robust and scalable server-side solutions."
              list={backEnd}
              block="tech"
              fullContainer="fullContainer"
              icon="server"
              containerClass={technical.container}
              headerIcon={technical.icon}
              invertedColor={undefined}
            />
            <BadgesBlock
              title="Databases"
              copy="I have experience working with a variety of databases, allowing me to create efficient and scalable data storage solutions."
              list={databases}
              block="tech"
              fullContainer="fullContainer"
              icon="database"
              containerClass={technical.container}
              headerIcon={technical.icon}
              invertedColor={undefined}
            />

            <BadgesBlock
              title="Tools"
              copy="I use a variety of tools to streamline my development process and create efficient and effective solutions."
              list={tools}
              block="tech"
              fullContainer="fullContainer"
              icon="tools"
              containerClass={technical.container}
              headerIcon={technical.icon}
              invertedColor={undefined}
            />
          </div>
          <div className={`${technical.image} ${technical.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="data string background"
              loading="eager"
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}
{
  /*Badge Block*/
}
const programmingLanguages = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "java", name: "Java", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "r", name: "r", type: "devicon" },
  { key: "c#", name: "c#", type: "devicon" },
];

const frontEnd = [
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "tailwind", name: "TailwindCSS", type: "devicon" },
  { key: "bootstrap", name: "Bootstrap", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
];

const backEnd = [
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "express", name: "Express", type: "devicon" },
  { key: "django", name: "Django", type: "devicon" },
];

const databases = [
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "firebase", name: "Firebase", type: "devicon" },
];

const tools = [
  { key: "vscode", name: "VSCode", type: "devicon" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "npm", name: "npm", type: "devicon" },
  { key: "yarn", name: "Yarn", type: "devicon" },
];
