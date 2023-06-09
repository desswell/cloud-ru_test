import React, {useState} from 'react'
import {MyStepper} from "../components/steppper";
import {useNavigate} from "react-router-dom";
import { MenuItem, Select} from "@mui/material";
import {
    setNameAction,
    setNicknameAction, setSexAction, setSurnameAction,
    useName,
    useNickname,
    useSex,
    useSurname
} from "../store_redux/slices/dataUser";
import {useDispatch} from "react-redux";
export function FirstPage () {
    const regK = /[A-Za-z]/g;
    const regN = /[0-9]/g;
    const nicknameDone = useNickname()
    const nameDone = useName()
    const surnameDone = useSurname()
    const sexDone = useSex()
    const navigate = useNavigate()
    const [sex, setSex] = useState(sexDone)
    const [nickname, setNickname] = useState(nicknameDone)
    const [name, setName] = useState(nameDone)
    const [surName, setSurname] = useState(surnameDone)
    const [errorNickname, setErrorNickname] = useState(null);
    const [errorName, setErrorName] = useState(null);
    const [errorSurName, setErrorSurname] = useState(null);
    const [errorSex, setErrorSex] = useState(null);
    const dispatch = useDispatch()
    const HandleClick = () => {
        if(nickname.search(regK) === -1){
            setErrorNickname('Запрещен ввод кириллицы и специальных символов')
        }
        else{setErrorNickname(null)}
        if (nickname.length === 0){setErrorNickname('Поле не должно быть пустое')}
        if(name.search(regN) !== -1){
            setErrorName('Запрещен ввод цифр')
        }
        else{setErrorName(null)}
        if (name.length === 0){setErrorName('Поле не должно быть пустое')}
        if(surName.search(regN) !== -1){
            setErrorSurname('Запрещен ввод цифр')
        }
        else{setErrorSurname(null)}
        if (surName.length === 0){setErrorSurname('Поле не должно быть пустое')}
        if (sex === 'n'){
            setErrorSex('Укажите ваш пол')
        }else{setSex(null)}
        if (nickname.search(regK) !== -1 && (name.search(regN) === -1) && (surName.search(regN) === -1) && (sex !== 'n')){
            dispatch(setNicknameAction(nickname))
            dispatch(setNameAction(name))
            dispatch(setSurnameAction(surName))
            dispatch(setSexAction(sex))
            navigate('/2')
        }
    }
    return(
        <div>
            <MyStepper/>
            <div className="InputFirst">
                <h1 className="title-">NickName</h1>
                <input placeholder="Nickname" maxLength={30} value={nickname} className="input-area input-areaFirstPage" onChange={(event) => setNickname(event.target.value)}/>
                {errorNickname && <h2 className="error-text">{errorNickname}</h2>}
            </div>
            <div className="InputFirst">
                <h1 className="title-">Name</h1>
                <input placeholder="Name" maxLength={50} value={name} className="input-area input-areaFirstPage" onChange={(event) => setName(event.target.value)}/>
                {errorName && <h2 className="error-text">{errorName}</h2>}
            </div>
            <div className="InputFirst">
                <h1 className="title-">Surname</h1>
                <input placeholder="Surname" maxLength={50} value={surName} className="input-area input-areaFirstPage" onChange={(event) => setSurname(event.target.value)}/>
                {errorSurName && <h2 className="error-text">{errorSurName}</h2>}
            </div>
            <div className="InputFirst">
                <h1 className="title-">Sex</h1>
                <Select value={sex} className="input-area input-areaFirstPage" onChange={(event) => setSex(event.target.value)}>
                    <MenuItem disabled value="n">
                        <p className="notChosen">Не выборано</p>
                    </MenuItem>
                    <MenuItem value='Man'>Man</MenuItem>
                    <MenuItem value='Woman'>Woman</MenuItem>
                </Select>
                {errorSex && <h2 className="error-text">{errorSex}</h2>}
            </div>
            <div className='btn-pos'>
                <button className="button-back" onClick={() => navigate('/')}>Назад</button>
                <button className='btn-style button-next' onClick={HandleClick}>Далее</button>
            </div>
        </div>
    )
}