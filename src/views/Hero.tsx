// assets
import homePageImg from "../assets/home-page.svg";
import homePageIllustation from "../assets/hero-illustration.svg";
import downloadIcon from "../assets/download-btn-icon.svg";

// components
import { Button } from "../components";

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${homePageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
        items-center xl:items-start gap-10 w-full py-16 px-10"
      >
        <div className="w-full xl:w-fit">
          <motion.h1
            variants={fadeIn("down")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="w-full xl:w-fit text-center xl:text-start text-5xl sm:text-7xl lg:text-8xl
            font-bolt text-textPrimary uppercase"
          >
            hello, im a
            <br />
            <span className="text-secondary">
              <Typewriter
                words={["Developer", "Designer", "Editor"]}
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={80}
                loop
              />
            </span>
          </motion.h1>
          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="my-14 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start"
          >
            <Button>Hire Me</Button>
            <Button icon={downloadIcon}>Download CV</Button>
          </motion.div>
        </div>
        <motion.img
          variants={scale()}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          src={homePageIllustation}
          alt=""
          className="max-w-full sm:max-w-[401px]"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Hero;
