import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { style } from "../style";

const Projects = () => {
  return (
    <section className={`${style.projectSec}`} id="projects">
      <div className="container2">
        <h1 className={`${style.projectHeading}`}>Projects</h1>
        <div className="projects">
          {/* to-do list */}
          <div className="project__card">
            <h1 className={`${style.cardHeading}`}>to-do list app</h1>
            <div className="flex border border-white gap-3">
              <h2 className="font-semibold text-blue-500 text-lg">React</h2>
            </div>
            <p className="ml-1">
              A To-do list App, developed using React and the Web Local Storage
              API. This web application empowers users to effortlessly create,
              manage, and persistently store their tasks. With an intuitive user
              interface, task prioritization, sorting, and responsive design, it
              offers a seamless task management experience. The app's standout
              feature is its ability to locally store tasks, ensuring your to-do
              list remains intact across browser sessions.{" "}
            </p>
            <div>
              <h1 className="font-bold text-xl my-2 md:my-3 text-teal-800">
                What I Learnt
              </h1>
              <p className="ml-1">
                {" "}
                I learned how to leverage the Web Local Storage API to provide a
                seamless and persistent user experience by storing tasks locally
                in the browser. I grasped the fundamentals of state management
                in React, an essential concept for handling task data and user
                interactions effectively.
              </p>
            </div>
            {/* buttons */}
            <div className={`${style.flexCenter}`}>
              {/* source code */}
              <div className={`${style.projectBtn}`}>
                <a
                  href="https://github.com/SuryaKumar31/to-do_list"
                  className="text-lg"
                >
                  sourcecode{" "}
                </a>
                <FaGithub className="text-xl" />{" "}
              </div>
              {/* view app */}
              <div className={`${style.projectBtn} ml-2`}>
                <a
                  href="https://to-do-list-eosin-psi.vercel.app/"
                  className="text-lg"
                >
                  view app{" "}
                </a>
                <FaExternalLinkAlt />{" "}
              </div>
            </div>
          </div>
          {/* meme generator */}
          <div className="project__card">
            <h1 className={`${style.cardHeading}`}>meme generator app</h1>
            <div className="flex border border-white gap-3">
              {/* <h1>Language</h1> */}
              <h2 className="font-semibold text-blue-500 text-lg">React</h2>
            </div>
            <p className="ml-1">
              Experience a touch of humor with this React-based Random Meme
              Generator app. This project seamlessly integrates with an API to
              deliver a fresh dose of internet memes at your fingertips. Users
              can click a button to instantly fetch and display a random meme,
              offering endless laughter and entertainment. Explore the world of
              internet humor with a click, and enjoy a quick laugh anytime you
              desire!{" "}
            </p>
            <div>
              <h1 className="font-bold text-xl my-2 md:my-3 text-teal-800">
                What I Learnt
              </h1>
              <p className="ml-1">
                {" "}
                Through this project, I learned how to integrate external APIs
                in a React application, use the fetch function to retrieve data,
                and dynamically update the user interface. I gained valuable
                experience in building interactive, content-driven web
                applications and honed my skills in React development.
              </p>
            </div>
            <div className={`${style.flexCenter}`}>
              {/* sourcecode */}
              <div className={`${style.projectBtn}`}>
                <a
                  href="https://github.com/SuryaKumar31/meme_generator"
                  className="text-lg"
                >
                  sourcecode{" "}
                </a>
                <FaGithub className="text-xl" />{" "}
              </div>
              {/* view app */}
              <div className={`${style.projectBtn} ml-2`}>
                <a
                  href="https://meme-generator-six-theta.vercel.app/"
                  className="text-lg"
                >
                  view app{" "}
                </a>
                <FaExternalLinkAlt />{" "}
              </div>
            </div>
          </div>
          {/* portfolio */}
          <div className="project__card ">
            <h1 className={`${style.cardHeading}`}>portfolio website</h1>
            <div className="flex border border-white gap-3">
              {/* <h1>Language</h1> */}
              <h2 className="font-semibold text-blue-500 text-lg">React</h2>
              <h2 className="font-semibold text-blue-600 text-lg">
                TailwindCSS
              </h2>
            </div>
            <p className="ml-1">
              I designed a personalized portfolio website using React and
              Tailwind CSS to showcase my skills, achievements, and experiences.
              This dynamic platform offers an interactive journey through my
              professional and educational background. With a sleek and
              user-friendly interface, visitors can explore my projects, view my
              resume, and connect with me. The website not only reflects my
              technical expertise but also exemplifies my commitment to creating
              an impactful online presence.{" "}
            </p>
            <div>
              <h1 className="font-bold text-xl my-2 md:my-3 text-teal-800">
                What I Learnt
              </h1>
              <p className="ml-1">
                {" "}
                Through this project, I gained hands-on experience in React and
                Tailwind CSS, enhancing my web development skills. I learned to
                create an engaging and responsive user interface, improve
                website performance, and effectively communicate my professional
                identity through design and content.
              </p>
            </div>
            <div className={`${style.flexCenter}`}>
              <div className={`${style.projectBtn}`}>
                <a
                  href="https://github.com/SuryaKumar31/portfolio_surya"
                  className="text-lg"
                >
                  sourcecode{" "}
                </a>
                <FaGithub className="text-xl" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
