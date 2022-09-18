import { useSelector } from "react-redux";
import {
  DEFAULT_VISIBILITY,
  DONE_VISIBILITY,
  NOT_DONE_VISIBILITY,
} from "./Constants/constants";
import Todo from "./Components/todo";
import Add from "./Components/Add";
import { Container, Row } from "react-bootstrap";
import Edit from "./Components/Edit";

function App() {
  const { todos, visibilityFilter, editModalVisibilityFilter, taskId } =
    useSelector((state) => state);

  return (
    <>
      <Add />
      {editModalVisibilityFilter ? (
        <Edit id={taskId} display={editModalVisibilityFilter} />
      ) : (
        <></>
      )}
      <Container>
        <Row>
          {
            // eslint-disable-next-line
            todos.map((currentTodo) => {
              const currentTodoState = currentTodo.isDone;
              if (
                visibilityFilter === DONE_VISIBILITY &&
                currentTodoState === true
              )
                return (
                  <Todo
                    id={currentTodo.id}
                    description={currentTodo.description}
                    isDone={currentTodo.isDone}
                  />
                );
              else if (
                visibilityFilter === NOT_DONE_VISIBILITY &&
                currentTodoState === false
              )
                return (
                  <Todo
                    id={currentTodo.id}
                    description={currentTodo.description}
                    isDone={currentTodo.isDone}
                  />
                );
              else if (visibilityFilter === DEFAULT_VISIBILITY)
                return (
                  <Todo
                    id={currentTodo.id}
                    description={currentTodo.description}
                    isDone={currentTodo.isDone}
                  />
                );
            })
          }
        </Row>
      </Container>
    </>
  );
}

export default App;
