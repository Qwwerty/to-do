import Clipboard from "../assets/clipboard.svg";

import styles from './Empty.module.css';

export function Empty() {
  return (
    <section className={styles.empty}>
      <div>
        <img src={Clipboard} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </section>
  );
}
