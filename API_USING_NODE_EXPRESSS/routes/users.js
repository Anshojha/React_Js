import express from 'express'
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();


let users = [];


router.get('/', (req, res)=> {
    console.log(users)
    res.send(users)
})

router.post('/', (req, res)=>{
    const user = req.body; 
    users.push({...user, id : uuidv4() });
    res.send(`User with thw name ${user.firstName} is pushed into the users`)
    res.send("POST ROUTE REACHED");
});

router.get('/:id', (req, res) => {
    const {id} = req.params;

    const foundUser = users.find((user)  => user.id === id);

    res.send(foundUser)
})


router.delete('/:id',(req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);
    res.send(`The user with the given id ${id} has been deleted from the database` )
})



router.patch('/:id',(req, res) => {
    const {id} = req.params;

    const user = user.find((user) => user.id === id);
    const {firstName, lastName, age} = req.body;

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`The user  with the given id ${id} has been updated from the database` )
})

export default router;