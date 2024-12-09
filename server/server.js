const express = require("express")
const cors = require('cors');
 

const filesRouter = require('./routes/files')
const productRouter = require('./routes/product')
const usersRoutes = require('./routes/users')
const categoryRouter =require('./routes/category')
const orderRouter =require('./routes/order')


const app= express();

app.use(express.json())

app.use(cors({
	origin: '*'
}));

// app.use(authMiddleware);


app.use("/file", filesRouter);
app.use("/product", productRouter);
app.use("/users", usersRoutes);
app.use("/category", categoryRouter);
app.use("/order", orderRouter);


app.listen(8080, ()=> console.log("Listening on port 8080") )