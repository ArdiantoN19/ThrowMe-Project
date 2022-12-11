import React from "react";
import "./about.css";
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <div>
      <div className="row justify-content center align-items-center">
        <div className="col-10 col-md-5 col-lg-6">
          <img
            alt="About"
            src="/assets/img/Volunteering-amico.svg"
            className="img-fluid"
          />
        </div>
        <div className="col-10 col-md-5 col-lg-6">
          <h1 className="fs-2">
            About{" "}
            <span className="px-2 py-1 bg-success text-white rounded">
              ThrowMe{" "}
            </span>
          </h1>
          <p className="fs-5">
            Throw me adalah sebuah platform/website yang bertujuan membantu
            masyarakat untuk memberikan informasi mengenai titik lokasi yang
            dapat mendaur ulang atau mengolah kembali sampah atau benda-benda
            bekas menjadi barang atau produk baru yang memiliki nilai manfaat.
            Dan menyediakan informasi/tips yang dapat dilakukan untuk mengatasi
            masalah sampah secara mandiri.
          </p>
        </div>
      </div>

      <h1 className="team-header">
        OUR <span className="accent">TEAM</span>
      </h1>
      <div className="team-description"></div>
      <div className="team-list">
        <div className="team-member">
          <img
            src="/assets/img/Ardianto.jpeg"
            alt=""
            className="member-image"
          />
          <div className="member-desc">
            <div className="shadow right"></div>
            <h2 className="member-name">Ardianto Nugroho</h2>
            <p className="member-quote text-black">R314X0819</p>
            <p className="member-quote text-black">Front End Developer</p>
            <div className="d-inline fs-3">
              <a href=" https://github.com/ArdiantoN19">
                <AiFillGithub className="text-black" />
              </a>
              <a href="mailto:ardi19nugroho@gmail.com">
                <AiOutlineMail className="text-black" />
              </a>
              <a href="https://www.linkedin.com/in/ardianto-nugroho-004043244/">
                <AiFillLinkedin className="text-black" />
              </a>
            </div>
          </div>
        </div>
        <div className="team-member">
          <img src="/assets/img/fer.jpeg" alt="" className="member-image" />
          <div className="member-desc2">
            <h2 className="member-name">Ferdi Setyo Amanda</h2>
            <p className="member-quote">R124X0198</p>
            <p className="member-quote text-black">Front End Developer</p>
            <div className="d-inline fs-3">
              <a href="https://github.com/ferdisetyoamanda">
                <AiFillGithub className="text-black" />
              </a>
              <a href="mailto: setyoamanda23@gmail.com">
                <AiOutlineMail className="text-black" />
              </a>
              <a href="https://www.linkedin.com/in/ferdisetyoamanda">
                <AiFillLinkedin className="text-black" />
              </a>
            </div>
          </div>
        </div>
        <div className="team-member">
          <img src="/assets/img/reziq.png" alt="" className="member-image" />
          <div className="member-desc2">
            <h2 className="member-name">M. Reziq Darusman</h2>
            <p className="member-quote">R124X0202</p>
            <p className="member-quote text-black">Front End Developer</p>
            <div className="d-inline fs-3">
              <a href="https://github.com/reziqvins">
                <AiFillGithub className="text-black" />
              </a>
              <a href="mailto:nreziq@gmail.com">
                <AiOutlineMail className="text-black" />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-reziq-darusman-06a352137/">
                <AiFillLinkedin className="text-black" />
              </a>
            </div>
          </div>
        </div>
        <div className="team-member">
          <img src="/assets/img/saya.jpeg" alt="" className="member-image" />
          <div className="member-desc">
            <h2 className="member-name">Devi Harumia</h2>
            <p className="member-quote text-black">R190Y0366</p>
            <p className="member-quote text-black">Front End Developer</p>
            <div className="d-inline fs-3">
              <a href="https://github.com/DeviHarumia">
                <AiFillGithub className="text-black" />
              </a>
              <a href="mailto: deviharumia16@gmail.com">
                <AiOutlineMail className="text-black" />
              </a>
              <a href="https://www.linkedin.com/in/deviharumia27">
                <AiFillLinkedin className="text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
