const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers');
// const PORT = process.env.PORT || 8001;

const app = express();



app.engine('handlebars', exphbs({
  defaultLayout:'main',
  layoutsDir:path.join(__dirname,'views/layouts')
 }));

app.set('view engine', 'handlebars');


app.use(routes);




  app.listen(3001, () => {
    console.log('Now listening',3001);
  });
