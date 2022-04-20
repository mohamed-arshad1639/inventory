
import './App.css';
import Home from './Home';
import Addproduct from './components/Addproduct';
import Listproduct from './components/Listproduct';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header';


function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <main class="p-3">
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/Addproduct' element ={<Addproduct/>}/>
           {/* <Route path='/Listproduct' element ={<Listproduct/>}/> */}
           
          
         </Routes>
      
       </main>
    
     </Router>
     
    </div>
  );
}

export default App;
