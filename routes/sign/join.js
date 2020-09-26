//라우터로 사용할것이라서 아래의 두개 파일을 불러온다.
const express = require('express');
const router = express.Router();
//데이터베이스 접속을 위해 maria.js를 불러온다.
const maria = require('../../maria');

// join 으로 get 접속하면 views/sign/join.ejs 를 랜더링 해준다.
// join.ejs는 추후 접속한다.
router.get('/',function(req,res,next){
    res.render('sign/join');
});

//join 으로 post 접속하면 아래와 같은 동작을 수행한다.
router.post('/',function(req,res,next){
    const user=require('../../model/user/addUser')(req.body);
})
//여기서부터.
