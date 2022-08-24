import { Header } from './components/Header';
import { Todo } from './components/Todo';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <>
      <Header />
      
      <main className={styles.wrapper}>
        <Todo />        
      </main>
    </>
  );
}

export default App
