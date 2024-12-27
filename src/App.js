import React,{ useState } from 'react';
import './App.css';
import bg1 from './img/sustainable-development-goals-still-life.jpg';
import bg2 from './img/White-Revolution.png';
import bg3 from './img/blue.png';
import bg4 from './img/industry.png';
import bg5 from './img/ecnomic.png';
import bg6 from './img/it.png';
import bg7 from './img/digital.png';
import { FaBeer } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'


function Navbarcom() {
  const [activeDot, setActiveDot] = useState(0);
  const [rotation, setRotation] = useState(0);

  const [currentImage, setCurrentImage] = useState(0);

  // List of images
  const images = [
    "https://www.revv.co.in/blogs/wp-content/uploads/2019/11/self-drive-car-rental-delhi-gurgaon-noida_revv-blog.jpg",
    "https://th.bing.com/th/id/R.94ee1a4421106f634dfdc0bdf3818684?rik=fG2Pb703goLVJA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-OpqSAKhcdZ4%2fVhqjfoUSo1I%2fAAAAAAAAJ5M%2fTZy0hzbMAjE%2fs1600%2fGatewayofindia.jpg&ehk=jatCpAqr05AVIg8MXGj2qftEHJpi%2bw6I1y8sgZyQBqI%3d&risl=&pid=ImgRaw&r=0",
    "https://wallpaperaccess.com/full/107743.jpg",
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };


  const dots = [
    {
      title: "Green Revolution",
      description: "The Green Revolution was a period of agricultural transformation in India led by scientists like M.S. Swaminathan.",
      description1:"It introduced high-yield variety (HYV) seeds, modern irrigation techniques, and chemical fertilizers, significantly increasing food grain production. This helped India achieve self-sufficiency in food production and combat famine.",
      backgroundImage: bg1, 
    },
    {
      title: "White Revolution",
      description: "The White Revolution, spearheaded by Verghese Kurien through the National Dairy Development Board (NDDB), transformed India into the largest producer of milk and dairy products in the world. ",
      description1:"The initiative, known as Operation Flood, improved rural incomes and reduced dependence on dairy imports.",
      backgroundImage: bg2,    
    },
    {
      title: "Blue Revolution",
      description: "The Blue Revolution focused on the development and growth of aquaculture and fisheries in India.",
      description1:"It aimed to increase fish production, enhance rural livelihoods, and ensure food security. It also emphasized sustainable practices in marine and freshwater fishing.",
      backgroundImage: bg3,    
    },
    {
      title: "Industrial Revolution in India",
      description: "Post-independence, India focused on industrialization to build a self-reliant economy. Establishing heavy industries, public sector units, and infrastructure development marked this era.",
      description1:"Initiatives like the Five-Year Plans played a crucial role in laying the foundation for modern industries.",
      backgroundImage: bg4,
    },
    {
      title: "Economic Liberalization",
      description: "The economic liberalization of 1991 marked a significant shift from a socialist model to a market-driven economy.",
      description1:"Spearheaded by Finance Minister Manmohan Singh under Prime Minister P.V. Narasimha Rao, this period saw reforms like reducing trade barriers, promoting foreign investments, and privatizing public sector enterprises.",
      backgroundImage: bg5, 
    },
    {
      title: "Information Technology Revolution",
      description: "The IT Revolution positioned India as a global leader in software development and IT services. Cities like Bengaluru became hubs of innovation, creating millions of jobs and boosting exports.",
      description1:"Companies like Infosys, Wipro, and TCS became internationally renowned.",
      backgroundImage: bg6,
    },
    {
      title: "Digital Revolution",
      description: "The Digital Revolution in India, driven by initiatives like Digital India aims to transform the country into a digitally empowered society.",
      description1:"Efforts include increasing internet connectivity, promoting digital payments, and introducing platforms like UPI (Unified Payments Interface) for financial inclusion.",
      backgroundImage: bg7,
    },
  ];

  const handleClick = (index) => {
    const anglePerDot = 360 / dots.length;
    const newRotation = -(index * anglePerDot);
    setRotation(newRotation);
    setActiveDot(index);
  };
  const openMapLocation = (location) => {
    const encodedLocation = encodeURIComponent(location); 
    const mapUrl = `https://www.google.com/maps?q=${encodedLocation}`;
    window.open(mapUrl, "_blank"); 
  };
 

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">TIMELINE</div>
      </nav>
      <div className="main"
        style={{
          backgroundImage: `url(${dots[activeDot].backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="overlay"></div>
        <div className="circle-container">
          <div
            className="circle"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {dots.map((dot, index) => (
              <div
                key={index}
                className={`dot-container ${activeDot === index ? "active" : ""}`}
                style={{
                  transform: `rotate(${index * (360 / dots.length)}deg) translate(150px) rotate(-${index * (360 / dots.length)}deg)`,
                }}
                onClick={() => handleClick(index)}
              >
                <div className="dot"></div>
                <div className="dot-label">{dots.label || `199${index + 1}`}</div>
                
              </div>
  
            ))}
            
          </div>
        </div>
        <div className="content">
          <h3>{dots[activeDot].title}</h3>
          <p>{dots[activeDot].description}</p>
          <p>{dots[activeDot].description}</p>
          
        </div>
      </div>
      <div className='location-parts'>
        <div className=' Location-bg'>
          <h2 className='location-head'>Location</h2>
          <div className='img-slider'>
        <img
          src={images[currentImage]}
          alt="Current Display"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <div className='button-next-prev'>
          <button className='btn-prev' onClick={prevImage} >
          <AiOutlineArrowLeft />
          </button>
          <button className='btn-nxt' onClick={nextImage}><AiOutlineArrowRight/></button>
        </div>
      </div>
        </div>
        
        <div className='card-content'>
          <div className='viewmap-btn'>
          <button className='btn-view'  onClick={() => openMapLocation(dots[activeDot].location)}>
            ViewMap
          </button>
          </div>
        
          <h2>Towers of Down</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
      </div>
      

    </div>
  
    
  );
};

export default Navbarcom

