import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.css";
import { motion } from "framer-motion";
import logo1 from "../../Assets/images/logos/gif--1.gif";
import logo2 from "../../Assets/images/logos/gif-2.gif";
import logo3 from "../../Assets/images/logos/gif-3.gif";
import logo4 from "../../Assets/images/logos/gif-4.gif";
import logo5 from "../../Assets/images/logos/gif-5.gif";
import logo6 from "../../Assets/images/logos/gif-6.gif";
import logo7 from "../../Assets/images/logos/gif-7.gif";
import logo8 from "../../Assets/images/logos/gif-8.gif";
import logo9 from "../../Assets/images/logos/owpmflogo1.png";
import { Link } from "react-scroll";

import InsightsIcon from "@mui/icons-material/Insights";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { SetScrollProvaider, Sidenavcontext } from "../..";
import { display } from "@mui/system";

function MyHeader() {
  const { sidenav, setSidenav } = useContext(Sidenavcontext);
  const handleNavbarToggle = () => {
    setSidenav(!sidenav);
  };
  const { setScrolled } = useContext(SetScrollProvaider);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeLogos, setActiveLogs] = useState([]);
  const [currentLogoSet, setCurrentLogoSet] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    let interval;
    if (isMobile) {
      setActiveLogs(logos);
      setCurrentLogoSet(1);
      interval = setInterval(() => {
        setCurrentLogoSet((prevSet) => {
          const nextSet = prevSet === 0 ? 1 : 0;

          setActiveLogs(nextSet === 0 ? logos : logos1); // Update the active logos based on the toggle
          return nextSet;
        });
      }, 15000);
    } else {
      setActiveLogs(logos);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let logos;
  let logos1;
  if (window.innerWidth < 768) {
    logos = [
      { src: logo9, delay: 4 },
      { src: logo2, delay: 0 },
      { src: logo3, delay: 2 },

      { src: logo1, delay: 6 },
      // { src: logo4, delay: 8 },
      // Add more logo objects with different delays as needed
    ];
    logos1 = [
      { src: logo9, delay: 4 },
      { src: logo6, delay: 0 },
      { src: logo5, delay: 2 },

      { src: logo7, delay: 6 },
      // { src: logo8, delay: 8 },
    ];
  } else {
    logos = [
      { src: logo9, delay: 16 },
      { src: logo1, delay: 0 },
      { src: logo2, delay: 4 },
      { src: logo3, delay: 8 },
      { src: logo5, delay: 12 },

      { src: logo6, delay: 20 },
      { src: logo7, delay: 24 },
      { src: logo8, delay: 28 },
      { src: logo4, delay: 32 },
      // Add more logo objects with different delays as needed
    ];
  }

  console.log(logos.length % 2);
  return (
    <nav
      className="navbar sticky-top  navbar"
      style={{
        backgroundColor: "#0E0E0E",
        display: "flex",
        padding: "10px",
        // position: "relative",
        // alignItems: "center",
        paddingTop: 0,
        // justifyContent: "center",
      }}
    >
      <div className="">
        <a className="" href="#">
          <div
            className=""
            // style={{ position: "relative" }}
          >
            {activeLogos.map((logo, index) => {
              if (logo.src === logo9) {
                return (
                  <motion.img
                    key={index}
                    src={logo9}
                    alt="Oner Active Logo"
                    style={{
                      margin: "15px",
                      width: "40px",
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
                      // margin: "15px",
                      width: "50px",
                      height: "40px",
                      opacity: 0, // You can set initial styles directly here
                    }}
                    initial={{ opacity: 0 }} // Define initial state here
                    animate={{
                      opacity: [0, 1, 1, 0, 0, 0, 0, 0, 0],
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
      <div
        className="hideClass text-white  gap-3 justify-center overflow-hidden"
        style={{
          display: "flex",
          justifyContent: "center",
          marginRight: "20px",
        }}
      >
        <Link to="howitworks" className="navbar-a">
          How It Works
        </Link>
        <Link
          onClick={() => setScrolled(true)}
          to="earnPointsSection"
          // smooth={false}
          // duration={20}
          className="navbar-a"
        >
          Earn Points
        </Link>

        <Link to="memberStatus" className="navbar-a">
          Member Status
        </Link>
        <Link to="faq" className="navbar-a">
          FAQ
        </Link>
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="https://theowpc.com"
          target="_blank"
          className=" navbar-a mr-10"
        >
          Dashboard
        </a>
      </div>

      <button
        class=" togbtn rounded-2xl"
        onClick={() => setSidenav(!sidenav)}
        // type="button"
        // data-bs-toggle="collapse"
        // data-bs-target="#navbarSupportedContent"
        // aria-controls="navbarSupportedContent"
        // aria-expanded="false"
        // aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
}

export default MyHeader;
