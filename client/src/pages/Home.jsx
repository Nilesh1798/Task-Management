import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo1 from "../assets/logo1.png";
// import vid from "../assets/vid.mp4";
// import vid1 from "../assets/vid1.mp4";
import { features } from "../constants";
import { testimonials } from "../constants";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Home = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
    
  return (
    <nav className="top-0 z-50 border-b backdrop-blur-lg border-neutral-700/80">
      <div className="container px-4 py-4 mx-auto lg:text-sm bg-cyan-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 mr-2 w-15" src={logo1} alt="Logo" />
            <span className="text-3xl font-bold tracking-tight cursor-pointer">Taskify</span>
          </div>
          <ul className="hidden space-x-12 text-xl lg:flex ml-14">
            <li className="hover:text-blue-700 hover:font-bold"><a href="#features">Features</a></li>
            <li className="hover:text-blue-700 hover:font-bold"><a href="#test">Testimonials</a></li>
            <li className="hover:text-blue-700 hover:font-bold"><a href="#contact">Contact Us</a></li>
          </ul>
          <div className="items-center justify-center hidden space-x-12 lg:flex">
            <a href="/log-in" className="px-3 py-2 font-bold text-white border rounded-md bg-gradient-to-r from-blue-500 to-blue-700">
              Sign In
            </a>
            <a
              href="/sign-up"
              className="px-3 py-2 font-bold text-white rounded-md bg-gradient-to-r from-blue-500 to-blue-700"
            >
              Create an account
            </a>
          </div>
          <div className="flex-col justify-end lg:hidden md:flex">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 flex flex-col items-center justify-center w-full p-12 bg-white lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 mb-5">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="/log-in" className="px-3 py-2 text-white border rounded-md bg-gradient-to-r from-blue-500 to-blue-700">
                Sign In
              </a>
              <a
                href="/sign-up"
                className="px-3 py-2 text-white rounded-md bg-gradient-to-r from-blue-500 to-blue-700"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex flex-col items-center p-10 hero bg-cyan-100">
      <h1 className="text-4xl tracking-wide text-center sm:text-6xl lg:text-7xl">
        Taskly assign task 
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text">
          {" "}
          for users
        </span>
      </h1>
      <p className="max-w-4xl mt-10 text-lg text-center text-gray-600">
        Assign, edit, and track the status of the task very easily with our website.
        Get started today and assign the task to your clients online!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="/sign-up"
          className="px-4 py-3 mx-3 font-bold text-white rounded-md bg-gradient-to-r from-blue-500 to-blue-800"
        >
          Start for free
        </a>
        <a href="/docu" className="px-4 py-3 mx-3 font-bold text-white bg-blue-400 border rounded-md">
          Documentation
        </a>
      </div>
      {/* <div className="flex justify-center mt-40">
        <video
          autoPlay
          loop
          muted
          className="w-1/3 mx-2 my-4 border border-blue-700 rounded-lg shadow-sm shadow-blue-400"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="w-1/3 mx-2 my-4 border border-blue-700 rounded-lg shadow-sm shadow-blue-400"
        >
          <source src={vid1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>


    <div id="features" className="relative border-b border-t border-neutral-800 min-h-[800px] bg-blue-100">
      <div className="p-10 text-center">
        <span className="h-6 px-4 py-1 mt-4 text-xl font-medium text-white uppercase bg-blue-700 rounded-full">
          Features
        </span>
        <h2 className="mt-10 text-3xl tracking-wide sm:text-5xl lg:text-6xl lg:mt-20">
          Easily assign{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text">
            the task
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex items-center justify-center w-10 h-10 p-2 mx-6 text-white rounded-full bg-violet-700">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="p-2 mb-20 text-md text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div id="test" className="mt-20 tracking-wide border-b border-black">
      <h2 className="my-10 text-3xl text-center sm:text-5xl lg:text-6xl lg:my-20">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center mb-20">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full px-4 py-2 sm:w-1/2 lg:w-1/3">
            <div className="p-6 font-thin border border-blue-800 rounded-md bg-blue-50 text-md">
              <p>{testimonial.text}</p>
              <div className="flex items-start mt-8">
                <img
                  className="w-12 h-12 mr-6 border rounded-full border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm italic font-normal text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div id="contact">
        <div className="text-center">
          <h1 className="mt-10 text-6xl">Contact Us</h1>
        </div>
        <div class="flex flex-col md:flex-row justify-center max-w-7xl ml-40 mt-20">
            <div class="flex flex-col px-7 py-2 bg-slate-300  w-full rounded-tl-3xl">
                <div class="text-lg font-semibold">
                    <h1 className="mb-4 text-3xl font-bold">Send a message</h1>
                </div>
                <div class="flex flex-col md:flex-row ">
                    <div>
                      <input type="text" name="" id="" placeholder="Enter first name" class="w-full border-2 border-white px-3 py-1 text-sm outline-none placeholder:text-black placeholder:opacity-40 mt-4 mr-2 focus:border-blue-500 duration-200 ease-in-out rounded-lg"/>
                    </div>
                    <div>
                      <input type="text" name="" id="" placeholder="Enter last name" class="w-full md:w-[95%] border-2 border-white px-3 py-1 text-sm outline-none placeholder:text-black placeholder:opacity-40 mt-4 md:ml-2 focus:border-blue-500 duration-200 ease-in-out rounded-lg"/>
                    </div>
                </div>
                  <input type="email" name="" id="" placeholder="Enter email address" class="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder:text-black placeholder:opacity-40 mt-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg"/>
                  <input type="tel" name="" id="" placeholder="Phone Number" class="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder:text-black placeholder:opacity-40 mt-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg"/>
                  <input type="text" name="" id="" placeholder="Subject" class="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder:text-black placeholder:opacity-40 mt-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg"/>
                  <textarea id="message" name="message" placeholder="Write us a message" class="mb-3 w-full border-2 border-white h-44 text-sm outline-none placeholder:text-black placeholder:opacity-40 focus:border-blue-500 py-1 px-3 mt-4 resize-none leading-6 duration-200 ease-in-out rounded-lg"></textarea>
                  <button class="bg-sky-800 hover:bg-blue-600 px-4 font-semibold text-white w-1/2 text-center mx-auto my-3 rounded-tr-lg rounded-bl-lg">Send</button>
            </div>
            <div class="flex flex-col bg-cyan-300 text-black md:w-[65%] rounded-br-3xl">
              <h1 class="font-semibold px-5 my-5 text-3xl">Contact info</h1>
              <div class="flex px-5 space-x-2">
                <ion-icon name="call-sharp" class="text-stone-700 mt-1 my-3"></ion-icon>
                <span class="text-md font-bold mb-4">+91 95484 05497</span>
              </div>
              <div class="flex px-5 space-x-2">
                <ion-icon name="mail" class="text-stone-700 mt-1 my-3"></ion-icon>
                  <span class="text-md font-bold mb-4">infotaskify1234@gmail.com</span>
              </div>
              <div class="flex px-5 space-x-2 mb-40">
                <ion-icon name="home" class="text-stone-700 mt-1 my-3" ></ion-icon>
                <span class="text-md font-bold mb-4">GLA University 17km Stone,NH-2,Mathura-Delhi Road Mathura,Uttar Pradesh 281406</span>
              </div>
              <div class="px-5 space-x-5 mt-7 mx-auto mb-5" >
                  <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f text-white bg-blue-600 text-2xl p-2 rounded-xl"></i></a>
                  <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram text-white bg-gradient-to-bl from-indigo-800 via bg-fuchsia-500 to-amber-400 p-2 rounded-xl text-2xl"></i></a>
                  <a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin text-white bg-blue-900 text-2xl p-2 rounded-xl"></i></a>
              </div>
            </div>
        </div>
    </div>
    <script src="https://kit.fontawesome.com/290d4f0eb4.js" crossorigin="anonymous"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
                                     
      
    <footer id="footer" className="py-10 mt-20 border-t border-neutral-700">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <div>
          <h3 className="mb-4 ml-10 text-xl font-bold">Resources</h3>
          <ul className="ml-10 space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-black hover:text-blue-900"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 ml-10 text-xl font-bold">Platform</h3>
          <ul className="ml-10 space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-black hover:text-blue-900"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 ml-10 text-xl font-bold">Community</h3>
          <ul className="ml-10 space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-black hover:text-blue-900"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div class="text-white font-medium mt-10 mb-0 text-md text-center bg-blue-500 p-5 space-y-0"> Copyright 2024. All rights reserved by <a href="#" class="text-white hover:text-black">Taskify</a></div>
    </footer>
    </nav>
  )
}

export default Home