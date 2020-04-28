/*var express = require("express");
var bodyParser = require("body-parser");
var app  = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000,function(){
    console.log(`Server running at http://localhost:3000/`);
  })

app.post('/post',function(req,res){
  res.send('post');
});
app.get('/diferenca',function(req,res){
     res.json({"hello":"world"})
}); */

var express = require("express");
var bodyParser = require("body-parser");
var app  = express();
var moment = require('moment');
letras = [];


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
function compareDates (date) {
    //let parts = date.split('/') // separa a data pelo caracter '/'
    letras = date.split('')
    let today = new Date()      // pega a data atual
    let receivedDate = letras[4] + letras[5] + letras[6] + letras[7] + letras[2] + letras[3] + letras[0] + letras[1]
    const now = moment(today);
    const past = moment(receivedDate,"YYYYMMDD").startOf('day').fromNow()
    //const past = moment(receivedDate)
    //const duration = moment.duration(now.diff(past));
    //date = new Date(parts[2], parts[1] - 1, parts[0]) // formata 'date'
    
    // compara se a data informada é maior que a data atual
    // e retorna true ou false
   // return date >= today ? true : false
    return 
  } */

  function compareDates (date) {
    var resposta = ''
    letras = date.split('');
    const today = new Date();      // pega a data atual
    var past = new Date(letras[4] + letras[5] + letras[6] + letras[7] + '-' + letras[2] + letras[3] + '-' + letras[0] + letras[1]);
    //let past = '2014-07-07'
    const diff = Math.abs(today.getTime() - past.getTime());
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    
    if ((today.getTime() - past.getTime()) > 0){
        resposta = 'dias entre as datas: ' + (-days + 2);
    } else {
        resposta = 'dias entre as datas: ' + (days + 1);
    }

    return resposta
    
  }
  



app.listen(3000,function(){
    console.log(`Server running at http://localhost:3000/`);
  })

app.post('/post',function(req,res){
  res.send('post');
});
app.get('/diferenca/:var1',function(req,res) {
     res.send('aaaaaa'+ req.params.var1)

});

app.get('/data/:var1',function(req,res) {
    //res.send(compareDates(req.params.var1 + '/' + req.params.var2 + '/' + req.params.var3))
    res.send(compareDates(req.params.var1))
});

