
import './App.css';
import react from 'react';
import Task from "./comp/Task"
import Team from './comp/Team';
import Footer from './comp/Footer';

function App() {
  return (
    <react.Fragment>
    <div >

      
<div  class=" text-center bg-black text-white">
                <Task></Task>
            

    <h1 class="text-6xl mt-40">TEAM SEACTION</h1>
<Team></Team>
<Team></Team>

<Footer></Footer>

</div>


    </div>
    </react.Fragment>
    
  );
}


export default App;
