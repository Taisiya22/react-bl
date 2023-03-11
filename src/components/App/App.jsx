import userData from '../data.json';
import { ForbesList } from '../ForbesList/ForbesList';
import css from './App.module.css';
export const App = () => {
  return (
    <div className={css.card}>
      <div className={css.wrapper}>
        <h1 className={css.title}>FORBES</h1>
        <p className={css.text}>LEADERBORD</p>
      </div>
      <ForbesList userData={userData} />
    </div>
  );
};
