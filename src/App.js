import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Search from './components/Search';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="wrapper">
      <div className='header'> 
      <Header />
       </div>
      <div className='search'> <Search /> </div>
      <div className='menu'> <Menu /> </div>
      <div className='content'> <Content /> </div>
    </div>
  );
}

export default App;
