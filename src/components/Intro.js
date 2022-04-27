import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Intro = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 702.3 864.8">
        <motion.polygon
          initial={{
            rotateY: 0
          }}
          animate={{
            rotateY: 360,
            transition: {
              duration: 3,
              ease: "linear",
              yoyo: Infinity
            }
          }}
          points="491.9,315 210.5,315 210.5,0 0,0 0,864.8 210.5,864.8 210.5,518.4 491.9,518.4 491.9,864.8 702.3,864.8 702.3,0 491.9,0"
        />
      </svg>
      <h1>Heydays starter template</h1>
    </div>
  );
};

export default styled(Intro)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    max-width: 200px;
    margin-bottom: 50px;
  }
`;
