import React, { useState } from "react";
import {
  iconNumberOne,
  iconNumberTwo,
  razorpayIcon,
  vectorOne,
  vectorTwo,
  watch,
  radio,
} from "../../assets/images/image";
import Image from "../common/Image";
import Button from "../common/Button";

const Form = () => {
  const [selected, setSelected] = useState(2);
  const [subPrice] = useState(18500);
  const expiredPrice = 99;
  const annualPrice = 189;
  const biAnnualPrice = 179;
  const quarterPrice = 89;

  const [discountPrice, setDiscountPrice] = useState(subPrice - annualPrice);
  const [price, setPrice] = useState(annualPrice);
  const handleClick = (stateSelect, price) => {
    if (price !== expiredPrice) {
      setSelected(stateSelect);
      setPrice(price);
      setDiscountPrice(subPrice - price);
    }
  };
  return (
    <div className="form-container">
      <div className="sign-up-subscribe">
        <div className="sign-up">
          <Image src={iconNumberOne} />
          Sign Up
        </div>
        <div className="subscribe">
          <Image src={iconNumberTwo} />
          Subscribe
        </div>
      </div>
      <p className="select-subscription-text">Select your subscription plan</p>
      <div className="input-container">
        <div
          className="expired-price"
          onClick={() => handleClick(1, expiredPrice)}
        >
          <Image src={radio} className="expired-radio" />

          <div className="text-container">
            <p className="subsciption-text" style={{ color: "#bebebe" }}>
              12 Months Subscription
            </p>
            <div className="right-text-container">
              <div className="top-text">
                Total <p style={{ color: "#bebebe" }}>&#8377;{expiredPrice}</p>
              </div>
              <div className="bottom-text">
                <p style={{ color: "#bebebe" }}>&#8377;8</p>
                <span>/mo</span>
              </div>
            </div>
          </div>
          <div className="offer-expired">
            <p>Offer Expired</p>
          </div>
        </div>
        <div
          className={selected === 2 ? "active-field" : "inactive-field"}
          onClick={() => handleClick(2, annualPrice)}
        >
          {selected === 2 ? (
            <Image src={vectorOne} />
          ) : (
            <Image src={vectorTwo} />
          )}
          <div className="text-container">
            <p className="subsciption-text">12 Months Subscription</p>
            <div className="right-text-container">
              <div className="top-text">
                Total <p>&#8377;{annualPrice}</p>
              </div>
              <div className="bottom-text">
                <p>&#8377;179</p>
                <span>/mo</span>
              </div>
            </div>
          </div>
          <div className="recommended-tag">
            <p>Recommended</p>
          </div>
        </div>
        <div
          className={selected === 3 ? "active-field" : "inactive-field"}
          onClick={() => handleClick(3, biAnnualPrice)}
        >
          {selected === 3 ? (
            <Image src={vectorOne} />
          ) : (
            <Image src={vectorTwo} />
          )}
          <div className="text-container">
            <p className="subsciption-text">6 Months Subscription</p>
            <div className="right-text-container">
              <div className="top-text">
                Total <p>&#8377;{biAnnualPrice}</p>
              </div>
              <div className="bottom-text">
                <p>&#8377;25</p>
                <span>/mo</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={selected === 4 ? "active-field" : "inactive-field"}
          onClick={() => handleClick(4, quarterPrice)}
        >
          {selected === 4 ? (
            <Image src={vectorOne} />
          ) : (
            <Image src={vectorTwo} />
          )}
          <div className="text-container">
            <p className="subsciption-text">3 Months Subscription</p>
            <div className="right-text-container">
              <div className="top-text">
                Total <p>&#8377;{quarterPrice}</p>
              </div>
              <div className="bottom-text">
                <p>&#8377;33</p>
                <span>/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="summary-conatainer">
        <div className="subscription-fee">
          <p>Subsciption Fee</p>
          <span>&#8377;{subPrice}</span>
        </div>
        <div className="price-alert-box">
          <div className="alert-header">
            <p>Limited time offer</p>
            <span>-&#8377;{discountPrice}</span>
          </div>
          <div className="alert-body">
            <Image src={watch} className="watch-icon" />
            <p className="offer-validity">Offer valid till 25th March 2023 </p>
          </div>
        </div>
        <div className="total-amount">
          <p className="total-amount-text">
            Total <span>(Incl. of 18% GST)</span>
          </p>
          <span>&#8377;{price}</span>
        </div>
      </div>
      <div className="button-container">
        <Button buttonText="Cancel" btnclassname="cancel-button" />
        <Button buttonText="Proceed to pay" btnclassname="proceed-to-pay" />
      </div>
      <div className="razorpay-icon-container">
        <a href="https://razorpay.com/" target="_blank" rel="noreferrer">
          <Image src={razorpayIcon} />
        </a>
      </div>
    </div>
  );
};

export default Form;
