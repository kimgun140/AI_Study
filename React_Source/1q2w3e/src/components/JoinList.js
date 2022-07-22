import JoinListItem from "./JoinListItem";

const JoinList = ({ joins, onRemove, onUpdateForm }) => {
  // props 전달받음
  return (
    <div className="JoinList">
      {joins.map(
        (
          join,
          index //joins 가 갖는 데이터 수 만큼 반복, index: join데이터가 배열의 어느 위치에 있는지 확인 onupdateform에서 사용
        ) => (
          <JoinListItem
            join={join} //
            idx={index}
            onRemove={onRemove}
            onUpdateForm={onUpdateForm}
          />
        )
      )}
    </div>
  );
};

export default JoinList;
