import React from "react";
import { Css } from "../design/Css";

const Footer = () => {
  return (
    <>
      <Css>
        {/* <div className="container"> */}
        <div className="footer">
          <h6>
            Операторы гарантируют
            <br /> безопасность
          </h6>
          <p className="footer_text">
            Мы работаем только с крупными туроператорами и компания FUN&SUN
            выступает
            <br /> гарантом безопасной сделки
          </p>
          <div className="footer_list">
            <div className="list_on">
              <img src="/image/Item.png" alt="" />
              <img src="/image/Itema.png" alt="" />
              <img src="/image/Items.png" alt="" />
              <img src="/image/Itemd.png" alt="" />
              <img src="/image/Itemf.png" alt="" />
            </div>
            <div className="list_one">
              <img src="/image/Itemg.png" alt="" />
              <img src="/image/Itemh.png" alt="" />
              <img src="/image/Itemk.png" alt="" />
              <img src="/image/Iteml.png" alt="" />
              <img src="/image/Itemn.png" alt="" />
            </div>
          </div>
        </div>
        {/* </div> */}
      </Css>
    </>
  );
};
export default Footer;
