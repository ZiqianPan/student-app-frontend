import React from "react";
import "./StudentCard.scss";

export default function StudentCard({ student }) {
  const { pic, firstName, lastName, email, company, skill, grades } = student;
  //function that calculates avg
  const calculateAvg = (grades) => {
    return grades.reduce((sum, val) => sum + Number(val), 0) / grades.length;
  };

  return (
    <div className="studentCard">
      <div className="studentCard__profilePic">
        <img src={pic} />
      </div>

      <div className="studentCard__info">
        <div className="studentCard__name">{`${firstName} ${lastName}`}</div>
        <div className="studentCard__infoLine" >Email:{email}</div>
        <div className="studentCard__infoLine">Company:{company}</div>
        <div className="studentCard__infoLine">Skill:{skill}</div>
        <div className="studentCard__infoLine">average: {calculateAvg(grades)}%</div>
      </div>
    </div>
  );
}
