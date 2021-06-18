import React from "react";
import Typewriter from "typewriter-effect";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi!
        <br />
        I'm Christian Mack.
      </SectionTitle>
      <SectionText className="typing">
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "Culinary Trained Foodie",
              "Gardening Enthusiast",
            ],
            autoStart: true,
            loop: true,
            changeDelay: 0,
          }}
        />
      </SectionText>
      <a href="images/resume.pdf" download="ChristianMack-Resume">
        <Button>Resume</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
