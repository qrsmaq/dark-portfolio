import React from "react";

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
        My name is Christian Mack.
      </SectionTitle>
      <SectionText>
        I'm a Full Stack Developer based in the SF Bay Area
      </SectionText>
      <a href="images/resume.pdf" download="ChristianMack-Resume">
        <Button>Resume</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
