import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../app.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';



const About = () => {

    const [menuOpen, setMenuOpen] = useState(false);

     const progressCircle = useRef(null);
     const progressContent = useRef(null);
     const onAutoplayTimeLeft = (s, time, progress) => {
     progressCircle.current.style.setProperty('--progress', 1 - progress);
     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
     };

    return(

      //Full Page
        <div className="w-full  pb-0 bg-blue-100   bg-no-repeat "
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')" }}>

            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 

            

            {/*Blog Content */}
    <div className="max-w-[1240px] mx-auto ">
      <div className="grid lg:grid-cols-3  sm:grid-cols-1 gap-8 px-4 sm:pt-20 md:mt-0 text-gray-100 mb-0">


          <div className="col-span-3 flex justify-center items-center mt-20 mb-20 h-[400px] ">
           <Swiper
            className="!w-full max-w-[1000px] !h-[500px] rounded-lg overflow-hidden"
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
        } }
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div></div>   

       <div className="bg-black  text-gray-100 mb-10 w-full col-span-3">
        <h1 className="flex justify-center text-2xl mt-8 pt-2 font-semibold">About</h1> <br /> <hr className="bg-white " /> <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, nobis neque. Ipsa beatae enim dolorum atque velit, veniam fugiat eius nam accusantium quaerat repellat porro perferendis, dignissimos vero voluptas sunt doloremque! Quo ut soluta magnam vero numquam molestias culpa quibusdam sit accusamus quod enim optio dicta officia obcaecati aliquam deleniti atque corrupti reiciendis distinctio non, velit nulla dolore ullam! Assumenda sequi quae sapiente illo enim iste doloremque ut quia cupiditate quaerat iusto tempore quasi eos, tempora officiis minima aspernatur animi veritatis unde quam, non at. Nesciunt officia veritatis repellendus mollitia, nihil iusto deleniti perferendis repudiandae cum? Quaerat odit ab maxime.</p>
       </div>
      

      

      
            </div> 
            <Footer />
            
            
        </div>
    )


}

export default About