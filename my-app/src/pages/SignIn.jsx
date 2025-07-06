import PageLayout from "../components/PageLayout";
import PageTitle from "../components/PageTitle";
import FormInput from "../components/FormInput";
import HandleSignIn from "../utils/HandleSignIn";
import PasswordInput from "../components/PasswordInput";
import { useEffect, useState } from "react";

export default function SignIn() {
    const [isRemember, setIsRemember] = useState(localStorage.getItem("rememberLogin") === "true");

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        if (isRemember) {
            const savedEmail = localStorage.getItem("savedEmail");
            const savedPassword = localStorage.getItem("savedPassword");
            setFormData({
                email: savedEmail || '',
                password: savedPassword || ''
            });
        }
    }, []);

    return (
        <PageLayout
            PageTitle={
                <PageTitle
                    title={"Welcome to Paint Quote System"}
                    Info={`Sed ut perspiciatis unde omnis iste 
                        natus error sit voluptatem accusantium 
                        doloremque laudantium, 
                        totam rem aperiam, eaque ipsa 
                        quae ab illo inventore veritatis 
                        et quasi architecto beatae vitaedicta.`}
                />}
            FormInput={
                < FormInput
                    title="Sign In"
                    subTitle="Enter details to sign in your account"
                    btnAction="Sign In"
                    footerInfo="Don't have an account?"
                    footerAction="Sign Up"
                    isSignIn={true}
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={(formData) => HandleSignIn(formData, isRemember)}
                >
                    <div className="form-field">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email"
                            className="input-field"
                            placeholder="Enter your email address..."
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required />
                    </div>

                    <div className="form-field password-field">
                        <div className="password-title">
                            <label htmlFor="password">Password:</label>
                            <a href="forgot.html">Forgot?</a>
                        </div>
                        <PasswordInput
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            placeholder="Enter your password..."
                            required />
                    </div>

                    <div className="form-field">
                        <div className="checkbox-container">
                            <input type="checkbox" id="remember-me"
                                name="remember-me"
                                className="checkbox-field"
                                checked={isRemember}
                                onChange={(e) => { setIsRemember(e.target.checked) }}
                            />
                            <label htmlFor="remember-me">Remember
                                login</label>
                        </div>

                    </div>
                </FormInput >
            }
        />
    );
}