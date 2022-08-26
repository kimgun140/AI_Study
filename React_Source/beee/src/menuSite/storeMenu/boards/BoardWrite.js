import React, { useRef } from "react";
import axios from "axios";
import "./BoardWrite.scss";
import { useNavigate } from "../../../../node_modules/react-router-dom/index";
import { Link, useLocation } from "react-router-dom";

const BoardWrite = ({
  handlelist,
  articleId,
  setactionmodemain,
  actionmodemain,
}) => {
  const titleRef = useRef();
  const writerRef = useRef();
  const contentRef = useRef();
  const locationRef = useRef();
  const storeIdRef = useRef();

  const navigate = useNavigate();

  const location = useLocation();

  const Article = location.state.articles;

  console.log("aaaaaaaaaaaaaaaaaaaaaa", Article);

  const handleInsert = () => {
    // console.log('handleInsert : ', titleRef.current.value);

    if (titleRef.current.value === "" || titleRef.current.value === undefined) {
      alert("게시글의 제목을 입력해주세요.");
      titleRef.current.focus();
      return false;
    }

    // if (writerRef.current.value === '' || writerRef.current.value === undefined) {
    //   alert('게시글의 작성자을 입력해주세요.');
    //   writerRef.current.focus();
    //   return false;
    // }

    if (
      contentRef.current.value === "" ||
      contentRef.current.value === undefined
    ) {
      alert("게시글의 내용을 입력해주세요.");
      contentRef.current.focus();
      return false;
    }

    if (
      locationRef.current.value === "" ||
      locationRef.current.value === undefined
    ) {
      alert("게시글의 픽업 장소를 입력해주세요.");
      locationRef.current.focus();
      return false;
    }

    axios
      .post("http://localhost:8008/insert", {
        title: titleRef.current.value,
        writer: window.sessionStorage.getItem("id"),
        content: contentRef.current.value,
        location: locationRef.current.value,
        storeId: storeIdRef.current.value,
      })
      .then((res) => {
        console.log("handleInsert : ", res);
        handlelist();
        titleRef.current.value = "";
        writerRef.current.value = "";
        contentRef.current.value = "";
        locationRef.current.value = "";

        setactionmodemain({
          ...actionmodemain,
          mode: 0, // 글 수정하기
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const onClick = () => {
    setactionmodemain({
      ...actionmodemain,
      mode: 0, // 글 수정하기
    });
  };

  return (
    <div>
      <input
        id="write_toG"
        type="button"
        value="그룹 목록으로"
        onClick={onClick}
      />
      {/* <div  className="write_writer" ref={writerRef}>
        작성자: {window.sessionStorage.getItem("id")}
      </div> */}
      <input
        type="text"
        className="write_title"
        name="title"
        size="68"
        ref={titleRef}
        placeholder="제목을 입력하세요."
      />
      <textarea
        className="write_content"
        rows="8"
        cols="70"
        name="content"
        ref={contentRef}
        placeholder="내용을 입력하세요."
      />
      <input
        className="write_location"
        type="text"
        name="location"
        size="68"
        ref={locationRef}
        placeholder="픽업 장소를 입력하세요."
      />
      <input
        className="write_Btn"
        id="write_done"
        type="button"
        value="글쓰기"
        onClick={handleInsert}
      />
      <input
        id="write_reset"
        className="write_Btn"
        type="reset"
        value="초기화"
      />
      <input
        type="hidden"
        name="storeId"
        size="68"
        ref={storeIdRef}
        value={articleId}
      />
      &nbsp; &nbsp;
    </div>
  );
};

export default BoardWrite;
