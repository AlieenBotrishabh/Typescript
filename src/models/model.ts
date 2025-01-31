import mongoose, { Document } from 'mongoose';

interface IUser extends Document
{
    name : String;
    email : String;
}

const schema = new mongoose.Schema<IUser>({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
})

const User = mongoose.model<IUser>('User', schema);

export {User, IUser};