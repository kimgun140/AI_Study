import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">회원관리</div>
      <div className="content">{children}</div>
    </div>
  );
};
export default TodoTemplate;
