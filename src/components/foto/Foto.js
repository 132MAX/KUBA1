import React from "react";
import Slider from "react-slick";
import Photo from "./../images/photo.jpg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="photo">
            <div className="conteiner section-line">
                <h2 className="photo__title title">
                    Куба в фото
                </h2>
                <p className="photo__text">
                    Когда вы думаете о Карибском море, вы, вероятно, думаете о
                    Кубе. Это одинокая акация, вырисовывающаяся на фоне
                    горизонта, уходящего в вечность. Это снежная гора почти на
                    экваторе и в пределах видимости суровых пустынь. Это пышная, покрытая пальмами береговая линия океана, это Великая рифтовая долина, которая когда-то угрожала разорвать континент на части, и это густые леса, напоминающие сердце континента. </p>
                <Slider {...settings} >
                    <div className="photo__slider">
                        <img className="photo__slider-img" src={Photo} alt="" />
                    </div>
                    <div className="photo__slider">
                        <img className="photo__slider-img" src={Photo} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}
