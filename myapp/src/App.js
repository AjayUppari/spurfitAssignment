import React, {useEffect, useRef} from "react"
import './App.css';
import {gsap} from "gsap"
import { useGSAP } from "@gsap/react";
import PropertyType from './components/propertyType'


const propertiesList = [
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

function App() {
  let headline = useRef(null)
  let image = useRef(null)

  useEffect(()=>{
    gsap.fromTo(headline, { x: -100, opacity:0, duration: 1, delay: 0.2}, { x: 40,opacity:1, duration: 1 })
  },
  )

  useEffect(()=>{
    gsap.fromTo(image, { x: 100, opacity: 0, duration: 1, delay: 0.2}, { x: 40,opacity:1, duration: 1 })
  },
  )

  return (
    <div className="App">
      <div className="appContainer">
        <div className="contentContainer">
          <nav>
              <div className="logoContainer">
                  <div>
                      <img className="logo" src="https://res.cloudinary.com/dymdlu50w/image/upload/v1708132166/logo_irjjw4.png" alt="logo" />
                  </div>
                  <h1 className="companyName">Makaan</h1>
              </div>
              <div class="navitemsContainer" id="part2">
                  <p className="navitemText navitemActive">HOME</p>
                  <p className="navitemText">ABOUT</p>
                  <p className="navitemText">PROPERTY</p>
                  <p className="navitemText">PAGES</p>
                  <p className="navitemText">CONTACT</p>
                  <button type="button" className="addPropertyButton">Add Property</button>
                  <div id="green"></div>
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
                  <button className="getStartedButton" type="button">Get Started</button>
              </div>
              <img ref={el => {image = el}} className="premiumHouseImage" id="introImage" src="https://res.cloudinary.com/dymdlu50w/image/upload/v1708134288/ffymynxvmj1qicfkq4bv.jpg" alt="premium house image" />
          </div>

          <div className='filterContainer'>
            <input placeholder='Search Property' className='filterItem' type='search' />
            <select className='filterItem' placeholder='Property Type'>
              <option>Property Type 1</option>
              <option>Property Type 1</option>
              <option>Property Type 1</option>
            </select>
            <select className='filterItem' placeholder='Location'>
              <option>Property Type 1</option>
              <option>Property Type 1</option>
              <option>Property Type 1</option>
            </select>
            <button className='searchPropertyButton filterItem' type='button'>Search</button>
          </div>

          <div className='propertyTypesContainer'>
            <div className='propertyHeadingContainer'>
              <h1>Property Types</h1>
              <p>Discover a diverse array of property types tailored to suit every lifestyle and need on our website's landing page.</p>
            </div>
          </div>

          <div className="propertyTypes">
          {
            propertiesList.map(eachItem => <PropertyType key={eachItem.id} propertyDetails={eachItem} />)
          }
          </div>
        </div>
        
    </div>
    </div>
  );
}

export default App;
