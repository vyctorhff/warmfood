import { Application } from "@oak/oak";
import { create } from "./src/infra/http/router.ts";

const app = new Application();
const port = 8081;
const router = create();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Running http://localhost:${port}`);
app.listen({ port: port });


