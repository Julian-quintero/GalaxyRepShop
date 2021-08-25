import  mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
},{timestamps:true})

userSchema.methods.matchPassword = async function(enteredPassword){
return await bcrypt.compare(enteredPassword,this.password)
//compare plain text to encrypt password
}

userSchema.pre('save', async function(next){
//middleware before we save
    if (!this.isModified('password')) {
        next()
        //We check if the password is being modified when we update a profile otherwise we just do it normally.



        
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    //Initially this.password is the normal password but here we encrypt it.
})


const User = mongoose.model('User',userSchema);

export default User;