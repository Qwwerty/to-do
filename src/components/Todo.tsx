import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import { Count } from "./Count";
import { Empty } from "./Empty";
import { Card } from "./Card";

import styles from "./Todo.module.css";

interface Todo {
  id: string;
  text: string;
  checked: boolean;
}

export function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState("");

  const todosFinished = todos.filter((todo) => todo.checked);
  const countCreated = todos.length;
  const countFinished = todosFinished.length;

  const hasCount = countCreated > 0;
  const isNewTodoTextEmpty = todoText.length === 0;

  function handleCreateNewText(event: ChangeEvent<HTMLInputElement>) {
    setTodoText(event.target.value);
  }

  function handleCreateNewTodo(event: any) {
    const todo = {
      id: uuidv4(),
      text: todoText,
      checked: false,
    };

    setTodos([...todos, todo]);

    setTodoText("");
  }

  function checkTodo(id: string) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }

      return todo;
    });

    setTodos(newTodos);
  }

  function deleteTodo(id: string) {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  }

  return (
    <div className={styles.todo}>
      <div className={styles.action}>
        <input
          onChange={handleCreateNewText}
          value={todoText}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button onClick={handleCreateNewTodo} disabled={isNewTodoTextEmpty}>
          Criar
          <PlusCircle size={20} />
        </button>
      </div>
      <Count countCreated={countCreated} countFinished={countFinished} />

      {hasCount ? (
        <div>
          {todos.map((todo) => (
            <Card
              todo={todo}
              checkTodo={checkTodo}
              deleteTodo={deleteTodo}
              key={todo.id}
            />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}
