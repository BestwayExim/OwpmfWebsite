import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.css";
import { motion } from "framer-motion";
import logo from "../../Assets/images/logo.png";
import InsightsIcon from "@mui/icons-material/Insights";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Sidenavcontext } from "../..";
import { display } from "@mui/system";

function MyHeader() {
  
  const { sidenav, setSidenav } = useContext(Sidenavcontext);
  const handleNavbarToggle = () => {
    setSidenav(!sidenav);
  };



  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      console.log(logos.length);
      setIsMobile(window.innerWidth < 768);

 

    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  let logos

  if(window.innerWidth < 768){
      
    logos = [
       { src: logo, delay: 0 },
       { src: logo, delay: 4 },
       { src: logo, delay: 8 },
   
   
       // Add more logo objects with different delays as needed
     ];
   
   }
   else{
     
    logos = [
       { src: logo, delay: 0 },
       { src: logo, delay: 4 },
       { src: logo, delay: 8 },
       { src: logo, delay: 8 },
       { src: logo, delay: 12 },
   
       // Add more logo objects with different delays as needed
     ];
   }


console.log(logos.length % 2 );
  return (
    <nav
      className="navbar sticky-top  navbar"
      style={{
        backgroundColor: "#0E0E0E",
        display: "flex",
        padding: "10px",
        alignItems: "center",
        paddingTop: 0,
        justifyContent: "center",
      }}
    >
      <div>
        <a className="flex" href="#">
          <div style={{ position: "relative" }}>
            {logos.map((logo, index) => {
              
              if (index === Math.floor((0 + logos.length -1) / 2)) {
                return (
                  <motion.img
                    key={index}
                    src={logo.src}
                    alt="Oner Active Logo"
                    style={{
                      margin: "15px",
                      width: "50px",
                      height: "40px",
                      opacity: 1, // You can set initial styles directly here
                    }}
                  />
                );
              } else {
                return (
                  <motion.img
                    key={index}
                    src={logo.src}
                    alt="Oner Active Logo"
                    style={{
                      margin: "15px",
                      width: "50px",
                      height: "40px",
                      opacity: 0, // You can set initial styles directly here
                    }}
                    initial={{ opacity: 0 }} // Define initial state here
                    animate={{
                      opacity: [0, 1, 1, 0, 0],
                      transition: {
                        duration: 16,
                        delay: logo.delay, // Ensure delay is respected for each logo
                        repeat: Infinity, // Use repeat: Infinity for continuous loop
                      },
                    }}
                  />
                );
              }
            })}
          </div>
        </a>
      </div>
    </nav>
  );
}

export default MyHeader;
