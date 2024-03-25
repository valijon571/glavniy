import React from "react";
import { Css } from "../design/Css";

const Application = () => {
  return (
    <>
      <Css>
        <div className="order_background">
          <div className="order">
            <h5>Подать заявку</h5>
            <div className="select_div">
              <div className="select">
                <h6>Откуда</h6>
                <select name="" id="">
                  <option value="volvo">Ташкент</option>
                </select>
              </div>
              <div className="select">
                <h6>Куда</h6>
                <select name="" id="">
                  <option value="volvo">Вьетнам</option>
                </select>
              </div>
            </div>
            <div className="select_div">
              <div className="select">
                <h6>Взрослых</h6>
                <button>3</button>
              </div>
              <div className="select">
                <h6>Детей</h6>
                <button>0</button>
              </div>
            </div>
            <div className="select_div">
              <div className="select">
                <h6>Дата вылета и кол-во дней</h6>
                <button>29.01.2024 2-7 дн.</button>
              </div>
              <div className="select">
                <h6>Класс самолета</h6>
                <select name="" id="">
                  <option value="volvo">выберите</option>
                </select>
              </div>
            </div>
            <div className="select_div">
              <div className="select">
                <h6>Рейтинг отелей</h6>
                <select name="" id="">
                  <option value="volvo">выберите</option>
                </select>
              </div>
              <div className="select">
                <h6>Тип питания</h6>
                <select name="" id="">
                  <option value="volvo">выберите питание</option>
                </select>
              </div>
            </div>
            <div className="write">
              <h6>Напишите ваш бюджет</h6>
              <div className="write_step">
                <div>до 15 000 000 сум </div>
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
