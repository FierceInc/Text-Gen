import './App.css';
import Categories from './components/Categories';
import Web from "./images/Web.png"

function App() {
  return (
    <div className="Container">
        <h1>Generate filler text <span>for your designs.</span></h1>
        <div className='ImageCont'>
          <img src={Web} alt="" />
        </div>
        
        <p>It's not just random words, its actual text you can use in production.</p>
        <h3>Categories <span className="CTA">{<i className="bi bi-arrow-down-circle"></i> } </span></h3>
          <Categories/>
    </div>
  );
}

export default App;
