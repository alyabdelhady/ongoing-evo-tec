import React from "react";
import Headbar from "../Components/Headbar/Headbar";
import Navbar from "../Components/Navbar/Navbar";
import Coversection from "../Components/Coversection/Coversection";
import RegestrationInfo from "../Components/RegestrationInfo/RegestrationInfo";
import ServiceRequest from "../Components/ServiceRequest/ServiceRequest";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Headbar />
      <Navbar />
      <Coversection />
      <RegestrationInfo />
      <ServiceRequest />
      <Footer />
    </div>
  );
}

export default Home;
