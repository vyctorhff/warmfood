import { Application } from "@oak/oak";
import { create } from "./src/infra/http/router.ts";

const app = new Application();
const port = parseInt(Deno.env.get("SERVER_PORT") ??  '');
const router = create();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Running http://localhost:${port}`);
app.listen({ port: port });


