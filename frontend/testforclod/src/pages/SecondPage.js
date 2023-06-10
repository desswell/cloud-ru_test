import React, {useState} from 'react'
import Stepper from "../components/Steppper";
import {AddIcon} from "../icons";
import {Advantages} from "../components/Advantages";
import {addAdvantagesAction, useAdvantages} from "../store_redux/slices/dataUser";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup} from '@mui/material';
import Button from "../components/Button";


export function SecondPage() {
    const navigate = useNavigate()
    const advantages = useAdvantages()
    const dispatch = useDispatch()
    const [radio, setRadio] = useState('')
    const HandleClickAdd = () => {
        dispatch(addAdvantagesAction(""))
    }
    const HandleClick = () => {
        navigate('/3')
    }
    return (
        <div className="main-page-container">
            <Stepper step={1}/>
            <div className="InputFirst">
                <label className="title-">Advantages</label>
                {advantages.map((data, index) => <Advantages props={data} id={index}/>)}
                <button className="button-add" onClick={HandleClickAdd}><AddIcon/></button>
            </div>
            <div className="InputFirst CheckboxWrapper">
                <label className="title-">Checkbox group</label>
                <FormGroup className="CheckBox">
                    <FormControlLabel control={<Checkbox/>} label="1"/>
                    <FormControlLabel control={<Checkbox/>} label="2"/>
                    <FormControlLabel control={<Checkbox/>} label="3"/>
                </FormGroup>
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
            </div>
            <div className='btn-pos'>
                <Button outline onClick={() => navigate('/1')}>Назад</Button>
                <Button onClick={HandleClick}>Далее</Button>
            </div>
        </div>
    )
}