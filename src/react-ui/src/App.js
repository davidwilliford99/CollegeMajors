import './App.css';
import { Route, Routes } from "react-router-dom"
import { Header } from './components/Header';
import { MajorPage } from './pages/MajorPage';
import { WelcomePage } from './pages/WelcomePage';
import { CategoriesPage } from './pages/CategoriesPage';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { AllMajorsPage } from './pages/AllMajorsPage';
import { ForumPage } from './pages/ForumPage';

// link to csv dataset
// https://www.kaggle.com/datasets/thedevastator/uncovering-insights-to-college-majors-and-their

// Notice some routes have url parameters (majorName for example)


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
          <Route path="/categories" element={<CategoriesPage />}/>
          <Route path="/all" element={<AllMajorsPage />}/>
          <Route path="/forum" element={<ForumPage/>}/>
          <Route path="/major/:majorName" element={<MajorPage />} />
        </Routes>
      </div>

      <div id='footer'>
        <Footer/>
    </div>

    </div>
  );
}

export default App;
