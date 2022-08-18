import React, { useEffect } from 'react';
import Header from './Test/Header';
import Essai from './Test/Essai';
require('module-alias/register');
import 'something';

//import {callservice} from '@something/try';


function WebAppTitle() {
  return (
    <div>
      <h2 style={{ color: '#9400d3', fontSize: '32' }}>
        I'm a React app component.
      </h2>
    </div>
  );
}

const App = () => {

// useEffect(()=> 
// {
//     console.log('Pere');
// },[])

const fonction = () => 
{
  callservice();
}
  return (
    <div>
       {/* <Header/>
       <Essai/> */}
       <WebAppTitle/>
       <Header></Header>
    </div>
  );
};

export default App;

