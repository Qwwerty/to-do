import styles from "./Count.module.css";

interface CountProps {
  countCreated: number;
  countFinished: number;
}

export function Count({ countCreated, countFinished }: CountProps) {
  const countFinishedText = countCreated === 0
    ? countCreated
    : `${countFinished} de ${countCreated}`;

  return (
    <div className={styles.count}>
      <section>
        <div className={styles.created}>
          <strong>Tarefas criadas</strong>
          <span>{countCreated}</span>
        </div>

        <div className={styles.done}>
          <strong>Concluídos</strong>
          <span>{countFinishedText}</span>
        </div>
      </section>
    </div>
  );
}
