import css1 from '../img/portImages/image1.png';
import css2 from '../img/portImages/front.jpg';
import react1 from '../img/portImages/react_styled.png';
import img3 from '../img/portImages/random.png';
import cal from "../img/portImages/cal.png"
import plant from "../img/portImages/plant.png"
import hermes from "../img/portImages/hermes-play.svg"
import dash from "../img/portImages/dash.png"
import startup from "../img/portImages/startup.png"
import krunch from "../img/portImages/krunch.png"

const portfolios = [
    {
        id: 1,
        category: 'CSS',
        image: css1,
        link1: 'https://github.com/PeterAdedokun1/E-commere',
        link2: 'https://adedokun-peter-ecommerce.netlify.app/',
        title: 'Responsive E-commerce Website',
        text: 'Created with only HTML and CSS.'
    },
   
     {
        id: 2,
        category: 'Javascript',
        image: cal,
        link1: 'https://github.com/PeterAdedokun1/Javascript-cal',
        link2: 'https://adedokun-peter-cal-app.netlify.app/',
        title: 'Javascript Calculator',
        text: 'Javascript Calculator with keyboard function'
    },
 

    {
        id: 3,
        category: 'React JS',
        image: react1,
        // link1: 'https://www.google.com',
        link2: 'https://adedokun-peter-portfolio123.netlify.app/',
        title: 'Responsive Portfolio Website',
        text: 'Created using different technologies such as Material UI, Styled-Components and more...'
    },
    {
        id: 4,
        category: 'CSS',
        image: css2,
        link1: 'https://github.com/PeterAdedokun1/Front-project',
        link2: 'https://peterade-front.netlify.app/',
        title: 'Front Website Project',
        text: 'Created using HTML, CSS, BOOTSTRAP AND JAVASCRIPT'
    },
     {
        id: 5,
        category: 'Javascript',
        image: img3,
        link1: 'https://github.com/PeterAdedokun1/javacript-random-password-generator',
        link2: 'https://ade-random-password-generator.netlify.app/',
        title: 'Javascript Random Password Generator',
        text: 'Random Generator'
    },
     {
        id: 6,
        category: 'CSS',
        image: plant,
        link1: 'https://github.com/PeterAdedokun1/plant-project',
        link2: 'https://peterade-plant.netlify.app/',
        title: 'Responsive Plant Website',
        text: 'Created with only HTML, CSS AND JAVASCRIPT'
    },
      {
        id: 7,
        category: 'React JS',
        image: dash,
        link1: 'https://www.google.com',
        link2: 'https://peterade-react-dashboard.netlify.app/',
        title: 'React DashBoard',
        text: 'Created using different technologies such as Material UI, sass, Styled-Components and more...'
    },
       {
        id: 8,
        category: 'React JS',
        image: hermes,
        link1: 'https://www.google.com',
        link2: 'https://adedokun-peter-hermes11.netlify.app/',
        title: 'Hermes Website',
        text: 'Created using different technologies such as Material UI, sass, Styled-Components and more...'
    },
          {
        id: 9,
        category: 'Next JS',
        image: startup,
        link1: 'https://www.google.com',
        link2: 'https://adedokun-peter-landingpage.netlify.app/',
        title: 'Startup landing page',
        text: 'Created Nextjs , Reactjs and styled component.'
    },
          
          {
        id: 10,
        category: 'CSS',
        image: krunch,
        link1: 'https://www.google.com',
        link2: 'https://adedokun-peter-krunchy.netlify.app/',
        title: 'Startup landing page',
        text: 'Krunch Website Created Using HTML AND CSS'
    },
      
       
]

export default portfolios;