import { Server } from "node:http";
import { after, before, describe, it } from "node:test";
import { PORT } from "../src/config/constants.ts";


describe("Test Server", async () => {
	let httpServer: Server = {} as Server
	before(async () => {
		httpServer = (await import("../src/server.ts")).httpServer;
		await new Promise((resolve) => httpServer.once("listening", resolve));
	});
	after((_, done) => httpServer.close(done));

	it("Open conection with server", (_, done) => {
		const client = new WebSocket(`ws://localhost:${PORT}`)
		// client.onopen = (event) => console.info(`CLIENT: WebSocket is connected!`, event);
		// client.onclose = (event) => {
		// 	console.log(`CLIENT: disconnected!`, event);
		// };
		// client.onmessage = (event) => {
		// 	console.log(`CLIENT: I got a message!`, event.data);
		// };
		// client.onerror = (error) => {
		// 	console.error(`CLIENT: Web Socket error! msg:`, error);
		// 	client.close();
		// };
	});
});
