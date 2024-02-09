// Core packages
import Image from "next/image";

// Imports
import Section from "../../structure/section";
import Container from "../../structure/container";

import SectionTitle from "../../blocks/section.title";

import BadgesBlock from "../../blocks/about.badges";
import CopyBlock from "../../blocks/about.copy";

import about from "../../../styles/scss/sections/index/about.module.scss";
import React from "react";
import profilePic from "../../../../public/img/profile-pic2.png";

export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle=""
        />
        <section className={about.content}>
          <div className={about.image}>
            <Image
              src={profilePic}
              alt="Shifraz Nazar"
              loading="eager"
              layout="responsive"
            />
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Here is a little background"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fas", "user"]}
              copy="Hey there, I'm Shifraz 🙌. You could say I have this burning passion for all things tech. Learning and adapting to new technologies? Well, that's my jam. I'm the kind of person who thrives on flexibility, always eager to level up my skills so I can knock it out of the park every time. But hey, I'm not just about the code and circuits. I also play football. I'm always up for learning something new. So, if you're on the lookout for someone who brings both enthusiasm and skill to the table, count me in. Let's make some tech magic together!"
            />
            <CopyBlock
              title="Development and Projects"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fas", "code"]}
              copy="Development and project execution are my passion. I thrive on the challenges of bringing ideas to life through coding and turning concepts into functional, robust solutions. With meticulous planning, efficient workflows, and a keen eye for detail, I ensure successful project delivery, meeting objectives and exceeding expectations."
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}
