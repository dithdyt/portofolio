import { easeIn } from "framer-motion";

export const transition = () => {
    return {
        duration: 0.75,
        delay: 0.2,
        transition: easeIn,
    }
};
