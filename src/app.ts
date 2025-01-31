import express, { Express, Request, Response, NextFunction } from 'express';
import { User, IUser } from './models/model';
import { connectDB } from './db/db';

const app : Express = express();

app.use(express.json());

interface CustomRequest extends Request
{
    startTime?: number
}

app.use((req : CustomRequest, res : Response, next : NextFunction) => {
    req.startTime = Date.now();
    next();
})

app.get('/', (req : Request, res : Response) => {
    res.send('Typescript with express');
})

app.get('/user', async(req : Request<{}, {}, User>, res : Response) => {
    try
    {
        const user : IUser[] = await User.find();

        res.status(200).json({
            msg : user
        })
    }
    catch(err)
    {
        res.status(400).json({
            msg : `An error ocurred ${err}`
        })
        console.log(`An error ocurred ${err}`);
    }
})

interface User
{
    name : String;
    email : String;
}

app.post('/user', (req : Request<{}, {}, User>, res : Response) => {
    const {name, email} = req.body;
    res.json({
        msg : `User created ${name}-${email}`
    })
})

app.get('/user/:id', (req : Request<{ id : String}>, res : Response) => {
    const { id } = req.params;
    res.json({
        userId : id,
    })
})

connectDB();

app.listen(3000, () => {
    console.log('Server is listening on the port 3000');
})