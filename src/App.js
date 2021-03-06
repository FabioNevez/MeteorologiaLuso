import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';

function App() {
  return (<div>

    <Header />
    <div className="body">
      <Layout />
    </div>
    
     <Footer />

   </div>);
}

export default App;
