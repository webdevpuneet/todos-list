import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';

function App() {

  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "YOu need to go to the market to get this job done",
    },
    {
      sno: 1,
      title: "Go to the mall",
      desc: "YOu need to go to the market to get this job done",
    },
    {
      sno: 1,
      title: "Go to the ghat",
      desc: "YOu need to go to the market to get this job done",
    }
  ]

  return (
    <>
      <Header title="My Todos List" searchBar={true}/>
      <Todos todos={todos}/>
      <Footer/>
    </>
  );
}

export default App;
