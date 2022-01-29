const express = require('express');
const WebSocket = require('ws');
const localtunnel = require('localtunnel');
require('dotenv').config()
const puppeteer = require('puppeteer');
//const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 4001;
const obj_token = 'grant_type=client_credentials&scope='+process.env.SCOPE+'&client_id='+process.env.BITYID+'&client_secret='+process.env.BITY_SECRET;
//const fs = require('fs');
const http = require('http');


/*

*/


const fs = require('fs');

/*const MongoClient = require('mongodb').MongoClient;

const mongo_url = 'mongodb://127.0.0.1:27017';
const db_name = 'education';
const collection_name = 'inst';

const csvjson = require('csvjson');

var opt = {
  delimiter : ';', // optional
  quote     : '"' // optional
};

const client = new MongoClient(mongo_url);

const csv_origin = {
  value : fs.readFileSync('fr-en-annuaire-education.csv', 'utf8')
}

const json_obj = csvjson.toObject(csv_origin.value, opt);

client.connect((err)=>{
  if (!err){
    console.log("Connected successfully to server");
    const collection = client.db(db_name).collection(collection_name);
    collection.insertMany(json_obj)
  }else{console.log(err);}
})


//fs.writeFileSync("modified.json", JSON.stringify(json_obj));

const missing_char = spec_char.find(element => csv_origin.value.indexOf(element) === -1)

if (missing_char)
  {
  const mod = csv_origin.value.replace(/,+/g,missing_char);
  const modified = mod.replace(/;+/g,',')
  console.log(`${missing_char} character checked`);
  fs.writeFileSync("modified.csv", modified);
  exec(`mongoimport --db=${db_name} --collection=${collection_name} --type=csv --headerline --file modified.csv`,
  (error, stdout, stderr)=>{
    if (error) {
      console.warn(error);
    } else if (stdout) {
      // Here substitution of ${missing_char} with ","
      client.connect((err)=>{
        if (!err){
          console.log("Connected successfully to server");
          const collection = client.db(db_name).collection(collection_name);

        }else{console.log(err);}
      })
      console.log(stdout); 
    } else {
      console.log(stderr);
    }
  })
  }
*/
  const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  };
/*
  (async() => {
    console.log('stiamo scaricando');
    const jsssson = await axios.get('https://data.education.gouv.fr/explore/dataset/fr-en-annuaire-education/download/?format=json&timezone=Europe/Berlin&lang=en')
    console.log(jsssson.data);
  })()*/

(async()=> {
  console.log('stiamo scaricando');
  const jsssson = await axios.get('https://data.education.gouv.fr/explore/dataset/fr-en-annuaire-education/download/?format=csv&timezone=Europe/Berlin&lang=fr&use_labels_for_header=true&csv_separator=%3B');
  console.log(jsssson.data);
  console.log(typeof jsssson.data);
} )()

/* This is for StealthEx integration
(async()=>{
  const api_key_stealth = 'f24e33ff-bbaf-42dd-a4da-9dc41e152aad';
  // List of All supported crypto fixed
  const get_url_fixed = `https://api.stealthex.io/api/v2/currency?api_key=${api_key_stealth}&fixed=true&fiat=false`;
    // List of All supported crypto floating
  const get_url_floating = `https://api.stealthex.io/api/v2/currency?api_key=${api_key_stealth}&fixed=false&fiat=false`;
    // List of All supported crypto starting from Tron - FIXED
  const get_url_tron_fixed = `https://api.stealthex.io/api/v2/pairs/trx?api_key=${api_key_stealth}&fixed=true&fiat=false`;
    // List of All supported crypto starting from Tron - FLOATING
  const get_url_tron_floating = `https://api.stealthex.io/api/v2/pairs/trx?api_key=${api_key_stealth}&fixed=false&fiat=false`;
  const tot_fix = await axios.get(get_url_fixed);
  console.log(tot_fix.data);
  const tot_flo = await axios.get(get_url_floating);
  console.log(tot_flo.data);
  const tot_tron_fix = await axios.get(get_url_tron_fixed);
  console.log(tot_tron_fix.data);
  const tot_tron_flo = await axios.get(get_url_tron_floating);
  console.log(tot_tron_flo.data);
  const array_symbols_fix = tot_fix.data.map(x => x.symbol);
  const array_symbols_flo = tot_flo.data.map(x => x.symbol);
  const excluded_fix =  array_symbols_fix.map(x => {if (!tot_tron_fix.data.includes(x)) return x } ).filter(element => element);
  console.log(excluded_fix);
  const excluded_flo =  array_symbols_flo.map(x => {if (!tot_tron_flo.data.includes(x)) return x } ).filter(element => element);
  console.log(excluded_flo);
  console.log('-------------------------------------------------');
  console.log(`total fix length = ${tot_fix.data.length}`);
  console.log(`total flo length = ${tot_flo.data.length}`);
  console.log(`total tron fix length = ${tot_tron_fix.data.length}`);
  console.log(`total tron flo length = ${tot_tron_flo.data.length}`);
  console.log('-------------------------------------------------');

} )()*/


