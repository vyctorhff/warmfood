import { Router } from "@oak/oak";
import { Status } from "jsr:@oak/commons@1/status";
import { createHealthController } from "./controllers/health.controller.ts";
import { createUserController } from "./controllers/user.controller.ts";

const router = new Router();

export const create = () => {
    return router;
};

// ###############################################################################
// Health

router.get("/user/health", (context) => {
  const healthController = createHealthController();
  const result = healthController.getStatus();

  context.response.body = result;
  context.response.status = Status.OK;
});

// ###############################################################################
// Get user

router.get("/user/email/:email", async (context) => {
  // const { email } = getQuery(ctx, { mergeParams: true });
  const { email } = context.params;

  const controller = createUserController();
  const result = await controller.getByEmail(email);

  context.response.body = result;
  context.response.status = Status.OK;
});

// ###############################################################################
// 