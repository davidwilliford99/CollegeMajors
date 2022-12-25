import './App.css';
import { Route, Routes } from "react-router-dom"
import { Header } from './components/Header';
import { MajorPage } from './pages/MajorPage';
import { WelcomePage } from './pages/WelcomePage';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

// link to csv dataset
// https://www.kaggle.com/datasets/thedevastator/uncovering-insights-to-college-majors-and-their


function App() {
  return (
    <div id='App'>

      <div id='header'>
        <Header/>
      </div>

      <div id='content' className='flex'>
        <Sidebar/>

        <Routes>
          <Route path="/" element={< WelcomePage/>} />
          <Route path="/Major" element={<MajorPage />} />
        </Routes>
      </div>

      <div id='footer'>
        <Footer/>
    </div>

    </div>
  );
}

export default App;
