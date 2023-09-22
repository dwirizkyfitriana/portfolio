const Hero = () => {
  return (
    <div className='hero'>
      <h1 className='md:hidden'>
        <span>Hi 👋</span>
      </h1>
      <h1>
        <span>I’m</span> Dwi Fitriana
      </h1>
      <p>
        A passionate front-end developer dedicated to transforming ideas into captivating digital
        experiences. With a focus on crafting modern web, I thrive in turning visions into reality
        through creative design.
      </p>
      <div className='btn-container'>
        <button className='btn text-white bg-gradient-dark w-full md:w-fit'>See my resume</button>
        <button className='btn text-onyx dark:text-dark-grey bg-faint-white dark:bg-onyx w-full md:w-fit'>
          Get in touch
        </button>
      </div>
    </div>
  )
}

export default Hero
