import React, { useState } from "react";

// Icons
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiBookBookmark, BiMessageSquareDetail, BiCodeBlock } from "react-icons/bi";
import { RiBriefcaseLine } from "react-icons/ri";
import { MdPhotoLibrary, MdWork } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";

import "./Topbar.css";

const Topbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <nav className="topbar">
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>

      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <BiCodeBlock />   {/* Represents coding / skills */}
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <MdWork />   {/* Represents work / experience */}
      </a>

      <a
        href="#education"
        onClick={() => setActiveNav("#education")}
        className={activeNav === "#education" ? "active" : ""}
      >
        <BiBook />
      </a>

      <a
        href="#publications"
        onClick={() => setActiveNav("#publications")}
        className={activeNav === "#publications" ? "active" : ""}
      >
        <BiBookBookmark />
      </a>

      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiBriefcaseLine />
      </a>

      <a
        href="#gallery"
        onClick={() => setActiveNav("#gallery")}
        className={activeNav === "#gallery" ? "active" : ""}
      >
        <MdPhotoLibrary />
      </a>

      <a
        href="#certification"
        onClick={() => setActiveNav("#certification")}
        className={activeNav === "#certification" ? "active" : ""}
      >
        <FaCertificate />   {/* Represents certification */}
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Topbar;
