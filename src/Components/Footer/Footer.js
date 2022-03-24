import React from "react";
import "./Footer.css";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaBehance,
  FaFacebookF,
  FaYoutube,
  FaVimeoV,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
              width="235"
              height="34"
              viewBox="0 0 235 34"
            >
              <defs>
                <pattern
                  id="pattern"
                  preserveAspectRatio="none"
                  width="100%"
                  height="100%"
                  viewBox="0 0 1142 166"
                >
                  <image
                    width="1142"
                    height="166"
                    xlinkHref="data:image/png;base64,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"
                  />
                </pattern>
              </defs>
              <rect
                id="Ingeniousw"
                width="235"
                height="34"
                fill="url(#pattern)"
              />
            </svg>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div>
              <FaCcVisa
                style={{
                  width: "34px",
                  height: "28px",
                  marginRight: "5px",
                  marginLeft: "5px",
                  color: "#196B92",
                  backgroundColor: "#FFFFFF",
                  borderRadius: 5,
                  marginTop: "30px",
                }}
              />
              <FaCcMastercard
                style={{
                  width: "34px",
                  height: "28px",
                  marginRight: "5px",
                  marginLeft: "5px",
                  color: "#196B92",
                  backgroundColor: "#FFFFFF",
                  borderRadius: 5,
                  marginTop: "30px",
                }}
              />
              <FaCcPaypal
                style={{
                  width: "34px",
                  height: "28px",
                  marginRight: "5px",
                  marginLeft: "5px",
                  color: "#196B92",
                  backgroundColor: "#FFFFFF",
                  borderRadius: 5,
                  marginTop: "30px",
                }}
              />
            </div>
          </div>

          <div className="col-lg-4  media-icons">
            <h6>
              News <span className="span1">Letter</span>
            </h6>
            <p>
              Subscribe to our <span className="span2"> Newsletter </span>and
              get exclusive deals you wont find anywhere else straight to your
              inbox !
            </p>
            <div style={{ position: "relative", display: "flex" }}>
              <input
                type="text"
                className="form-control2"
                placeholder="Enter Email Address"
              />
              <button>SUBSCRIBE</button>
            </div>
            <div>
              <Link to="/">
                <FaBehance
                  style={{
                    width: "32px",
                    height: "32px",
                    marginRight: "10px",
                    marginLeft: "10px",
                    color: "#FFFFFF",
                    backgroundColor: "#13435A",
                    borderRadius: 5,
                    marginTop: "30px",
                  }}
                />
              </Link>
              <Link to="/">
                <FaVimeoV
                  style={{
                    width: "32px",
                    height: "32px",
                    marginRight: "10px",
                    marginLeft: "10px",
                    color: "#FFFFFF",
                    backgroundColor: "#13435A",
                    borderRadius: 5,
                    marginTop: "30px",
                  }}
                />
              </Link>
              <Link to="/">
                <FaFacebookF
                  style={{
                    width: "32px",
                    height: "32px",
                    marginRight: "10px",
                    marginLeft: "10px",
                    color: "#FFFFFF",
                    backgroundColor: "#13435A",
                    borderRadius: 5,
                    marginTop: "30px",
                  }}
                />
              </Link>
              <Link to="/">
                <FaYoutube
                  style={{
                    width: "32px",
                    height: "32px",
                    marginRight: "10px",
                    marginLeft: "10px",
                    color: "#ED1B23",
                    backgroundColor: "#FFFFFF",
                    borderRadius: 5,
                    marginTop: "30px",
                  }}
                />
              </Link>
              <Link to="/">
                <FaTwitter
                  style={{
                    width: "32px",
                    height: "32px",
                    marginRight: "10px",
                    marginLeft: "10px",
                    color: "#FFFFFF",
                    backgroundColor: "#13435A",
                    borderRadius: 5,
                    marginTop: "30px",
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 main-menu">
            <h6>
              Main <span className="span1"> Menu</span>
            </h6>
            <div>
              <Link to="/">
                <h5>
                  <i className="far fa-angle-double-right"></i> Home
                </h5>
              </Link>
              <Link to="/">
                <h5>
                  <i className="far fa-angle-double-right"></i> About Us
                </h5>
              </Link>
              <Link to="/">
                <h5>
                  <i className="far fa-angle-double-right"></i> Services
                </h5>
              </Link>
              <Link to="/">
                <h5>
                  <i className="far fa-angle-double-right"></i> Board of
                  Directors
                </h5>
              </Link>
              <Link to="/">
                <h5>
                  <i className="far fa-angle-double-right"></i> Contact Us
                </h5>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <p>
            Copyright 2022 | <span>INGENIOUS</span> | All Rights Reserved
          </p>
          <p>Powered by EvoTech</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
