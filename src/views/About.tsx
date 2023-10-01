// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
        items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
          <h2
            className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px]
          font-bold text-textPrimary"
          >
            About <span className="text-secondary"> me</span>
          </h2>
          
          <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
            I am Aditya Ataby Hidayat, I have competence
            in programming, public speaking and human resources. I have work
            experience, able to work individually or in a team, can collaborate
            with the team well, have good analysis, planning, communicative,
            have a passion to develop, highly dedicated & adaptable. I am very
            passionate about Video Editing & Graphic Design.
          </p>
          </Reveal>
          
          <motion.div 
          variants={fadeIn('up')}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex items-center justify-center xl:justify-center gap-6">
            <SocialMediaIcon imgSrc={instagramIcon} title="Instagram" />
            <SocialMediaIcon imgSrc={facebookIcon} title="Facebook" />
            <SocialMediaIcon imgSrc={twitterIcon} title="Twitter" />
            <SocialMediaIcon imgSrc={youtubeIcon} title="Youtube" />
          </motion.div>
        </div>

        <motion.div 
        variants={fadeIn('down')}
        transition={transition()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex-1 flex items-center justify-center">
          <img
            src={aboutIllustration}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default About;
