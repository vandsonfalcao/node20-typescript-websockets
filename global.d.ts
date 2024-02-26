declare global {
	namespace NodeJS {
		interface ProcessEnv {
			HOST: string;
			PORT: number;
		}
	}

	interface WebSocket extends EventTarget {
		binaryType: BinaryType;
		readonly bufferedAmount: number;
		readonly extensions: string;
		onclose: ((this: WebSocket, ev: CloseEvent) => any) | null;
		onerror: ((this: WebSocket, ev: Event) => any) | null;
		onmessage: ((this: WebSocket, ev: MessageEvent) => any) | null;
		onopen: ((this: WebSocket, ev: Event) => any) | null;
		readonly protocol: string;
		readonly readyState: number;
		readonly url: string;
		close(code?: number, reason?: string): void;
		send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
		readonly CONNECTING: 0;
		readonly OPEN: 1;
		readonly CLOSING: 2;
		readonly CLOSED: 3;
		addEventListener<K extends keyof WebSocketEventMap>(
			type: K,
			listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any,
			options?: boolean | AddEventListenerOptions
		): void;
		addEventListener(
			type: string,
			listener: EventListenerOrEventListenerObject,
			options?: boolean | AddEventListenerOptions
		): void;
		removeEventListener<K extends keyof WebSocketEventMap>(
			type: K,
			listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any,
			options?: boolean | EventListenerOptions
		): void;
		removeEventListener(
			type: string,
			listener: EventListenerOrEventListenerObject,
			options?: boolean | EventListenerOptions
		): void;
	}

	declare var WebSocket: {
		prototype: WebSocket;
		new (url: string | URL, protocols?: string | string[]): WebSocket;
		readonly CONNECTING: 0;
		readonly OPEN: 1;
		readonly CLOSING: 2;
		readonly CLOSED: 3;
	};
}
export { };

