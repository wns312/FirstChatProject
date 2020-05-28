const express = require('express')
const router = express.Router()
const Accounts = require('../model/db')

// home/
router.get('/', function (req,res) {
    res.render('home')
})
// home/signin
router.get('/signup', function (req,res) {
    res.render('home/signup')
})
// home/
router.post('/signup', function (req,res) {
    Accounts.create(req.body, function (err) {
        if (err)
         res.render('home/signupFailed')
        // return res.json(err);
        else {
            res.render('home/signupOk')
        }
    })  
})
//이제 여기에 로그인 기능 만들어서 index에 연결할 것
//이후 기능이 있을지는 모르지만, 있으면 다른 라우터를 만들 것
//여기를 조작해서 닉네임을 받아 쓸 수 있도록 하기
router.post('/chat',function(req,res) {
    let inputId = req.body.id;
    let inputPw = req.body.pw;
    Accounts.findOne({id: inputId, pw: inputPw})
    .exec((err, result)=>{
        if(result){
            res.render('chatting/chat', {nickname : result.nickname})
        } else{
            res.render('home/loginFailed')
            
        }
    })
});

router.get('/asd', function (req,res) {
    res.render('home/test')
})




module.exports =router