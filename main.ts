function mainHandler(_req: Request): Response {
    return new Response("Hi Mon!", { status: 200 });
}

if (import.meta.main) {
    Deno.serve((req) => mainHandler(req));
}
