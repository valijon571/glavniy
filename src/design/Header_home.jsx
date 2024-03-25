import React from "react";
import { Header_homeStyle } from "./Header_homeStyle";
import Header from "./Header";
import Application from "./Application";
import Footer from "./Footer";

const Header_home = () => {
  return (
    <>
      <Header />
      <Header_homeStyle>
        <div className="header_home">
          <div className="header_home_find">
            <h1>
              100+ Турагентов
              <br /> готовы подобрать
              <br /> лучший тур
            </h1>
            <img src="/image/find-your-travel-rout.png" alt="" />
          </div>
          <div className="cards">
            <p className="cards_text">Как это работает ?</p>
            <div className="cards_card">
              <div className="card">
                <img src="/image/travel-budget-plan.png" alt="" />
                <h5>Отправляй заявку и оплати</h5>
                <p className="card_nae">
                  Отправляй заявку онлайн и экономь
                  <br /> время и деньги
                </p>
              </div>
              <div className="card">
                <img src="/image/global-travel.png" alt="" />
                <h5>Получи лучшее предложение</h5>
                <p className="card_nae">
                  и компенсация до 150 000 ₽ на кафе
                  <br /> и рестораны в аэропортах
                </p>
              </div>{" "}
              <div className="card">
                <img src="/image/mobile-ticket.png" alt="" />
                <h5>Получай скидки и безопасно</h5>
                <p className="card_nae">
                  Онлайн оформляй безлопастную <br />
                  сделку и получай бонусы
                </p>
              </div>
            </div>
          </div>
          <Application />
          <Footer />
        </div>
      </Header_homeStyle>
    </>
  );
};

export default Header_home;
