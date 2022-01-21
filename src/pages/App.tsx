import Form from '../components/Form';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import style from './App.module.scss';

const App = () => {
  return (
    <div className={style.App}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
