const bodyParser = require('body-parser') ;
const express = require("express"); 
const app = express();
const port = 3000;
let request;
app.use(express.json());

app.get('/', function(req, res) {
    res.send(`Holaa!bienvenido a la verdu, servidor funcionando y en el puerto ${port}` );
})
app.post('/verdu', function(req, res){
    request = req.body;
    console.log(request);
    res.send(`El precio del anana es $${request.anana.precio} , el de la naranja es $${request.naranja.precio}, el del brocoli es $${request.brocoli.precio} y el de la papa es $${request.papa.precio}`);
});

app.get('/verdu/PrecioTotal',function(req, res){
    res.send(`El total de tu pedido es $${request.anana.precio*request.anana.cant + request.naranja.precio*request.naranja.cant + request.brocoli.precio*request.brocoli.cant + request.papa.precio*request.papa.cant}`);
})

app.listen(port,()=> {
    console.log("prendido");
});

