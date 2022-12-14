import React from "react";
import { Link } from "react-router-dom";
import "./Customer.css";
import Apple from "../../images/apple.svg";
import Google from "../../images/google.svg";

import Tobenna from "../../images/TestimonialProfie/Tobenna.jpeg";
import Micheal from "../../images/TestimonialProfie/Micheal F.jpeg";
import Oluwadamilola from "../../images/TestimonialProfie/Oluwadamilola A.jpg";
import Joseph from "../../images/TestimonialProfie/Joseph A.jpeg";

const Customers = () => {
  return (
    <div className="customer">
      <div className="customerContainer">
        <div className="leftRight">
          <div className="left">
            <div className="testimonials">
              <div className="boxes">
                <div className="box">
                  <small>Thursday, 6th of October 2022 by 11:42 AM</small>
                  <div className="imgContent">
                    <img src={Tobenna} alt="" />
                    <div className="boxContent">
                      <h6>Tobenna A</h6>
                      <p>
                        Thanks to piggyvest I've saved enough money to start up
                        a really large business
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <small>Wednesday, 5th of October 2022 by 03:08 AM</small>
                  <div className="imgContent">
                    <img src={Micheal} alt="" />
                    <div className="boxContent">
                      <h6>Micheal F</h6>
                      <p>
                        I just joined tho and I believe piggyVest won't
                        disappoint me 😊❤️
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <small>Tuesday, 4th of October 2022 by 18:01 PM</small>
                  <div className="imgContent">
                    <img src={Oluwadamilola} alt="" />
                    <div className="boxContent">
                      <h6>Oluwadamilola A</h6>
                      <p>
                        PiggyVest was introduced to me some years back and I
                        have been able to save multiple millions over the years.
                        I look forward to more from Piggyvest.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <small>Saturday, 24th of September 2022 by 19:58 PM</small>
                  <div className="imgContent">
                    <img src={Joseph} alt="" />
                    <div className="boxContent">
                      <h6>Joseph A</h6>
                      <p>
                        Piggvest has helped me with buying my new iPhone and it
                        is the most reliable app.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <small>Thursday, 6th of October 2022 by 11:42 AM</small>
                  <div className="imgContent">
                    <img src={Tobenna} alt="" />
                    <div className="boxContent">
                      <h6>Tobenna A</h6>
                      <p>
                        Thanks to piggyvest I've saved enough money to start up
                        a really large business
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <small>Wednesday, 5th of October 2022 by 03:08 AM</small>
                  <div className="imgContent">
                    <img src={Micheal} alt="" />
                    <div className="boxContent">
                      <h6>Micheal F</h6>
                      <p>
                        I just joined tho and I believe piggyVest won't
                        disappoint me 😊❤️
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <small>Tuesday, 4th of October 2022 by 18:01 PM</small>
                  <div className="imgContent">
                    <img src={Oluwadamilola} alt="" />
                    <div className="boxContent">
                      <h6>Oluwadamilola A</h6>
                      <p>
                        PiggyVest was introduced to me some years back and I
                        have been able to save multiple millions over the years.
                        I look forward to more from Piggyvest.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <small>Saturday, 24th of September 2022 by 19:58 PM</small>
                  <div className="imgContent">
                    <img src={Joseph} alt="" />
                    <div className="boxContent">
                      <h6>Joseph A</h6>
                      <p>
                        Piggvest has helped me with buying my new iPhone and it
                        is the most reliable app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <h4>4 Million + customers</h4>
              <p>
                Since launching in 2016, over 4,000,000 people have used
                PiggyVest to manage their money better, avoid over-spending and
                be more accountable.
              </p>
              <div className="box">
                <Link to={"/register"} className="btn btn-signup">
                  Create free account
                </Link>
                <div className="download">
                  <Link to={"/"} className="btn-download">
                    <img
                      src={Apple}
                      alt="download-apple"
                      width="18"
                      height="22"
                    />{" "}
                    Get on Iphone
                  </Link>
                  <Link to={"/"} className="btn-download">
                    <img
                      src={Google}
                      alt="download-apple"
                      width="24"
                      height="24"
                    />{" "}
                    Get on Android
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
