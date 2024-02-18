import { FaLocationDot } from "react-icons/fa6";
import { useEffect } from "react";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './index.css'

gsap.registerPlugin(ScrollTrigger)

const PropertyItem = (props) => {
    const {propertyDetails} = props
    const {area, bedrooms, imageUrl, location, price, propertyType, readyToOccupy, title } = propertyDetails

    useEffect(() => {
        gsap.fromTo('.homeItem', { y: 300, opacity: 0, }, { y: 0, opacity:1, duration: 0.5, stagger: 0.3, scrollTrigger: {
            trigger: '.homeItem',
          }})
    })

    return(
        <div className="homeItem">
            <img className='homeImage' src={imageUrl} alt='propertyImage' />
            <p className='price houseDetails'>{price}</p>
            <p className='houseDetails'>{title}</p>
            <div className="locationContainer">
                <FaLocationDot className="locationIcon" /> 
                <p className='houseDetails'>{location}</p>
            </div>
        </div>
    )
}

export default PropertyItem