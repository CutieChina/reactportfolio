import React from 'react';
// import React, {Component} from 'react';
// import axios from 'axios';

// const Blogs = () => {
// return (
// 	<h1>You can write your blogs!</h1>
// );
// };


// const Contact = () => {
//   return (
//     <section className='my-28' id='contact'>
//       <header className='px-5 text-2xl font-bold pt-10'>
//         <h2>Contact Me</h2>
//         <p className='text-base font-thin'>I'd love to hear your thoughts!</p>
//       </header>
//       <div className='md:mx-6 flex flex-col flex-wrap md:flex-row justify-between'>
//         <div className='md:w-6/12 md:px-0 p-5 my-5'>
//           <div>
//             <p className='font-bold'>China Jameson</p>
//             <p className='font-thin'>Louisville, KY</p>
//             <a href={`mailto: `} className='border-b-2 mt-3 inline-block border-gray-500'>
//               china@aol.com
//             </a>
//           </div>
//           {/* <a className='border-b-2 mt-3 inline-block border-gray-500' href= target='_blank' rel='noreferrer'>
//             Resume
//           </a> */}
//           <div className='flex flex-row flex-wrap mt-7'>
//             <div className='mr-4'>
//               <a href={`https://www.linkedin.com/in/`} target='_blank' rel='noreferrer'>
//                 <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
//                   <img src='./images/icons/linkedin.svg' alt='' width='24px' height='24px' className='mr-1' />
//                   LinkedIn
//                 </span>
//               </a>
//             </div>

//             <div className='mr-4'>
//               <a href={`https://github.com/`} target='_blank' rel='noreferrer'>
//                 <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
//                   <img src='./images/icons/github.svg' alt='' width='24px' height='24px' className='mr-1' />
//                   GitHub
//                 </span>
//               </a>
//             </div>

//             <a href={`https://twitter.com/`} target='_blank' rel='noreferrer'>
//               <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
//                 <img src='./images/icons/icons8-twitter (2).svg' alt='' width='24px' height='24px' className='mr-1' />
//                  Twitter
//               </span>
//             </a>
//           </div>
//         </div>

//         <div className='bg-gray px-5 py-10 md:py-8 sm:p-8 my-2 md:rounded-lg shadow-lg  justify-between w-full  md:w-6/12 '>
//           <form className='flex flex-col space-y-3 m-auto w-full' name='contact' method='post'>
//             <input type='hidden' name='form-name' value='contact' />

//             <label htmlFor='name'>Name</label>
//             <input type='text' name='name' id='name' className='gradient' required></input>
//             <label htmlFor='email'>Email</label>
//             <input type='email' name='email' id='email' className='gradient' required></input>
//             <label htmlFor='message'>Message</label>
//             <textarea name='message' id='message' cols='25' rows='5' className='gradient' required></textarea>
//             <button type='submit' className='border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md'>
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className='relative md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm' onClick={() => window.scroll(0, 0)}>
//         <picture>
//           <source srcSet='./images/rocket-320.webp 320w, ./images/rocket.webp 768w' type='image/webp' />
//           <source srcSet='./images/rocket.png' sizes='(min-width: 768px) 50vw, 100vw' type='image/png' />
//           <img width='500px' height='500px' loading='lazy' alt='red rocket flying' />
//         </picture>
//       </div>
//     </section>
//   );
// };

function Contact() {
  return (
      <div>
          {/* <nav class="navbar background">
              <ul class="nav-list">
                  <div class="logo">
                      <img src=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png" />
                  </div>
                  <li><a href="#courses">Courses</a></li>
                  <li><a href="#tutorials">Tutorials</a></li>
                  <li><a href="#jobs">Jobs</a></li>
                  <li><a href='#student'>Student</a></li>
              </ul>

              <div class="rightNav">
                  <input type="text" name="search" id="search" />
                  <button class="btn btn-sm">Search</button>
              </div>
          </nav> */}

          <ul>
            <li>
            <img src=
"https://cdn.dribbble.com/users/662463/screenshots/3417042/woman_clapping.gif" />
            </li>
          </ul>

          <section class="section">
              <div class="box-main">
                  <div class="firstHalf">
                      <h1 class="text-big">
                          7 Best Tips To Speed Up Your 
                          Job Search in 2022
                      </h1>
                      <p class="text-small">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Vel quos a ab architecto quasi, eum minima neque, hic
                      exercitationem est ex facere, quam sapiente minus quae
                      labore error consequuntur debitis? Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad 
                      minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                      in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                      nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                      sunt in culpa qui officia deserunt mollit anim id est laborum.

                      </p>
                  </div>
              </div>
          </section>
          <section class="section">
              <div class="box-main">
                  <div class="secondHalf">
                      <h1 class="text-big" id="program">
                          JavaScript Tutorial
                      </h1>
                      <p class="text-small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna 
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit 
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                      occaecat cupidatat non proident, sunt in culpa qui officia 
                      deserunt mollit anim id est laborum.
                      </p>
                  </div>
              </div>
          </section>
          <section class="section">
              <div class="box-main">
                  <div class="secondHalf">
                      <h1 class="text-big" id="program">
                          Java Programming Language
                      </h1>
                      <p class="text-small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna 
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit 
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                      occaecat cupidatat non proident, sunt in culpa qui officia 
                      deserunt mollit anim id est laborum.
                      </p>
                  </div>
              </div>
          </section>
          <section class="section">
              <div class="box-main">
                  <div class="secondHalf">
                      <h1 class="text-big" id="program">
                          What is Machine Learning?
                      </h1>
                      <p class="text-small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna 
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit 
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                      occaecat cupidatat non proident, sunt in culpa qui officia 
                      deserunt mollit anim id est laborum.
                      </p>
                  </div>
              </div>
          </section>
          <footer className="footer">
              <p className="text-footer">
                  Copyright ©-All rights are reserved
              </p>
          </footer>
      </div>
  )
}

export default Contact;
