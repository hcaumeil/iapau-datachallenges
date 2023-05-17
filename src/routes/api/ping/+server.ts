//import type { RequestHandler } from "@sveltejs/kit";
export const GET = ({ })=>{
    // const ping = request.headers.get('Ping');
    // if(ping==="ping"){

    // }
    return new Response(JSON.stringify('pong'));

}