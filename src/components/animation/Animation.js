import React,{useState} from "react";
import {TransitionGroup, CSSTransition } from "react-transition-group"
import ScrollAnimation from 'react-animate-on-scroll';
import Cat from "./../images/cat.jpg"
import "./style.css"
import "animate.css"

export default()=>{
    const[image,setImage]= useState(false)
    return(
        <div className="animation conteiner">
             <ScrollAnimation animateIn="fadeIn">
            <div className="animation__text">
                Хотите увидеть киску?
            </div>
            <div className="animation_chekbox">
                <input type="radio" name="cat" onClick={()=> setImage(true)}/>Да
                <input type="radio" name="cat" onClick={()=>setImage(false)}/>Нет
            </div>
            
            {image ? 
           
                <div className="animate__animated animate__tada "> 
                    <img className="animation_img " src={Cat} alt=""/>
                </div>
            
            : ""}
           </ScrollAnimation>
        </div>
    )
}