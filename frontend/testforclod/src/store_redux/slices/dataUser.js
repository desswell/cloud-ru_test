import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";
import {useState} from "react";


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
        setAdvantages(state, {payload}) {
            state.advantages = [...state.advantages, payload]
        },
        delAdvantages(state, {payload}) {
            state.advantages = state.advantages.filter((item, index) => index !== payload)
        },
        addAdvantages(state, {payload}) {
            state.advantages.push(payload)
        },
        setAbout(state, {payload}) {
            state.about = payload
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
export const {
    setPhone: setPhoneAction,
    setEmail: setEmailAction,
    setNickName: setNicknameAction,
    setName: setNameAction,
    setSurname: setSurnameAction,
    setSex: setSexAction,
    setAdvantages: setAdvantagesAction,
    delAdvantages: delAdvantagesAction,
    addAdvantages: addAdvantagesAction,
    setAbout: setAboutAction
} = DataSlice.actions


export default DataSlice.reducer