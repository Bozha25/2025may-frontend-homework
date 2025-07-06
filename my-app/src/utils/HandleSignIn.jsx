export default async function HandleSignIn(formData, isRemember) {
    try {
        console.log(formData);
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.errorMessage || 'Signin failed');
        }

        const result = await response.json();
        console.log('Signin success:', result);

        if (isRemember) {
            localStorage.setItem("rememberLogin", "true");
            localStorage.setItem("savedEmail", formData.email);
            localStorage.setItem("savedPassword", formData.password);
        } else {
            localStorage.setItem("rememberLogin", "false");
            localStorage.removeItem("savedEmail");
            localStorage.removeItem("savedPassword");
        }

        alert('Signin successful! Welcome back!');
    } catch (error) {
        console.error('Signin error:', error);
        alert(`${error}`);
    }
}