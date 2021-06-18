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
        passions; cooking and coding.
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
            date={item.title}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon=""
          >
            <h3 className="vertical-timeline-element-title">
              {item.cardTitle}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.cardDetailedText}
            </h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Section>
  );
};

export default Timeline;
