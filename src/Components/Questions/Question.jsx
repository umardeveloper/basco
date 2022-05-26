import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import "./_questions.scss";
import "../main.scss";
import React from "react"
import { Fade } from "react-reveal";
import PlusIcon from '../../Assets/images/plus (1).svg'

// import plus from '../../Assets/images/plus.png'
// import minus from '../../Assets/images/minus.png'


const Question = ({ title, info }) => {

  const [selected, setSelected] = React.useState(null);

  function toggler(i){
      if(selected === i){
          return setSelected(null)
      }

      setSelected(i)
  }
  const [showInfo, setShowInfo] = useState(false);
  // let iconStyles = {
  //   color: "black",
  //   fontSize: "2em",
  //   cursor: "pointer",
  //   outline: "none",
  //   objectFit: "cover",
  // };
  return (
    <article className="question">
      <div className="question__box">
        <h4 className="question__subject">{title}</h4>
        <button
          className="question__btn"
          onClick={() => setShowInfo(!showInfo)}
        >
         
          
          {/* {showInfo ?  */}
          {/* // (
          //   <AiOutlineMinusCircle  style={iconStyles} />
          //   <img src={minus} className="questions__plus" alt="plus" />
          // ) : 
          // (
          //   <AiOutlinePlusCircle style={iconStyles} />
          //   <img src={plus} className="questions__minus" alt="minus" />
          // ) */}
          {/* } */}
        </button>
      </div>
      {showInfo && (
        <Fade top>
          <p className="question__text">{info}</p>
        </Fade>
      )}
    </article>
  );
};

export default Question;
