import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Nav, NavLink, NavMenu } 
//     from "./components/NavbarElements";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//For app to work offline
// serviceWorker.register();
// function App() {
//   return (
//       <Router>
//       <Navbar />
//       <Routes>
//           <Route exact path='/'  element={<Hero />} />
//           <Route path='/Project' element={<About/>} />
//           <Route path='/Experience' element={<Experience/>} />
//           <Route path='/Skill' element={<Skill/>} />
//           <Route path='/Contact' element={<Contact/>} />
//       </Routes>
//       </Router>
//   );
//   }
// const Navbar = () => {
//   return (
//     <>
//       <Nav>
//         <NavMenu>
//           <NavLink to="/Project" activeStyle>
//             Project
//           </NavLink>
//           <NavLink to="/Experience" activeStyle>
//             Experience
//           </NavLink>
//           <NavLink to="/Skill" activeStyle>
//             Skill
//           </NavLink>
//           <NavLink to="/Contact" activeStyle>
//             Contact
//           </NavLink>
//         </NavMenu>
//       </Nav>
//     </>
//   );
// };
  // export default Navbar;