//root@ojasapp.duckdns.org
/*
(async ()=> {
  try{
    const pro_username = "rama";
    const pro_pass = "krishna";
    const pro = {"user": {"username": pro_username, "password": pro_pass, "confirm": pro_pass}}
    const data = JSON.stringify(pro);
    const pro_login = {"username": pro_username, "password": pro_pass, "confirm": pro_pass};
    const data_login = JSON.stringify(pro_login);
    const url = "https://coinos.io/api"
    const options = {
      headers: { 'content-type': 'application/json' },
    };
    try{
    const axios_ord = await axios.post(url+"/register",data,options);
    console.log(axios_ord.data);
    }catch(e){console.log(e);}
    console.log("-------------GETTING-TOKEN-AND-LOGIN---------");
    const axios_token = await axios.post(url+"/login",data_login,options);
    console.log(axios_token.data);
    console.log(axios_token.data.user.accounts);
    const token = axios_token.data.token
    const optionsII = {
      headers : {
        'Authorization': 'Bearer '+ token,
        'Content-Type': 'application/json' ,
      }
    }
    const options_ws = JSON.stringify({"type":"login","data":token});
    const ws = new WebSocket("wss://coinos.io/ws")
    ws.addEventListener("open", () =>{
      console.log("We are connected");
      ws.send(options_ws);
    });
    
    ws.addEventListener("message", (msg)=>{
      //console.log(typeof msg.data);
      
      const JSONed = JSON.parse(msg.data);
      console.log(JSONed);
      if (JSONed.type === "login"){
        console.log("Logged in ws");
      }
      if (JSONed.type === "to"){
        console.log(`To : ${JSONed.data.username}`);
      }
      if ( JSONed.type === "payment"){
        console.log(`${JSONed.data.hash} of ${JSONed.data.amount} sat`);
      }
    })
    console.log("-------------GETTING-LEGACY-ADDRESS-----------");
    const axios_legacy = await axios.get(url+"/address?network=bitcoin&type=legacy",optionsII);
    console.log(axios_legacy.data);
    const address = axios_legacy.data.address
    console.log("Created a new LEGACY BTC address = ", address);
    console.log("-------------CREATING-AN-INVOICE-TO-ASSOCIATE-ADDRESS-----------");
    const invoice = JSON.stringify({"invoice": {"address": address, "network": "bitcoin", amount: 0.000023,memo:'OJAS.rocks',uuid:'afosnscomaoidfas'}, "user": {"username": pro_username}})
    const invia_invoice = await axios.post(url+"/invoice",invoice,optionsII)
    console.log("-------------RISULTATO-INVOICE-LEGACY---------");
    console.log(invia_invoice.data);
    console.log("-------------IS-INTERNAL-LEGACY---------");
    const axios_legacy_internal = await axios.get(url+"/isInternal?address="+address,optionsII)
    console.log("is Internal? ",axios_legacy_internal.data);
    console.log("-------------NOW-SIGNING-MESSAGE-----------");
    //const message = 'This message is part of the process of placing an exchange order on bity.com. To proceed, Bity is required to verify that you own the destination crypto address. By signing this message with your wallet, you are confirming 1) that you are the sole owner of the crypto address below and 2) that you will be sending your own funds to Bity. If you did not initiate this process yourself, do not sign this message.'//
    const messag = 'Your order id: 11f0d323-0c4b-429f-a993-c42c2ef4c84e\nYour IBAN: IT30A03268223000EM000571327\nYour crypto address: 15rfBB2oyRsebfK6wNEdQpms3KaGve6ASJ\nYour crypto address type: BTC\b';
    const message = messag.slice(0,-1);
    //const message = "this is a simple message\nThis comes after a newline";
    //console.log(`ms_unicode = ${ms.toUnicode()}`);
    //const message = "{\"address\":\"1G7NRA9vc9KusKnmn5wCZ1Tn15e5jSwuCc\",\"message\":\"This message is part of the process of placing an exchange order on bity.com. To proceed, Bity is required to verify that you own the destination crypto address. By signing this message with your wallet, you are confirming 1) that you are the sole owner of the crypto address below and 2) that you will be sending your own funds to Bity. If you did not initiate this process yourself, do not sign this message.\\n\\nYour order id: c0fdb7c8-0145-4fbb-b163-dbf551696817\\nYour IBAN: IT30A03268223000EM000571327\\nYour crypto address: 1G7NRA9vc9KusKnmn5wCZ1Tn15e5jSwuCc\\nYour crypto address type: BTC\\n\"}"
    const bod = JSON.stringify({"address": address, "message": message});
    console.log([url+"/signMessage",bod,optionsII]);
    const axios_signing_message = await axios.post(url+"/signMessage",bod,optionsII,);
    console.log('----------------MESSAGE-FROM-SIGNING-------------');
    console.log(axios_signing_message.data);
    console.log('-------END-SIGNING-----');
        // Ottieni Fee prima
        const fee_payload = JSON.stringify({
          "address":"bc1qw526plxup0alazd96l75ph6ug0u35r0z3wd4g2",
          "amount":2568,
          "asset":"6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d",
          "feeRate":null,
          "replaceable":false})
        const get_fee_et_tx = await axios.post(url+"/bitcoin/fee",fee_payload,optionsII) 
        // FAi questa richiesta dopo aver inserito l'address e dopo aver fatto un cambio di rate preferito
        // check timing of Execution
        console.log('-------------FEES------Bech32--------');
        console.log(get_fee_et_tx.data);
    

    console.log("-------------GETTING-bech32-ADDRESS-----------");
    const axios_bech32 = await axios.get(url+"/address?network=bitcoin&type=bech32",optionsII);
    console.log(axios_bech32.data);
    const address_bech32 = axios_bech32.data.address
    console.log("Created a new bech32 BTC address = ", address_bech32);

    console.log("-------------CREATING-AN-INVOICE-TO-ASSOCIATE-bech32-ADDRESS-----------");
    const invoice_bech32 = JSON.stringify({"invoice": {"address": address_bech32, "network": "bitcoin"}, "user": {"username": pro_username}})
    const invia_invoice_bech32 = await axios.post(url+"/invoice",invoice_bech32,options)
    console.log("-------------RISULTATO-INVOICE-bech32---------");
    console.log(invia_invoice_bech32.data);
    const user_id = invia_invoice_bech32.data.user_id;
    const account_id = invia_invoice_bech32.data.account_id
    console.log("-------------IS-INTERNAL-bech32---------");
    const axios_bech32_internal = await axios.get(url+"/isInternal?address="+address_bech32,optionsII)
    console.log("is Internal? ",axios_bech32_internal.data);



    console.log("-------------GETTING-p2sh-segwit-ADDRESS-----------");
    const axios_p2sh = await axios.get(url+"/address?network=bitcoin&type=p2sh-segwit",optionsII);
    console.log(axios_p2sh.data);
    const address_p2sh = axios_p2sh.data.address
    console.log("Created a new _p2sh BTC address = ", address_p2sh);

    console.log("-------------CREATING-AN-INVOICE-TO-ASSOCIATE-p2sh-segwit-ADDRESS-----------");
    const invoice_p2sh = JSON.stringify({"invoice": {"address": address_p2sh, "network": "bitcoin"}, "user": {"username": pro_username}})
    const invia_invoice_p2sh = await axios.post(url+"/invoice",invoice_p2sh,options)
    console.log("-------------RISULTATO-INVOICE-p2sh-segwit---------");
    console.log(invia_invoice_p2sh.data);
    console.log("-------------IS-INTERNAL-p2sh-segwit---------");
    const axios_p2sh_internal = await axios.get(url+"/isInternal?address="+address_p2sh,optionsII)
    console.log("is Internal? ",axios_p2sh_internal.data);

  ////////////////
    console.log("-------------GETTING-liquid-ADDRESS-----------");
    const axios_liquid = await axios.get(url+"/address?network=liquid",optionsII);
    console.log(axios_liquid.data);
    const address_liquid = axios_liquid.data.confidentialAddress;
    console.log("Created a new liquid BTC address = ", address_liquid);
    console.log("and address = ", axios_liquid.data.address);
    console.log("-------------CREATING-AN-INVOICE-TO-ASSOCIATE-liquid-ADDRESS-----------");
    const invoice_liquid = JSON.stringify({"invoice": {"address": address_liquid, "network": "liquid"}, "user": {"username": pro_username}})
    const invia_invoice_liquid = await axios.post(url+"/invoice",invoice_liquid,options)
    console.log("-------------RISULTATO-INVOICE-liquid---------");
    console.log(invia_invoice_liquid.data);
    const axios_liquid_internal = await axios.get(url+"/isInternal?address="+address_liquid,optionsII)
    console.log(axios_liquid_internal.data);
  // know the name of the lightning

    console.log("-------------GETTING-lightning-ADDRESS-----------");
    const per_invoice_ln = JSON.stringify({amount: null, memo: null, tip: null})
    const axios_lightning = await axios.post(url+"/lightning/invoice",per_invoice_ln,optionsII);
    console.log(axios_lightning.data);
    const address_lightning = axios_lightning.data
    console.log("Created a new lightning BTC address = ", address_lightning);
    console.log("--------------lightning query--------");
    const query_pld = JSON.stringify({"payreq":address_lightning})
    const axios_lightning_query = await axios.post(url+"/lightning/query",query_pld,optionsII)
    console.log("------RESULT-QUERY------");
    console.log(axios_lightning_query.data);
    console.log("-------------CREATING-AN-INVOICE-TO-ASSOCIATE-lightning-ADDRESS-----------");
    const invoice_lightning = JSON.stringify({"invoice": {"address": address_lightning, "network": "lightning"}, "user": {"username": pro_username}})
    const invia_invoice_lightning = await axios.post(url+"/invoice",invoice_lightning,options)
    console.log("-------------RISULTATO-INVOICE-lightning---------");
    console.log(invia_invoice_lightning.data);
    /*const axios_lightning_internal = await axios.get(url+"/isInternal?address="+address_lightning,optionsII)
    console.log(axios_lightning_internal.data);

/////////////////////----SEND-----
    console.log("-------------SENDING-lightning-----------")
        console.log("-----------PAYMENTS---------------");
        const get_payments =  await axios.get(url+'/payments',optionsII)
        console.log(get_payments.data);
        //console.log(axios_add_account.data);
        console.log("---------CHANGE-USER-CURRENCY--------");
        // GET info account

        console.log("-------------RESULT-GET-INFO-----------");

        const axios_get_info = await axios.get(url+"/info",optionsII)
        console.log(axios_get_info.data);
        console.log('------SHIFT-ACCOUNT');
        const ii = JSON.stringify({id: account_id})
        await axios.post(url+"/shiftAccount",ii,optionsII)

        console.log('-----------edit_name----------');
        const plyoed = JSON.stringify({"contract":null,"id":account_id,"user_id":user_id,"path":null,"seed":null,"network":null,"name":"Ambarabaccicciccoco","domain":null,"ticker":"BTC","asset":"6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d","pending":0,"hide":false,"index":0,"privkey":null,"pubkey":null,"precision":8})
        const axios_edit = await axios.post(url+"/account",plyoed,optionsII)
        console.log(axios_edit);

        // payments  GET https://coinos.io/api/payments
        // TABOGAN GET INFO ABOUT ACCOUNT
        const pld = JSON.stringify({"username":pro_username,"password":pro_pass,"token": token});
        const axios_taboggan = await axios.post(url+"/taboggan",pld,optionsII)
        console.log("--------RESULT-TABBOGAN------");
        console.log(axios_taboggan.data);
        //CHANGE FIAT
        let to_mod = axios_taboggan.data;
        to_mod.user.currencies = ['EUR','CHF','USD'];
        to_mod.user.currency = 'EUR';
        to_mod.user.fiat = true;
        const ob = {
          "id":to_mod.user.id,
          "username":to_mod.user.username,
          "password":"",
          "confirm":"",
          "currency":'EUR',
          "currencies": ['EUR','CHF','USD'],
          "pin":"",
          "twofa":false
        }
        const payload_user = JSON.stringify(ob);
        const axios_switch_currency = await axios.post(url+"/user",payload_user,optionsII);
        
        console.log(axios_switch_currency.data)
        console.log('------------CHECK NOW IS EUR-----------');

    
        //LOGOUT
        /*
        const pyl = JSON.stringify({"subscription":null});
        const axios_logout = await axios.post(url+"/logout",pyl,optionsII)
        console.log("--------RESULT-LOGOUT------");
        console.log(axios_logout.data);
        /// TEST WHAT DONE IN SEND SECTION
  }catch(e){console.log(e)}
})()*/


                /* ottieni un risultato tipo
          {
            "feeRate":3614,
            "tx":
            {
              "hex":"0200000000015d01e8c7c89fc1dc0739d133cdbbf91e20b396e265a4f0aca35129499bdf98b90200000000fdffffff02016d521c38ec1ea15734ae22b7c46064412829c0d0579f0a713d1c04ede979026f010000000000003df70017a914208a21354d6f8f480b91e6a625ad05545141281687016d521c38ec1ea15734ae22b7c46064412829c0d0579f0a713d1c04ede979026f010000000000000309000000000000",
              "fee":0.00000777,
              "changepos":-1
            }
          }
        */
           /* Ottieni risultato tipo questo
    {
      "feeRate":5085,
      "tx":
      {
        "hex":"0200000001aac4d1148a38e603ea5beb22a893dab73e5c2f03daee1ac4b0284ec9f367dd480100000000feffffff02080a0000000000001600147515a0fcdc0bfbfe89a5d7fd40df5c43f91a0de280eb130000000000160014adb68dff7dc96e32493e711361b687855052b02100000000",
        "fee":0.00000717,
        "changepos":1
      }
    }
    */
