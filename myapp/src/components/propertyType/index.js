import './index.css'

const PropertyType = (props) => {
    const { propertyDetails } = props
    const { imageUrl, propertyType, propertyNumbers } = propertyDetails

    return(
        <div className="propertyTypeCard">
            <img className="logo" src={imageUrl} alt="property type image" />
            <h3 className='propertTypeText'>{propertyType}</h3>
            <p className='propertTypeText'>{propertyNumbers}</p>
        </div>
    )
}

export default PropertyType