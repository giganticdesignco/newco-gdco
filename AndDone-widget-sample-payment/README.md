# Get started with the AndDone.js


AndDone Widget is a payment page hosted by AndDone where users complete all the steps of the payment process by selecting the payment method, selecting the price point and completing the payment on their browsers. The price charges and fee are configured via Merchant Area.

AndDone Widget is designed for easy, quick and secure methods for payment acceptance from your clients on websites. Using AndDone Widget, client's card details are transferred completely secure directly to the AndDone and do not stay on your site or server.


## Table of contents

<!-- toc -->

- [1. Clone the repository](#1-clone-the-repository)
- [2. Set up your environment variables](#2-set-up-your-environment-variables)
- [3. Run the sample server](#3-run-the-sample-server)
  - [node](#node)
- [4. Client side configurations](#4-client-side-configuration)
    - [Installation](#installation)
    - [How to initialize AndDone ?](#how-to-initialize-anddone)
      - [Create payment container](#create-payment-container)
        - [1. Default Container](#1-default-container)
        - [2. Dynamic Container](#2-dynamic-container)
      - [Initialize AndDone](#initialize-anddone)
        - [PluginOption Object](#pluginoption-object)
- [5. Customizing Plugin (Optional)](#5-customizing-plugin-optional)
  - [Themes](#themes)
  - [Variables](#variables)
- [6. Process your first payment](#6-process-your-first-payment)

<!-- tocstop -->

## 1. Clone the repository

Using https:

```bash
git clone https://github.com/AndDone-LLC/AndDone-widget-sample-payment.git
cd AndDone-widget-sample-payment
```

Alternatively, if you use ssh:

```bash
git clone git@github.com:AndDone-LLC/AndDone-widget-sample-payment.git
cd AndDone-widget-sample-payment
```


## 2. Set up your environment variables



Copy `.env.example` to a new file called `.env` and fill out the environment variables inside. `X-APP-KEY` and `X-API-KEY` must be filled out. Get your APP Key and API Key from the dashboard.
```bash
cp .env.example .env
```

> NOTE: `.env` files are a convenient local development tool. Never run a production application using an environment file with secrets in it.

## 3. Run the sample server



- After Adding your merchant API Key to the `x-api-key` variable
  and app key to the `x-app-key` variable in `.env` file
- This sample server consist of code which create payment intent and return the payment internet token when request is made from front end.
- Run the sample server:
- Once started with one of the commands below, the server will be running on http://localhost:4200 for the backend. 

##### Node

```bash
$ cd ./node
$ npm i
$ node server.js
```

<!-- - The sample server will start running on port 4200 -->

## 4. Client side configuration

### Installation

- Add the following HTML snippet to your web page, preferably in the `<head>` tag of your web page:

```
  <script src="https://paymentwidget.qat.anddone.com/andDone.js"></script>
```

>Note: To be compliant, always load AndDone.js from paymentwidget.anddone.com. Do not create your own bundle or install js on your hosted server.

## How to initialize AndDone ?

### create payment container

>###### Note: This will be the default container where the AndDone widget will be displayed.


- Following are the two simple ways to define a payment container you can use any one:

##### 1. Default Container

- Add an empty placeholder div with the property “payment-container” where you can display payment container.

 ```
         <!-- default container -->

        <div payment-container ></div>
 ```

##### 2. Dynamic Container

- Add an empty div to your checkout page with the “ID” which is unique on the page. This Id should be passed in the pluginOption object while initializing AndDone object. In the below sample code we are using “mywidget” as the container id.

  ###### Note: It is mandatory to pass a pluginOption object, if you want to use a dynamic container.

```
         <!-- Dynamic container -->

     <div id="mywidget" ></div>   //id of the container can be of your choice
```

### Initialize AndDone
- The payment intent token is a unique key returned from AndDone as part of a PaymentIntent. This key lets you initialize the AndDone instance to process the payment.
- If you already have the payment intent token then you can initialize the AndDone instance with same. 
- If you do not have payment intent token then make a request to your server with the checkout details which will return the token and then initialize the AndDone instance object with the payment-intent-token returned by your server.
- If you dont know how to create payment intent please use  [ sample server](#3-run-the-sample-server) in this repository for your reference
- Initialize AndDone widget only after successfully receiving payment intent token from server.

 ```
    let andDone = new AndDone(paymentIntentToken);
    OR
    let andDone = new AndDone(paymentIntentToken, pluginOption);
  ```

##### PluginOption Object

- Customize the theme by creating a pluginOption object. Use your company’s color scheme and font to make it match with the rest of your checkout page.

 ```

     let pluginOption ={
                      theme : "classic",   // classic, modern, minimal, vibrant
                      container: "DIV_ID" //replace with div id
                       }
  ```

>###### Note :-
>###### In case of default payment container div, there is no need to specify container id in pluginOption object.
>###### In case of dynamic div id, it is mandatory to provide id in pluginOption object else you will get error whereas the theme is optional in both cases.


## 5. Customizing Plugin   (Optional)

- Customize the plugin either using our themes or overriding the css variable in style tag. Use your company’s color scheme and font to make it match with the rest of your checkout page.

### Themes

- Start customizing plugins by picking a theme.
- The following themes are currently available:

  - classic
  - minimal
  - modern
  - vibrant

 ```

  let pluginOption ={
                    theme : "theme-name",   // classic, modern, minimal, vibrant
                   }

 ```

### Variables

- Start customizing plugins by updating the CSS variables.
- Set variable values  to change the appearance of components visible in the plugin. For each variable, you can define CSS values. You can even inspect the resulting DOM using the DOM explorer in your browser.
- Include the  CSS variables values in `body *` 



 ```
 <style>
    body * {
      --andDone-page-fontFamily: "Roboto";
      --input-field-border-radius: 4px;
 
     <-- !See all possible variables below -->
    }
  </style>
 ```


#### Commonly used variables:

| Variables  | Description   |
|---|---|
| `--andDone-container-textColor` |The text color of the AndDone UI     |
|`--andDone-page-fontFamily` |Font family of the AndDone JS|
|`--andDone-container-border-radius` |The border radius of the AndDone JS UI|
|`--andDone-label-fontWeight`|The font weight for the input label|
|`--input-field-fontSize`|Input fields font size|
|`--andDone-payButton-textColor`|Text color of the pay button|
|`--andDone-payButton-bgColor`|Background color of the pay button|
|`--tab-header-backgroundColor`|The background color of the tab bar|
|`--tab-header-active-tab-bgColor`|The background color of the active tab|
|`--tab-header-non-activeTab-BgColor`|The background color of the non-active tab|
|`--tab-header-non-activeTab-TextColor`|Text color of the non-active tab|
|`--tab-header-active-tab-text-color`|Text color of the active tab|
|`--input-error-borderColor`|A color used to indicate errors or destructive actions in the plugin|




## 6. Process your first payment

Sample Output Screen

![Example](sample-image.png)

- Navigate to [http://localhost:4242](http://localhost:4242) in your browser, enter `4000620000000007` as the test card number with a expiration date '03/30' and `737` as the CVV Code and click Confirm.
- You should see a payment confirmation page.
