import React, {useEffect, useRef} from "react"
import './App.css';
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropertyType from './components/propertyType'
import PropertyItem from "./components/propertItem";
import { IoCall } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';
import Agent from "./components/agent";

gsap.registerPlugin(ScrollTrigger)



const propertyTypesList = [
  {
  imageUrl:"https://res.cloudinary.com/dymdlu50w/image/upload/v1708170116/icon-luxury_bruqks.png",
  propertyType: "Garage",
  propertyNumbers: "145 Properties",
  id: "sdfb"
  },
  {
  imageUrl:"https://res.cloudinary.com/dymdlu50w/image/upload/v1708170116/icon-neighborhood_scvekk.png",
  propertyType: "Townhouse",
  propertyNumbers: "84 Properties",
  id: "jdfu"
  },
  {
  imageUrl:"https://res.cloudinary.com/dymdlu50w/image/upload/v1708170116/icon-villa_bdgnxu.png",
  propertyType: "Villa",
  propertyNumbers: "125 Properties",
  id: "oijo"
  },
  {
  imageUrl: "https://res.cloudinary.com/dymdlu50w/image/upload/v1708170116/icon-house_ipjntk.png",
  propertyType: "Home",
  propertyNumbers: "367 Properties",
  id: "nvlf"
  },
  {
  imageUrl:"https://res.cloudinary.com/dymdlu50w/image/upload/v1708170116/icon-housing_tqk2bj.png",
  propertyType: "Office",
  propertyNumbers: "150 Properties",
  id: "woxs"
  },
  {
  imageUrl:"https://res.cloudinary.com/dymdlu50w/image/upload/v1708170116/icon-condominium_ykrt9u.png",
  propertyType: "Shop",
  propertyNumbers: "217 Properties",
  id: "osnr"
  },
  {
  imageUrl: "https://res.cloudinary.com/dymdlu50w/image/upload/v1708170116/icon-housing_tqk2bj.png",
  propertyType: "Apartment",
  propertyNumbers: "457 Properties",
  id: "bpnf"
  },
  {
  imageUrl:"https://res.cloudinary.com/dymdlu50w/image/upload/v1708170116/icon-condominium_ykrt9u.png",
  propertyType: "Building",
  propertyNumbers: "367 Properties",
  id: "aonr"
  }
]

console.log(propertyTypesList)

const propertiesList = [
  {
    imageUrl: 'https://res.cloudinary.com/dymdlu50w/image/upload/v1708264409/property-6_clcrkc.jpg',
    propertyType: 'Villa',
    price: '$25,345',
    title: 'Nina Villa For Sale',
    location: 'Oak Street, 28-21, New York, USA',
    area: '2400 Sqft',
    bedrooms: '6 Beds',
    readyToOccupy: 'Immediately',
    id: '6523'
  },

  {
    imageUrl: 'https://res.cloudinary.com/dymdlu50w/image/upload/v1708264409/property-4_ujdj1e.jpg',
    propertyType: 'Building',
    price: '$12, 462',
    title: 'Crestview Manor For Sale',
    location: 'Cedar Avenue, San Antonio, USA',
    area: '1800 Sqft',
    bedrooms: '4 Beds',
    readyToOccupy: 'In a Week',
    id: '7234'
  },

  {
    imageUrl: 'https://res.cloudinary.com/dymdlu50w/image/upload/v1708264408/property-5_jkcbes.jpg',
    propertyType: 'Shop',
    price: '$14, 600',
    title: 'Whimsical Wonders Boutique For Lease',
    location: 'Lincoln Avenue, Texas, USA',
    area: '1200 Sqft',
    bedrooms: '1 bed',
    readyToOccupy: 'Immediately',
    id: '1349'
  },

  {
    imageUrl: 'https://res.cloudinary.com/dymdlu50w/image/upload/v1708264408/property-3_xxtd5d.jpg',
    propertyType: 'Office',
    price: '$35,250',
    title: 'Prime Office Sale',
    location: 'Birmingham, 1489 street, Alabama, USA',
    area: "1250 Sqft",
    bedrooms: '0 Bed',
    readyToOccupy: 'Within a month',
    id: '9987'
  },
  
  {
    imageUrl: 'https://res.cloudinary.com/dymdlu50w/image/upload/v1708264408/property-2_o1fljz.jpg',
    propertyType: 'Villa',
    price: '$20,700',
    title: "Exquisite Villa For Sale",
    location: 'Serene Lakeside Retreat, Chicago, USA',
    area: "1500 Sqft",
    bedrooms: '6 Beds',
    readyToOccupy: 'Immediately',
    id: '9264'
  },

  {
    imageUrl: 'https://res.cloudinary.com/dymdlu50w/image/upload/v1708134288/ffymynxvmj1qicfkq4bv.jpg',
    propertyType: 'Building',
    price: '$15, 300',
    title: "Charming Family Home for Sale",
    location: "Maple Avenue, Springfield, Illinois",
    area: '2200 Sqft',
    bedrooms: '4 beds',
    readyToOccupy: 'within 3 days',
    id: "6482"
  }

]

