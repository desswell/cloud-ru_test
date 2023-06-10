import React, {useState} from 'react'
import {Avatar} from '@mui/material';
import myAvatar from '../img/avatar.jpg'
import {Link, useNavigate} from "react-router-dom";
import {FolderIcon} from '../icons'
import InputMask from 'react-input-mask';
import {useDispatch} from "react-redux";
import {setEmailAction, setPhoneAction, useEmail, usePhone} from "../store_redux/slices/dataUser";
import Button from "../components/Button";
import Error from "../components/Error";

export function MainPage() {
    const emailDone = useEmail()
    const phoneDone = usePhone()
    const [phone, setPhone] = useState(phoneDone);
    const [email, setEmail] = useState(emailDone)
    const [errorPhone, setErrorPhone] = useState(null);
    const [errorEmail, setErrorEmail] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const HandleClick = () => {
        if (!isValidEmail(email)) {
            setErrorEmail('Email is invalid')
        } else {
            setErrorEmail(null);
        }
        if (phone.includes("_") || phone.length === 0) {
            setErrorPhone("Phone number is invalid")
        } else {
            setErrorPhone(null)
        }
        if (isValidEmail(email) && !phone.includes("_") && phone.length > 0) {
            dispatch(setPhoneAction(phone))
            dispatch(setEmailAction(email))
            navigate('/1')
        }
    };

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    return (
        <div className="main-page-container">
            <div className="linkTo">
                <div className="avatarMain">
                    <Avatar src={myAvatar} sx={{width: 80, height: 80}}></Avatar>
                </div>
                <div className='positions'>
                    <div className="myName">Ким Алексей</div>
                    <div className="linkToSM">
                        <FolderIcon/>
                        <Link to='https://t.me/desswell' className="linkToText">Telegram</Link>
                        <FolderIcon/>
                        <Link to='https://github.com/desswell' className="linkToText">GitHub</Link>
                        <FolderIcon/>
                        <Link to='https://disk.yandex.ru/i/Ewu-wPcPTj55RA' className="linkToText">Resume</Link>
                    </div>
                </div>
            </div>
            <div className="Input">
                <label className="title-">Номер телефона</label>
                <InputMask mask="+7 (999)-999-99-99" value={phone} placeholder="+7 (999)-999-99-99"
                           className="input-area" onChange={(event) => {
                    setPhone(event.target.value)
                }}/>
                {errorPhone && <Error>{errorPhone}</Error>}
            </div>
            <div className="Input downInput">
                <label className="title-">Email</label>
                <input placeholder="example@example.ru" value={email} className="input-area"
                       onChange={(event) => setEmail(event.target.value)}/>
                {errorEmail && <Error>{errorEmail}</Error>}
            </div>
            <Button onClick={HandleClick}>Начать</Button>
        </div>
    )
}