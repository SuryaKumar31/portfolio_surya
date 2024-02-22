import html from "../assets/htmlnew.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/nodejs.png";
import git from "../assets/git.png";
import SkillCard from "./SkillCard";
import { style } from "../style";

const Skills = () => {
  return (
    <section className="mt-2 md:mt-20 bg-slate-800 p-16" id="skills">
      <div className="container sx">
        {/* skillHeading */}
        <h1 className={`${style.skillHeading}`}>Tech Stack</h1>
        {/* skillCards */}
        <div className="skills mt-10">
          <SkillCard img={html} text={"HTML"} textColor="text-orange-600 " />
          <SkillCard img={css} text={"CSS"} textColor="text-blue-600" />
          <SkillCard img={js} text={"javascript"} textColor="text-yellow-400" />
          <SkillCard img={react} text={"React"} textColor="text-sky-400" />
          <SkillCard img={node} text={"Node"} textColor="text-green-600" />
          <SkillCard
            img={tailwind}
            text={"Tailwind"}
            textColor="text-sky-600"
          />
          <SkillCard img={git} text={"Git"} textColor="text-red-500" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
