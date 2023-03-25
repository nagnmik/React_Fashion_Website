import React from 'react'
import './Address.css'

function AddressData(props) {
  return (
    <div className='address-container'>
    <h4 className='sale-heading'>{props.City}</h4>
    <div className='address'>
      <div className='column1'>
        <h3>{props.NameStore}</h3>
        <p>{props.Time}</p>
      </div>
      <div className='column1'>
        <p>{props.Acreage}</p>
        <p>{props.PhoneNumber}</p>
        <p>{props.Email}</p>
      </div>
      <div className='column1'>
        <p>{props.Address}</p>
      </div>
    </div>
    </div>
  )
}

export default AddressData
