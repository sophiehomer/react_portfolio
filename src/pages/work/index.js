import React, { useEffect } from 'react'
import Portfolio from '../../components/Portfolio'
import NavProject from '../../components/Navigation_project';

const Work = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
      <div>
           <NavProject/>
        <section className='workIntroContainer'>
        <p className="workIntro"> 
            In 2018 I went on a mission to find intimate soap. I remember walking down the aisles and being disappointed. The options were limited, the aesthetic was cold and corporate, and the ingredients consisted of harsh chemicals. I went home and began the search for intimate soap online. To my surprise, there were few options and I wasn’t impressed with any of them. I decided to start my own feminine hygiene company and I would call it Femme Dept. 
        </p>
        <p className="workIntro"> 
            I began my research journey and started having conversations with my mentor. He would tell me to stand in the aisle and evaluate how I felt when I looked at the intimate soaps. I thought the suggestion was a bit bizarre but I did it anyway. As I stood in the aisle studying the labels I noticed I was feeling embarrassed and insecure. From that point on, I wanted Femme Dept. to empower women. From purchasing the product to displaying it in the shower, I wanted to create a joyful user experience.
        </p>
        <p className="workIntro">
            I hired a chemist and a designer and the ball began to roll. Because I wanted to sell the product online initially, the website was very important to me. My web designer had strong technical skills but there was a disconnect with the aesthetic I wanted to achieve. This led me to want to do it on my own. I had no experience but I was determined to learn.
        </p>
        <p className="workIntro">
            In May of 2022 my chemist passed away from Covid, and I decided to shelve this idea for the time being.  My yearn to learn only grew afterwards. In December of 2022 I enrolled myself in a full-stack coding bootcamp. Although I wanted to be a designer, I felt it was important to have a firm grasp on function. 
        </p>
        <p className="workIntro">
            Throughout my program I learned how to code responsive applications from start to finish, design user interfaces, and research efficiently. I'm looking to grow as a designer and providing pleasurable experiences for others is what motivates me.
        </p>

        <p className="workIntro">Below are a few projects displaying my skillset</p>
        </section>  
       
        <Portfolio/>
      </div>
    )
  }
  
  export default Work





