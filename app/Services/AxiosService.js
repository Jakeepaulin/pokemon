// @ts-ignore
export const ApiServer = axios.create({
  baseURL: "https://pokeapi.co",
  timeout: 2500,
});

// @ts-ignore
export const SandboxServer = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com",
  timeout: 2500,
});

// /api/v2/pokemon
