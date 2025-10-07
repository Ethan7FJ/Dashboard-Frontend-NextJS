export const authService = {
  async login(email: string, password: string) {
    const res = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    });
    return res.json();
  },
};
