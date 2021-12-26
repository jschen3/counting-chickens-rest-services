import * as Koa from "koa";
import * as Router from "koa-router";

import * as logger from "koa-logger";
import * as json from "koa-json";
import { getMenuItemsById, getMenuItemsByCategory, getMenuItemsByItemType} from "./get-menu-items";

var app = new Koa();
const router: Router = new Router();

// router.get('/', async (ctx, next) => {
//   ctx.body = { msg: "Hello world!" };

//   await next();
// });

const routerOpts: Router.IRouterOptions = {
  prefix: '/menu'
}

router.get('/:id', async(ctx:Koa.Context) =>{
  console.log("in get menu call");
  let resturantId = ctx.params.id;
  ctx.body=getMenuItemsById(resturantId);
});


// app.use(json());
// app.use(logger());

// Routes
app.use(router.routes());

app.listen(3005, () => {
  console.log("Koa started");
});