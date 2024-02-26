const HOST = process.env.HOST ?? "http://localhost";
const PORT = process.env.PORT ?? 3334;
const BASE_URL = `${HOST}:${PORT}`;
export { HOST, PORT, BASE_URL };
