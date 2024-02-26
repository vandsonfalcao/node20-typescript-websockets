import { IncomingHttpHeaders, createServer } from "node:http";
import { PORT } from "./config/constants.ts";

type CustomHeaders = IncomingHttpHeaders & { "sec-websocket-key": string };
const httpServer = createServer((request, response) => {
	response.writeHead(200);
	response.end("hey there");
});
httpServer.on("connection", (event) => console.log(`SERVER: WebSocket is connected!`));
httpServer.on("error", (error) => console.log(`SERVER: Error!!!`, error));
httpServer.on("close", () => console.log("SERVER: close"));
httpServer.on("upgrade", (request, socket, head) => {
	const { "sec-websocket-key": webClientSocketKey } = request.headers as CustomHeaders;
	console.log(webClientSocketKey)
});
httpServer.listen(PORT, () => console.info(`SERVER: running at port ${PORT}`));

export { httpServer };

