import React from "react";
import Abaut1 from "./../images/abaut-1.jpg";
import Abaut2 from "./../images/abaut-2.jpg";
import "./style.css";

export default () => {
    return (
        <div className="abaut">
            <div className="conteiner">
                <div className="conteiner-content">
                    <h2 className="about__title title"
                    id="two">Куба - это...</h2>
                    <p className="about__text">Куба похожа на принца в плаще бедняка; за иногда ветхими фасадами задерживается золотая пыль. Именно эти богатые дихотомии делают путешествие здесь захватывающим. В этой стране, застрявшей во временном перекосе и шокирующей экономическим эмбарго, которое длилось более полувека, вы можете распрощаться с повседневными
                 предположениями и ожидать неожиданностей.</p>
                    <div className="about__item" >
                        <div className="about__box about__hitting1">
                            <h3 className="about__box-title">
                                Историческое наследие
                            </h3>
                            <p className="about__box-text">
                                Без современных вмешательств колониальные города Кубы не сильно изменились с тех пор, как мушкетные пираты преследовали Карибский бассейн. Атмосфера и архитектура особенно волнуют Гавану, Тринидад и Камагуэй, где грандиозные площади и мощеные улицы рассказывают сказки о богатстве и интригах.
                            </p>
                        </div>
                        <img className="about_img" src={Abaut1} alt="" />
                    </div>
                    <div className="about__item">
                       <img className="about_img" src={Abaut2} alt="" />
                        <div className="about__box  about__hitting2">
                            <h3 className="about__box-title">
                                Удивительные пляжи
                             </h3>
                            <p className="about__box-text">
                                Неважно, останавливаетесь ли вы в роскошном отеле в Гаване или изучаете сельское очарование Виньялес. Не пропустите пляжный курортный город Варадеро, этот пляжный рай по-прежнему следует рассматривать как часть ваших кубинских планов путешествий.
                          </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}