/* SIGNING
    console.log("-------------NOW-SIGNING-MESSAGE-----------");
    const message = 'This message is part of the process of placing an exchange order on bity.com. To proceed, Bity is required to verify that you own the destination crypto address. By signing this message with your wallet, you are confirming 1) that you are the sole owner of the crypto address below and 2) that you will be sending your own funds to Bity. If you did not initiate this process yourself, do not sign this message.\n\nYour order id: 11f0d323-0c4b-429f-a993-c42c2ef4c84e\nYour IBAN: IT30A03268223000EM000571327\nYour crypto address: 15rfBB2oyRsebfK6wNEdQpms3KaGve6ASJ\nYour crypto address type: BTC\n';
    const bod = JSON.stringify({"address": address, "message": message})
    const axios_signing_message = await axios.post(url+"/signMessage",bod,optionsII,);
    console.log('----------------MESSAGE-FROM-SIGNING-------------');
    console.log(axios_signing_message.data);*/

    /*const pre_send_ln = JSON.stringify({
      "amount":10000,
      "memo":"",
      "payreq":"lnbc1psmwc87pp5runl95z34cn2n6vye7fzec9yd205xeq42rksrdsrrs4l7rnacv8sdqqcqzpgxqyz5vqsp5g92px4vm83e5j4h7xwfxnnam9ahj0k87ydh3g2ws3fw6le68397q9qyyssq23jhjhrec9xtmgxy2rvjndjwacjae2xrwzyf8eq95aysz9hq40cn40tk6gr7k9ht86kyzy35rv8wzkk6dest47kn89grhxm88fzlndcqgfy2gg",
      "route":null
    });
        console.log("----------RISULTATO-SENDING-BTCLN-------");
    const axios_send_btcln = await axios.post(url+"/lightning/send",pre_send_ln,optionsII)
    console.log(axios_send_btcln.data);
    console.log("-----------BTCLN-OK-------------");
    console.log("-------------SENDING-Bitcoin-----------")
    // Ottieni Fee prima
    const fee_payload = JSON.stringify({
      "address":"bc1qw526plxup0alazd96l75ph6ug0u35r0z3wd4g2",
      "amount":2568,
      "asset":"6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d",
      "feeRate":null,
      "replaceable":false
    }
    )
    const get_fee_et_tx = await axios.post(url+"/bitcoin/fee",fee_payload,optionsII) 
    // FAi questa richiesta dopo aver inserito l'address e dopo aver fatto un cambio di rate preferito
    // check timing of Execution
    console.log(get_fee_et_tx.data);

    const txs = get_fee_et_tx.data.tx;
    // ottieni address from TextInput e verifica ad ogni cambio/end_edit se è interno
    const payload = JSON.stringify({
      "address":fee_payload.address,
      "memo":null,
      "tx":txs
      })
    const axios_btc_send = await axios.post(url+"/bitcoin/send",payload,optionsII) 
    console.log("----------RISULTATO-SENDING-BTC-------");
    console.log(axios_btc_send.data);

    console.log("-------------SENDING-Liquid-----------")
        const fee_payoad_liquid = JSON.stringify({
          "address":"VJL638FWbZFxU3Pr8HxN8zp4PxUqqUtXoJfDq8ho3X298MTQ3usqf5FsPGmcZ4XyjSjxMCV3V6Gjmd5z\n",
          "amount":15863,
          "asset":"6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d",
          "feeRate":null,
          "replaceable":false})
        const get_fee_et_tx = await axios.post(url+"/liquid/fee",fee_payoad_liquid,optionsII)
        console.log(get_fee_et_tx.data);

       const tx = get_fee_et_tx.data.tx;
       const payloa_liquid = JSON.stringify({
        "address":fee_payoad_liquid.address,
        "memo":null,
        "tx":tx
        })
        const axios_liquid_send = await axios.post(url+"/liquid/send",payloa_liquid,optionsII)
        console.log(axios_liquid_send.data);*/
        // ADD Account to Wallet
        /*console.log("-------------ADD-ACCOUNT----------");
        const pyld = JSON.stringify({"seed":null,"privkey":null,"pubkey":null,"path":null,"name":"Bitcoin","ticker":"BTC","precision":8,"network":"bitcoin"})
        const axios_add_account = await axios.post(url+"/accounts",pyld,optionsII)*/
