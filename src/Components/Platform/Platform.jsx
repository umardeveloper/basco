import React, { useState } from "react";
import "..//main.scss";
import "./_platform.scss";
import img1 from "../../Assets/images/platformImg-1.png";
import img2 from "../../Assets/images/platformImg-2.png";
import img3 from "../../Assets/images/platformImg-3.png";
import play from "../../Assets/images/platformImg-4.png";
import star from "../../Assets/images/star (1).png";
import plus from "../../Assets/images/plus (1).png";
import sariq from "../../Assets/images/adviceImg-3.png";
import halqa from "../../Assets/images/adviceImg-1.png";
import { Fade } from "react-reveal";
import Modal from "../../UI/Modal/Modal";
function Platform() {
  const [shower, setShower] = useState(false);
  const [showerModal, setShowerModal] = useState(false);
  const url = (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/94BvSTTEWfk"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
  return (
    <section className="platform ">
      <div className="platform__left">
        <h2 className="platform__left--title">
          Танишинг! Basco ERP <br /> платформаси
        </h2>
        <p className="platform__left--parag--1">
          (Еҳтиёт бўлинг! Бу платформа бизнесингизни бутунлайга ўзгартириб
          юбориши мумкин!)
          <br />
          <br />
        </p>
        <br />
        <p className="platform__left--parag--2">
          Ҳа, сиз тўғри ўқидингиз…
          <br />
          <br />
        </p>
        <p className="platform__left--parag--3">
          Basco ERP платформасини компаниянгизга жорий қилганингизда ҳеч нарса
          аввалгидек бўлмайди. Самарадорлик ошади, харажатлар камаяди ва
          компаниянгиз рақобат- чиларингизни ҳайрон қолдиришни бошлайди.
          <br />
          <br />
        </p>
        <p className="platform__left--parag--4">
          Basco ERP платформаси компаниянгиздаги муҳим фундаментал жараёнларни
          самарали бошқариш ва автоматлаштириш имкониятини беради.
        </p>
        {shower ? (
          <Fade top>
            <div className="hides__parag">
              <p>
                <p className="platform__left--parag--4">
                  Бу билан еса ўша заҳотиёқ бизнесингиздаги операцион ва
                  молиявий ҳолатни яққол кўриш имкониятига ега бўласиз. Ҳолатни
                  аниқ кўра олиш еса тўғри ва тезкор қарорларни қабул
                  қилишингизга ёрдам беради. <br /> <br />
                </p>
                <p className="platform__left--parag--4">
                  Бу орқали ўз-ўзидан молиявий ҳолатингизни ва
                  самарадорлигингизни бир неча бараварга оширишингиз мумкин
                  дегани.
                  <br /> <br />
                </p>
                <p className="platform__left--parag--4">
                  Ягона тизим орқали бизнесингиздаги бутун бошли мижозлар билан
                  муносабатлар, савдо жараёнлари, ходимлар билан боғлиқ барча
                  маълумотлар, компаниянинг барча турдаги ҳисоб-китобларидан
                  тортиб… <br /> <br />
                </p>
                <p className="platform__left--parag--4">
                  Складдаги тайёр маҳсулотлар ҳаракатигача бўлган аниқ
                  маълумотларни назорат қилишингиз ва бошқаришингиз мумкин
                  бўлади.
                  <br /> <br />
                </p>
                <p className="platform__left--parag--4">
                  Маълумотларнинг аниқлиги сабаб сиз тез ва тўғри қарорларни
                  қабул қилиш имкониятига ега бўласиз. <br />
                </p>
                <p className="platform__left--parag--4">
                  Вақтингизни бизнесингизга тўғридан-тўғри фойда олиб
                  келмайдиган ишларга сарфлашдан тўхтаб… <br /> <br />
                </p>
                <p className="platform__left--parag--4">
                  Банк ҳисоб-рақамингизда, ҳақиқатда, ижобий ўзгариш қиладиган
                  ва компаниянгизнинг бозордаги улушини оширадиган муҳим ишларга
                  диққат қила бошлайсиз.
                  <br /> <br />
                </p>
                <p className="platform__left--parag--4">
                  Хўш, қандай қилиб ушбу имкониятга ега бўлишингиз мумкин?
                  <br />
                  <br />
                </p>
                <p className="platform__left--parag--4">
                  Шунчаки, қуйидаги ҳавола орқали маълумотларингизни қолдиринг.
                  <br />
                </p>
                {shower ? (
                  <div className="platform__left--more--button">
                    <button>
                      {shower ? " Mутахассис билан боғланиш" : "Давомини yқиш "}
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </p>
            </div>
          </Fade>
        ) : (
          ""
        )}
        {shower ? (
          ""
        ) : (
          <div className="platform__left--more--button">
            <button onClick={() => setShower(!shower)}>
              {shower ? "Ёпиш" : "Давомини yқиш "}
            </button>
          </div>
        )}
        <img className="platform__left--img--1" src={star} alt="" />
        <img className="platform__left--img--2" src={plus} alt="" />
      </div>
      <div className="platform__right">
        <img className="platform__right--img--1" src={img1} alt="" />
        <img className="platform__right--img--2" src={img2} alt="" />
        <img className="platform__right--img--3" src={img3} alt="" />
        <img className="platform__right--img--4" src={star} alt="" />
        <img className="platform__right--img--5" src={plus} alt="" />
        <img className="platform__right--img--6" src={halqa} alt="" />
        <img className="platform__right--img--7" src={sariq} alt="" />
        <div className="platform__right--button">
          <p onClick={() => setShowerModal(!showerModal)}>Видеони кўриш</p>
          <img src={play} alt="" />
        </div>
      </div>

      {showerModal ? (
        <div className="platform__modal">
          <Modal shower={showerModal} setShower={setShowerModal} url={url} />
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default Platform;
