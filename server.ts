import {serve} from 'https://deno.land/std@0.117.0/http/server.ts'

serve(
	_req =>
		new Response(`Welcome to Deno! Thanks for the ${_req.method} request.`),
	{addr: ':8000'}
)

// const s = serve({port: 8080})

// for await (const req of s) {
// 	const message: string = `Welcome to Deno. Thanks for the ${req.method} request. `
// 	req.respond({body: message})
// }
