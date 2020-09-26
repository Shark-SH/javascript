var express = require('express');
var router = express.Router();

const maria = require('../maria')//작성한 maria.js를 불러온다.
//connection은 서버가 켜질때 app.js 에서 수행되었다.

/* GET home page. */
router.get('/', function(req, res, next) {
  maria.query('select * from test',function(err,rows,field){
    //쿼리문을 이용해서 데이터를 가져옴
    if(!err){//!에러
      res.send(rows);// rows 데이터를 보내줌
    }else{  //에러가있으면
      console.log("err:"+err);//콘솔창에 에러를 띄어줌
      res.send(err);  //에러 호출
    }
  });
  //res.render('index', { title: 'Express' });
});

module.exports = router;
