// const express = require("express");
// const path = require("path");

// const App = express(); //웹서버 객체 만드는 과정
// App.set("port", process.env.PORT || 3000); //웹서버에서 서비스를 구분하는 기분은 포트번호를 기준으로 구분한다. express서버를 식별하기 위한 포트 번호 설정하는 과정이다.
// //포트넘버 설정 과정
// App.get("/", (req, res) => {
//   //   console.log(req.query);
//   //   const var1 = req.query.var1; //  get방식은 query통해서 데이터 가져올 수 있다.
//   //   const var2 = req.query.var2; //  get방식은 query통해서 데이터 가져올 수 있다.
//   // 서버에서 처리한 데이터를 클라이언트로 보내주는 과정
//   //   res.send({ data1: var1, data2: var2 });
//   res.sendFile(path.join(__dirname, "/index.html")); //웹서버 구동시 디폴트로 보여줄 페이지를 설정하는 과정이었다~~
// });

// // App.post("/", (req, res) => {
// //   console.log(req.body); // post방식은 req.body로 데이터 가져올 수 있다
// //   // 서버에서 처리한 데이터를 클라이언트로 보내주는 과정
// //   res.send("Hello, Express(Get)");
// // });

// App.listen(App.get("port"), () => {
//   //요청이 들어오는지 감시하는 과정
//   console.log(App.get("port"), "번 포트에서 대기중");
// });
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");
const MYSQLStore = require("express-mysql-session");

const options = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "bbs",
};

var sessionStore = new MYSQLStore(options);

dotenv.config();
const indexRouter = require("./routes");
const userRouter = require("./routes/user");
const App = express();
App.set("port", process.env.PORT || 3000);

App.use(morgan("dev"));
App.use("/", express.static(path.join(__dirname, "public"))); //static설정하면 url주소 public주소 생략이 가능하다.걍 책보셈
App.use(express.json()); //json형식의 데이터라는걸 말함
App.use(express.urlencoded({ extended: false })); //객체형식의 데이터를 다룰 수 있도록 하기위해서 이문장을 사용함 extended: false라는 문장은 무슨뜻이냐 false인 경우에는 node.js가 기본으로 설정하고있는 queryString으로 데이터르 가져오겠다는 말이다. true일경우에는 qs라는 querystring을 다루는 라이브러리를 이용하겠다는 말이다.
App.use(cookieParser(process.env.COOKIE_SECRET)); //
App.use(
  session({
    // 이게 바로 세션이다
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    store: sessionStore,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie", //세션객체의 초기 이름 . default id는 connetc.sid라는 이름으로 설정된다.
  })
);
App.use("/", indexRouter);
App.use("/user", userRouter);
App.use((req, res, next) => {
  res.status(404).send("Not Found");
});

// router.get("/user/:id", function (req, res) {
//   console.log(req.params, req.query);
// });
// router.get("/user/:like", function (req, res) {
//   console.log(req.params, req.query);
// });

const multer = require("multer");
const fs = require("fs");
const router = require("./routes");

router.get(
  "/",
  function (req, res, next) {
    next("route");
  },
  function (req, res, next) {
    console.log("실행되지않습니다.");
    next();
  },
  function (req, res, next) {
    console.log("실행되지않습니다.");
    next();
  }
);
router.get("/", function (req, res) {
  console.log("실행됩니다.");
  res.send("Hello, Express");
});

try {
  fs.readdirSync("uploads"); // sync 동기방식 하나씩 작업 진행한다는 뜻 sync없으면 비동기방식 하니씩 진행하지 않고 거의 동시에 함께 작업을 시작함
} catch (error) {
  //캐치블록에서 디렉토리가 없을때 만들어줌
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다. ");
  fs.mkdirSync("uploads/"); //디렉토리 만든후에 뒤에 문장을 실행하라는 뜻!!
}

const upload = multer({
  // 객체형태로 multer가 주어짐
  storage: multer.diskStorage({
    destination(req, file, done) {
      // 목적지를 다루는 함수 req(요청객체) file(파일다루는 객체), done(경로를 다루는 함수)
      done(null, "uploads/"); //오류가 발생했을 때 경로,  upload/저장할 위치설정이다
    },
    filename(req, file, done) {
      // file에 업로도딘 파일 객체가 들어가있음
      const ext = path.extname(file.originalname); //첨부한 파일의 원래 파일 이름을 구해서 원래 파일의 확장자가 ext에 저장이된다.
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); //기본 이름으로 오리지날이름,확장자 + 현재날짜,확장자 이러한형태로 첨부될 파일의 이름이 생성된다. 새롭게 업로드 할때 만약 기존의 파일이름 과 겹치게 되면 기조의 파일의 자료가 삭제되고 새로운 자료만 남게 된다. 이러한 경우를 막기귕해서 date.now를 파일의 이름으로 설정해서 겹치는 경우가 발생하지 않게 만든다.
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, //1024*1024 byte = 1mb
});
App.get("/upload", (req, res) => {
  res.sendFile(path.join(__dirname, "Multipart.html"));
});
App.post(
  "/upload",
  upload.fields([{ name: "image1" }, { name: "image2" }]), //upload.single 하나의 파일을 업로드할때 single
  (req, res) => {
    console.log(req.files, req.body); //
    res.send("ok");
  }
);

App.use((req, res, next) => {
  console.log("모든 요청에 다 실행됩니다.");
  next();
});
App.get(
  "/",
  (req, res, next) => {
    console.log("GET / 요청에서만 실행됩니다.");
    sess = req.session;
    sess.username = "asdf";
    console.log("req.session.username =>", req, session.useraname);
    console.log("req.sessionStore.userID =>", req.sessionID);
    console.log("req.session =>", req.session);
    next();
  },
  (req, res) => {
    throw new Error("에러는 에러 처리 미들웨어로 갑니다.");
  }
);

App.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

App.listen(App.get("port"), () => {
  console.log(App.get("port"), "번 포트에서 대기중");
});
