import { Trash } from "phosphor-react";
import { useState } from "react";

import styles from "./Card.module.css";

interface Todo {
  id: string;
  text: string;
  checked: boolean;
}

interface CardProps {
  todo: Todo;
  checkTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export function Card({ todo, checkTodo, deleteTodo }: CardProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChecked(event: any) {
    setIsChecked(event.target.checked);

    checkTodo(todo.id);
  }

  return (
    <div className={styles.card}>
      <div>
        <div className={styles.checkbox}>
          <input
            onChange={handleChecked}
            id={`checkbox-${todo.id}`}
            type="checkbox"
          />
          <label htmlFor={`checkbox-${todo.id}`}></label>
        </div>
        <p className={isChecked ? styles.checked : ""}>{todo.text}</p>
      </div>

      <div className={styles.icon}>
        <Trash onClick={() => deleteTodo(todo.id)} size={24} alt="Trash Icon" />
      </div>
    </div>
  );
}
