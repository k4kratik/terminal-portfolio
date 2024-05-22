import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

import { Link } from "../styles/Welcome.styled";

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
      <p>
        Check these out -
      <Link href="https://blogs.kratik.dev" target="_blank"> Blogs </Link> &
      <Link href="https://resume.kratik.dev" target="_blank"> Resume </Link> &
      <Link href="https://kratik.notion.site/kratik/Kratik-Jain-DevOps-Engineer-c50fb1badd6d47508124d737eab2079c" target="_blank"> Notion Portfolio </Link>
      </p>
    </AboutWrapper>
  );
};

export default About;
