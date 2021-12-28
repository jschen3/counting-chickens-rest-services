import * as Koa from "koa";
import * as Router from "koa-router";
import { getMenuItemsById, getMenuItemsByCategory, getMenuItemsByItemType} from "./get-menu-items";


var app = new Koa();
const router: Router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = { msg: "Hello world!" };

  await next();
});

router.get('/menu/:id', async(ctx:Koa.Context) =>{
  let resturantId = ctx.params.id;
  console.log("in get menu call params id value: "+resturantId);
  if (ctx.params.category != null && ctx.params.itemType==null){
    ctx.body=getMenuItemsByCategory(resturantId, ctx.params.category)
  }
  else if (ctx.params.itemType!=null){
    ctx.body=getMenuItemsByItemType(resturantId, ctx.params.itemType);
  }
  else{
    ctx.body=getMenuItemsById(resturantId)
  }  
});


// app.use(json());
// app.use(logger());

// Routes
app.use(router.routes());

app.listen(3005, () => {
  console.log("Koa started");
});