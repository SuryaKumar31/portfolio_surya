import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { style } from "../style";

const Navbar = () => {
  return (
    <section className={`${style.navSection}`}>
      <div className={`${style.navWrap}`}>
        {/* navigation */}
        <nav className={`${style.navigation}`}>
          {/* logo */}
          <button className={`${style.navBtn}`}>
            <span className="md:hidden text-lg">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                SK
              </Link>
            </span>
            <span className="hidden md:block text-2xl">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                SURYAKUMAR
              </Link>
            </span>
          </button>
          {/* links */}
          <ul className="flex gap-1 md:gap-2 items-center">
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                className={`li-style cursor-pointer`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="academics"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                className={`li-style cursor-pointer`}
              >
                Academics
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                className={`li-style cursor-pointer`}
              >
                Projects
              </Link>
            </li>
            {/* button */}
            <li className="transition-transform hover:scale-110">
              <a
                href="https://github.com/SuryaKumar31"
                className="text-2xl sm:text-3xl"
              >
                <FaGithub />
              </a>
            </li>
            <li className="transition-transform hover:scale-110">
              <a
                href="https://www.linkedin.com/in/srisuryakumar-n/"
                className="text-2xl sm:text-3xl"
              >
                <FaLinkedin className="text-blue-600" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
