import React from "react";
import academlo from "../assets/Academlo.png";
import ups from "../assets/ups.png";

const Education = () => {
      const education = [
            {
                  name: "Academlo",
                  title: "Fullstack Developer",
                  icon: academlo,
            },
            {
                  name: "Universidad Politecnica Salesiana",
                  title: "Ingeniero Electronico",
                  icon: ups,
            },
      ];
      return (
            <div className="topic">
                  {education.map((item, index) => {
                        return (
                              <div className="education_card" key={index}>
                                    <h4>{item.title}</h4>
                                    <span>{item.name}</span>
                                    <img src={item.icon} alt="" className="education_img" />
                              </div>
                        );
                  })}
            </div>
      );
};

export default Education;
