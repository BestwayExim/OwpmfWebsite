import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./Card.css"
export default function CardSec() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } 
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 90 }, // Start 50 pixels down from the final position
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className='downCard'
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={variants}
    >
      <div>this is a test</div>
    </motion.div>
  );
}
