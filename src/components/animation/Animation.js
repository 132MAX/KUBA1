import React,{useState} from "react";
import Cat from "./../images/cat.jpg"
import "./style.css"

export default()=>{
    const[image,setImage]= useState("")
    return(
        <div className="animation conteiner">
            <div className="animation__text">
                Хотите увидеть киску?
            </div>
            <div className="animation_chekbox">
                <input type="radio" name="cat" onClick={()=> setImage(true)}/>Да
                <input type="radio" name="cat" onClick={()=>setImage(false)}/>Нет
            </div>
            
            {image ? 
           
                <div className="animate__animated animate__tada animate__delay-1s animate__repeat-3"> 
                    <img className="animation_img " src={Cat} alt=""/>
                </div>
            
            : ""}
        </div>
    )
}