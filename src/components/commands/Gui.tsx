import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Gui: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "gui") {
    window.open("https://kratik.notion.site/kratik/Kratik-Jain-DevOps-Engineer-c50fb1badd6d47508124d737eab2079c", "_blank");
  }

  return <span></span>;
};

export default Gui;
