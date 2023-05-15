import { useState } from 'react';
import '../../../assets/css/App.scss'
import JobFleece from './job';
const AboutMe = () => {

  return (
    <div className="list">
       <div>
        <JobFleece />
       </div>
       <div>
        who am i
       </div>
       <div>
        what ima do
       </div>
       <div>
        whats you can find there
       </div>
    </div>
  );
};

export default AboutMe;
