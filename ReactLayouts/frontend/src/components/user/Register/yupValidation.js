import * as Yup from 'yup';

export default Yup.object({
    email: Yup.string().email('Не коректна пошта!').required('Поле обов\'язкове для заповнення!'),
    name: Yup.string().required('Поле обов\'язкове для заповнення!'),
    surname: Yup.string().required('Поле обов\'язкове для заповнення!'),
    password: Yup.string().required('Поле обов\'язкове для заповнення!').min(8, 'Мінімальна кількість символів - 8')
});