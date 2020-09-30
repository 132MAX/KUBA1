import React ,{useState} from 'react';
import Menu from "./Menu"
import "./style.css"

const list =[
    {name :"Отпуск",
     nameid:"one"},
    {name :"Куба это",
     nameid:"two"},
    {name :"Фото",
     nameid:"three"},
    {name :"Киска",
     nameid:"for"}
]
export default () => {
    const [menu , setMenu]= useState(false)
    return (

        <header className="header">
            <div className="header__top">
                <div className="menu__animation-list  ">
                {
                    list.map((elem , index)=>{
                        return <Menu
                        name={elem.name}
                        nameid={elem.nameid}
                        num={index+1}
                        menu={menu}
                        />
                    })
                }
                </div>
                <div className="menu__animation "
                style={{right: menu ? "250px" : "70px"}}
                onClick={()=>setMenu(!menu)}>
                </div>
                


                <div className="header__top-inner">
                    <h1 className="header__title animate__animated  animate__bounceInRight">
                        Куба
                    </h1>
                    <p className="header__text">
                        Explore the world of
                     </p>
                </div>
            </div>
            
            <nav className="menu" id="one">
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