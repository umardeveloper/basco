import React from "react";
import "./_statistica.scss";
import "../main.scss";
import chart1 from "../../Assets/images/adviceImg-4.png";
import chart2 from "../../Assets/images/adviceImg-5.png";
// import halqa from "../../Assets/images/adviceImg-1.png";
function Statistics() {
  return (
    <section className="statistica">
      <div className=" statistica__body">
        <div className="statistica__left">
          <img className="statistica__left--img--1" src={chart1} alt="" />
          <img className="statistica__left--img--2" src={chart2} alt="" />
        </div>
        <div className="statistica__right">
          <h2 className="statistica__right--title">
            Бизнесни автоматлаштириш ўзи <br /> сизга нима беради?
          </h2>
          <p className="statistica__right--parag">
            Бизнесингизни қисқа муддатда ривожланиб, янги бозорларга жадаллик
            билан кириб бориши учун бундан яхши йечимни топа олмайсиз!
          </p>
          <div className="statistica__right--item statistica__right--item--1 ">
            <div className="statistica__right--item--left">
              <h2>1</h2>
            </div>
            <div className="statistica__right--item--right">
              <b>Зарурий жараёнлар автоматлашади</b>
              <p>
                ERP дастурлари сиз доимий равишда бажариб юрган мураккаб
                жараёнларни содда, осон ва аниқ стратегик бошқаришга ёрдам
                беради.
              </p>
            </div>
          </div>
          <div className="statistica__right--item statistica__right--item--2  ajrat">
            <div className="statistica__right--item--left">
              <h2>2</h2>
            </div>
            <div className="statistica__right--item--right">
              <b>Харажатларни камайтиради</b>
              <p>
                Бунга ўзингиз ҳам ишонмаган бўлардингиз. Aвтоматлаштириш орқали
                операцион харажатларингиз камаяди. Камроқ ишчи кучи ва ресурс
                билан кўпроқ вазифаларни амалга оширасиз.
              </p>
            </div>
          </div>
          <div className="statistica__right--item statistica__right--item--3 ">
            <div className="statistica__right--item--left">
              <h2>3</h2>
            </div>
            <div className="statistica__right--item--right">
              <b>Самарадорликни ошириш</b>
              <p>
                Инсон қўли билан бажариладиган доимий вазифалар йиғилиб бориб
                жуда ҳам кўп вақтин-гизни олади. Aвтоматлаштириш орқали маълумот
                алмашинуви тез амалга оширилади ва ходимларингиз самарадорлиги
                ошади.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
