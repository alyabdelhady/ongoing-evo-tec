import React from "react";
import "./Headbar.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaShoppingCart,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Headbar() {
  return (
    <div className="headbar">
      <div className="container">
        <div>
          <span>
            <Link className="icon" to="/">
              <FaPhoneAlt
                style={{
                  width: "13.8px",
                  height: "13.9px",
                  marginRight: "10px",
                }}
              />
            </Link>
            Call Us: +2 - 0114 - 32 777 - 15
          </span>
          |
          <span>
            <Link className="icon" to="/">
              <FaEnvelope
                style={{
                  width: "13.8px",
                  height: "13.9px",
                  marginRight: "10px",
                  marginLeft: "10px",
                }}
              />
            </Link>
            Mail: info@ingenious.com
          </span>
        </div>
        <div>
          <Link className="icon" to="/">
            <FaFacebookF
              style={{
                width: "18px",
                height: "18px",
                marginRight: "10px",
              }}
            />
          </Link>
          <Link className="icon" to="/">
            <FaTwitter
              style={{
                width: "18px",
                height: "18px",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            />
          </Link>
          <Link className="icon" to="/">
            <FaInstagram
              style={{
                width: "18px",
                height: "18px",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            />
          </Link>
          <Link className="icon" to="/">
            <FaGooglePlusG
              style={{
                width: "18px",
                height: "18px",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            />
          </Link>
          | <span className="language">AR</span>
          <button>
            <FaShoppingCart
              style={{
                width: "18px",
                height: "18px",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            />
            Shopping Cart (0)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Headbar;
