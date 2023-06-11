import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";


const DataSlice = createSlice({
    name: "data",
    initialState: {
        phone: '',
        email: '',
        nickname: '',
        name: '',
        surname: '',
        sex: 'n',
        advantages: [],
        radio: '',
        checkbox: [],
        about: ''
    },
    reducers: {
        setPhone(state, {payload}) {
            state.phone = payload
        },
        setEmail(state, {payload}) {
            state.email = payload
        },
        setNickName(state, {payload}) {
            state.nickname = payload
        },
        setName(state, {payload}) {
            state.name = payload
        },
        setSurname(state, {payload}) {
            state.surname = payload
        },
        setSex(state, {payload}) {
            state.sex = payload
        },
        delAdvantages(state, {payload}) {
            state.advantages = state.advantages.filter((item, index) => index !== payload)
        },
        addAdvantages(state, {payload}) {
            state.advantages = [...state.advantages, payload]
        },
        setAbout(state, {payload}) {
            state.about = payload
        },
        updateAdvantage(state, {payload}) {
            state.advantages[payload.id] = payload.newValue
        },
        setRadio(state, {payload}){
            state.radio = payload
        },
        setCheckBox(state, {payload}) {
            state.checkbox = payload
        }
    }
})

export const usePhone = () =>
    useSelector((state) => state.data.phone)
export const useEmail = () =>
    useSelector((state) => state.data.email)
export const useNickname = () =>
    useSelector((state) => state.data.nickname)
export const useName = () =>
    useSelector((state) => state.data.name)
export const useSurname = () =>
    useSelector((state) => state.data.surname)
export const useSex = () =>
    useSelector((state) => state.data.sex)
export const useAdvantages = () =>
    useSelector((state) => state.data.advantages)
export const useAbout = () =>
    useSelector((state) => state.data.about)
export const useRadio = () =>
    useSelector((state) => state.data.radio)
export const useCheckBox = () =>
    useSelector((state) => state.data.checkbox)
export const useData = () =>
    useSelector((state) => state.data)

export const {
    setPhone: setPhoneAction,
    setEmail: setEmailAction,
    setNickName: setNicknameAction,
    setName: setNameAction,
    setSurname: setSurnameAction,
    setSex: setSexAction,
    delAdvantages: delAdvantagesAction,
    addAdvantages: addAdvantagesAction,
    setAbout: setAboutAction,
    updateAdvantage: updateAdvantageAction,
    setCheckBox: setCheckBoxAction,
    setRadio: setRadioAction
} = DataSlice.actions


export default DataSlice.reducer