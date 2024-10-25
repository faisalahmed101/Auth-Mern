import express from 'express';
import dotenv from 'dotenv';
import {} from './Models/db.js'
import authRoute from './Routes/AuthRouter.js';
import { productRoute } from './Routes/productRouter.js';
import { isAuthenticate } from './middlewares/auth.js';


dotenv.config();
const app = express();

//middlewares
app.use(express.json())
app.use('/auth', authRoute)
app.use('/products', isAuthenticate, productRoute)

//server listening port
const port = process.env.PORT || 8080;

// application route
app.get('/', (req, res)=>{
    res.send('express server working');
})


//application listening
app.listen(port, ()=>{
    console.log(`app listen on ${port}`);
})