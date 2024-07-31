// import DBconnection from "../../../../utils/DBconnection";
// import Hesnical from "../../../../utils/models";
import {hash} from 'bcryptjs'
import mongoose from "mongoose";
import {Schema , model , models} from 'mongoose';

let UserSchema = new Schema({
    email : {
        type : String,
        require : true
    },
    userName: {
        type : String,
        require : true
    },
    password :{
        type : String,
        require : true
    },
} , {timestamps : true}
)

let Hesnical = models.Hesnical|| model("Hesnical" , UserSchema)

async function DBconnection(){
    console.log('connecting to Data-base')
    let URI = 'mongodb+srv://herus2006cripto:Amir2006@cluster0.2lq51go.mongodb.net/?retryWrites=true&w=majority';
    if(mongoose.connections[0].readyState) return console.log('Data-base have already connected')
    await mongoose.connect(URI)
    console.log('Data-base connected')
}

export default async function handler(req , res){

    /********* handle request and database connection *********/
    if(req.method !== 'POST') return;
    try {
       await DBconnection() 
    } catch (err) {
        console.log('error' + err)
        res.status(500).json({status : 'failed' , message : 'err in connect to DataBase'})
        
        return; 
    }
    
    let {email , userName , password} = req.body;
    
    /********* check if the account exists before *********/
    let existEmail = await Hesnical.findOne({email})
    let existUserName = await Hesnical.findOne({userName})

    if (existEmail || existUserName){
        res.status(409).json({status : 'failed' , existEmail , existUserName})
        
        return;
    } 
    
    /********* final procces and send json to front *********/
    
    let passwordHashed = await hash(password , 8)
    let createUser = await Hesnical.create({email , userName , password : passwordHashed})
    res.status(200).json({status : 'success' , message : createUser})
}