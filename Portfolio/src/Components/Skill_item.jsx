import React from "react";

const Skill_item = ({ item }) => {
      return (
            <div className="skills_item">
                  <i className={`skills_item-icon ${item.icon}`}></i>
                  <span className="skills_item-title">{item.title}</span>
                  <ul className="skills_item-bottom">
                        <div className={`skills__bar ${item.range}`}></div>
                        {item.skills.map((skill, item) => {
                              return (
                                    <li className="skills_li" key={item}>
                                          {skill}
                                    </li>
                              );
                        })}
                  </ul>
            </div>
      );
};

export default Skill_item;
