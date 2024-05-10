import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Kratik Jain</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>DevOps/Cloud Engineer</HighlightAlt> based in India.
      </p>
      <p>
        I love to design, create and manage infra of all scale and <br />
        I enjoy solving challenges with creative solutions.
      </p>
    </AboutWrapper>
  );
};

export default About;
