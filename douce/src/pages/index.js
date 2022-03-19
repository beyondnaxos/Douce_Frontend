import React from 'react';
import HomeCard from '../components/HomeCard/HomeCard';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (    
      < >
      <div className='cards2'>
      <div className='homeText'>
        <h1 className='homeTextMainMessage'> douce</h1>
      <h2 className='homeTextMessage'><Typewriter
                        options={{
                            strings: ['bien-être', 'épilations', 'encore + douce'],
                            // strings: ['vous souhaites la bienvenue !', 'prendra soin de votre peau', 'vous fera passer un agréable moment !'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></h2>
      </div>
      </div>
      </>
  );
};

export default Home;