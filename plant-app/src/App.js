import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import 'antd/dist/antd.css';
import plantData from "./data/plantData.json"
import FilteredList from "./FilteredList";


/* ############################################################## */
plantData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {


  return (
    <div className="App">
      <h1 className="header">PLANT SHOP</h1>
      <hr style={
        {height:'5px',
        borderWidth:'0',
        color:'white',
        backgroundColor:'white'}
        }/>
   
       <FilteredList list={plantData}/>

    </div>
  );
}

export default App;
