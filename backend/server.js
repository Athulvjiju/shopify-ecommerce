import express from 'express';
import data from "./data.js";

const app = express();
 //test
app.get('/api/products',(req,res)=>{
    res.send(data.products);
});

//backend api for returning product based on the slug
app.get('/api/products/slug/:slug',(req,res)=>{
    const product= data.products.find((x) => x.slug === req.params.slug);
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message:'Product Not Found'});
    }
});
app.get('/api/products/slug/:_id',(req,res)=>{
    const product= data.products.find((x) => x._id === req.params._id);
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message:'Product Not Found'});
    }
});

//to find the port that respond for backend
const port=process.env.PORT || 5000;
app.listen(port,()=>{                   //respond to the frontend
    console.log(`serve at http://localhost:${port}`);
});                                