import React from 'react'
import { Navbar, Footer } from '../components'
import { terms } from "../assets";

const TermsConditions = () => {
  return (
    <div>
      <Navbar />
      <header>
        <img src={terms} />
      </header>

      <main className='mx-10 my-10 lg:mx-20 lg:my-25'>
        <p className='pb-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio voluptatum quidem tempora. Veniam aspernatur magnam ab ratione debitis suscipit nihil possimus at? Reiciendis incidunt consectetur, cumque soluta molestiae eum cupiditate, laboriosam esse maxime adipisci illum perferendis, voluptates dicta? Exercitationem dignissimos, dolore voluptas eius dicta facere commodi minima earum excepturi molestiae eos optio ad ipsum magnam deleniti aliquam voluptatum nam!</p>
        <p className='pb-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio voluptatum quidem tempora. Veniam aspernatur magnam ab ratione debitis suscipit nihil possimus at? Reiciendis incidunt consectetur, cumque soluta molestiae eum cupiditate, laboriosam esse maxime adipisci illum perferendis, voluptates dicta? Exercitationem dignissimos, dolore voluptas eius dicta facere commodi minima earum excepturi molestiae eos optio ad ipsum magnam deleniti aliquam voluptatum nam!</p>
        <p className='pb-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium culpa doloribus dicta velit perferendis earum minima magni. Quis deleniti nihil cupiditate cumque eos expedita iste molestiae amet est atque!</p>
        <p className='pb-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio voluptatum quidem tempora. Veniam aspernatur magnam ab ratione debitis suscipit nihil possimus at? Reiciendis incidunt consectetur, cumque soluta molestiae eum cupiditate, laboriosam esse maxime adipisci illum perferendis, voluptates dicta? Exercitationem dignissimos, dolore voluptas eius dicta facere commodi minima earum excepturi molestiae eos optio ad ipsum magnam deleniti aliquam voluptatum nam!</p>
        <p className='pb-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium culpa doloribus dicta velit perferendis earum minima magni. Quis deleniti nihil cupiditate cumque eos expedita iste molestiae amet est atque!</p>
        <p className='pb-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam incidunt optio corrupti neque dignissimos sequi, rerum impedit esse adipisci odio voluptatum perspiciatis aperiam magnam, alias distinctio soluta voluptate dolores laboriosam.</p>

      </main>

      <Footer />
    </div>
  )
}

export default TermsConditions