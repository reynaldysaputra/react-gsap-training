import React, { Fragment, useState } from 'react';

function Coba() {
   const [state, setState] = useState(1);
   const handleClick = () => setState(state+1);

   return(
      <Fragment>
         <button onClick={handleClick}>klik</button>
         {console.log(state)}
      </Fragment>
   )
}

export default Coba;