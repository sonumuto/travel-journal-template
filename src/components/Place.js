import React from 'react'
import location from '../assets/location.png'

export default function Place(props) {
    return(
        <div className='place-container'>
            <img src={props.imageUrl} alt='Place img' className='place-image'/>
            <div className="place-text">
                <div className='place-location'>
                    <img alt='location icon' src={location} className='place-location-icon'/>
                    <h3 className='place-location-country'>{props.location}</h3>
                    <a href={props.googleMapsUrl} className='place-location-maps'>View on Google Maps</a>
                </div>
                <h2 className="place-title">{props.title}</h2>
                <h3 className="place-date">{props.startDate} - {props.endDate}</h3>
                <p className="place-description">{props.description}</p>
            </div>
        </div>
    )
}