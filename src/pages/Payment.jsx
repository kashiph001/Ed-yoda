import React from "react";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import Image from "../components/common/Image";
import {
  iconFive,
  iconFour,
  iconOne,
  iconThree,
  iconTwo,
} from "../assets/images/image";

const Payment = () => {
  return (
    <div>
      <Header />
      <div className="content-container">
        <div className="main-lookup">
          <div className="main-lookup-header">
            <p>
              Access curated courses worth <span> </span>
              <span className="strikeout">&#8377; 18,500</span>
              at just <span className="ninty-nine">&#8377; 99</span>per year!
            </p>
          </div>
          <div className="point-container">
            <div className="point-one">
              <Image src={iconOne} className="icons" />
              <p>
                <span>100+</span> Job relevant courses
              </p>
            </div>
            <div className="point-two">
              <Image src={iconTwo} className="icons" />
              <p>
                <span>20,000+</span> Hours of content
              </p>
            </div>
            <div className="point-three">
              <Image src={iconThree} className="icons" />
              <p>
                <span>Exclusive</span> webinar access
              </p>
            </div>
            <div className="point-four">
              <Image src={iconFour} className="icons" />
              <p>
                Scholarship worth <span>&#8377;94,500</span>
              </p>
            </div>
            <div className="point-five">
              <Image src={iconFive} className="icons" />
              <p>
                <span>Ad Free</span> learning experience
              </p>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Payment;
