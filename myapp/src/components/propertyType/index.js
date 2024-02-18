import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import './index.css'

const PropertyType = (props) => {    
    let elementsRef = useRef([]);

    const { propertyDetails } = props
    const { imageUrl, propertyType, propertyNumbers, id } = propertyDetails

    const onHoverFillColor = () => {
        const card = document.getElementById(id)
        gsap.to(card, {backgroundColor: "#161542", borderColor: "#161542", duration: 0.3, color: "white"   })
    }

    const onHoverRemove = () => {
        const card = document.getElementById(id)
        gsap.to(card, {backgroundColor: "white", borderColor: "#2dc295", color: "black"})
    }

    return(
        <div id={id} ref={el => {elementsRef = el}} onMouseLeave={onHoverRemove} onMouseEnter={onHoverFillColor} className="propertyTypeCard">
            <img className="logo" src={imageUrl} alt="property type image" />
            <h3 className='propertTypeText'>{propertyType}</h3>
            <p className='propertTypeText'>{propertyNumbers}</p>
        </div>
    )
}

export default PropertyType