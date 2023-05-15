import React from "react";
import Image from "../common/Image";
import { logo, searchIcon } from "../../assets/images/image";
import Button from "../common/Button";

const Header = () => {
  return (
    <div className="nav-bar">
      <div className="left-content">
        <Image src={logo} alt="KiwiTech" className="logo" />
        <div className="courses">Courses</div>
        <div className="programs">Programs</div>
      </div>
      <div className="right-content">
        <Image src={searchIcon} alt="KiwiTech" className="search-icon" />
        <div className="login">Log in</div>
        <Button btnclassname="join-btn" buttonText="join now" />
      </div>
    </div>
  );
};

export default Header;
