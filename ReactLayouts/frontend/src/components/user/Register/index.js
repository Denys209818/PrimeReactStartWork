import React, { useEffect, useRef, useState } from 'react';
import { Form, Formik, useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import InputTextBox from '../../TextFieldsFormik/InputTextBox';
import InputPasswordTextBox from '../../TextFieldsFormik/InputPasswordTextBox';
import InputEmailTextBox from '../../TextFieldsFormik/InputEmailTextBox';
import yupValidation from './yupValidation';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { PR_KEY, START_AUTH } from '../../../constants/reduxConstants';
import jwt from 'jsonwebtoken';

export const Register = () => {
    const [showMessage, setShowMessage] = useState(false);


    var  initialValues= {
        name: '',
        surname: '',
        email: '',
        password: ''
    }

    var refFormik = useRef();
    var dispatch = useDispatch();

    const dialogFooter = <div className="p-d-flex p-jc-center">
        <Button label="OK" className="p-button-text" autoFocus onClick={() => {
            setShowMessage(false);
            dispatch(push("/"));
        }} /></div>;

    const onSubmitRegister = (values) => {
        dispatch({type: START_AUTH, payload:values});
        var token = jwt.sign(values, PR_KEY);
        localStorage.setItem('token', token);
        setShowMessage(true);
    }

    return (
        <>

            <Dialog visible={showMessage}
                onHide={() => setShowMessage(false)}
                position="top"
                footer={dialogFooter}
                showHeader={false}
                style={{ width: '40vw' }}>
                <div>
                    <div className="d-flex justify-content-center mt-3">
                        <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    </div>
                    <h3 className="text-center mt-2">Реєстрацію завершено!</h3>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Ваш аккаунт зареєстровано! Тепер ви можете користуватися сайтом з правами,
                        які вам надаються при реєстрації. Права можна розширити звернувшись до адміністратора.
                    </p>
                </div>
            </Dialog>

            <div className="container mt-3">
                <div className="row">
                    <div className="offset-3 col-md-6 mt-3 p-4">
                        <h1 className="text-center">Реєстрація</h1>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmitRegister}
                            innerRef={refFormik}
                            validationSchema={yupValidation}
                        >
                            <Form>
                                <InputTextBox
                                    name="name"
                                    id="name"
                                    label="Ім'я"
                                />
                                <InputTextBox
                                    name="surname"
                                    id="surname"
                                    label="Прізвище"
                                />
                                <InputEmailTextBox
                                    name="email"
                                    id="email"
                                    label="Електронна пошта"
                                />
                                <InputPasswordTextBox
                                    name="password"
                                    id="password"
                                    label="Пароль"
                                />

                                <Button type="submit" label="Зареєструвати" className="mt-2" />
                            </Form>
                        </Formik>
                    </div>

                </div>
            </div>
     </>
    );
}

export default Register;