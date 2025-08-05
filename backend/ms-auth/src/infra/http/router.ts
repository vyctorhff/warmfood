import { Router, Context } from "@oak/oak";
import { Status } from "jsr:@oak/commons@1/status";
import { createLoginController } from "./controllers/login.controller.ts";

const router = new Router();

export const create = () => {
    return router;
};

// ###############################################################################
// Health
router.get("/health", (context) => {
    context.response.body = { status: "UP" };
    context.response.status = Status.OK;
});

// ###############################################################################
// Login
router.post("/login", async (context: Context) => {
  const loginController = createLoginController();
  const result = loginController.login(await context.request.body.json());
  
  context.response.body = result;
});
