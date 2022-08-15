const express = require("express");
var fetch = require('node-fetch');
var cors = require('cors');
require("dotenv").config();
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());


const APP_PORT = process.env.APP_PORT || 4200;
const API_KEY = process.env.API_KEY;
const APP_KEY = process.env.APP_KEY; 
const ANDDONE_API = process.env.ANDDONE_API;

//create a server endpoint


app.post("/create-payment-intent", async (req, res) => {

	//Fetching the payment details from the request body
	const { amount,title,expiresIn } = req.body;

	// Create a PaymentIntent with the order details
	var data = JSON.stringify({
		"amount": amount,
		"title": title,
		"shortDescription": "shortDescription",
		"paymentDescription": "paymentDescription",
		"invoiceNumber": "invoiceNumber-005",
		"ExpiresIn": expiresIn,
		"intent": {
			"paymentTypes": [
				"DebitCard",
				"CreditCard",
				"ACH"
			]
		}
	});

	// NOTE:Please replace the following with your own API key and APP Key
	var requestOptions = {
		method: 'POST',
		headers: {
			"x-app-key":APP_KEY,        // replace with your  app key in .env file
			"x-api-key":API_KEY,       // replace with your api key in .env file
			"Content-Type": "application/json"
		},
		body: data,
		redirect: 'follow'
	};

	// Sending a request to the AndDone API endpoint, which will return payment intent details
	fetch(`${ANDDONE_API}/paymentintents`, requestOptions)
		.then(response => response.json())
		.then(result =>  
	{   
	
		// Send the PaymentIntent token back to the frontend
			return res.send({
				paymentIntentToken: result.paymentToken
			})

	})
	.catch(error => console.log('error', error));
});

app.post("/create-prospect", async (req, res) => {

	const body = req.body;
	const postData = JSON.stringify({
		"firstName": body.firstname,
		"lastName": body.lastname,
		"company": body.company,
		"email": body.email,
		"phone": body.phone,
		"city": body.city,
		"state": body.state,
		"postalCode": body.postal,
	});

	var requestOptions = {
		method: 'POST',
		headers: {
			'accept': 'text/plain',
			'ApiKey': 'Nfvy2dYgOZcuf4HepKLnJJj1Cl4qkEIVerpvs8hdpXc',
			'Content-Type': 'application/json'
		},
		body: postData,
		redirect: 'follow'
	};

	// Sending a request to the Flywheel API to create a new prospect in Salesforce.
	fetch(`https://qaapiiris.cottinghambutler.com/api/v1/prospect`, requestOptions)
		.then(response => response.json())
		.then(result => {
			// Send a response back to the frontend
			console.log(result);
			if(result.status === 400) {
				return res.send({
					status: 400,
					msg: result.title
				})
			} else {
				return res.send({
					status: 200,
					prospect_id: result.id
				})
			}
		})
		.catch(error => console.log('error', error));
});

//server listening on port 4200
app.listen(APP_PORT, () => {console.log(`Server listening on http://localhost:${APP_PORT}`)});