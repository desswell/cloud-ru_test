import React, { useState } from 'react'
import {MyStepper} from "../components/steppper";
import {AddIcon} from "../icons";
import {Advantages} from "../components/Advantages";
import {setAdvantagesAction, useAdvantages} from "../store_redux/slices/dataUser";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


export function SecondPage() {
    const advantagesDone = useAdvantages()
    const navigate = useNavigate()
    const [advantages, setAdvantages] = useState(advantagesDone)
    const dispatch = useDispatch()
    const HandleClickAdd = () => {
        setAdvantages((prevState) => [...prevState, ""])
        dispatch(setAdvantagesAction(""))
    }
    const HandleClick = () => {

    }
    return(
        <div>
            <MyStepper/>
            <div className="InputFirst">
                <h1 className="title-">Advantages</h1>
                {advantages.map((data, index) => <Advantages props={data} id={index}/>)}
                <button className="button-add" onClick={HandleClickAdd}><AddIcon/></button>
            </div>
            <div className='btn-pos'>
                <button className="button-back" onClick={() => navigate('/1')}>Назад</button>
                <button className='btn-style button-next' onClick={HandleClick}>Далее</button>
            </div>
        </div>
    )
}