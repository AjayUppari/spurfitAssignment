import { useEffect } from "react";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './index.css'
gsap.registerPlugin(ScrollTrigger)

const Agent = (props) => {
    const {agentDetails} = props
    const { imageUrl, name, designation } = agentDetails

    useEffect(() => {
        gsap.fromTo('.agentItem', { y: 300, opacity: 0, }, { y: 0, opacity:1, duration: 0.5, stagger: 0.3, scrollTrigger: {
            trigger: '.agentItem',
          }})
    })

    return(
        <div className="agentItem">
            <img className='propertyAgentsImage' src={imageUrl} alt='agentImage' />
            <p>{name}</p>
            <p>{designation}</p>
        </div>
    )
}

export default Agent