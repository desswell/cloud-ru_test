import React, {useEffect, useState} from 'react'
import Stepper from "../components/Steppper";
import {AddIcon} from "../icons";
import {Advantages} from "../components/Advantages";
import {
    addAdvantagesAction, setCheckBoxAction, setRadioAction,
    useAdvantages,
    useCheckBox,
    useRadio
} from "../store_redux/slices/dataUser";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup} from '@mui/material';
import Button from "../components/Button";
import {schemaSecondPage, schemaSecondPageAdvantages} from "../components/Yup";
import Error from "../components/Error";



export function SecondPage() {
    const navigate = useNavigate()
    const advantages = useAdvantages()
    const advantageObj = advantages.map((value, index) => {
        return {id: index, value}
    })
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()
    const [radio, setRadio] = useState(useRadio())
    const [checkBox, setCheckBox] = useState(useCheckBox())
    const [errorCheckBox, setErrorCheckBox] = useState(undefined)
    const [errorRadio, setErrorRadio] = useState(undefined)
    const HandleClickAdd = () => {
        dispatch(addAdvantagesAction(''))
    }
    const HandleClick = () => {
        setErrors([])
        advantages.map((value, index) => {
            try {
                schemaSecondPageAdvantages.validateSync({
                    advantages: value,
                })
                setErrors((state) => [...state, null])
            } catch (error) {
                setErrors((state) => [...state, error.message])
            }
        })
        try {
            schemaSecondPage.validateSync({
                checkBox: checkBox,
                radioGroup: radio
            }, {abortEarly: false})
            setErrorRadio(null)
            setErrorCheckBox(null)
        } catch (error) {
                const errors = error.errors
                console.log(errors)
                if (errors.length === 2){
                    setErrorCheckBox(errors[0])
                    setErrorRadio(errors[1])
                } else if (errors[0].includes('select')){
                    setErrorCheckBox(errors[0])
                    setErrorRadio(null)
                } else {
                    setErrorCheckBox(null)
                    setErrorRadio(errors[0])
                }
        }
    }
    useEffect(() => {
        if (errors.every((element) => element === null) && errors.length === advantages.length
        && errorRadio === null && errorCheckBox === null) {
            navigate('/3')
            dispatch(setRadioAction(radio))
            dispatch(setCheckBoxAction(checkBox))
        }
    }, [errors])

    return (
        <div className="main-page-container">
            <Stepper step={1}/>
            <div className="InputFirst">
                <label className="title-">Advantages</label>
                {advantageObj.map((data, index) =>
                        <Advantages props={data} error={errors[index]} key={data.id}/>
                    )}
                <button className="button-add" onClick={HandleClickAdd}><AddIcon/></button>
            </div>
            <div className="InputFirst CheckboxWrapper">
                <label className="title-">Checkbox group</label>
                <FormGroup className="CheckBox" onChange={(event) => {
                    const value = event.target.value
                    if (!checkBox.includes(value)) {
                        setCheckBox([...checkBox, value])
                    }
                    if (checkBox.includes(value)) {
                        setCheckBox(checkBox.filter((item) => item !== value))
                    }
                }}>
                    <FormControlLabel value={1} control={<Checkbox checked={checkBox.includes('1')}/>} label="1"/>
                    <FormControlLabel value={2} control={<Checkbox checked={checkBox.includes('2')}/>} label="2"/>
                    <FormControlLabel value={3} control={<Checkbox checked={checkBox.includes('3')}/>} label="3"/>
                </FormGroup>
                {errorCheckBox && <Error>{errorCheckBox}</Error>}
            </div>
            <div className="InputFirst RadioWrapper">
                <label className="title-">Radio group</label>
                <FormControl className='radio-group'>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={radio}
                        onChange={e => setRadio(e.target.value)}
                    >
                        <FormControlLabel value="1" control={<Radio/>} label="1"/>
                        <FormControlLabel value="2" control={<Radio/>} label="2"/>
                        <FormControlLabel value="3" control={<Radio/>} label="3"/>
                    </RadioGroup>
                </FormControl>
                {errorRadio && <Error>{errorRadio}</Error>}
            </div>
            <div className='btn-pos'>
                <Button outline onClick={() => navigate('/1')}>Назад</Button>
                <Button onClick={HandleClick}>Далее</Button>
            </div>
        </div>
    )
}