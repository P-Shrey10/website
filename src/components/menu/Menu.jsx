import "./Menu.css";
import { React, useState } from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialGithub,
} from "react-icons/ti";
import { BsQrCodeScan } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { RiFileDownloadLine } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

function Menu() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`menu ${isActive ? "active" : ""}`}>
      <div className="toggle" onClick={handleToggle}>
        <IoShareSocialSharp />
      </div>

      <ul>
        <li style={{ "--i": 0, "--clr": "#0a66c2" }}>
          <a
            href="https://www.linkedin.com/in/shrey-pradhananga-319362261"
            target="_blank"
          >
            <TiSocialLinkedin />
          </a>
        </li>
        <li style={{ "--i": 1, "--clr": "#fff" }}>
          <a href="https://github.com/P-Shrey10" target="_blank">
            <TiSocialGithub />
          </a>
        </li>
        <li style={{ "--i": 2, "--clr": "#1877f2" }}>
          <a href="https://www.facebook.com/shrey.pradhananaga" target="_blank">
            <TiSocialFacebook />
          </a>
        </li>
        <li style={{ "--i": 3, "--clr": "#fff" }}>
          <a href="https://www.instagram.com/shrey_pradhananga" target="_blank">
            <TiSocialInstagram />
          </a>
        </li>
        <li style={{ "--i": 4, "--clr": "#1da1f2" }}>
          <a
            href="https://drive.google.com/file/d/19xxA1asn5kDdVAij-_8dkwD4oyEU0ZTm/view?usp=sharing"
            download="Shrey-Pradhananga-cv.pdf"
            target="_blank"
          >
            <RiFileDownloadLine />
          </a>
        </li>
        <li style={{ "--i": 5, "--clr": "#fff" }}>
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
            target="_blank"
          >
            <SiGmail />
          </a>
        </li>
        <li style={{ "--i": 6, "--clr": "#1da1f2" }}>
          <a href="https://shreypradhananga.com.np" target="_blank">
            <CgWebsite />
          </a>
        </li>

        <li style={{ "--i": 7, "--clr": "#fff" }}>
          <a href="https://drive.google.com/file/d/1LrbCxsTVyfbF7kxogqasS3ZLqKgC1tqj/view?usp=sharing" target="_blank">
            <BsQrCodeScan />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
