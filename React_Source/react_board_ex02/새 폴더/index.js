const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const PORT = process.env.port || 8008;
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "bbs",
});
//라이브러리 사용을 위한 작업
const multer = require("multer"); //파일 업로드
const path = require("path"); //경로
const fs = require("fs"); //파일다룰 수 있는 패키지

try {
  //업로드 폴더가 존재하는지 확인하고 없으면 업로드 폴더를 만든다.
  fs.readdirSync("uploads");
} catch (error) {
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다.");
  fs.mkdirSync("uploads");
}

const upload = multer({
  // 멀터라는클래스로 객체 만들기
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/"); //다른 경로로 설정하고 싶으면 경로만 설정해주면 된다.  현재 문서의 위치를 기준으로 적어준다
    },
    filename(req, file, done) {
      //파일 이름을 어떻게 설정할 것인가 오리지날 파일 이름을 쓰고 싶으면 그냥 저장하고, 같은 이름이 있으면 확장자를 제외한 이름만 추출하고 현재 시간을 가져오고 다시 확장자를 붙여준다.
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
});

// 이미지가 저장된 경로를 static으로 지정하면 불러올 수 있다.
app.use("/uploads", express.static("uploads")); // 이거 없으면 이미지 파일이 표시가 안된다. 외부에서 직접 참조가 가능하게 하려면 static으로 설정해주어야한다.

app.post("/insert", upload.single("image"), (req, res) => {
  //insert 실제 파일의 업로드가 여기서 발생한다. 여러개 업로드하고싶으면 교재를 참조해라 3가지 예시를 통해서 확인이 가능하다.
  console.log("/insert", req.file, req.body);
  var writer = req.body.writer;
  var title = req.body.title;
  var content = req.body.content;

  const sqlQuery =
    "INSERT INTO BOARD_TBL (BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, BOARD_IMAGE) values (?,?,?,?);"; // 컬럼 추가
  db.query(
    sqlQuery,
    [writer, title, content, req.file.filename], // 데이터베이스에 실제 업로드할 파일 이름을 가리킨다.
    (err, result) => {
      res.send(result);
    }
  );
});

app.post("/login", (req, res) => {
  console.log("/login", req.body);
  var id = req.body.id;
  var pw = req.body.pw;

  const sqlQuery = "select count(*) as 'cnt' from member where id=? and pw=?;";
  db.query(sqlQuery, [id, pw], (err, result) => {
    res.send(result);
  });
});

app.post("/member", (req, res) => {
  console.log("/member", req.body);
  var id = req.body.id;
  var pw = req.body.pw;
  var email = req.body.email;

  const sqlQuery = "insert into member values (?,?,?);";
  db.query(sqlQuery, [id, pw, email], (err, result) => {
    res.send(result);
  });
});

app.post("/list", (req, res) => {
  console.log("list!!!");
  var page_num = parseInt(req.body.page_num);
  var page_size = parseInt(req.body.page_size);
  console.log(
    "list!!!(page_num, page_size, article_count)",
    page_num,
    ", ",
    page_size
  );
  const start_limit = (page_num - 1) * page_size;
  console.log("list!!!(start_limit, page_size)", start_limit, ", ", page_size);

  const sqlQuery = `SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, 
    DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE FROM BOARD_TBL 
    order by board_num desc limit ?,?;`;
  db.query(sqlQuery, [start_limit, page_size], (err, result) => {
    res.send(result);
  });
});

app.get("/count", (req, res) => {
  console.log("count!!!");
  const sqlQuery = "SELECT count(*) AS COUNT FROM BOARD_TBL;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post("/detail", (req, res) => {
  // 브라우저에 뿌려줄
  console.log("/detail", req.body);
  var num = parseInt(req.body.num);

  const sqlQuery = // 보드이미지를 서버에서 가져올 수 있도록 쿼리구문에 보드이미지를 추가한다.
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE, BOARD_IMAGE FROM BOARD_TBL where BOARD_NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    res.send(result);
  });
});

app.post("/update", (req, res) => {
  console.log("/update", req.body);
  var title = req.body.article.board_title;
  var content = req.body.article.board_content;
  var num = req.body.article.board_num;

  const sqlQuery =
    "update BOARD_TBL set BOARD_TITLE=?, BOARD_CONTENT=?, BOARD_DATE=now() where board_num=?;";
  db.query(sqlQuery, [title, content, num], (err, result) => {
    res.send(result);
    console.log("result=", result);
  });
});

app.post("/delete", (req, res) => {
  const num = req.body.num;
  console.log("/delete(id) => ", num);

  const sqlQuery = "DELETE FROM BOARD_TBL WHERE BOARD_NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
