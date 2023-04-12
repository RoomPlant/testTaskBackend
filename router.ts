import Router from "koa-router";
import { Context } from "koa";
import devices from "./devices/deviceList";

const router = new Router();

router.get('/devices', (ctx: Context) => {
	ctx.body = {
		devices: devices,
	}
})

export default router;