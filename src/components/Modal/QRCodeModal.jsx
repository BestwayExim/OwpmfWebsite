import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeProvider } from '../..';
import "./QR.css"
import  image from "../../Assets/images/QRCode.png"

const QRModal = ({ isOpen, onClose, title, imageUrl }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { show, handleClose } = useContext(QRCodeProvider);
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, type: "spring", damping: 20, stiffness: 300 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const closeModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      handleClose(false)
    }, 300); // wait for the animation to complete before closing
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="modal-overlay"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          onClick={()=>handleClose(false)}
        >
          <motion.div
            className="modal-content"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
          >
            <div className="modal-header">
              <h6 style={{color:'white',display:'flex', justifyContent:"center"}}>Access OWPMF Loyalty App</h6>
              <button  style={{color:"white"}} onClick={closeModal}>X</button>
            </div>
            <div className="modal-body">
              <img src={image} alt={title} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QRModal;
