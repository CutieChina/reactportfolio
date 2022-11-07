import React from 'react';
import './App.css';
import Navbar from './components/index.js';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/sign-up';
import Contact from './pages/contact';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
    </Routes>
    </Router>
);
}
  

// const Header = lazy(() => import('./components/Header'));
// const Hero = lazy(() => import('./components/Hero'));
// const Project = lazy(() => import('./components/Project'));
// const Skill = lazy(() => import('./components/Skill'));
// const Contact = lazy(() => import('./components/Contact'));
// const Experience = lazy(() => import('./components/Experience'))
// function App() {
//   return (
//     <Suspense
//       fallback={
//         <div className='sk-folding-cube'>
//           <div className='sk-cube1 sk-cube'></div>
//           <div className='sk-cube2 sk-cube'></div>
//           <div className='sk-cube4 sk-cube'></div>
//           <div className='sk-cube3 sk-cube'></div>
//         </div>
//       }
//     >
//       <div className='App container my-10 mx-auto max-w-screen-lg bg-black'>
//         <Header />
//         <main>
//           <Hero />
//           <Experience />
//           <Project />
//           <Skill />
//           <Contact />
//         </main>
//       </div>
//     </Suspense>
//   );
// }

// function App() {
//   return (
//       <Router>
//       <Navbar />
//       <Routes>
//           <Route exact path='/' exact element={<Hero />} />
//           <Route path='/Project' element={<About/>} />
//           <Route path='/Experience' element={<Experience/>} />
//           <Route path='/Skill' element={<Skill/>} />
//           <Route path='/Contact' element={<Contact/>} />
//       </Routes>
//       </Router>
//   );
//   }




export default App;