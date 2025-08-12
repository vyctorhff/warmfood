import { Router, Context } from "@oak/oak";
import { Status } from "jsr:@oak/commons@1/status";
import { createLoginController } from "./controllers/login.controller.ts";
import { createHealthController } from "./controllers/health.controller.ts";

const router = new Router();

export const create = () => {
    return router;
};

// ###############################################################################
// Health
router.get("/health", (context) => {
  const healthController = createHealthController();
  const result = healthController.getStatus();

  context.response.body = result;
  context.response.status = Status.OK;
});

// ###############################################################################
// Login
router.post("/login", async (context: Context) => {
  const loginController = createLoginController();
  const result = await loginController.login(await context.request.body.json());
  
  context.response.body = result;
  context.response.status = Status.OK;
});

// ###############################################################################
// 