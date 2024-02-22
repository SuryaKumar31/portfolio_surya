import React from "react";
import resume from "../resume/SrisuryakumarFrontendDeveloper.pdf";
import pic from "../assets/suryaPic.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { style } from "../style";

const Hero = () => {
  // typewriter
  const [text] = useTypewriter({
    words: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="container" id="home">
      <section className="hero mt-5 md:mt-20">
        {/* heroHeading */}
        <h1 className={`${style.heroHeading}`}>
          Hi, I'm{" "}
          <span className="font-bold text-2xl md:text-3xl">SURYAKUMAR</span>
          . <br />
          <span className="font-light">
            Passionate frontend developer with a love for crafting user-friendly
            and visually captivating web experiences🚀. <br /> Proficient in{" "}
          </span>
          <span className={`${style.typeWrite}`}>{text}</span>
          <span style={{ color: "black" }}>
            <Cursor />
          </span>{" "}
          <span className="font-light">
            , I bring ideas to life through elegant design and seamless
            functionality.
          </span>
        </h1>
        {/* heroImage details */}
        <div className="hero__paragraph ">
          <p className="text-yellow-50 font-light hidden md:block">
            Enter a realm where code and creativity merge, giving life to
            captivating digital narratives. I'm dedicated to crafting web
            elegance. Explore my portfolio and join this journey of digital
            magic.
          </p>
          <p className={`${style.resumeWrap}`}>
            <a href={resume} download>
              <span className={`${style.resumeBtn}`}>
                Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </span>
            </a>
          </p>
        </div>
        {/* heroPic */}
        <div className="card picture">
          <img src={pic} alt="Suryapic" loading="lazy" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
