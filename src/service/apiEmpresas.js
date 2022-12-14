import { instance, createConfig } from ".";

export async function create(empresa, token) {
	const config = createConfig(token);
	const response = await instance.post("/empresas/create", empresa, config);
	return response;
}

export async function get(token) {
	const config = createConfig(token);
	const response = await instance.get("/empresas", config);
	return response;
}
