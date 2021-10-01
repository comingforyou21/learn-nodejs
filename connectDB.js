const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Nodemy');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const account = new Schema({
    username: String,
    password: String,
    age: Number,
    salary: Number,
    courseId : {
        type : String ,
        ref : 'course'
    },
    list_course : {
        courseId : { 
            type : String,
            ref : 'course'
         }
    }
}, { collection: 'Account' });

const AccountModel = mongoose.model('account', account);

const course  = new Schema({
    name: String,
    year: Number,
    accountId : {
        type : String ,
        ref : 'account'
    }

}, { collection: 'Course' });

const CourseModel = mongoose.model('course', course);

// AccountModel.create({
//     username : 'nguoi1',
//     password : 222222,
//     age : 12,
//     salary : 1000
// })
// .then( data => {
//     console.log(data)
// })
// .catch( err => {
//     console.log(err)
// })

// AccountModel.find({username : 'haianh'}, function (err, docs) {
//     console.log(docs)
// });

AccountModel.find({
    username : /nguoi/
})
// .populate('courseId')
// .populate({
//     path : 'courseId',
//     populate : { path : 'accountId' }
// })
.populate('list_course.courseId')
.then( data => {
    console.log(data)
})
.catch( err => {
    console.log(err)
})




// AccountModel.updateOne(
//     {username : 'haianh2'}, 
//     {password : 'hahahaha11'}
//     )
// .then(data=> {
//     console.log(data)
// })
// .catch(err => {
//     console.log(err)
// });

// AccountModel.deleteOne({ username: 'haianh2' })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     });

