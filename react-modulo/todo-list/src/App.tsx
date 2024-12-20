import {Header} from './components/Header/Header';
import './styles/global.css'
import { Tasks } from './components/Tasks/Tasks';
//import { Refs } from './components/Concepts/Refs';
import { Memoization } from './components/Concepts/Memoization';


function App() {
  return (
    <>
    <Header/>
    <Tasks/>
    {/* <Refs/> */}
    <Memoization financialData={{ incomes: [50,20,30], outcomes:[5,8,4]}}/>
    </>
  )
}

export default App;
