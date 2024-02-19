import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaRulerCombined } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaPersonWalking } from "react-icons/fa6";



import './index.css'

gsap.registerPlugin(ScrollTrigger)

const PropertyItem = (props) => {
    const {propertyDetails} = props
    const {area, bedrooms, imageUrl, location, price, propertyType, readyToOccupy, title, id } = propertyDetails

    let imageRef = useRef(null)

    useEffect(() => {
        gsap.fromTo('.homeItem', { y: 300, opacity: 0, }, { y: 0, opacity:1, duration: 0.5, stagger: 0.3, scrollTrigger: {
            trigger: '.homeItem',
          }})
    })

    const onHover = () => {
        console.log('event triggered')
        gsap.to(imageRef.current, {
            scale: 1.1,
            ease: 'power2.inOut',
          })
    }

    const onLeave = () => {
        gsap.to(imageRef.current, {
            scale: 1,
            ease: 'power2.inOut',
          })
    }

    return(
        <div onMouseEnter={onHover} onMouseLeave={onLeave} className="homeItem">
            <div style={{overflow: 'hidden'}}>
                <img ref={imageRef} className='homeImage' src={imageUrl} alt='propertyImage' />
            </div>
            <div className="homeInformationContainer">
                <p className='price houseDetails'>{price}</p>
                <p className='houseDetails'>{title}</p>
                <div className="locationContainer">
                    <FaLocationDot className="reactIcon" /> 
                    <p>{location}</p>
                </div>
                <div className="propertyFeatures">
                    <div className="propertyFeatureItem">
                        <FaRulerCombined className="reactIcon" />
                        <p>{area}</p>
                    </div>
                    <div className="propertyFeatureItem">
                        <FaBed className="reactIcon" />
                        <p>{bedrooms}</p>
                    </div>
                    <div className="propertyFeatureItem">
                        <FaPersonWalking className="reactIcon" />
                        <p>{readyToOccupy}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyItem