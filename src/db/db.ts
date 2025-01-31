import mongoose from 'mongoose';

const connectDB = async() => {
    try
    {
        const db = await mongoose.connect('mongodb://localhost:27017/user');

        console.log(db);

        console.log('Database Connected Successfully');
    }
    catch(err)
    {
        console.log(`An error ocurred ${err}`);
    }
}

export {connectDB};