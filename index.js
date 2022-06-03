let express = require('express');
let app = express();
let path = require('path');
const port = process.env.PORT||3000;
const bodyParser = require('body-parser');
// const mongo = require('dbconfig');


app.set('view engine','ejs');

app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/music',express.static(path.join(__dirname,'public/music')));

app.get('/',(req,resp)=>{
   resp.render('index');
})




app.listen(3000,()=>{
    console.log("Listening to the server at : http://localhost:3000  ")
});