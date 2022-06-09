import React from 'react'
import explore from '../../assets/explore.png'
import contact from '../../assets/contactIcon.png'
const SectionThree = () => {
  return (
    <div className='  text-center md:text-left mx-[4rem] md:justify-center md:items-center md:flex'>
      <div className='md:flex md:w-5/12  '>
        <img src={contact} alt=' ' className=' mb-3 mx-auto block md:h-[3rem]  md:mx-6' />
        <div className=''>
          <h1 className='text-md'>Explore Our Community</h1>
          <p className='text-base' >You explore our community to meet people and create connections that will become something magical
            to say the least. This feature allows you to meet people and choose those you want to meet.</p>
        </div>
      </div>

      <div>
        <img src={explore} alt=' ' className='mt-5 md:ml-[3rem] md:5/12' />
      </div>
    </div>
  )
}

export default SectionThree