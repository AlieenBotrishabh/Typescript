import express, { Express, Request, Response, NextFunction } from 'express';

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

app.listen(3000, () => {
    console.log('Server is listening on the port 3000');
})