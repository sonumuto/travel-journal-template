import './App.css';
import Place from './components/Place'
import Navbar from './components/Navbar'
import data from './data.js'

function App() {
  const places = data.map(item => {
    return(
        <Place 
          {...item}
        />  
      );
  })
  return (
    <div className="App">
      <Navbar/>
      <section className='place-list'>
        {places}
      </section>
    </div>
  );
}

export default App;
