import { instance, createConfig } from ".";

export async function get(token) {
	const config = createConfig(token);
	const response = await instance.get("/users", config);
	return response;
}

export async function signUp(user) {
	const response = await instance.post("/signUp", user);
	console.log(response);
	return response;
}

export async function login(user) {
	const response = await instance.post("/login", user);
	return response;
}

export async function logout(token) {
	const config = createConfig(token);
	const response = await instance.delete("/logout", config);
	return response;
}
