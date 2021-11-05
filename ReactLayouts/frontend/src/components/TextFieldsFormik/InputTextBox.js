import { useField } from 'formik';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';


const InputTextBox = ({ label, ...props }) => 
{
    const [field, meta] = useField(props);

    return (
        <div className="form-group mt-4">
            <span className="p-float-label">
                <InputText {...field} {...props}
                    className={classNames("form-control", 
                    { 'p-invalid': (meta.error && meta.touched) })} />
                <label htmlFor={props.id || props.name} className={classNames({ 'p-error': meta.error && meta.touched })}>{label}</label>
            </span>
            {(meta.error && meta.touched) && <small className="p-error">{meta.error}</small>}
        </div>
        );
}

export default InputTextBox;