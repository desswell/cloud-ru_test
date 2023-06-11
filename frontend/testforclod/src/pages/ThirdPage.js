import Stepper from "../components/Steppper";
import React, {useState} from "react";
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setAboutAction, useAbout, useData} from "../store_redux/slices/dataUser";
import {schemaThirdPage} from "../components/Yup";
import Error from "../components/Error";
import axios from "axios";
import {Modal} from "../components/Modal";
import {CompleteIcon, ErrorIcon} from "../icons";

export function ThirdPage () {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const about = useAbout()
    const data = useData()

    const [active, setActive] = useState(false)
    const maxLength = 200
    const [length, setLength] = useState(about.length)
    const [error, setError] = useState(null)
    const [errorAxios, setErrorAxios] = useState(true)
    async function postAxiosData () {
        await axios.post(`https://api.sbercloud.ru/content/v1/bootcamp/frontend`, data).then(() => {
            setActive(true)
            setErrorAxios(false)
        }).catch(() => {
            setActive(true)
            setErrorAxios(true)
        })
    }
    const HandleClick = () => {
        schemaThirdPage.validate({
            about: about
        }, {abortEarly: false})
            .then(() => {
                setError(null)
                postAxiosData().then(
                )
            })
            .catch((error) => setError(error.message))
    }
    return(
        <div className="main-page-container">
            <Stepper step={2}/>
            <div className="InputFirst">
                <label className="title-">About</label>
                <textarea  maxLength={200} placeholder="About" value={about} onChange={(event) => {
                    dispatch(setAboutAction(event.target.value))
                    setLength(event.target.value.length)
                }}/>
                <div className="counter">
                    {length}/{maxLength}
                </div>
            </div>
            {error && <Error>{error}</Error>}
            <div className='btn-pos'>
                <Button outline onClick={() => navigate('/2')}>Назад</Button>
                <Button onClick={HandleClick}>Отправить</Button>
            </div>
            {active && <Modal active={active} setActive={setActive} errorAxios={errorAxios}>
                <div className={errorAxios ? "modal_header error" : "modal_header"}>
                    {errorAxios ? 'Ошибка' : 'Форма успешно отправлена'}
                </div>
                <div className={errorAxios ? "CompletedIcon Error" : "CompletedIcon"}>
                    {errorAxios ? <ErrorIcon/> : <CompleteIcon/>}
                </div>

            </Modal>}
        </div>
    )
}