/*(async () => {
  try
  {
    const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://coinos.io/ojas');
  await page.waitForSelector('.v-btn--text');
  const html = await page.content();  
  console.log(typeof html);
  const wrtie = fs.writeFile('page.txt',html,{},()=>{});
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
  }
  catch(e){console.log(e);}
})();*/

// Set up pug as view engine
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.json());

var access_token;

app.get('/Code%20Postal', async(req,res)=>{
  console.log(req.query);
  console.log('Grazie');
  res.send(200,'ok')
})

app.post('/test', async (req,res)=>{
fs.writeFile("head.txt", req, (err)=> {console.error(err)})
console.log(req);
console.log(req.header('x-forwarded-for'));
res.send(req)
})

app.post('/ojas2bity/order', async (req, res) => {
	console.log(req)

/*try{
        // modify the object with own factor
        var obj = req.body;
	obj.partner_fee={factor:process.env.BASIC}
        
        const axios_order = await axios.post(
            'https://exchange.api.bity.com/v2/orders',
            obj,
            {
              headers: {
              'Authorization': 'Bearer '+access_token,
              'Content-Type': 'application/json' ,
              },
            }
          );
        const location = axios_order.headers["location"];
        const check_service = (element) => {return element.includes("sessionid")}
        const cookie = axios_order.headers["set-cookie"][0].split(";").find(check_service);
        const retrieve = await axios.get("https://exchange.api.bity.com"+location,{
            headers:{
              'Authorization': 'Bearer '+access_token,
              'Cookie':cookie}
          })
	
        const response_obj = {
          retrieve: retrieve.data,
          location : location}
        res.send(response_obj);
    }catch(e){console.log(e);
    res.send('error: '+e)
  }*/
  });
  
