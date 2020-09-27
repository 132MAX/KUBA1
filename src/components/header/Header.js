import React from 'react';
import "./style.css"

export default () => {
    return (

        <header className="header">
            <div className="header__top">
                <div className="menu__animation"
                onClick={()=>alert("OLEG")}>

                </div>

                <div className="header__top-inner">
                    <h1 className="header__title">
                        Куба
                    </h1>
                    <p className="header__text">
                        Explore the world of
                     </p>
                </div>
            </div>
            <nav className="menu">
                <ul className="menu__list">
                    <li className="munu__list-link"><a href="#" className="menu__list-link">Резюме</a></li>
                    <li className="munu__list-link"><a href="#" className="menu__list-link">Главная</a></li>
                    <li className="munu__list-link"><a href="#" className="menu__list-link">Виды</a></li>
                    <li className="munu__list-link"><a href="#" className="menu__list-link">Погода</a></li>
                    <li className="munu__list-link"><a href="#" className="menu__list-link">Что сделать</a></li>
                    <li className="munu__list-link"><a href="#" className="menu__list-link">Резиденции</a></li>
                    <li className="munu__list-link"><a href="#" className="menu__list-link">Фото</a></li>
                </ul>
            </nav>
        </header>
    )
}