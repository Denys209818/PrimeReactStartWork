import { useField } from 'formik';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';
import React from 'react';
import { Divider } from 'primereact/divider';


const InputPasswordTextBox = ({ label, ...props }) => 
{
    const passwordHeader = <h6>Надійність паролю</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Пропозиції:</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>Мала літера</li>
                <li>Велика літера</li>
                <li>Має бути число</li>
                <li>Найменша кількість символів - 8</li>
            </ul>
        </React.Fragment>
    );
    const [field, meta] = useField(props);

    return (
        <div className="form-group mt-4">
            <span className="p-float-label">
                <Password inputClassName="form-control" {...field} {...props} weakLabel="Слабкий" mediumLabel="Середній" 
                strongLabel="Високий" promptLabel="Ведіть пароль"
                header={passwordHeader} footer={passwordFooter} toggleMask
                    className={classNames("d-block",
                        { 'p-invalid': (meta.error && meta.touched) })} />
                <label htmlFor={props.id || props.name} className={classNames({ 'p-error': meta.error&& meta.touched })}>{label}</label>
            </span>
            {(meta.error && meta.touched) && <small className="p-error">{meta.error}</small>}
        </div>
        );
}

export default InputPasswordTextBox;