import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export default function AnimatedWord({ word, className }: { word: string, className?: string }) {
  const item = {
    hidden: {
      y: "150%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };

  return (
    <span style={{ overflow: "hidden", display: "inline-block", marginRight: "5px" }}>
      <motion.span
        className="font-youngSerif text-primary pb-1"
        variants={item}
        style={{ display: "inline-block" }}
      >
        {word}
      </motion.span>
    </span>
  );
};
