import * as yup from 'yup';

const regK = /^[a-zA-Z0-9\u0410-\u044F ]+$/;
const regSymbols =  /^[a-zA-Z\u0410-\u044F ]+$/;
const regN = /[0-9]/g;
const regEmail = /\S+@\S+\.\S+/;
const phoneRegExp = /^\+7 \(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
export const schemaMainPage = yup.object().shape(
    {
        email: yup.string()
            .matches(regEmail, 'Email must be valid. Example: example@example.ru'),
        phone: yup.string()
            .matches(phoneRegExp, "Invalid phone number. Example: +7 (999)-999-99-99")
    }
);
export const schemaFirstPage = yup.object().shape(
    {
        nickname: yup.string().required('1').matches(regK, '4'),
        name: yup.string().required('2').matches(regSymbols, '5'),
        surname: yup.string().required('3').matches(regSymbols, '6'),
        sex: yup.string().oneOf(['Man', 'Woman'], '7')
    }
)
export const schemaSecondPage = yup.object().shape(
    {
        advantages: yup.string().min(1, 'Please, write or delete advantage'),
        checkBox: yup.array().of(yup.string().min(1, 'Please, select something')),
        radioGroup: yup.string().required('Please, choose something')
    }
)

