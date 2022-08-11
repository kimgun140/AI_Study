const express = require("express");

const router = express.Router();
//express에 라우터객체만들어서 router에 연결해서
router.get("/", (req, res) => {
  // (/)이란 요청이 들어오면 res.send에 있는 데이털르 뿌려준다.
  //라우터에 get사용해서 연결하는것이다.
  res.send("Hello,hello");
});

module.exports = router;
