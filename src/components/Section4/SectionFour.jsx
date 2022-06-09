import React from 'react'
import contact from '../../assets/contactIcon.png'
import Form from '../../assets/form.png'
import smile from '../../assets/smile.png'

const SectionFour = () => {
  return (
    <div className=''>
      <div className='flex flex-col-reverse md:flex-row  md:items-center  md:justify-center '>

        <img src={Form} className=' mx-[5rem] md:mx-0 md:w-1/2' />
        <div className='md:flex md:w-4/12 '>
          <img src={contact} alt=' ' className='mb-4 mx-auto md:h-[3rem]  md:mx-6' />

          <div className='  md:mx-0 text-center md:text-left mx-[3rem]'>
            <h1> Go On Date </h1>
            <p>Our platform allows you to post a date request to know people that might be interested
              in going for drink, dinner or downtown. You can talk more on the details in the chat.</p>

          </div>

        </div>
      </div>

    </div>

  )
}

export default SectionFour