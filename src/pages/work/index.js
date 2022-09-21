import React, { useEffect } from 'react'
import Portfolio from '../../components/Portfolio'
import NavProject from '../../components/Navigation_project';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
      <div>
           <NavProject/>
        <section className='workIntroContainer'>
        <p className="workIntro"> 
        A few years ago I went on a mission to find a high-quality, organic intimate soap. The options were limited; the aesthetics cold and corporate; and the ingredients often harsh. As I studied the labels, I felt myself become embarrassed and insecure. It was that moment that compelled me to create a joyful user experience for others. I decided to start my own feminine hygiene company: Femme Dept.   
         </p>
        <p className="workIntro"> 
        I hired a chemist and a designer. The only way to reach potential customers and convince them that Femme Dept. was a superior product was through an impactful website. Despite my designer’s strong technical skills, there was a disconnect around aesthetics. This led me to want to be more hands on and do things on my own.       
         </p>
        <p className="workIntro">
        Midway through the process, the chemist I hired passed away — this unfortunate news helped me decide to focus exclusively on learning and put Femme Dept. development on pause. </p>
        <p className="workIntro">
        To gain a firm grasp on function as a designer, I enrolled in a full-stack coding bootcamp. I learned how to code responsive applications, design user interfaces, and research efficiently.        </p>
        <p className="workIntro">
        Now, I’m eager to grow as a designer and excited to build delightful experiences.
       </p>
        </section>  
      </div>
    )
  }
   
  export default About





