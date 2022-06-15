import React, {useEffect} from 'react'

const About = () => {
  useEffect(() => {
    document.title ="About | Kiekky"
  }, [])
  return (
    <div>About</div>
  )
}

export default About