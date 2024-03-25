import React from "react";
import { Css } from "../design/Css";

const Header = () => {
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
              <img src="/image/twemoji_flag-for-flag-germany.png" alt="" />
              <h3>Uz</h3>
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
