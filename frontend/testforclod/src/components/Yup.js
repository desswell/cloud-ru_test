import * as yup from 'yup';
const regK = /[A-Za-zА-Яа-я-0-9]/g;
const regN = /[0-9]/g;
const schema = yup.object({
    email: yup.string()
        .email()
        .required('Please enter your email'),
    nickname: yup.string()
        .min(1)
        .max(30)
        .matches(regK, 'You can not use special symbols')
        .required('Please enter your nickname'),
    name: yup.string()
        .min(1)
        .max(50)
        .matches(regN, 'You can not use numbers')
        .required('Please enter your name'),
    surname: yup.string()
        .min(1)
        .max(50)
        .matches(regN, 'You can not use numbers')
        .required('Please enter your surname'),
    about: yup.string()
        .max(200)
        .required('Please enter your description'),
});