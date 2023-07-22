import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = (props) => {

  const {user, addUserToList, userAddedList } = props;
  const [isUserAdded, setIsUserAdded] = useState(false);

  useEffect(()=>{
    if(user && user.id && userAddedList){
    setIsUserAdded(userAddedList.includes(user.id));
    }
  }, [userAddedList, user]);

  if(!user || !user.id){
    return null;
  }

  const handleAddUserToList= () => {
    addUserToList(user);
    setIsUserAdded(true);
    props.setTrigger(false)
  }

  return (props.trigger) ? (
    <div className='popup'>
        <div className="popupInner">
            <button type='button' className='btn-close' aria-label='Close' onClick={()=>props.setTrigger(false)}></button>
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
        <button className={`addButton ${isUserAdded ? 'addedButton' : ''}`} onClick={handleAddUserToList} disabled={isUserAdded}>{isUserAdded ? "Added to the list" : "Add to the list"}</button>
      </div>
    </div>
  ) : null;
};


export default Popup