import React from 'react'
import './Journal.css'
import pin from '../../images/pin.png'
import data from '../../data'

function JournalEntry(props){
    return (
        <div className='journal--entry'>
          <img src={props.imageUrl} alt="" className='journal--entry--image'/>
          <div className="journal--entry--writeup">
            <div className="journal--entry--writeup--location">
              <img src={pin} alt="" className="journal--entry--writeup--pin"/>
              <span className="spaced">{props.location}</span>
              <a className="gray underlined" href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h3>{props.title}</h3>
            <div>
              <p className="bold">{`${props.startDate} - ${props.endDate}`}</p>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
    )
}


export function Journal() {
  let entries = data.map(item => {
    return <JournalEntry 
      {...item}
    />
  })
  return (
    <div className='journal'>
        {entries}
    </div>
  );
}

