import React, { useState, useRef } from "react";
import "./_advice.scss";
import "../main.scss";
import star from "../../Assets/images/star (1).png";
import plus from "../../Assets/images/plus (1).png";
// import aylana from "../../Assets/images/aboutImg-1.png";
import halqa from "../../Assets/images/adviceImg-1.png";
import uchburchak from "../../Assets/images/adviceImg-2.png";
import sariq from "../../Assets/images/adviceImg-3.png";
import person from "../../Assets/images/person.png";
import { Fade } from "react-reveal";
function Advice() {
  const [shower, setShower] = useState(false);
  const btn = useRef();
  console.log(btn);
  const btnFunction = () => {
    setShower(!shower);
  };
  return (
    <div className='advice__box'>
      <section className='advice '>
        <div className='advice__left'>
          <h2 className='advice__left--title'>
            Қандай қилиб самарадорликни <br /> бир неча бараварга ошириб, <br />
            харажатларни қисқартириш мумкин?
          </h2>
          <p className='advice__left--parag--1'>
            Сиз бизнесингизда сарфлаётган вақтингизни ҳеч тўлиқ таҳлил қилиб
            чиққанмисиз? <br /> <br />
          </p>
          <p className='advice__left--parag--2'>
            Aгар ўзингиз ва ходимларингиздаги самарадорликдан кўнглингиз
            тўлмаётган <br /> бўлса…
          </p>
          <br />
          <p className='advice__left--parag--3'>
            Юқори еҳтимол билан сиз асосий вақтингизни бизнесингиздаги доимий
            равишда бажариладиган кичик, лекин мураккаб ишларга сарфлаяпсиз.{" "}
            <br /> <br />
          </p>
          <p className='advice__left--parag--4'>
            Бу еса доимий равишда сизнинг энергиянгиз ва вақтингизни ҳавога
            совуриб, ҳеч қандай ижобий ўзгариш олиб келмайди.
          </p>
          <br />
          {shower ? (
            ""
          ) : (
            <div className='advice__left--button'>
              <button onClick={() => btnFunction()}>
                {shower ? "Yopish" : "Давомини yқиш "}
              </button>
            </div>
          )}
          <img className='advice__left--img--1' src={star} alt='' />
          <img className='advice__left--img--2' src={plus} alt='' />
          {shower ? (
            <Fade top>
              <div className='hide__parag'>
                <p>
                  Бу худди терлаб, қаттиқ югуриб ҳам жойидан силжимасликка
                  ўхшайди. Лекин… Сиз бу муаммони биргина уникал ечим орқали ҳал
                  қилиш мумкинлигини биласизми?
                  <b>
                    {" "}
                    <br />
                    <br /> Ундай бўлса, сизга янгилигимиз бор!{" "}
                  </b>{" "}
                  <br />
                  <br />
                  Сиз, биргина, бизнесингиз жараёнларини автоматлаштириш орқали
                  бу муаммоларни осон бартараф етишингиз мумкин. Бунда сизга енг
                  тез ривожланиб ўсиб бораётган компанияларнинг сири бўлган
                  бизнесни автоматлаштириш дастури ёрдам беради.
                  <br /> <br />
                  ERP (Enterprise Resource Planning) дастурлари бугунги кунда
                  дунёнинг етакчи ишлаб чиқариш, савдо ва хизмат кўрсатиш
                  компаниялари томонидан фойдаланиладиган тизим ҳисобланади.
                  <br /> <br /> Бу тизимни сиз бизнесингизда ўрнатганингизда…
                  Жараёнларда янги “портлаш”га гувоҳ бўласиз. Рост. Самарадорлик
                  бир неча бараварга ошганини гувоҳи бўласиз. Харажатларингизни
                  кўпайтирмасдан туриб, даромадингизни бир неча бараварга ошира
                  оласиз.
                  <br /> <br /> Рақобатчиларингиз сизни ўзлари учун янгидан кашф
                  қилишади. Бозорда сизга ўхшаган кучли, хавфли ўйинчи пайдо
                  бўлганига амин бўлишади. Мамнун мижозларингиз сони ошиб, қисқа
                  муддат ичида бозорни егаллаб олишингиз ҳам мумкин бўлади. Ва
                  ўзингиз учун янги бозорларни ва имкониятларни очишингиз мумкин
                  бўлади.
                </p>
                {shower ? (
                  <div id='btn' className='advice__left--button'>
                    <button ref={btn}>
                      {shower ? "Имконият билан танишиш" : "Давомини yқиш "}
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Fade>
          ) : (
            ""
          )}
        </div>
        <div className='advice__right'>
          <img className='advice__right--img' src={person} alt='' />
          <div className='advice__right--card'>
            <div className='advice__right--card--left'>
              <h4 className='advice__right--card--left--title'>
                Сўнгги бир ойда
              </h4>
              <h2 className='advice__right--card--left--number'>29%</h2>
              <p className='advice__right--card--left--description'>
                Харажатлар
              </p>
            </div>
            <div className='advice__right--card--right'>
              <h2 className='advice__right--card--right--number'>+35</h2>
              <p className='advice__right--card--right--description'>
                Самарадорлик
              </p>
            </div>
            <img
              className='advice__right--card--img--1'
              src={uchburchak}
              alt=''
            />
            <img className='advice__right--card--img--2' src={sariq} alt='' />
          </div>
          <img className='advice__right--img--1' src={halqa} alt='' />
          {/* <img className="advice__right--img--2" src={aylana} alt="" /> */}
        </div>
      </section>
    </div>
  );
}

export default Advice;
