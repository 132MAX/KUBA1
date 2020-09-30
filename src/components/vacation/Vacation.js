import React from "react";
import "./style.css";
import Statistics1 from "./../images/statistics-1.svg";
import Statistics2 from "./../images/statistics-2.svg";
import Statistics3 from "./../images/statistics-3.svg";
import Statistics4 from "./../images/statistics-4.svg";

export default () => {
    return (
        <div className="reason">
            <div className="conteiner section-line">
            <h2 className="reason__title title"
                id="one">
                Почему тебе понравится отпуск на Кубе?
            </h2>
            <p className="reason__text conteiner-content">
                Куба всегда была привлекательна.
                Я люблю ее за уникальность,
                креативность и дух выживания.
                Я люблю Кубу потому, что несмотря на
                60 лет неудач, она остается оптимистичным и открытым местом. Пройдите по улице с кубинским другом, и в одном квартале вы получите пять рукопожатий, четыре поцелуя, три приветствия «Диме Хермано!» И по крайней
                мере два приглашения в чей-то дом.
            </p>
            <div className="reason__link conteiner-content">
                <a href="#">Read More ››</a>
            </div>
            <div className="reason__statistics conteiner-content">
                
                    <div className="reason__statistics-ites">
                        <img src={Statistics1} alt="" className="reason__statistics-images" />
                        <p className="reason__statistics-num">1,928</p>
                        <p className="reason__statistics-text">Trips</p>
                    </div>
                    <div className="reason__statistics-ites">
                        <img src={Statistics2} alt="" className="reason__statistics-images" />
                        <p className="reason__statistics-num">271</p>
                        <p className="reason__statistics-text">Venues</p>
                    </div>
                    <div className="reason__statistics-ites">
                        <img src={Statistics3} alt="" className="reason__statistics-images" />
                        <p className="reason__statistics-num">3,321</p>
                        <p className="reason__statistics-text">Tickets Sold</p>
                    </div>
                    <div className="reason__statistics-ites">
                        <img src={Statistics4} alt="" className="reason__statistics-images" />
                        <p className="reason__statistics-num">1,928</p>
                        <p className="reason__statistics-text">Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    )
}