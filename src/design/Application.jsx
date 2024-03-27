import React from "react";
import { Css } from "../design/Css";
import { LuPlaneTakeoff } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { FaChild } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { GiCarSeat } from "react-icons/gi";
import { RiHotelLine } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";
import { PiAirplaneLandingLight } from "react-icons/pi";

const Application = () => {
  return (
    <>
      <Css>
        <div className="order_background">
          <div className="order">
            <h5>Подать заявку</h5>
            <div className="select_div">
              <div className="button_on">
                <h6>Откуда</h6>

                <button className="button_volvo">
                  <div className="volvo_on">
                    <LuPlaneTakeoff className="LuPlaneTakeoff" />
                    Ташкент
                  </div>
                  <img src="/image/Book-arrow-down.svg.png" alt="" />
                </button>
              </div>
              <div className="button_one">
                <h6>Куда</h6>
                <button className="button_stap">
                  <div className="volvo">
                    <PiAirplaneLandingLight className="piAirplaneLandingLight" />
                    Вьетнам
                  </div>
                  <img src="/image/Book-arrow-down.svg.png" alt="" />
                </button>
              </div>
            </div>
            <div className="select_div">
              <div className="button_ont">
                <h6>Взрослых</h6>
                <button className="icon">
                  <LuUsers className="luUsers" />3
                </button>
              </div>
              <div className="button_ont">
                <h6>Детей</h6>
                <button className="icon">
                  <FaChild className="faChild" />0
                </button>
              </div>
            </div>
            <div className="select_div">
              <div className="button_ont">
                <h6>Дата вылета и кол-во дней</h6>
                <button className="icon">
                  <LuCalendarDays className="luCalendarDays" />
                  29.01.2024 2-7 дн.
                </button>
              </div>
              <div className="button_ont">
                <h6>Класс самолета</h6>
                <button className="icon">
                  <div className="volvo_to">
                    <GiCarSeat className="giCarSeat" />
                    выберите
                  </div>
                  <img src="/image/Book-arrow-down.svg.png" alt="" />
                </button>
              </div>
            </div>
            <div className="select_div">
              <div className="button_ont">
                <h6>Рейтинг отелей</h6>
                <button className="icon">
                  <div className="volvo_to">
                    <RiHotelLine className="riHotelLine" />
                    выберите
                  </div>
                  <img src="/image/Book-arrow-down.svg.png" alt="" />
                </button>
              </div>
              <div className="button_ont">
                <h6>Тип питания</h6>
                <button className="icon">
                  <div className="volvo_to">
                    <IoFastFoodOutline className="ioFastFoodOutline" />
                    выберите
                  </div>
                  <img src="/image/Book-arrow-down.svg.png" alt="" />
                </button>
              </div>
            </div>
            <div className="write">
              <h6>Напишите ваш бюджет</h6>
              <div className="write_step">
                <div className="write_step_div">
                  <LuWallet className="luWallet" />
                  до 15 000 000 сум{" "}
                </div>
                <button>Жду преложений</button>
              </div>
            </div>
            <div className="information">
              <h6>Дополнительная информация</h6>
              <div className="information_text">
                Напишите дополнительную которые нужно учесть.
                <br /> Например:
                <br /> Отел должен быть рядом с пляжем
              </div>
            </div>
            <button className="submet">Отправить заявку</button>
          </div>
        </div>
      </Css>
    </>
  );
};
export default Application;
