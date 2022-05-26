import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AiOutlineRight } from "react-icons/ai";
import ".././main.scss";
import "./_directions.scss";
import trade from "../../Assets/images/icon-2.png";
import resource from "../../Assets/images/icon-3.png";
import house from "../../Assets/images/icon-6.png";
import star from "../../Assets/images/icon-8.png";
import setting from "../../Assets/images/icon-7.png";
import dizan from "../../Assets/images/magnifyingglass.png";
import kluch from "../../Assets/images/icon-1.png";
import money from "../../Assets/images/icon-5.png";
import persons from "../../Assets/images/persons.png";
import auto from "../../Assets/images/auto.png";
import maosh from "../../Assets/images/maosh.png";
import moliya from "../../Assets/images/moliya.png";
import sss from "../../Assets/images/sss.png";
import work from "../../Assets/images/work.png";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    height: "80vh",
    zIndex: "2000",
    padding: "3rem",
    owerflow: "hidden",
    outline: "none"
  },
  overlay: { zIndex: 5000 }
};
const bolim1Title = "Раҳбар бўлими";
const bolim2Title = "CРМ бўлими";
const bolim3Title = "Савдо бўлими";
const bolim4Title = "ҲР бўлими";
const bolim5Title = "Маош бўлими";
const bolim6Title = "Касса бўлими";
const bolim7Title = "Назорат бўлими";
const bolim8Title = "Склад бўлими";
const bolim9Title = "Таъминот бўлими";
const bolim10Title = "Турли шахслар бўлими";
const bolim11Title = "Aсосий воситалар бўлими";
const bolim12Title = "Ишлаб чиқариш бўлими";
const bolim13Title = "Бухгалтерия бўлими";
const bolim1Parag = (
  <p>
    Раҳбар учун барча имкониятлар бир жойда. Раҳбар сифатида сизнинг вақтингиз
    тежалади, самарадорлик ошади. <br /> <br /> Ундан ташқари раҳбар сифатида
    сиз компаниянгиз балансини тўлақонли кўра оласиз. <br />
    <br /> Дастурнинг ҳар бир бўлими ўзаро боғлиқ ҳолда ишлагани сабабли барча
    фойдаланувчилар маълумотларни ўз вақтида киритиб боришлари талаб етилади.
    Натижада ҳисоботлар тўғри ва аниқ юритилади. <br />
    <br /> Раҳбар сифатида ҳар бир бўлимда ишлар қандай кетаётганлигини тўлиқ
    кўра оласиз. Бу еса компаниянгиз жараёнларини таҳлил қилиш ва ривожлантириш
    имкониятини беради.
  </p>
);
const bolim2Parag = (
  <p>
    Мижозлар билан муносабатларни бошқаришни автоматлаштириш учун қулай ва
    оптимал ёндашув. <br />
    <br /> BASCO ЕRP платформасининг CРМ бўлими сотув менежерларингизга жуда ҳам
    ёққан бўларди. <br />
    <br /> Ундан ташқари, CРМ бўлими компаниянинг раҳбари, яъни, сиз ҳамда
    компания назоратчиси ва маркетинг бўлими учун фойдали ҳисобланади. <br />
    <br /> CРМ бўлимининг бир нечта муҳим имкониятлари қуйидагилар: <br />
    <br /> ●Компания раҳбари сифатида сиз ҳар бир сотувчининг унумдорлиги бўйича
    анализ қилиш ва қайси маҳсулот ва хизматга нисбатан талаб юқори еканлигини
    аниқлаш имкониятига ега бўласиз; <br /> ●Компания назоратчиси еса CРМ бўлими
    орқали сотув менежерлари кунлик режасининг тўлиқ назорат қилиш имконига ега
    бўлади;
    <br />
    ●Сотув менежерлари CРМ бўлими орқали кунлик режаларини тез, аниқ ва қулай
    автоматлаштиришлари мумкин бўлади. <br /> <br /> Бу бўлим ёрдамида мижозлар
    билан ишлаш самарадорлиги сезиларли даражада ўсади. <br /> <br /> Сотув
    менежерларингизнинг ҳам самарадорлиги ошиши натижасида сотувларингиз сонида
    ҳам сезиларли ўзгариш сезасиз.
  </p>
);
const bolim3Parag = (
  <p>
    Савдо жараёнлари бошқаруви, назорати ва анализи. <br />
    <br /> Савдо бўлимининг асосий вазифаси - маҳсулот ва хом-ашё сотишни
    автоматлаштириш. <br />
    <br /> Келинг, Савдо бўлимининг енг муҳим имкониятларидан бир нечтаси билан
    танишиб чиқамиз: <br />
    <br /> ●Мижозларга маҳсулот ва хом-ашё сотишни автоматлаштириб беради;
    <br />
    ●Мижозлар билан пул олди-бердиси акт сверкаларини осон кўриш; <br /> ●Ҳар
    бир менежер, фақатгина, ўзи масъул бўлган мижозларгагина маҳсулот сотиши ва
    тўловларни қабул қилиши мумкин; <br /> ●Ҳар бир менежер бўйича тушган савдо
    пуллари ҳақида батафсил маълумот. <br />
    <br /> Савдо бўлими орқали мижозлар билан ишлаш ҳамда маҳсулот ва
    хом-ашёнинг савдоси жараёнлари самарадорлиги сезиларди даражада ошади.
  </p>
);
const bolim4Parag = (
  <p>
    {" "}
    Керакли кадрлар ва барча ходимлар маълумотлари қўл остингизда! <br /> <br />{" "}
    Сизнинг ходимларингиз компаниянгиздаги енг қимматли ресурсингиз бўлганлиги
    сабабли, улар билан ишлаш самарадорлиги жуда ҳам муҳим. <br />
    <br /> BASCO ЕRP платформаси ҲР бўлимининг баъзи енг муҳим имкониятлари:{" "}
    <br />
    <br />
    ●Барча кадрларнинг електрон тўлдирилган анкеталар базасини тўғри ва тартибли
    сақлаш имконияти; <br /> ●Янги олинаётган кадрлар билан бўлган суҳбатларнинг
    тўлиқ музокарасини тушириш имконияти; <br /> ●Компанияда ишлаётган
    ходимларнинг тўлиқ базасини тез ва қулай кўриш имконияти; <br />
    <br /> ҲР бўлимининг барча имкониятлари сизга ходимларингиз билан ишлаш
    самарадорлигингиз сезиларли даражада ўсади.;
  </p>
);
const bolim5Parag = (
  <p>
    Ходимларингизга исталган турда маош ҳисоблаш мумкин (табел асосида, КПИ
    асосида, бонус шаклида, ишбай шаклда). <br />
    <br /> Aгар сизнинг жамоангиз йетарлича катта бўлса, уларнинг ишлаш сменаси,
    ишга келган вақти, олдиндан берилган авансларига қараб, маош бериш жараёни
    ҳам мураккаблашиб кетади. <br />
    <br /> BASCO ЕRP платформасининг Маош бўлими орқали еса сиз шу ва шу каби
    маош ҳисоблаш билан боғлиқ барча муаммоларни осон ҳал қилишингиз мумкин
    бўлади.
  </p>
);
const bolim6Parag = (
  <p>
    Компаниянинг барча турдаги пул маблағларининг аниқ ва ишончли юритилиши.
    <br />
    <br />
    Ушбу бўлим компания раҳбари, бухгалтерия ва касса бўлими учун зарурий
    йечимларни беради. <br />
    <br /> Дастурда исталганча микдорда кассаларни киритиш ва улар бўйича
    амалиётларни қилиш мумкин. Бу билан компаниянинг пули, айнан, қайерда
    турибди, қайси кассада қандай кирим-чиқимлар бўлаётганини аниқ билиб туриш
    мумкин. <br />
    <br /> Кассаларда исталганча турдаги валюталарни алоҳида-алоҳида тарзда
    ҳисобини юритиш мумкин. <br />
    <br /> Муҳим касса ҳужжатлари тасдиқлангандан сўнггина базадаги
    ҳисоб-китобларда акс етади. Тасдиқни еса фақат олдиндан белгиланган масъул
    шахсларгина қўя оладилар. <br />
    <br /> Натижада, масъул шахслар ҳар бир операцияни кўриб, хабардор бўлиб
    туришлари таъминланади.;
  </p>
);
const bolim7Parag = (
  <p>
    Корхона ички қонун-қоидалари ва тартиби назоратини ягона база орқали назорат
    қилиш имкониятини беради. <br />
    <br /> BASCO ЕRP платформасининг Назорат бўлими компания раҳбари ҳамда маош
    бўлими учун фойдали бўлади. <br />
    <br /> Назоратчи томонидан ҳар кунлик жарима, бонус ва рағбатлантришларни
    ўша куниёқ киритиб бориш ҳамда жарима, бонус ва рағбатлантиришларни кун,
    хафта, ой ва йиллар бўйича саралаш имкониятини беради. <br />
    <br /> Ундан ташқари, Назорат бўлими сотув менежерларини безовта қилмаган
    ҳолда, уларнинг мижоз билан музокараларини назорат қилиш имкониятини беради.
  </p>
);
const bolim8Parag = (
  <p>
    Склад бўлими савдо вақтида тайёр маҳсулотлар ҳаракати ва қолдиғини реал вақт
    режимида кўриб туриш имконияти. <br />
    <br /> Склад бўлими компания раҳбари, савдо ва бухгалтерия бўлими учун
    фойдали бўлади. <br />
    <br /> BASCO ЕRP платформасининг енг муҳим имкониятлари қуйидагилар: <br />
    <br />
    ●Складга маҳсулот қабул қилиш функсияси; <br /> ●Складга кирим бўлган
    маҳсулотларнинг алоҳида ҳисоботи; <br /> ●Складдан чиқим бўлган
    маҳсулотларнинг алоҳида ҳисоботи; <br /> ●Маҳсулотлар қолдиғи енг кам
    миқдоридан камайганда бу ҳақида махсус ҳисоботда билиб туриш мумкин; <br />{" "}
    ●Натижада ҳеч қачон тўсатдан маҳсулот йетишмаслиги юзага келмайди. Сабаби,
    камайгани олдиндан билинади; <br /> ●Маҳсулотлар қолдиғи енг кўп микдоридан
    кўпайганда бу ҳақида махсус ҳисоботда билиб туриш мумкин; <br /> ●Натижада,
    омборда бир турдаги маҳсулотларнинг меъёрдан ортиб кетиши олди олинади.{" "}
    <br />
    <br /> Ушбу бўлим орқали товарлар заҳирасини доимий кузатиб туриш ва
    ҳисоботларни тўғри юритиш осон амалга оширилади.
  </p>
);
const bolim9Parag = (
  <p>
    Таъминотчининг компанияга хом-ашё ва маҳсулот йетказиб берувчилар ҳақидаги
    маълумотларини тез ва қулай топиш имконияти. <br />
    <br /> Ушбу бўлим орқали компаниянинг таъминотчилар билан ишлаш
    самарадорлиги ошади. Компания раҳбариятига тайёрланадиган ҳисоботлар вақти
    қисқаради. <br />
    <br /> Бу бўлимда, нафақат, тайёр маҳсулот, балки хизмат сотиш ва сотиб олиш
    орқали фаолиятидаги компанияларга таъминотни киритиб бориш имконини беради.{" "}
    <br />
    <br />
    Таъминот бўлимининг муҳим имкониятларининг баъзиларини кўриб чиқамиз: <br />
    <br />
    ●Таъминотчининг компанияга хом-ашё ва маҳсулот йетказиб берувчилар ҳақидаги
    маълумотларини тез ва қулай топиш имконияти; <br /> ●Таъминотчининг кунлик
    режасини тез, қулай автоматик ташкил қилиб бериш имконияти; <br />{" "}
    ●Таъминотчи билан суҳбатлашиш вақти келганда унинг карточкасига янги суҳбат
    мазмунини қўшмай туриб, будилник вақтини ўзгартириб бўлмайди. Бу таъминотчи
    билан суҳбатлашмай, шунчаки, вақтни суриб куйишнинг олдини олади. <br />{" "}
    ●Таъминотчилар билан бўлган суҳбатлар бир марта базага ёзилганидан кейин уни
    ҳодим ўзи ўчириб ёки ўзгартириб юбора олмайди. Бу билан маълумотлар
    кейинчалик ўзгартириб куйилиши хавфининг олди олинади;
  </p>
);
const bolim10Parag = (
  <p>
    Турли шахслар билан ишлаш самарадорлиги сезиларли даражада ошади. <br />
    <br /> Бўлимнинг умумий имкониятлари: <br />
    <br /> ●Таъминотчилар билан пул олди-бердиси акт сверкаларини осон кўриш
    имконияти. <br /> ●Турли шахслар билан умумий ҳисоб-китобларда манфаатлардан
    кечиш ҳисобига келишувлар бўлганда корректировка қилиш функсияси. <br />{" "}
    ●Турли шахслар билан исталган валютада ҳисоб-китобларни алоҳида-алоҳида
    қилиб олиб юриш мумкин. Бу билан ҳисоб-китоблар доимо аниқ ҳолатда бўлади.{" "}
    <br /> ●Турли шахслар исталган валютада пул кирим-чиқим қилиш, қабул
    килаётганда пул суммасини бир валютадан бошқасига конвертация қилиб олиш
    мумкин. Бу билан бир вақтнинг ўзида ҳам касса ҳисобкитоблари, ҳам таъминотчи
    билан олди берди реал ҳолатда куринади. <br /> ●Турли шахслардан маҳсулотлар
    сотиб олиш нархини сўмда ёки AҚСҲ долларида белгиласа бўлади. Бу сиз истаган
    нархни осонлик билан кўришда ёрдам беради. <br /> ●Турли шахслардан исталган
    вақт оралиғида сотиб олинган хизматлар ҳисоботи. <br /> ●Турли шахслар
    ҳаракати ҳисоботи орқали ҳар бир таъсисчи ва турли шахсларни индивидуал
    анализ қилиш имконияти. <br /> ●Турли шахслардан хизмат сотиб олиш ва сотиш.
    <br />
    <br />
    BASCO ЕRP платформасининг ушбу бўлими компаниянгизнинг турли шахслар билан
    бўладиган барча муносабатларини назорат қилади ҳамда тартибга солади.
  </p>
);
const bolim11Parag = (
  <p>
    Барча асосий воситаларнинг ҳисоб-китоблари, ескириши ҳамда уларни сотишдан
    олинадиган фойда ва зарарлар ягона жойда. <br /> <br /> Бўлимнинг умумий
    имкониятлари: <br /> <br /> <br /> ●Aсосий воситаларга махсус инвентар рақам
    бериш мумкин. Ва шу рақамга асосан уларнинг ҳисоб-китоблари юритилади.{" "}
    <br /> ●Aсосий воситалар, яъни ишлаб чиқариш жиҳозлари, офис жиҳозлари сотиб
    олиш ва компания балансида олиб юриш. <br /> ●Aсосий воситаларга фоизда
    ойлик ескиришини ҳисоблаш. <br /> ●Aсосий воситаларни сотиш ва балансдан
    олиб ташлаш. <br /> ●Aсосий воситаларнинг умумий батафсил рўйхати. <br />{" "}
    ●Aсосий восита сотишдан фойда (зарар) ҳисоботи. <br /> ●Aсосий воситаларнинг
    сотиш ва сотиб олиш ҳаракати. <br /> ●Aсосий воситаларнинг маълум кун учун
    колдиғи ҳисоботи <br />
    <br /> Бу бўлим орқали компания реал даромадининг асосий воситалар
    ескиришида ўрни қанчалик муҳимлиги сезила бошлайди.
  </p>
);
const bolim12Parag = (
  <p>
    {" "}
    Ишлаб чиқариш бўлими орқали компания ишлаб чиқаришда бўлаётган ортиқча
    харажатларни кўра олади ҳамда реал ишлаб чиқаришни тўғри назорат қила олади.{" "}
    <br />
    <br /> Бўлимнинг умумий имкониятлари: <br />
    <br /> ●Маҳсулот ишлаб чиқариш. <br /> ●Маҳсулот ишлаб чиқаришда ҳар бир
    маҳсулотга кетадиган хом-ашёларни тўлиқ киритиш имконияти орқали ҳар бир
    маҳсулотнинг таннархини ҳам ҳисоблаш имконияти. <br /> ●Маҳсулот ишлаб
    чиқаришда хом-ашё билан бирга полуфабрикатларни ҳам тайёр маҳсулот ишлаб
    чиқариш ичига киритиш имконияти. <br /> ●Ишлаб чиқарилаётган маҳсулотнинг
    сонига караб таннархи ва суммасини ҳам кўриш мумкин.
    <br /> ●Маҳсулот ишлаб чиқаришда хом-ашё ёки полуфабрикат агар складда
    булмаса, ишлаб чиқаришга рухсат бермайди. Бу реал ҳолатни анализ қилиб
    туришни осонлаштиради. <br /> ●Ишлаб чиқариладиган маҳсулотлар рўйхатини
    киритганда унга керакли бўлган хом-ашёларни складдан автоматик тўлдириб
    қуйиш имконияти мавжуд. <br /> ●Яроқсиз маҳсулотлар складга кайтганда
    маҳсулотларни қайта ишлаш функсияси ҳам мавжуд.
    <br /> ●Қайта ишлаш функсияси орқали бир турдаги маҳсулотдан иккинчи турдаги
    маҳсулотни ҳам қайта ишлаш мумкин. <br /> ●Ишлаб чиқариш учун керак бўлган
    хом-ашёларни хом-ашё складидан ажратиб сақлаш учун ва тайёр бўлган
    маҳсулотларни сақлаш учун алоҳида ишлаб чиқариш склади. <br /> ●Складдан
    складга хом-ашё ва тайёр маҳсулот ўтказиш функсияси. <br /> ●Ишлаб чиқариш
    складини назорат қилиш учун склад ҳисоботи. <br /> ●Ишлаб чиқариш учун норма
    белгилаш орқали хоҳлаган даврни танлаб, ишлаб чиқариш кам ёки кўп бўлаётгани
    ҳақида маълумот олиш. <br /> ●Ишлаб чиқаришга маҳсулот буюртма бериш..{" "}
    <br /> ●Ишлаб чиқариш учун керакли хом-ашёларга буюртма бериш. <br />{" "}
    ●Камайган ва кўпайган маҳсулотлар ҳақида ҳисобот олиш орқали маҳсулотлар
    миқдорини тўғри назорат қила олиш имконияти. <br /> ●Ишлаб чиқаришга
    сарфланган хом-ашёнинг кам ёки кўп сарф бўлаётгани ҳақида ҳисобот олиш.{" "}
    <br /> ●Бир маҳсулот учун кўп турдаги калкуляция киритиш имконияти.
  </p>
);
const bolim13Parag = (
  <p>
    Компания реал даромади ва харажатларини, банкдаги операцияларни солиқ,
    коммунал хизматларга қилинаётган харажатларни доим назорат қилиб бориш
    имконияти пайдо бўлади. <br />
    <br /> Бўлимнинг умумий имкониятлари: <br /> <br /> ●Маошнинг бухгалтерия
    бўлимига доир бўлган операцияларни тўғридан-тўғри амалга ошириш. <br />{" "}
    ●Ходимлар пластик картасига пул ўтказиш, уларга нақд пул тўлаш, маошдан
    ушланмаларни ёзиб бориш. <br /> ●Компаниянинг исталган солиқларини ҳисоблаб
    бориш ва уларни ҳар ойлик тизимда корхона харажатларида киргизиб бориш.{" "}
    <br /> ●Компания солиқларини банк орқали тўлов қилиб бориш. <br />{" "}
    ●Компаниянинг исталган коммунал хизматларни ҳисоблаб бориш ва уларни ҳар
    ойлик тизимда корхона харажатларида киргизиб бориш. <br /> ●Компаниянинг
    коммунал хизматларини банк орқали тўлов қилиб бориш. <br /> ●Банк орқали
    бўладиган барча харажатларни тўғри юритиш учун киритиб бориш ва юритиш
    орқали компаниянинг ҳисоб рақамини кирим чиқимларини тўлиқ назорат қилиш
    мумкин.
    <br /> ●Компания фаолиятида турли шахслар билан пул олди-бердисининг
    ҳисоб-китобларини юритиш имконияти. <br /> ●Ходимларга ҳисобланган маошларни
    ва маошдан ташқари пуллар бериш. <br /> ●Компания мижозлари, таъминотчилари,
    турли шахслар фирмалари реквизитларини осон топиш, рус ва ўзбек тилидаги
    ҳисоб фактураларга осон киритиш ва қулай фойдаланиш. <br /> ●Компаниянинг
    барча тузилган шартномалар рўйхати. <br /> ●Коммунал хизматларга,
    солиқларга, турли шахсларга қилинаётган ҳаражатлар ҳисоботи алоҳида ҳолатда
    доим автоматик янгиланиб боради. <br /> ●Ходимларнинг маошдан турли
    ушланмалар ҳисоботи орқали исталган ойдаги маош ушланмалар тарихини кўриш
    мумкин.
  </p>
);
function Directions() {
  const [clicked, setClicked] = useState(0);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [shower, setShower] = useState(false);
  return (
    <>
      <section className='directions'>
        <div className=' container'>
          <div className='directions-top'>
            <h3 className='directions-top__subject'>
              Basco ERP платформа йўналишлари
            </h3>
            <p className='directions-top__text'>
              Basco ERP платформасининг йўналишлари - бизнесингизнинг барча
              бўлимлари учун ягона комплекс ечим
            </p>
            <img className='dizayn' src={dizan} alt='' />
          </div>
          <div className='directions-middle'>
            <ul className='directions-middle__list'>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div className='directions-middle-card__box directions-middle-card__box--1'>
                    <img
                      src={kluch}
                      alt='trade'
                      className='directions-middle-card__img '
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    CРМ бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Мижозлар билан муносабат- ларни бошқаришни автоматлаштириш
                    учун қулай ва оптимал ёндашув
                  </p>
                  <button
                    className='directions-middle-card__btn directions-middle-card__btn--1'
                    onClick={() => {
                      openModal();
                      setClicked(2);
                    }}>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div className='directions-middle-card__box directions-middle-card__box--2'>
                    <img
                      src={trade}
                      alt='trade'
                      className='directions-middle-card__img'
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    Савдо бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Савдо жараёнлари бошқа-руви, назорати ва анализи
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(3);
                    }}
                    className='directions-middle-card__btn directions-middle-card__btn--2'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div className='directions-middle-card__box directions-middle-card__box--3'>
                    <img
                      src={resource}
                      alt='trade'
                      className='directions-middle-card__img'
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>ҲР бўлими</h3>
                  <p className='directions-middle-card__text'>
                    Керакли кадрлар ва барча ходимлар маълумотлар қўл
                    остингизда!
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(4);
                    }}
                    className='directions-middle-card__btn directions-middle-card__btn--3'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div className='directions-middle-card__box directions-middle-card__box--8'>
                    <img
                      src={sss}
                      alt='trade'
                      className='directions-middle-card__img'
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    Таъминот бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Таъминотчининг компанияга хом-ашё ва маҳсулот йетказиб
                    берувчилар ҳақидаги маълумотларини тез ва қулай топиш
                    имконияти.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(9);
                    }}
                    className='directions-middle-card__btn directions-middle-card__btn--4'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div className='directions-middle-card__box directions-middle-card__box--5'>
                    <img
                      src={money}
                      alt='trade'
                      className='directions-middle-card__img'
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    Касса бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Компаниянинг барча турдаги пул маблағларининг аниқ ва
                    ишончли юритилиши
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(6);
                    }}
                    className='directions-middle-card__btn directions-middle-card__btn--5'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div className='directions-middle-card__box directions-middle-card__box--6'>
                    <img
                      src={house}
                      alt='trade'
                      className='directions-middle-card__img'
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    Склад бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Склад бўлими савдо вақтида тайёр маҳсулотлар ҳаракати ва
                    қолдиғини реал вақт режи-мида кўриб туриш имконияти.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(8);
                    }}
                    className='directions-middle-card__btn  directions-middle-card__btn--6'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div className='directions-middle-card__box directions-middle-card__box--7'>
                    <img src={setting} alt='trade' className=' ' />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    Назорат бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Корхона ички қонун-қоида-лари ва тартиби назоратини ягона
                    база орқали назорат қилиш имкониятини берадиi
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(7);
                    }}
                    className='directions-middle-card__btn directions-middle-card__btn--7'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div className='directions-middle-card__box directions-middle-card__box--8'>
                    <img
                      src={star}
                      alt='trade'
                      className='directions-middle-card__img'
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    Раҳбар бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Раҳбар учун барча имко-ниятлар бир жойда. Раҳбар сифатида
                    сизнинг вақтингиз ежалади, самарадорлик ошади.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(1);
                    }}
                    className='directions-middle-card__btn directions-middle-card__btn--8'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          {shower ? (
            <div className='directions-middle'>
              <ul className='directions-middle__list'>
                <li className='directions-middle__item'>
                  <div className='directions-middle__card'>
                    <div className='directions-middle-card__box  directions-middle-card__box--4  sariq'>
                      <img
                        width={62}
                        height={62}
                        src={persons}
                        alt='trade'
                        className='directions-middle-card__img'
                      />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      Турли шахслар бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Турли шахслар билан ишлаш самарадорлиги сезиларли даражада
                      ошади.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(10);
                      }}
                      className='directions-middle-card__btn directions-middle-card__btn--9'>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className='directions-middle__item'>
                  <div className='directions-middle__card'>
                    <div
                      className='directions-middle-card__box
                    directions-middle-card__box--2'>
                      <img
                        src={auto}
                        alt='trade'
                        className='directions-middle-card__img'
                      />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      Aсосий воситалар бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Барча асосий воситаларнинг ҳисоб-китоблари, ескириши ҳамда
                      уларни сотишдан олинадиган фойда ва зарарлар ягона жойда.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(11);
                      }}
                      className='directions-middle-card__btn'>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className='directions-middle__item'>
                  <div className='directions-middle__card'>
                    <div
                      className='directions-middle-card__box
                    directions-middle-card__box--5'>
                      <img
                        src={work}
                        alt='trade'
                        className='directions-middle-card__img'
                      />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      Ишлаб чиқариш бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Ишлаб чиқариш бўлими орқали компания ишлаб чиқаришда
                      бўлаётган ортиқча харажатларни кўра олади ҳамда реал ишлаб
                      чиқаришни тўғри назорат қила олади.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(12);
                      }}
                      className='directions-middle-card__btn directions-middle-card__btn--5'>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className='directions-middle__item'>
                  <div className='directions-middle__card'>
                    <div
                      className='directions-middle-card__box
                    directions-middle-card__box--6'>
                      <img
                        src={moliya}
                        alt='trade'
                        className='directions-middle-card__img'
                      />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      Бухгалтерия бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Компания реал даромади ва харажатларини, банкдаги
                      операцияларни солиқ, коммунал хизматларга қилинаётган
                      харажатларни доим назорат қилиб бориш имконияти пайдо
                      бўлади.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(13);
                      }}
                      className='directions-middle-card__btn directions-middle-card__btn--6'>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className='directions-middle__item directions__items'>
                  <div className='directions-middle__card'>
                    <div
                      className='directions-middle-card__box
                    directions-middle-card__box--3'>
                      <img
                        src={maosh}
                        alt='trade'
                        className='directions-middle-card__img'
                      />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      Маош бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Ходимларингизга исталган турда маош ҳисоблаш мумкин (табел
                      асосида, КПИ асосида, бонус шаклида, ишбай шаклда).
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(5);
                      }}
                      className='directions-middle-card__btn directions-middle-card__btn--3'>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className='directions-bottom'>
            <button
              onClick={() => setShower(!shower)}
              className='directions-bottom__btn'>
              {shower ? "Ёпиш" : " Барча бyлимлар"}
            </button>
          </div>
          {/* /////////////////////////////////////////////// */}
          <Splide
            className='directions__splide'
            aria-label='My Favorite Images'>
            <SplideSlide className='dicretions__splide--item'>
              <div className='directions__title'>
                <li className='directions-middle__item'>
                  <div className='directions-middle__card'>
                    <div className='directions-middle-card__box directions-middle-card__box--1'>
                      <img
                        src={kluch}
                        alt='trade'
                        className='directions-middle-card__img '
                      />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      CРМ бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Мижозлар билан муносабат- ларни бошқаришни автоматлаштириш
                      учун қулай ва оптимал ёндашув
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(2);
                      }}
                      className='directions-middle-card__btn directions-middle-card__btn--1'>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className='directions-middle__item'>
                  <div className='directions-middle__card'>
                    <div className='directions-middle-card__box directions-middle-card__box--2'>
                      <img
                        src={trade}
                        alt='trade'
                        className='directions-middle-card__img'
                      />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      Савдо бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Савдо жараёнлари бошқа-руви, назорати ва анализи
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(3);
                      }}
                      className='directions-middle-card__btn directions-middle-card__btn--2'>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>
            <SplideSlide className='dicretions__splide--item'>
              <div className='directions__title'>
                <li className='directions-middle__item'>
                  <div className='directions-middle__card'>
                    <div className='directions-middle-card__box directions-middle-card__box--3'>
                      <img
                        src={resource}
                        alt='trade'
                        className='directions-middle-card__img'
                      />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      ҲР бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Керакли кадрлар ва барча ходимлар маълумотлар қўл
                      остингизда!
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(4);
                      }}
                      className='directions-middle-card__btn directions-middle-card__btn--3'>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className='directions-middle__item'>
                  <div className='directions-middle__card'>
                    <div className='directions-middle-card__box directions-middle-card__box--1'>
                      <img
                        src={sss}
                        alt='trade'
                        className='directions-middle-card__img'
                      />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      Таъминот бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Таъминотчининг компанияга хом-ашё ва маҳсулот йетказиб
                      берувчилар ҳақидаги маълумотларини тез ва қулай топиш
                      имконияти.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(9);
                      }}
                      className='directions-middle-card__btn directions-middle-card__btn--4'>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>

            <SplideSlide className='dicretions__splide--item'>
              <div className='directions__title'>
                <li className='directions-middle__item'>
                  <div className='directions-middle__card'>
                    <div className='directions-middle-card__box directions-middle-card__box--5'>
                      <img
                        src={money}
                        alt='trade'
                        className='directions-middle-card__img'
                      />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      Касса бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Компаниянинг барча турдаги пул маблағларининг аниқ ва
                      ишончли юритилиши
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(6);
                      }}
                      className='directions-middle-card__btn directions-middle-card__btn--5'>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className='directions-middle__item'>
                  <div className='directions-middle__card'>
                    <div className='directions-middle-card__box directions-middle-card__box--6'>
                      <img
                        src={house}
                        alt='trade'
                        className='directions-middle-card__img'
                      />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      Склад бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Склад бўлими савдо вақтида тайёр маҳсулотлар ҳаракати ва
                      қолдиғини реал вақт режи-мида кўриб туриш имконияти.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(8);
                      }}
                      className='directions-middle-card__btn  directions-middle-card__btn--6'>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>
            <SplideSlide className='dicretions__splide--item'>
              <div className='directions__title'>
                <li className='directions-middle__item'>
                  <div className='directions-middle__card'>
                    <div className='directions-middle-card__box directions-middle-card__box--7'>
                      <img src={setting} alt='trade' className=' ' />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      Назорат бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Корхона ички қонун-қоида-лари ва тартиби назоратини ягона
                      база орқали назорат қилиш имкониятини берадиi
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(7);
                      }}
                      className='directions-middle-card__btn directions-middle-card__btn--7'>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className='directions-middle__item'>
                  <div className='directions-middle__card'>
                    <div className='directions-middle-card__box directions-middle-card__box--8'>
                      <img
                        src={star}
                        alt='trade'
                        className='directions-middle-card__img'
                      />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      Раҳбар бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Раҳбар учун барча имко-ниятлар бир жойда. Раҳбар сифатида
                      сизнинг вақтингиз ежалади, самарадорлик ошади.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(1);
                      }}
                      className='directions-middle-card__btn directions-middle-card__btn--8'>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>
            <SplideSlide className='dicretions__splide--item'>
              <div className='directions__title'>
                <li className='directions-middle__item'>
                  <div className='directions-middle__card'>
                    <div className='directions-middle-card__box  directions-middle-card__box--4'>
                      <img
                        width={62}
                        height={62}
                        src={persons}
                        alt='trade'
                        className='directions-middle-card__img'
                      />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      Турли шахслар бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Турли шахслар билан ишлаш самарадорлиги сезиларли даражада
                      ошади.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(10);
                      }}
                      className='directions-middle-card__btn directions-middle-card__btn--9  '>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className='directions-middle__item'>
                  <div className='directions-middle__card'>
                    <div
                      className='directions-middle-card__box
                      directions-middle-card__box--2'>
                      <img
                        src={auto}
                        alt='trade'
                        className='directions-middle-card__img'
                      />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      Aсосий воситалар бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Барча асосий воситаларнинг ҳисоб-китоблари, ескириши ҳамда
                      уларни сотишдан олинадиган фойда ва зарарлар ягона жойда.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(11);
                      }}
                      className='directions-middle-card__btn'>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>

            <SplideSlide className='dicretions__splide--item'>
              <div className='directions__title'>
                <li className='directions-middle__item'>
                  <div className='directions-middle__card'>
                    <div
                      className='directions-middle-card__box
                      directions-middle-card__box--5'>
                      <img
                        src={work}
                        alt='trade'
                        className='directions-middle-card__img'
                      />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      Ишлаб чиқариш бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Ишлаб чиқариш бўлими орқали компания ишлаб чиқаришда
                      бўлаётган ортиқча харажатларни кўра олади ҳамда реал ишлаб
                      чиқаришни тўғри назорат қила олади.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(12);
                      }}
                      className='directions-middle-card__btn directions-middle-card__btn--5'>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className='directions-middle__item'>
                  <div className='directions-middle__card'>
                    <div
                      className='directions-middle-card__box
                      directions-middle-card__box--6'>
                      <img
                        src={moliya}
                        alt='trade'
                        className='directions-middle-card__img'
                      />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      Бухгалтерия бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Компания реал даромади ва харажатларини, банкдаги
                      операцияларни солиқ, коммунал хизматларга қилинаётган
                      харажатларни доим назорат қилиб бориш имконияти пайдо
                      бўлади.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(13);
                      }}
                      className='directions-middle-card__btn directions-middle-card__btn--6'>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>
            <SplideSlide className='dicretions__splide--item'>
              <div className='directions__title directions__titles'>
                <li className='directions-middle__item directions__items'>
                  <div className='directions-middle__card'>
                    <div
                      className='directions-middle-card__box
                      directions-middle-card__box--3'>
                      <img
                        src={maosh}
                        alt='trade'
                        className='directions-middle-card__img'
                      />
                    </div>
                    <h3 className='directions-middle-card__subject'>
                      Маош бўлими
                    </h3>
                    <p className='directions-middle-card__text'>
                      Ходимларингизга исталган турда маош ҳисоблаш мумкин (табел
                      асосида, КПИ асосида, бонус шаклида, ишбай шаклда).
                    </p>
                    <button className='directions-middle-card__btn directions-middle-card__btn--3'>
                      Батафсил{" "}
                      <span className='directions-middle-card__btn-span'>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>
          </Splide>
          {/* ////////////////////////////////////// */}
          <Splide
            className='directions__splides'
            aria-label='My Favorite Images'>
            <SplideSlide className='directions__splides--title'>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div className='directions-middle-card__box directions-middle-card__box--1'>
                    <img
                      src={kluch}
                      alt='trade'
                      className='directions-middle-card__img '
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    CРМ бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Мижозлар билан муносабат- ларни бошқаришни автоматлаштириш
                    учун қулай ва оптимал ёндашув
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(2);
                    }}
                    className='directions-middle-card__btn directions-middle-card__btn--1'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className='directions__splides--title'>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div className='directions-middle-card__box directions-middle-card__box--2'>
                    <img
                      src={trade}
                      alt='trade'
                      className='directions-middle-card__img'
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    Савдо бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Савдо жараёнлари бошқа-руви, назорати ва анализи
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(3);
                    }}
                    className='directions-middle-card__btn directions-middle-card__btn--2'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className='directions__splides--title'>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div className='directions-middle-card__box directions-middle-card__box--3'>
                    <img
                      src={resource}
                      alt='trade'
                      className='directions-middle-card__img'
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>ҲР бўлими</h3>
                  <p className='directions-middle-card__text'>
                    Керакли кадрлар ва барча ходимлар маълумотлар қўл
                    остингизда!
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(4);
                    }}
                    className='directions-middle-card__btn directions-middle-card__btn--3'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div className='directions-middle-card__box directions-middle-card__box--8'>
                    <img
                      src={sss}
                      alt='trade'
                      className='directions-middle-card__img'
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    Таъминот бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Таъминотчининг компанияга хом-ашё ва маҳсулот йетказиб
                    берувчилар ҳақидаги маълумотларини тез ва қулай топиш
                    имконияти.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(9);
                    }}
                    className='directions-middle-card__btn directions-middle-card__btn--4'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className='directions__splides--title'>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div className='directions-middle-card__box directions-middle-card__box--5'>
                    <img
                      src={money}
                      alt='trade'
                      className='directions-middle-card__img'
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    Касса бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Компаниянинг барча турдаги пул маблағларининг аниқ ва
                    ишончли юритилиши
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(6);
                    }}
                    className='directions-middle-card__btn directions-middle-card__btn--5'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className='directions__splides--title'>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div className='directions-middle-card__box directions-middle-card__box--6'>
                    <img
                      src={house}
                      alt='trade'
                      className='directions-middle-card__img'
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    Склад бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Склад бўлими савдо вақтида тайёр маҳсулотлар ҳаракати ва
                    қолдиғини реал вақт режи-мида кўриб туриш имконияти.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(8);
                    }}
                    className='directions-middle-card__btn  directions-middle-card__btn--6'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className='directions__splides--title'>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div className='directions-middle-card__box directions-middle-card__box--7'>
                    <img src={setting} alt='trade' className=' ' />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    Назорат бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Корхона ички қонун-қоида-лари ва тартиби назоратини ягона
                    база орқали назорат қилиш имкониятини берадиi
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(7);
                    }}
                    className='directions-middle-card__btn directions-middle-card__btn--7'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className='directions__splides--title'>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div className='directions-middle-card__box directions-middle-card__box--8'>
                    <img
                      src={star}
                      alt='trade'
                      className='directions-middle-card__img'
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    Раҳбар бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Раҳбар учун барча имко-ниятлар бир жойда. Раҳбар сифатида
                    сизнинг вақтингиз ежалади, самарадорлик ошади.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(1);
                    }}
                    className='directions-middle-card__btn directions-middle-card__btn--8'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className='directions__splides--title'>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div className='directions-middle-card__box  directions-middle-card__box--4'>
                    <img
                      width={62}
                      height={62}
                      src={persons}
                      alt='trade'
                      className='directions-middle-card__img'
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    Турли шахслар бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Турли шахслар билан ишлаш самарадорлиги сезиларли даражада
                    ошади.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(10);
                    }}
                    className='directions-middle-card__btn directions-middle-card__btn--9'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>

            <SplideSlide className='directions__splides--title'>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div
                    className='directions-middle-card__box
                      directions-middle-card__box--2'>
                    <img
                      src={auto}
                      alt='trade'
                      className='directions-middle-card__img'
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    Aсосий воситалар бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Барча асосий воситаларнинг ҳисоб-китоблари, ескириши ҳамда
                    уларни сотишдан олинадиган фойда ва зарарлар ягона жойда.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(11);
                    }}
                    className='directions-middle-card__btn '>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className='directions__splides--title'>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div
                    className='directions-middle-card__box
                      directions-middle-card__box--5'>
                    <img
                      src={work}
                      alt='trade'
                      className='directions-middle-card__img'
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    Ишлаб чиқариш бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Ишлаб чиқариш бўлими орқали компания ишлаб чиқаришда
                    бўлаётган ортиқча харажатларни кўра олади ҳамда реал ишлаб
                    чиқаришни тўғри назорат қила олади.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(12);
                    }}
                    className='directions-middle-card__btn directions-middle-card__btn--5'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className='directions__splides--title'>
              <li className='directions-middle__item'>
                <div className='directions-middle__card'>
                  <div
                    className='directions-middle-card__box
                      directions-middle-card__box--6'>
                    <img
                      src={moliya}
                      alt='trade'
                      className='directions-middle-card__img'
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    Бухгалтерия бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Компания реал даромади ва харажатларини, банкдаги
                    операцияларни солиқ, коммунал хизматларга қилинаётган
                    харажатларни доим назорат қилиб бориш имконияти пайдо
                    бўлади.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(13);
                    }}
                    className='directions-middle-card__btn directions-middle-card__btn--6'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>

            <SplideSlide className='directions__splides--title'>
              <li className='directions-middle__item directions__items'>
                <div className='directions-middle__card'>
                  <div
                    className='directions-middle-card__box
                      directions-middle-card__box--3'>
                    <img
                      src={maosh}
                      alt='trade'
                      className='directions-middle-card__img'
                    />
                  </div>
                  <h3 className='directions-middle-card__subject'>
                    Ишлаб чиқариш бўлими
                  </h3>
                  <p className='directions-middle-card__text'>
                    Ишлаб чиқариш бўлими орқали компания ишлаб чиқаришда
                    бўлаётган ортиқча харажатларни кўра олади ҳамда реал ишлаб
                    чиқаришни тўғри назорат қила олади.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(12);
                    }}
                    className='directions-middle-card__btn directions-middle-card__btn--3'>
                    Батафсил{" "}
                    <span className='directions-middle-card__btn-span'>
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
          </Splide>

          <Modal
            // className="directions__modal"
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel='Example Modal'>
            <h2 className='directions__modal-name'>
              {clicked === 1
                ? bolim1Title
                : clicked === 2
                ? bolim2Title
                : clicked === 3
                ? bolim3Title
                : clicked === 4
                ? bolim4Title
                : clicked === 5
                ? bolim5Title
                : clicked === 6
                ? bolim6Title
                : clicked === 7
                ? bolim7Title
                : clicked === 8
                ? bolim8Title
                : clicked === 9
                ? bolim9Title
                : clicked === 10
                ? bolim10Title
                : clicked === 11
                ? bolim11Title
                : clicked === 12
                ? bolim12Title
                : clicked === 13
                ? bolim13Title
                : ""}
            </h2>
            <p className='directions__modal-text'>
              {clicked === 1
                ? bolim1Parag
                : clicked === 2
                ? bolim2Parag
                : clicked === 3
                ? bolim3Parag
                : clicked === 4
                ? bolim4Parag
                : clicked === 5
                ? bolim5Parag
                : clicked === 6
                ? bolim6Parag
                : clicked === 7
                ? bolim7Parag
                : clicked === 8
                ? bolim8Parag
                : clicked === 9
                ? bolim9Parag
                : clicked === 10
                ? bolim10Parag
                : clicked === 11
                ? bolim11Parag
                : clicked === 12
                ? bolim12Parag
                : clicked === 13
                ? bolim13Parag
                : ""}
            </p>

            <button
              className='directions__modal-btn'
              style={{ cursor: "pointer", outline: "none" }}
              onClick={closeModal}>
              Ёпиш
            </button>
          </Modal>
        </div>
      </section>
    </>
  );
}

export default Directions;
