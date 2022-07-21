import React from 'react'

export default function ImageCounter(props) {
  const work = props.work;
  let current = props.current;
  
  function checkCurrent(num1,num2){
    if(num1 == num2)
      return 'sectionOneBoxOn';
    else 
      return 'sectionOneBoxOff';
  }
  return (
    <div className='w-full md:w-1/2 flex gap-5'>
        {work.map((item)=>(
        <div 
        key={item.id}
        className={checkCurrent(item.id,current)}></div>

        ))}
       
    </div>
    
  )
}
