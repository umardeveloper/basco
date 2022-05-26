import React from "react";
import ".././main.scss";
import "./_card.scss";
import sun1 from "../../Assets/images/sun 1.png";
function Card() {
  return (
    <div className='card__box'>
      <div className='card '>
        <div className='card__left'>
          <h2 className='card__left--title'>Статистик маълумот</h2>
          <p className='card__left--parag'>
            “Компаниялар осонгина автоматлаштирилиши <br /> мумкин бўлган
            топшириқ ва вазифаларга қимматли вақтларининг 23% қисмини ҳавога
            совуришади.”
          </p>
          <p className='card__left--author'>
            <a
              className='card__left--author'
              href='https://www.salesforce.com/form/conf/2017-connected-small-business-report/?leadcreated=true&redirect=true&chapter=&DriverCampaignId=7010M000001ybOqQAI&player=&FormCampaignId=7010M000001ybOMQAY&videoId=&playlistId=&mcloudHandlingInstructions=&landing_page=%2Fform%2Fpdf%2F2017-connected-small-business-report'>
              - Salesforce тадқиқоти
            </a>
          </p>
        </div>
        <div className='card__right'>
          <img src={sun1} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Card;
