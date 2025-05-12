const app=require('./app');
const mongoose=require('mongoose');
require('dotenv').config();

const PORT =process.env.PORT||5000;
mongoose.connect(process.env.Mongo_URI)
.then(()=>{
    console.log("MongoDB connected");
    app.listen(PORT,()=>{
        console.log(`server is running on http://localhost:${PORT}`);

    });
}).catch(err=>console.log(err));
