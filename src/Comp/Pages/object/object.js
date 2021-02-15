import React from 'react';
import Background from '../../Background';
import { Obj1, Obj2, Obj3, Obj4, Obj5, Obj6, Obj7, Obj8, Obj9, Obj10} from './Data';


function object() {
  return (
    <>
      <Background {...Obj1} />
      <Background {...Obj2} />
      <Background {...Obj3} />
      <Background {...Obj4} />
      <Background {...Obj5} />
      <Background {...Obj6} />
      <Background {...Obj7} />
      <Background {...Obj8} />
      <Background {...Obj9} />
      <Background {...Obj10} />
      
    </>
  );
}

export default object;