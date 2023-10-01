// assets
import contactPageImg from "../assets/contact-page.svg";
import contactIllustration from "../assets/contact-illustration.svg";

// components
import { Button, LabelInput, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const Contact = () => {
  return (
    <div
      id="project"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${contactPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
      items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <h2
            className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px]
          font-bold text-textPrimary"
          >
           Got a Project in <span className="text-secondary"> Mind?</span>
          </h2>

          <img src={contactIllustration} alt="" className="max-h-[348px]"/>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <LabelInput labelText="Your Name" placeholderText="Name"/>
            <LabelInput labelText="Your Email" placeholderText="Email"/>
            {/* //progress terakhir di menu contact, stress gw bro*/}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
