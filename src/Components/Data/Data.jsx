import Accordion from "../Accordion/Accordion";
import './Data.scss'

function Data() {

  return (
    
        <div className="container">
          <h1 className="accordion__name">Энг кўп сўраладиган саволлар</h1>
          <Accordion className={"faq"} faqs={faqArray}/> 
        </div>
  );
}

const faqArray = [
  {
    question: "BASCO қандай компания?",
    answer: "Бизнесингиздаги барча ҳисоб-китобларингизни ва иш жараёнларингизни автоматлаштириб берувчи инновацион компания"
  },
  {
    question: "Бизнесни автоматлаштириш нима?",
    answer: "Бизнесни автоматлаштириш бу - сиз доимий равишда бажариб юрган мураккаб жараёнларни дастур ёрдамида содда, осон, аниқ стратегик шаклда бажариш."
  },
  {
    question: "Дистрибуторларга автоматлаштириш тўғри келадими?",
    answer: "Aлбатта тўгри келади."
  },
  {
    question: "Бизнесни автоматлаштириш учун қанча вақт кетади?",
    answer: "Бизнесингиз ҳажмидан келиб чиқиб ўртача 15 кундан 20 куингача вақт кетади."
  },
]

export default Data;