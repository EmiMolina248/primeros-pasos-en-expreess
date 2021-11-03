const bodyParser = require('body-parser') ;
const { response } = require('express');
const express = require("express"); 
const app = express();
const port = 3000;
let request;
app.use(express.json());

app.listen(port,()=> {
    console.log("prendido");
});

app.get('/', function(req, res) {
    res.send(`Holaa!bienvenido a la verdu, servidor funcionando y en el puerto ${port}` );
})

app.post('/verdu', function(req, res){
    request = req.body;
    let cont = 0;
    for(let index  in request){
        if(request[index].tipo == 'verdura' || request[index].tipo == 'fruta'){
            //JSON.stringify(request)
            console.log(`El valor de ${index} es de $${request[index].precio}`);
            cont =  cont + (req.body[index].precio*req.body[index].cant);
        }
    }
    res.send("El total de tu pedido es $ "+ cont);
});

//{ "anana" : { "precio":28,"cant":1, "tipo": "fruta"},
//"naranja":{"precio":10,"cant":10, "tipo": "fruta"},
//"brocoli":{"precio":30, "cant":2,"tipo": "verdura" },
//"papa": {"precio" : 5, "cant": 5, "tipo": "verdura" },
//"pescado": {"precio":"25","cant": 2, "tipo": "carne"}
//}

app.post('/matriz',function(req,res){
    let request = req.body;
    let cont = (request[0][0] * request[1][1]) - (request[0][1] * request[1][0]) ;
    res.send(`El determinante de esta matriz es ${JSON.stringify(cont)}`);
});







