export async function SignupApi({ email, password, name, surname, city }) {
    try {
        const response = await fetch("http://localhost:8090/auth/register", {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
                name,
                surname,
                city,
            }),
            headers: {
                "content-type": "application/json",
            },
        });
        if (response.status === 400) {
            const errorResponse = await response.json();
            if (errorResponse.username) {
                throw new Error(errorResponse.username);
            }
            if (errorResponse.email) {
                throw new Error(errorResponse.email);
            }
            if (errorResponse.password) {
                throw new Error(errorResponse.password);
            }
        }
        if (response.status === 500) {
            throw new Error("Сервер сломался");
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function SigninApi({ email, password }) {
    try {
        const response = await fetch("http://localhost:8090/auth/login", {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                "content-type": "application/json",
            },
        });
        if (response.status === 400) {
            const errorResponse = await response.json();
            if (errorResponse.username) {
                throw new Error(errorResponse.username);
            }
            if (errorResponse.email) {
                throw new Error(errorResponse.email);
            }
            if (errorResponse.password) {
                throw new Error(errorResponse.password);
            }
        }
        if (response.status === 500) {
            throw new Error("Сервер сломался");
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}
