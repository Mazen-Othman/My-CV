const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('Connected Successfully');
    console.log(`Example app listening on port ${port}`);
  });

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/home',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
  res.render('index')
})

app.get('/contact',(req,res)=>{
   res.render('index')
})

app.get('/',(req,res)=>{
    res.redirect('/home')
})