app.post('/ojas2bity/status', async (req,res)=>{
  try{
	const axios_order = await axios.get(
	'https://exchange.api.bity.com'+req.body.location,
	{
		headers: {
		'Authorization': 'Bearer '+access_token,
        	'Content-Type': 'application/json' 
		}
	})
	
	res.send(axios_order.data);
	}catch(e){console.log(e)};
});

app.post('/ojas2bity/signature', async (req,res)=>{
	
	
  try{
	const l = req.body.url;
	const loc = l.slice(0,l.search('/signature'))
	
        const axios_sign = await axios.post(
        'https://exchange.api.bity.com'+req.body.url,
        req.body.signature,
        {
                headers: {
                'Authorization': 'Bearer '+access_token,
                'Content-Type': 'application/json' 
                }
        })
        const axios_order = await axios.get(
        'https://exchange.api.bity.com'+loc,
        {
                headers: {
                'Authorization': 'Bearer '+access_token,
                'Content-Type': 'application/json' 
                }
        })
        
        res.send(axios_order.data);
        }catch(e){console.log(e)};
});

app.post('/ojas2bity/cancel', async (req, res)=>{
  try{
    const axios_order = await axios.post(
      'https://exchange.api.bity.com'+req.body.location+'/cancel',
      "",
      {
        headers: {
        'Authorization': 'Bearer '+access_token,
        'Content-Type': 'application/json' ,
        },
      }
    );
      res.send('cancelled')
  }catch(e){console.log(e);
    res.send('error: '+e)}
});

