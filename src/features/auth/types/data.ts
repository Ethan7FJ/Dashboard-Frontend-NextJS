export interface LoginData {
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: {
        id: number;
        nombre: string;
        email: string;
    };
}

export interface RegisterData {
    nombre: string,
    email: string;
    password: string;
}
