import express from "express"
import session from "express-session"
import {MongoClient } from "mongodb"
// Replace the uri string with your MongoDB deployment's connection string.
const uri ="mongodb+srv://a0935640996:aa24572880@nodejscluster.2uhcg.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function userCheck(req, res, next) {
  try {
    await client.connect();
    const database = client.db('sample_analytics');
    const customers = database.collection('customers');
    const query = req.body;
    const customer = await customers.findOne(query);
    customer?res.send("此帳號或密碼已使用過"):next()
  }catch(err){console.log(err)} 
}

async function dataCursor() {
  try {
    await client.connect();
    const database = client.db('sample_analytics');
    const data = database.collection('data');
    const cursor = data.find()
    const allValues = await cursor.toArray()
    return allValues
  }catch(err){console.log(err)} 
}
console.log(dataCursor().then(x=>x))

function auth(req, res, next) {
  if (req.session.name) {
    next()
  } else {
  return res.send({name:'unconnect'})
  }
}

const app = express();

app.use(express.json())

app.use(session({
    secret: 'mySecret',
    name: 'name', // optional
    saveUninitialized: false,
    resave: true, 
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000
    }
  }))

app.get("/",(req,res,next)=>{
  res.send("sever is ready")
});

app.post('/api/sign', userCheck,async (req, res) => {
  try{
    await client.connect(()=>console.log("/api/sign/connect"));
    const database = client.db('sample_analytics');
    const customers = database.collection('customers');
    customers.insertOne(req.body,()=>console.log("successful insert"+req.body));
    res.send("帳號密碼已新增成功")
  }catch(err){console.log(err)}

})

app.post('/api/login', async (req, res) => {
  try{
    await client.connect();
    const database = client.db('sample_analytics');
    const customers = database.collection('customers');
    const query ={email:req.body.email , password:req.body.password} ;
    const customer = await customers.findOne(query);
    if(customer){
      console.log(customer)
      req.session.name = customer.name;
      return res.send({name:customer.name,status:"connect"});
    }else{
      return res.send("帳號密碼輸入錯誤")
    }
  }catch(err){console.log(err)}
  
})

app.get('/api/welcome', auth, (req, res) => {
  const userStatus = {name:req.session.name,status:'connect'}
  return res.send(userStatus)
})

app.get("/api/product",(req,res)=>{
  dataCursor().then(val=>res.send(val));
});

app.get("/api/product/:id",(req,res)=>{
    dataCursor().then(val=>{
      const found = val.find(x=>x.id===req.params.id);
      found?res.send(found):res.send(undefined);
    });

});
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
});



  