const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
const cookieParser = require("cookie-parser");
const userRoutes = require('./routes/userRoutes')
const prodRoutes = require('./routes/prodRoutes')
const cartRoutes = require("./routes/cartRoutes");

app.use(express.json(), cors(), cookieParser());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});


app.use('/', userRoutes)
app.use('/', prodRoutes)
app.use("/", cartRoutes);

app.listen(PORT, ()=>{
    console.log(`You are using http://localhost:${PORT}`);
})