import {TrashIcon} from "../icons";
import {useDispatch} from "react-redux";
import {delAdvantagesAction, useAdvantages} from "../store_redux/slices/dataUser";
import {useState} from "react";

export function Advantages(props) {
    const dispatch = useDispatch()
    const advantageDone = useAdvantages()[props.id]
    const [advantage, setAdvantage] = useState(advantageDone)
    const HandleClick = (index) => {
        dispatch(delAdvantagesAction(index))
    }
    return (
        <div className="field-advantage-">
            <input className="field-advantage" placeholder={`${props.id + 1} advantages`} value={advantage}
                   onChange={(event) => setAdvantage(event.target.value)}/>
            <button className="btn-trash" onClick={() => HandleClick(props.id)}><TrashIcon/></button>
        </div>
    )
}