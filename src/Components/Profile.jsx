import React from 'react';
import Email from './Email';
import Name from './Name';
import Address from './Address';
import PersonalInfo from './PersonalInfo';

const Profile = () => {
  return (
    <div>
      <Email/>
      <Name/>
      <Address/>
      <PersonalInfo/>
    </div>
  )
}

export default Profile