const agentsList = [
  {
    imageUrl: 'https://res.cloudinary.com/dymdlu50w/image/upload/v1708332440/team-1_yrxwas.jpg',
    name: 'Emily Sanchez',
    designation: 'Senior Property Consultant',
    id: uuidv4()
  },
  {
    imageUrl: 'https://res.cloudinary.com/dymdlu50w/image/upload/v1708332440/team-4_kuaqu4.jpg',
    name: 'Liam Parker',
    designation: 'Real Estate Specialist',
    id: uuidv4()
  },
  {
    imageUrl: 'https://res.cloudinary.com/dymdlu50w/image/upload/v1708332440/team-3_llw5rh.jpg',
    name: 'Sophia Nguyen',
    designation: 'Residential Property Advisor',
    id: uuidv4()
  },
  {
    imageUrl: 'https://res.cloudinary.com/dymdlu50w/image/upload/v1708332440/team-2_jhkjr8.jpg',
    name: 'Ethan Thompson',
    designation: 'Commercial Property Manager',
    id: uuidv4()
  },
  
]

const App = () => {
  
  let headline = useRef(null)
  let image = useRef(null)
  const propertyTypeRef = useRef(null)

  useEffect(()=>{
    gsap.fromTo(headline, { x: -100, opacity:0, duration: 1, delay: 0.2}, { x: 40,opacity:1, duration: 1 })
    gsap.fromTo(image, { x: 100, opacity: 0, duration: 1, delay: 0.2}, { x: 0,opacity:1, duration: 1})
    gsap.fromTo('.propertyHeadingContainer', { y: 300, opacity:0, duration: 1, delay: 0.2}, { y: 20,opacity:1, duration: 1 })

    const el = propertyTypeRef.current
    gsap.fromTo(el, {duration: 1, y: 100}, {y: 0, scrollTrigger: {
      trigger: el,
    }})

    gsap.fromTo('.propertyTypes div', { y: 300, opacity: 0, }, { y: 0, opacity:1, duration: 0.5, stagger: 0.3, scrollTrigger: {
      trigger: el,
    }})

    gsap.fromTo('.section2 img', {opacity: 0, }, {opacity:1, duration: 3, scrollTrigger: {
      trigger: '.section2 img',
    }})

    

    gsap.fromTo('.contactAgent', {opacity: 0, }, {opacity:1, duration: 3, scrollTrigger: {
      trigger: '.contactAgent',
    }})

    gsap.fromTo('.contactAgentText', {y: 100,opacity: 0}, {y: 0, opacity:1, stagger: 0.4, scrollTrigger: {
      trigger: '.contactAgentText',
    }})

    gsap.fromTo('.section2Highlights', {y: 100,opacity: 0}, {y: 0, opacity:1, stagger: 0.4, scrollTrigger: {
      trigger: '.section2Highlights',
    }})

    gsap.fromTo('.section2MainHighlight', {x: 200,opacity: 0, }, {x: 0, opacity:1, duration: 1, scrollTrigger: {
      trigger: '.section2MainHighlight',
    }})

    gsap.fromTo('#propertyListing', {x: -250}, {x: 0, duration: 1, scrollTrigger: {
      trigger: '#propertyListing',
    }})

    gsap.fromTo('#propertiesFilter', {x: 250}, {x: 0, duration: 1, scrollTrigger: {
      trigger: '#propertiesFilter',
    }})

  },
  [])

  const onHover = () => {
    gsap.to('.button', {opacity: 0.8, duration: 0.2})
  }

  const onCursorLeave = () => {
    gsap.to('.button', {opacity: 1, duration: 0.2})
  }


  return (
    <div className="App">
      <div className="appContainer">
        <div className="contentContainer">
          <nav>
              <div className="logoContainer">
                  <div>
                      <img className="logo" src="https://res.cloudinary.com/dymdlu50w/image/upload/v1708132166/logo_irjjw4.png" alt="logo" />
                  </div>
                  <h1 className="companyName">Homefy</h1>
              </div>
              <div class="navitemsContainer" id="part2">
                  <p className="navitemText navitemActive">HOME</p>
                  <p className="navitemText">ABOUT</p>
                  <p className="navitemText">PROPERTY</p>
                  <p className="navitemText">PAGES</p>
                  <p className="navitemText">CONTACT</p>
                  <button type="button" className="addPropertyButton">Add Property</button>
              </div>
          </nav>
          <div className="introPage">
              <div ref={el => {headline = el}} id="introHeadline" class="introPageItem">
                  <h1 className="introHeading">
                      Find A <span>Perfect Home</span> to Live With Your Family
                  </h1>
                  <p className="introSubheading">
                      Unlock the door to your dream home and create lasting memories with your loved ones in a space that perfectly fits your family's needs.
                  </p>
                  <button onMouseLeave={onCursorLeave} onMouseEnter={onHover} className="getStartedButton button" type="button">Get Started</button>
              </div>
              <img ref={el => {image = el}} className="premiumHouseImage" id="introImage" src="https://res.cloudinary.com/dymdlu50w/image/upload/v1708134288/ffymynxvmj1qicfkq4bv.jpg" alt="premium house image" />
          </div>

          <div className='filterContainer'>
            <input placeholder='Search Property' className='filterItem' type='search' />
            <select className='filterItem' placeholder='Property Type'>
              <option>Villa</option>
              <option>Building</option>
              <option>House</option>
              <option>Shop</option>
            </select>
            <select className='filterItem' placeholder='Location'>
              <option>USA</option>
              <option>India</option>
              <option>Europe</option>
            </select>
            <button className='searchPropertyButton filterItem' type='button'>Search</button>
          </div>
        </div>

        <div className="bottomContentContainer">
          <div ref={propertyTypeRef} className='propertyTypesContainer'>
              <div className='propertyHeadingContainer' id="propertTypeSection">
                <h1>Property Types</h1>
                <p>Discover a diverse array of property types tailored to suit every lifestyle and need on our website's landing page.</p>
              </div>
            </div>

            <div id="cardList" className="propertyTypes">
              {
                propertyTypesList.map((eachItem) => <PropertyType key={eachItem.id} propertyDetails={eachItem} />)
              }
            </div>

            <div className="section2">
              <img className="premiumHouseImage" src='https://res.cloudinary.com/dymdlu50w/image/upload/v1708248645/section2_image_s8dn88.jpg' alt='house image' />
              <div className="section2Item">
                <h1 className="introHeading section2MainHighlight">#1 Place To Find The Perfect Property</h1>
                <p className="highlightSubheading section2Highlights">
                  Discover your ideal property effortlessly with our curated listings tailored to 
                  your preferences. Unlock the door to your dream home by exploring our comprehensive 
                  selection of top-rated properties.
                </p>
                <ul className="top3Features section2Highlights">
                  <li className="top3Feature section2Highlights">Comprehensive search filters</li>
                  <li className="top3Feature section2Highlights">Detailed property listings</li>
                  <li className="top3Feature section2Highlights">Expert guidance</li>
                </ul>
                <button className="getStartedButton button section2Highlights" type="button">Read More</button>
              </div>
            </div>

            <div className="propertiesContainer">
              <div id='propertyListing' className="propertiesContainerItem">
                <h1>PropertyListing</h1>
                <p>
                  Discover your dream home amidst our curated selection of exquisite houses for sale, 
                  each offering a unique blend of comfort, style, and possibility.
                </p>
              </div>
              <div id='propertiesFilter' className="propertiesFilterButtonContaier">
                <button className="propertiesFilterButton propertiesFilterButtonActive" type='button'>Featured</button>
                <button className="propertiesFilterButton"type='button'>For Sell</button>
                <button className="propertiesFilterButton"type='button'>For Rent</button>
              </div>

            </div>

            <div className="housesContainer">
              {
                propertiesList.map(eachItem => <PropertyItem key={eachItem.id} propertyDetails={eachItem} /> )
              }
            </div>

            <div className="contactAgentTextContainer">
              <img src="https://res.cloudinary.com/dymdlu50w/image/upload/v1708328027/call-to-action_jzqvqj.jpg" className="contactAgent" alt='agentImage' />
              <div className="contactAgentText">
                <h1 className="contactAgentText">Contact with our certified Agent</h1>
                <p className="contactAgentText">After contacting our certified Agent, you'll receive personalized assistance tailored to your needs, ensuring a seamless experience every step of the way.</p>
                <div>
                  <button className="callnowButton mediumsizeButton" type="button"><IoCall /> Make a call</button>
                  <button className="getAppoitnmentButton mediumsizeButton" type='button'><FaCalendarAlt /> Get Appointment</button>
                </div>
              </div>
            </div>

            <div className="propertyHeadingContainer">
              <h1>Property Agents</h1>
              <p>Trust our experienced property agents to guide you through every step of your real estate journey.</p>
            </div>
            
            <div className="agentsContainer">
              {
                agentsList.map(eachItem => <Agent id={eachItem.id} agentDetails={eachItem} />)
              }
            </div>

            <div className="clientsHeadingSection">
              <h1>Our Clients Say!</h1>
              <p>Discover why our clients rave about their real estate experience with us!</p>
            </div>

            <div className="clientsReviewsContainer">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
        </div>
      </div>
      <div className="finalSection">
            <div className="finalSectionItem">
              <h1>Get in Touch</h1>
              <p>
                1234 Maple Street,
                Cityville, State 54321,
                United States
              </p>
              <p><IoCall /> 6303820690</p>
              <p><IoMdMail /> homefyhelp@gmail.com</p>
            </div>
            <div className="finalSectionItem">
              <h1>Quick Links</h1>
              <ul>
                <li>ABout us</li>
                <li>Contact us</li>
                <li>Our services</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            <div className="finalSectionItem">
              <h1>Newsletter</h1>
              <p>Stay informed! Subscribe to our newsletter for the latest updates, tips, and exclusive offers delivered straight to your inbox.</p>
              <div className="subscribeContainer">
                <input className="subscribeMailInput" placeholder="Your email" type='text' />
                <button className="signupButton" type='button'>Sign up</button>
              </div>              
            </div>
      </div>
    </div>
  );
}

export default App;
