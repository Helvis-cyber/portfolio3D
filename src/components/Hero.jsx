import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5`}
        style={{ marginTop: "120px" }}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>
            Olá, eu sou <span className="text-[#915eff]">Helvis</span>
          </h1>
          <p className={`${styles.heroSubText}mt-2 text-white-100`}>
            Eu crio interfaces intuitivas e <br className="sm:block hidden" />
            desenvolvo aplicativos web inovadores.
          </p>
          <div></div>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
