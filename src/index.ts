import * as Koa from "koa";
import * as Router from "koa-router";
import { getMenuItemsByRestaurant, getMenuItemsByCategory, getMenuItemsByItemType} from "./get-menu-items-dynamo";


var app = new Koa();
const router: Router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = { msg: "Hello world!" };

  await next();
});

router.get('/menu/:id', async(ctx:Koa.Context) =>{
  let restaurantId = ctx.params.id;
  console.log("in get menu call params id value: "+restaurantId);
  let category=ctx.request.query.category;
  let itemType=ctx.request.query.itemType;
  console.log("category= ", category);
  console.log("itemType= ", itemType);
  if (category != null && itemType==null){
    ctx.body=await getMenuItemsByCategory(restaurantId, category);
  }
  else if (ctx.params.itemType!=null){
    ctx.body=await getMenuItemsByItemType(restaurantId, itemType);
  }
  else{
    ctx.body=await getMenuItemsByRestaurant(restaurantId);
  }  
});


// app.use(json());
// app.use(logger());

// Routes
app.use(router.routes());

app.listen(3005, () => {
  console.log("Koa started");
});