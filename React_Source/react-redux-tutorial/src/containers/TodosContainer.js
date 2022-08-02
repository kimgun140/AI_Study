import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../component/Todos';
import { useSelector } from 'react-redux';
import useActions from '../lib/useActions';
const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    // 상태객체{todos} 비구조화문으로 가져옴
    input: todos.input,
    todos: todos.todos,
  }));

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );

  // const { input, todos } = useSelector(({ todos }) => ({
  //   //상태객체{todos} 비구조화문으로 가져옴
  //   input: todos.input,
  //   todos: todos.todos,
  // }));
  // const dispatch = useDispatch();
  // const onChangeInput = useCallback(
  //   (input) => dispatch(changeInput(input)),
  //   [dispatch]
  // );
  // const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  // const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  // const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  // return (
  //   <Todos
  //     input={input}
  //     todos={todos}
  //     onChangeInput={onChangeInput}
  //     oninsert={onInsert}
  //     onToggle={onToggle}
  //     onRemove={onRemove}
  //   />
  // );
};

export default TodosContainer;
