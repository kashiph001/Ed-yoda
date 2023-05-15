// This is common button component which can used in entire app

import React from "react";
const Button = ({
  imgSrc,
  onClick,
  altText,
  buttonText,
  btnclassname,
  imageclass,
  disabled,
}) => {
  return (
    <button onClick={onClick} className={btnclassname} disabled={disabled}>
      {imgSrc && <img src={imgSrc} alt={altText} className={imageclass} />}
      {buttonText && <span>{buttonText}</span>}
    </button>
  );
};

export default Button;
