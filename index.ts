import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import api from './router';

const app = new Koa();

app.use(bodyParser());
app.use(cors({
	origin: "http://localhost:3000"
}));

app.use(api.routes());

app
	.listen(3030, () =>
		console.log("Server is running on port 3030")
	)
	.on('error', err =>
		console.log(err)
	);
