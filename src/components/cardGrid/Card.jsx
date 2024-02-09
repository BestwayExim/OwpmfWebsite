import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import image from "../../Assets/images/card1.png"
export default function Card({image,title,disc}) {
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
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
    className='upedCard'
    ref={ref}
    initial='hidden'
    animate={controls}
    variants={variants}
  >
    {/* Image in the center */}
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',padding:"20px" }}>
      <img src={image} alt="Descriptive Alt Text" style={{ maxWidth: '50%', maxHeight: '400px' }} />
    </div>
  
    {/* Title below the image */}
    <h2 style={{ textAlign: 'center',padding:"10px",color:"black" }}>{title}</h2>
  
    {/* Description below the title */}
    <p style={{ textAlign: 'center',padding:"10px",color:"black" }}>
  {disc}
    </p>
  </motion.div>
  
  );
}
