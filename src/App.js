import './App.css';
import Pageintation from './component/Pageintation';
import Search from './component/Search';
import Stories from './component/Stories';
// import { useContext } from 'react';
// import { AppContext } from './context';
// import { useGlobalContext } from './context';


function App() {
   // const data = useContext(AppContext);
  // const data = useGlobalContext();

  return (
    <>
  
    <Search/>
    <Pageintation/>
    <Stories/>
    </>  
  
  );
}

export default App;
