import React from "react";
import  './RegestrationInfo.css';

function RegestrationInfo() {
    return (
      <div className="reg-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  col-s-12 section1">
              <h6>Product Registration</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                <span>service price</span> : <del>260 Egp</del> 200 Egp
              </p>
              <p>
                <span>Estimated service time is</span> : ( 20 days )
              </p>
            </div>
            <div className="col-lg-6 section2">
              <p className="p1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <p className="p2">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. 
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default RegestrationInfo;
