import { Css } from "../design/Css";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
const tillar = [
  { name: "English", flag: "/image/usa.png" },
  { name: "Russian", flag: "/image/russia.png" },
  { name: "Uzbek", flag: "/image/uzbekistan.png" },
];
const Header = () => {
  const [tanlangan, setTanlangan] = useState("English");
  return (
    <>
      <Css>
        <div className="container">
          <div className="first">
            <div className="first_lead_agent">
              <img src="/image/Group_1000003651.png" alt="" />
              <p className="first_lead_tripusk">
                Tripusk <span>agent</span>
              </p>
            </div>
            <div className="first_lead">
              <p className="first_lead_text">Контакты</p>
              <p className="first_lead_text">О компании</p>

              <h3>
                <div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <img
                        src={
                          tillar.find((item) => item.name === tanlangan).flag
                        }
                        alt="Flag"
                        className="flag-icon"
                      />
                      {tanlangan}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {tillar.map((til) => (
                        <Dropdown.Item
                          key={til.name}
                          onClick={() => setTanlangan(til.name)}
                        >
                          <img
                            src={til.flag}
                            alt="Flag"
                            className="flag-icon"
                          />
                          <span>{til.name}</span>
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </h3>
            </div>
          </div>
          <div className="second">
            <hr />
          </div>
          <div className="third">
            <div className="third_text">
              <p className="third_text_gla">Главная</p>
              <p className="third_text_zay">Мои заявки</p>
            </div>
            <div className="third_Good">
              <div className="third_Good_text">
                <img src="/image/Type=Default, Component=Avatar.png" alt="" />
                <div className="Andrew">
                  <p>Good morning! 🌤️</p>
                  <h4>Andrew Ainsley</h4>
                </div>
              </div>

              <div className="third_Good_img">
                <img src="/image/Frame.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Css>
    </>
  );
};

export default Header;
