import React, { useState } from "react";
import "./about.scss";
import ".././main.scss";
import plus from "../../Assets/images/plus (1).png";
import aylana from "../../Assets/images/aboutImg-1.png";
import refresh from "../../Assets/images/headImg-1.png";
import star from "../../Assets/images/star (1).png";
import { Fade } from "react-reveal";
function About() {
  const [shower, setShower] = useState(false);
  return (
    <div className='about__box'>
      <section className='about'>
        <h2 className='about__title'>Ҳурматли бизнес егаси...</h2>
        <div className='about__parag'>
          Бугун бизнесни бошқариш, уни янги босқичларга олиб чиқиш ҳар
          қачонгидан ҳам қийин вазифа ҳисобланади. <br />
          <br /> Ҳар бир бизнеснинг ўзига яраша жараёнлари, мақсадлари ва
          талаблари бўлади. Aгар бизнесда барча жараёнларни, мақсадларни ва
          ходимларни бирлаштирадиган ягона технология мавжуд бўлмаса, бугунги
          рақобатдош бозорга дош бериш ва ривожланиш мумкин бўлмай қолади.{" "}
          <br /> <br /> Aгар сизнинг бизнесингиз ҳам бир нечта бўлим-ларга ва
          катта жамоага ега бўлса… <br /> <br /> Сизга барча бизнес жараёнларини
          автоматлаштирадиган, ходимларингиз самарадорлигини оширадиган ва
          харажатларингизни бир неча бараварга қисқартирадиган ягона ечим керак.
        </div>
        {shower ? (
          <Fade top>
            <div className='about__parag'>
              <br />
              Aгар бундай технология бизнесингизда мавжуд бўлмаса, сиз бор
              вақтингизни бизнесингизнинг ривожланишига ҳеч қандай ҳисса
              қўшмайдиган мураккаб ва майда ишлар билан банд бўлиб қоласиз.
              <br />
              <br />
              Ходимларингизнинг самарадорлиги тушиб, мижозларингизнинг
              талабларини бажара олмайсиз.
              <br /> <br />
              Натижада, улар сизни емас, рақобатчиларингизни танлаб кетишади.
              Бозордаги улушингиз кескин камайиб, бизнесингиз қутқариб бўлмас
              жар ёқасига келиб қолади. <br />
              <br />
              Лекин, биз ҳозир бу хабарлар билан сизнинг кайфиятингизни
              туширмоқчи емасмиз. Биз сизнинг шундай муаммоларингизга йечим
              бермоқчимиз. <br /> <br /> Aгар бизнесингизнинг бугунги ва ертанги
              ҳолатига бефарқ бўлмасангиз… Ҳар бир сўзимизни диққат билан ўқишни
              маслаҳат берамиз. Ишонамизки, сарфлаган вақтингиз сиз учун энг
              манфаатлиси бўлади.
            </div>
          </Fade>
        ) : (
          ""
        )}
        <div className='about--button'>
          <button onClick={() => setShower(!shower)}>
            {shower ? "Ёпиш" : "Давомини yқиш "}
          </button>
        </div>

        <div className='about__images'>
          <img className='img--1' src={plus} alt='' />
          <img className='img--2' src={aylana} alt='' />
          <img className='img--3' src={refresh} alt='' />
          <img className='img--4' src={star} alt='' />
        </div>
      </section>
    </div>
  );
}

export default About;
