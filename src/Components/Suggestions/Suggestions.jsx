import "./_suggestions.scss";
import "../main.scss";
import blog1 from "../../Assets/images/blog11.jpg";
import blog2 from "../../Assets/images/blog12.jpg";
import blog3 from "../../Assets/images/blog13.jpg";
import video1 from "../../Assets/images/video1.jpg";
import video2 from "../../Assets/images/video2.jpg";
import video3 from "../../Assets/images/video3.jpg";
import book from "../../Assets/images/basco-book1-_5.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../../UI/Modal/Modal";

const Suggestions = () => {
  const url3 = (
    <iframe
      width='560'
      height='315'
      src='https://www.youtube.com/embed/HWSP8oZaEjw'
      title='YouTube video player'
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen></iframe>
  );
  const url2 = (
    <iframe
      width='560'
      height='315'
      src='https://www.youtube.com/embed/4aRMt7tGwyE'
      title='YouTube video player'
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen></iframe>
  );
  const url1 = (
    <iframe
      width='560'
      height='315'
      src='https://www.youtube.com/embed/0e7yWIryWGQ'
      title='YouTube video player'
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen></iframe>
  );
  const [clicked, setClicked] = useState(1);
  const [clickVideo1, setClickVideo1] = useState(false);
  const [clickVideo2, setClickVideo2] = useState(false);
  const [clickVideo3, setClickVideo3] = useState(false);
  return (
    <div className='suggestions__box'>
      <section className='suggestions'>
        <div className=' '>
          <div className='suggestions-top'>
            <ul className='suggestions-top__list'>
              <li className='suggestions-top__item'>
                <button
                  onClick={() => setClicked(1)}
                  className={
                    clicked === 1
                      ? "suggestions-top__btn suggestions-top__btn--active"
                      : "suggestions-top__btn"
                  }>
                  Блог
                </button>
                <button
                  onClick={() => setClicked(2)}
                  className={
                    clicked === 2
                      ? "suggestions-top__btn suggestions-top__btn--active"
                      : "suggestions-top__btn"
                  }>
                  Бепул йўриқнома
                </button>
                <button
                  onClick={() => setClicked(3)}
                  className={
                    clicked === 3
                      ? "suggestions-top__btn suggestions-top__btn--active"
                      : "suggestions-top__btn"
                  }>
                  Видео
                </button>
              </li>
            </ul>
          </div>
          <div className='suggestions-middle'>
            {clicked === 1 ? (
              <ul className='suggestions-middle__list'>
                <li className='suggestions-middle__item'>
                  <div className='suggestions-middle__card'>
                    <div className='suggestions-middle-card__box'>
                      <img
                        src={blog1}
                        alt='trade'
                        className='suggestions-middle-card__img'
                      />
                    </div>
                    <div className='card__body'>
                      <p className='suggestions-middle-card__subject'>
                        Бунга ишонмаган бўлардингиз
                      </p>

                      <NavLink
                        to='/blog1'
                        style={{ textDecoration: "none" }}
                        className='suggestions-middle-card__text   '>
                        Биргина автоматлаштириш орқали бизнесингиз
                        самарадорлигини 23% га ошириб, харажатларингизни 29% га
                        қисқартириши мумкин екан.
                      </NavLink>
                    </div>
                  </div>
                </li>
                <li className='suggestions-middle__item'>
                  <div className='suggestions-middle__card'>
                    <div className='suggestions-middle-card__box'>
                      <img
                        src={blog3}
                        alt='trade'
                        className='suggestions-middle-card__img'
                      />
                      
                    </div>

                    <div className='card__body'>
                      <p className='suggestions-middle-card__subject'>
                        ERP платформаси ҳақида
                      </p>
                      <NavLink
                        to='/blog2'
                        style={{ textDecoration: "none" }}
                        className='suggestions-middle-card__text suggestions-middle-card__text--2'>
                        Сиз енг тез ривожланиб бораётган ишлаб чиқариш
                        компанияларнинг сирини фош қилдингиз! Бу - ERP
                        платформаси.
                      </NavLink>
                    </div>
                  </div>
                </li>
                <li className='suggestions-middle__item'>
                  <div className='suggestions-middle__card'>
                    <div className='suggestions-middle-card__box'>
                      <img
                        src={blog2}
                        alt='trade'
                        className='suggestions-middle-card__img'
                      />
                    </div>
                    <div className='card__body'>
                      <p className='suggestions-middle-card__subject '>
                        BASCO ERP платформаси
                      </p>
                      <NavLink
                        to='/blog3'
                        style={{ textDecoration: "none" }}
                        className='suggestions-middle-card__text suggestions-middle-card__text--3'>
                        Basco ERP платформасини компаниянгизга жорий
                        қилганингизда ҳеч нарса аввалгидек бўлмайди..
                      </NavLink>
                    </div>
                  </div>
                </li>
              </ul>
            ) : (
              ""
            )}
            {clicked === 2 ? (
              <div className='book'>
                <img src={book} alt='trade' className='book__img' />

                <div className='book__body'>
                  <NavLink
                    to='/blog1'
                    style={{ textDecoration: "none" }}
                    className='book__link'>
                    Бепул йўриқнома
                  </NavLink>

                  <p className=' book__parag'>
                    Ишлаб чиқариш бизнесингизни кейинги 20 кун ичида тўлиқ
                    автоматлаштиринг.Бу орқали бизнесингиз самарадорлиги 23% га
                    ошиб, харажатларингиз 29% га қисқариши мумкин
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            {clicked === 3 ? (
              <ul className='suggestions-middle__list'>
                <li className='suggestions-middle__item'>
                  <div className='suggestions-middle__card'>
                    <div className='suggestions-middle-card__box'>
                      <img
                        src={video1}
                        alt='trade'
                        className='suggestions-middle-card__img'
                      />
                    </div>
                    <h2
                      style={{ cursor: "pointer" }}
                      onClick={() => setClickVideo1(!clickVideo1)}
                      className='suggestions-middle-card__subject  qora__link'>
                      "BASCO" компанияси "BIG DATA" билан хамкорликда семинар
                      жараёнлари
                    </h2>
                  </div>
                </li>
                <li className='suggestions-middle__item'>
                  <div className='suggestions-middle__card'>
                    <div className='suggestions-middle-card__box'>
                      <img
                        src={video2}
                        alt='trade'
                        className='suggestions-middle-card__img'
                      />
                    </div>
                    <h2
                      style={{ cursor: "pointer" }}
                      onClick={() => setClickVideo2(!clickVideo2)}
                      className='suggestions-middle-card__subject qora__link'>
                      Кўп вақт оладиган ва тахминий ҳисоб-китоблардан
                      чарчадингизми?
                    </h2>
                  </div>
                </li>
                <li className='suggestions-middle__item'>
                  <div className='suggestions-middle__card'>
                    <div className='suggestions-middle-card__box'>
                      <img
                        src={video3}
                        alt='trade'
                        className='suggestions-middle-card__img'
                      />
                    </div>
                    <h2
                      style={{ cursor: "pointer" }}
                      onClick={() => setClickVideo3(!clickVideo3)}
                      className='suggestions-middle-card__subject qora__link'>
                      Бизнесингиздаги муаммоларга ечим қидириб чарчадингизми?
                    </h2>
                  </div>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
        {clickVideo1 ? (
          <Modal shower={clickVideo1} setShower={setClickVideo1} url={url3} />
        ) : (
          ""
        )}
        {clickVideo2 ? (
          <Modal shower={clickVideo2} setShower={setClickVideo2} url={url2} />
        ) : (
          ""
        )}
        {clickVideo3 ? (
          <Modal shower={clickVideo3} setShower={setClickVideo3} url={url1} />
        ) : (
          ""
        )}
      </section>
    </div>
  );
};

export default Suggestions;
