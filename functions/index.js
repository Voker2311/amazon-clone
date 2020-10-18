const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HconeFLwtRxl1xBxrAMMkUE86Bkst23QbLDONBjg7rykA0NCG6TBstUozzPozuKPmjKbGDnwa54HMYsMwjuHZWd00bhyqSGJU');

//API 

//App config
const app = express();

//Middlewares

app.use(cors({ origin:true }));
app.use(express.json());

//API Routes

app.get("/",(req,res) => {
    res.status(200).send('Hello world');
})

app.post("/payments/create", async (req,res) => {
    const total = req.query.total;
    console.log("Payment received >>>>> ",total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"inr"
    })

    //Created
    res.status(201).send({
        clientSecret:paymentIntent.client_secret,
    });
})


//Example endpoint
//http://localhost:5001/clone-36cd5/us-central1/api


exports.api = functions.https.onRequest(app);


//Listen Command
