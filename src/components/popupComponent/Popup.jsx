import React from 'react';
import './Popup.css'

const Popup = (props) => {

  const {user} = props;
 
  return (props.trigger) ? (
    <div className='popup'>
        <div className="popupInner">
            <button className='closeButton' onClick={()=>props.setTrigger(false)}>Close</button>
            <div>
            <img className='userPhoto' src={user.photo} alt={user.first_name} />
          <div className='nameEmail'>
            <div className='mainInfo' style={{fontWeight: 800}}>
              {user.first_name} {user.last_name} ({user.gender})
            </div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
            <div>Address: {user.address}</div>
          </div>
        </div>
        <div className='diagnosis'>
          <div className='description' style={{ fontStyle: 'italic' }}>
            Description:
          </div>{' '}
          {user.description}
        </div>
        <div className='diagnosis'>
          <div className='description' style={{ fontStyle: 'italic' }}>
            Medication:
          </div>{' '}
          {user.Drug}
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup