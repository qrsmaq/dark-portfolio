import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Started as a chef, now I'm here and for good reason. I have two
        passions; cooking and coding. After working seven years as a chef, while
        dabbling in basic coding, I noticed that I dreaded going to work but
        enjoyed my coding side projects. So, eventually, I got enough courage to
        make sacrifices that would allow me to pursue software development while
        working full time.
      </SectionText>
      <VerticalTimeline>
        {TimeLineData.map((item, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(33, 150, 243, .2)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(33, 150, 243, .)",
            }}
            date={item.year}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon=""
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.description}
            </h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Section>
  );
};

export default Timeline;
