const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.port || 8008;
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
let corsOptions = {
  origin: "*", //출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키..등) 접근
}; //교차 출처 문제를 해결할 수가 있다.

app.use(cors(corsOptions));

const db = mysql.createPool({
  //port 번호생략한 구조, 생략했으니까 기본값인  3306번으로 설정되어있다.()
  host: "localhost",
  user: "root",
  password: "123456",
  database: "bbs",
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
app.get("/list", (req, res) => {
  console.log("list!!");
  const sqlQuery =
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE FROM BOARD_TBL;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});
