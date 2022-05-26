import './FormInput.css';

const FormInput = (props) =>{
    const {label, onChange, id, ...others} = props;

    return(
        <div class="form-floating mb-3">
            <input
                class="form-control" 
                onChange={onChange}
                id={id}
                {...others}
            />
            <label for={id}>{props.label}</label>
        </div>
    );
}
export default FormInput;