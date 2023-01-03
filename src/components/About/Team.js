import React from "react";
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { DataTeam } from "../../utils/DataTeam";

const Team = () => {
  const DataTeams = DataTeam();

  return (
    <>
      <h1 className="text-center mb-5 mt-5">Meet the Team</h1>
      <div className="row justify-content-center align-items-center">
        {DataTeams.map((data) => (
          <div
            className="col-9 col-md-5 col-lg-4 col-xl-3 mb-3 team"
            key={data.id}
          >
            <img
              className="img-fluid shadow-sm rounded-3 mb-3"
              src={data.avatar}
              alt={data.id_name}
            />
            <div className="d-flex justify-content-between align-items-center">
              <h4>{data.name}</h4>
              <div>
                <a
                  href={data.social.github}
                  rel="noreferrer"
                  target="_blank"
                  className="text-black fs-2 me-1 opacity"
                >
                  <AiFillGithub />
                </a>
                <a
                  href={data.social.mail}
                  rel="noreferrer"
                  target="_blank"
                  className="text-danger opacity fs-2 me-1"
                >
                  <AiOutlineMail />
                </a>
                <a
                  href={data.social.linkedIn}
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary fs-2 opacity me-1"
                >
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
            <div className="mb-3">
              <span className="bg-success px-2 py-1 rounded-pill text-white">
                {data.id_name}
              </span>
            </div>
            <p style={{ fontSize: "1.1em" }}>{data.job}</p>
            <p className="text-start text-muted">{data.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
