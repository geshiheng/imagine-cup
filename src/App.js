import React from 'react';
import './App.css';
import logo from './web_section/logo.png';
import set_icon from './web_section/set icon.png';
import muscle_group_growth from './web_section/muscle group growth.png';
import profile_set_bg from './web_section/profile set bg.png';
import workout_data_bg from './web_section/workout data bg.png';
import pick_up_for_you_bg from './web_section/pick up for you bg.png';
import main_page_bg from './web_section/main page bg.png';
import body from './web_section/body.png';
import work_out_mode from './web_section/work out mode.png';
import calibrate_mode from './web_section/calibrate mode.png';
import bg from './web_section/bg.png';
import Daily_mode from './web_section/Daily mode.png';
import User_pic from './web_section/User_pic.png';
import { useState, useEffect } from 'react';
import axios from 'axios';





function App() {
  const [score, setScore] = useState(0);
  const [chestIntensity, setChestIntensity] = useState(0);
  const [chestResistance, setChestResistance] = useState(0);

  const [dorsalIntensity, setDorsalIntensity] = useState(0);
  const [dorsalResistance, setDorsalResistance] = useState(0); 

  const [coreIntensity, setCoreIntensity] = useState(0);
  const [coreResistance, setCoreResistance] = useState(0);  

  const [rightArmIntensity, setRightArmIntensity] = useState(0);
  const [rightArmResistance, setRightArmResistance] = useState(0); 

  const [leftArmIntensity, setLeftArmIntensity] = useState(0);
  const [leftArmResistance, setLeftArmResistance] = useState(0); 

  const [rightLegIntensity, setrightLegIntensity] = useState(0);
  const [rightLegResistance, setRightLegResistance] = useState(0); 

  const [leftLegIntensity, setLeftLegIntensity] = useState(0);
  const [leftLegResistance, setLeftLegResistance] = useState(0); 



    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://your-database-url/score');
            setScore(result.data);
            setChestIntensity(result.data.intensity);
            setChestResistance(result.data.resistance);

            setDorsalIntensity(result.data.intensity);
            setDorsalResistance(result.data.resistance);

            setCoreIntensity(result.data.intensity);
            setCoreResistance(result.data.resistance);

            setRightArmIntensity(result.data.intensity);
            setRightArmResistance(result.data.resistance);

            setLeftArmIntensity(result.data.intensity);
            setLeftArmResistance(result.data.resistance); 

            setrightLegIntensity(result.data.intensity);
            setRightLegResistance(result.data.resistance);

            setLeftLegIntensity(result.data.intensity);
            setLeftLegResistance(result.data.resistance);
            

        };
        fetchData();
    }, []);




  return (
    <div className="App">
      <p className="score">Score: </p>
      <p className="Score_Value"> {score}</p>
 
      <p className="Muscle_Group_Growth">Muscle Group Growth</p>
      <p className="Workout_Mode">Workout Mode</p>
      <p className="Profile">Profile</p>
      <p className="About_Us">About Us</p>


      <p className="Hello_Name">Hello, </p>
      <p className="Name">Name</p>
      <p className="Intro1">We all have 7 (muscle groups) to adjust the intensity level.</p>
      <p className="Intro2">We all have 10 levels of fitness intensity.</p>

      <p className="Chest">Chest</p>
      <p className="Dorsal">Dorsal</p>
      <p className="Core">Core</p>
      <p className="Right_arm">Right arm</p>
      <p className="Left_arm">Left arm</p>
      <p className="Right_leg">Right leg</p>
      <p className="Left_leg">Left leg</p>

      <p className="Chest_Intensity_Level">Intensity Level: <span style={{color: chestIntensity === 'high' ? 'FF3284' : '#FF3284'}}>{chestIntensity}</span></p>
      <p className="Chest_Resistance">Resistance: <span style={{color: chestResistance === 'high' ? 'FF3284' : '#FF3284'}}>{chestResistance}</span></p>

      <p className="Dorsal_Intensity_Level">Intensity Level: <span style={{color: chestIntensity === 'high' ? 'FF7F00' : '#FF7F00'}}>{dorsalIntensity}</span></p>
      <p className="Dorsal_Resistance">Resistance: <span style={{color: chestIntensity === 'high' ? 'FF7F00' : '#FF7F00'}}>{dorsalResistance}</span></p>


      <p className="Core_Intensity_Level">Intensity Level: <span style={{color: chestIntensity === 'high' ? 'FF383E' : '#FF383E'}}>{coreIntensity}</span></p>
      <p className="Core_Resistance">Resistance: <span style={{color: chestIntensity === 'high' ? 'FF383E' : '#FF383E'}}>{coreResistance}</span> </p>

      <p className="Right_arm_Intensity_Level">Intensity Level: <span style={{color: chestIntensity === 'high' ? '03FF53' : '#03FF53'}}>{rightArmIntensity}</span></p>
      <p className="Right_arm_Resistance">Resistance: <span style={{color: chestIntensity === 'high' ? '03FF53' : '#03FF53'}}>{rightArmResistance}</span></p>

      <p className="Left_arm_Intensity_Level">Intensity Level: <span style={{color: chestIntensity === 'high' ? 'FFE101' : '#FFE101'}}>{leftArmIntensity}</span></p>
      <p className="Left_arm_Resistance">Resistance: <span style={{color: chestIntensity === 'high' ? 'FFE101' : '#FFE101'}}>{leftArmResistance}</span></p>

      <p className="Right_leg_Intensity_Level">Intensity Level: <span style={{color: chestIntensity === 'high' ? 'A12EFF' : '#A12EFF'}}>{rightLegIntensity}</span></p>
      <p className="Right_leg_Resistance">Resistance: <span style={{color: chestIntensity === 'high' ? 'A12EFF' : '#A12EFF'}}>{rightLegResistance}</span></p>

      <p className="Left_leg_Intensity_Level">Intensity Level: <span style={{color: chestIntensity === 'high' ? '00DFFF' : '#00DFFF'}}>{leftLegIntensity}</span></p>
      <p className="Left_leg_Resistance">Resistance:<span style={{color: chestIntensity === 'high' ? '00DFFF' : '#00DFFF'}}>{leftLegResistance}</span></p>
     
      <p className="Age">Age</p>
      <p className="Goal">Goal</p>
      <p className="Height">Height</p>
      <p className="Weight">Weight</p>
      <p className="Body_Muscle_Index">Body Muscle Index</p>







       <img src={bg} alt="My bg" className='bg'/>
       
       <img src={logo} alt="My logo" className='logo'/>

       <img src={set_icon} alt="My set_icon" className='set_icon'/>

       <img src={muscle_group_growth} alt="My muscle group growth" className='muscle_group_growth'/>

       <img src={profile_set_bg} alt="My profile set bg" className='profile_set_bg'/>
       
       <img src={workout_data_bg} alt="My workout data bg" className='workout_data_bg'/> 
       
       <img src={pick_up_for_you_bg} alt="My pick up for you bg" className='pick_up_for_you_bg'/>

       <img src={main_page_bg} alt="My main page bg" className='main_page_bg'/>

       <img src={body} alt="My body" className='body'/>

       <img src={work_out_mode} a lt="My work out mode" className='work_out_mode'/>

       <img src={calibrate_mode} alt="My calibrate mode bg" className='calibrate_mode'/>

       <img src={Daily_mode} alt="My Daily mode" className='Daily_mode'/>
      
       <img src={User_pic} alt="My User_pic" className='User_pic'/>

     </div>
    
  );
}



export default App;
