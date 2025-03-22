function HeroContent() {
  return (
    <>
      <section className='section--hero'>
        <div className='hero--header-wrap'>
          <h1 className='hero--heading-primary'>
            Get <span className='highlight---purple'>insights</span> that help your business grow.
          </h1>
          <p className='hero--text'>
            Discover the benefits of data analytics and make better decisions regarding revenue, customer experience,
            and overall efficiency.
          </p>
        </div>
        <div className='hero--stats-wrap'>
          <div className='stats'>
            <h2 className='stats-data-text'>10K+</h2>
            <p className='stats-data-description'>Companies</p>
          </div>
          <div className='stats'>
            <h2 className='stats-data-text'>314</h2>
            <p className='stats-data-description'>Templates</p>
          </div>
          <div className='stats'>
            <h2 className='stats-data-text'>12M+</h2>
            <p className='stats-data-description'>Queries</p>
          </div>
        </div>
      </section>
      <section className='section--banner'></section>
    </>
  );
}

export default HeroContent;