var httpsServer = http.createServer(options, app);
httpsServer.listen(port, () => {

  /*const asy = async ()=>{
      try
      {
      //const url = await ngrok.connect({proto: 'http',port:port,authtoken:'1xtztopvMM85SQ6huZlqNGBdZv1_4DY88BzJWzKqNSE2fd4Ni',onStatusChange: status => {console.log(status);},onLogEvent: data => {console.log(data);}});
      const axios_token = await axios.post(process.env.TOKEN_ENDPOINT ,obj_token,{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        })
        access_token = axios_token.data.access_token;
        }catch (error) {console.log(error);}
  
  };
  asy();
  setInterval(async ()=>{
  
      try
      {
      const axios_token = await axios.post(process.env.TOKEN_ENDPOINT , obj_token,{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        })
        access_token = axios_token.data.access_token;
        }catch (error) {console.log(error);}
  
  },1800000);*/
/*(async () => {
  const tunnel = await localtunnel({ port: 4000 });

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
 console.log(tunnel.url);

  tunnel.on('close', () => {
    // tunnels are closed
  });
})();
*/
  console.log(`Success! Your application is running on port ${port}.`);
  });

/*app.listen(port, () => {
const asy = async ()=>{
    try
    {
    //const url = await ngrok.connect({proto: 'http',port:port,authtoken:'1xtztopvMM85SQ6huZlqNGBdZv1_4DY88BzJWzKqNSE2fd4Ni',onStatusChange: status => {console.log(status);},onLogEvent: data => {console.log(data);}});
    const axios_token = await axios.post(process.env.TOKEN_ENDPOINT ,obj_token,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
      access_token = axios_token.data.access_token;
      }catch (error) {console.log(error);}

};
asy();
setInterval(async ()=>{

    try
    {
    const axios_token = await axios.post(process.env.TOKEN_ENDPOINT , obj_token,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
      access_token = axios_token.data.access_token;
      }catch (error) {console.log(error);}

},1800000);
console.log(`Success! Your application is running on port ${port}.`);
});*/
