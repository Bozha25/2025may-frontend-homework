export default async function HandleSignUp(formData, navigate) {
    try {
        console.log(formData);
        const requestBody = {
            email: formData.email,
            password: formData.password,
            PhotographyCompanyName: formData.companyName,
        };
        const response = await fetch('/api/users/register-company', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('Sign up failed:', error);
            throw new Error(error.errorMessage || 'Sign up failed');
        }

        const result = await response.json();
        console.log('Sign up success:', result);

        alert('Sign up successful! You can now sign in.');
        navigate("/signin")
    } catch (error) {
        console.error('Sign up error:', error.message);
    }
}