const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/admin", { useNewUrlParser: true, useUnifiedTopology: true });
//

app.get('/', (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    const { name, age, physics, chemistry, maths } = req.body;
    const total = parseInt(physics) + parseInt(chemistry) + parseInt(maths);
    const cutoff = (total / 3).toFixed(2);
//
    UserModel.findByIdAndUpdate({ _id: id }, {
        name,
        age,
        physics,
        chemistry,
        maths,
        total,
        cutoff
    }, { new: true })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.json(err));
});

app.post("/createUser", (req, res) => {
    const { name, age, physics, chemistry, maths } = req.body;
    const total = parseInt(physics) + parseInt(chemistry) + parseInt(maths);
    const cutoff = (total / 3).toFixed(2);
//
    UserModel.create({ name, age, physics, chemistry, maths, total, cutoff })
        .then(newUser => res.json(newUser))
        .catch(err => res.json(err));
});

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
});

app.listen(3001, () => {
    console.log("Server is Running")
})