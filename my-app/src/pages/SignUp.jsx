import PageLayout from "../components/PageLayout";
import PageTitle from "../components/PageTitle";
import FormInput from "../components/FormInput";
import HandleSignUp from "../utils/HandleSignUp";
import { useState } from "react";
import PasswordInput from "../components/PasswordInput";
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        companyName: '',
        password: '',
    });
    const [confirmPassword, setConfirmPassword] = useState("");

    const passwordsMatch = formData.password === confirmPassword;
    const navigate = useNavigate();

    return (
        <PageLayout
            PageTitle={
                <PageTitle
                    title={"Join the Paint Quote System"}
                    Info={`Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis
                            dis parturient montes, nascetur ridiculus mus. Donec
                            qu.`}
                />}
            FormInput={
                < FormInput
                    title="Sign Up"
                    subTitle="Fill in the details to create your account"
                    btnAction="Sign Up"
                    footerInfo="Already have an account?"
                    footerAction="Sign In"
                    isSignIn={false}
                    onSubmit={(formData) => HandleSignUp(formData, navigate)}
                    formData={formData}
                    setFormData={setFormData}
                    btnDisabled={() => !passwordsMatch}
                >
                    <div className="form-field">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="input-field"
                            placeholder="Enter your email address..."
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required />
                    </div>

                    <div className="form-field">
                        <label htmlFor="companyName">Company Name:</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            className="input-field"
                            placeholder="Enter your company name..."
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            required />
                    </div>

                    <div className="form-field">
                        <label htmlFor="password">Password:</label>      
                        <PasswordInput
                            id="password"
                            name="password"
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            placeholder="Enter your password..."
                            required/>
                    </div>

                    <div className="form-field">
                        <label htmlFor="confirm-password">Confirm
                            Password:</label>
                        <PasswordInput
                            id="confirm-password"
                            name="confirm-password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Please confirm your password..."
                            required/>

                        {!passwordsMatch && confirmPassword.length > 0 && (
                            <span style={{ color: "red", fontSize: "0.9rem" }}>
                                Passwords do not match
                            </span>
                        )}

                    </div>
                </FormInput >
            }
        />
    );
}