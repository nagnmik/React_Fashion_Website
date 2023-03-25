import React from 'react';

function VoucherData(props) {
  return (
    <div className='voucher-item'>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  )
}

export default VoucherData;
