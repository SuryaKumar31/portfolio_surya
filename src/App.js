import { useEffect, useState } from "react";
import "./App.css";
import { Hourglass } from "react-loader-spinner";
import { Navbar, Hero, Skills, Academics, Projects } from "./components/index";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2200);
  });
  return (
    <div>
      {isLoading && (
        <div className="flex items-center justify-center min-h-screen">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["rgb(28, 174, 211)", "rgb(224, 241, 30)"]}
          />
        </div>
      )}
      {!isLoading && (
        <div>
          <Navbar />
          <Hero />
          <Skills />
          <Academics />
          <Projects />
        </div>
      )}
    </div>
  );
};
export default App;
