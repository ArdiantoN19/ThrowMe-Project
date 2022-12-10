import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  ImLinkedin,
  ImFacebook2,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";
import "./footer.css";

function Footer() {
  return (
    <div className="bg-success">
      <div className="container py-3">
        <div className="row row-cols-1 row-cols-md-3 justify-content-center align-items-start border-bottom border-2 border-white pb-3 pt-2 mb-3">
          <div className="col mb-4 mb-md-0">
            <Link
              to="/"
              className="fw-bold fs-2 py-0 text-white text-decoration-none"
            >
              ThrowMe
            </Link>
            <small className="d-block mb-2">
              Jl. Batik Kumeli No.50, Sukaluyu, Kec. Cibeunying Kaler, Kota
              Bandung, Jawa Barat 40123
              <br />
              T: (646) 798 2426
            </small>
            <a
              href="https://goo.gl/maps/gAGGBNrDjBL7TDJ46"
              className="d-block text-decoration-none text-white slide-right"
            >
              Get directions
              <BsFillArrowRightCircleFill className="ms-2" />
            </a>
          </div>
          <div className="col mb-4 mb-md-0">
            <h4 className="text-white">Cotributors</h4>
            <a
              href="mailto:ardi19nugroho@gmail.com"
              className="d-block py-2 px-1 text-black text-decoration-none slide-right"
            >
              Ardianto Nugroho
            </a>
            <a
              href="mailto:ardi19nugroho@gmail.com"
              className="d-block py-2 px-1 text-black text-decoration-none slide-right"
            >
              Ferdi Setyo
            </a>
            <a
              href="mailto:ardi19nugroho@gmail.com"
              className="d-block py-2 px-1 text-black text-decoration-none slide-right"
            >
              Reziq
            </a>
            <a
              href="mailto:ardi19nugroho@gmail.com"
              className="d-block py-2 px-1 text-black text-decoration-none slide-right"
            >
              Devi
            </a>
          </div>
          <div className="col mb-4 mb-md-0">
            <h4 className="text-white">Let's join our community</h4>
            <a href="www.google.com" className="p-2 fs-3 text-black">
              <ImLinkedin />
            </a>
            <a href="www.google.com" className="p-2 fs-3 text-black">
              <ImFacebook2 />
            </a>
            <a href="www.google.com" className="p-2 fs-3 text-black">
              <ImInstagram />
            </a>
            <a href="www.google.com" className="p-2 fs-3 text-black">
              <ImYoutube />
            </a>
          </div>
        </div>
        <div className="row">
          <p className="text-white text-center">
            Copyright©2022 - ThrowMe Inc. All right reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
