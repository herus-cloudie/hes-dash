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

export default Hesnical;