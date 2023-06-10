import Stepper from "../components/Steppper";
import React, {useState} from "react";
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setAboutAction, useAbout} from "../store_redux/slices/dataUser";

export function ThirdPage () {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const about = useAbout()
    const maxLength = 200
    const [length, setLength] = useState(about.length)
    const HandleClick = () => {

    }
    return(
        <div className="main-page-container">
            <Stepper step={2}/>
            <div className="InputFirst">
                <label className="title-">About</label>
                <textarea  maxLength={200} placeholder="About" onChange={(event) => {
                    dispatch(setAboutAction(event.target.value))
                    setLength(event.target.value.length)
                }} />
                <div className="counter">
                    {length}/{maxLength}
                </div>
            </div>
            <div className='btn-pos'>
                <Button outline onClick={() => navigate('/2')}>Назад</Button>
                <Button onClick={HandleClick}>Отправить</Button>
            </div>
        </div>
    )
}