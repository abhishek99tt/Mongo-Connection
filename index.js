const mongoose = require('mongoose')
mongoose.set("strictQuery", false);

mongoose.connect('mongodb://0.0.0.0:27017/Sample').then(() => {
    console.log('Successfully connected to mongodb');
}).catch((err) =>{
    console.log(err);
})

// schema
const student = new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number
})

// Model (Collection)
const Student = new mongoose.model('Student',student);

const adder = async () => {
    // const ss = new Student({
    //     name:"Abhi",
    //     workout:true,
    //     height:6
    // })
    
    // await ss.save();

    // await Student.create({
    //     name:"ABHI",
    //     workout:true,
    //     height:5
    // })

    // const ss = await Student.find();
    // console.log(ss);

    // const ss = await Student.find({height:{$eq:6}});
    // console.log(ss);

    // const ss = await Student.find({height:{$in:[5,6]}});
    // console.log(ss);

    const ss = await Student.find({height:{$nin:[5,6]}});
    console.log(ss);
}

adder();

