import { Link } from 'react-router-dom';
import './FormInput.css';

const FormInput = ({ title, subTitle, btnAction, footerInfo, footerAction, isSignIn,
    onSubmit, formData, setFormData, btnDisabled, children }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (onSubmit) {
            await onSubmit(formData);
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="form-title">
                    <h1>{title}</h1>
                    <p>{subTitle}</p>
                </div>

                <div className="form-input">
                    {children}

                    <div className="form-field">
                        <button type="submit"
                            className="submit-btn" 
                            disabled={typeof btnDisabled === 'function' ? btnDisabled() : btnDisabled}
                            >
                                {btnAction}
                                </button>
                    </div>

                    <div className="form-field footer">
                        <p>
                            {footerInfo} <Link to={isSignIn ? "/signup" : "/signin"}>{footerAction}</Link>
                        </p>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default FormInput;