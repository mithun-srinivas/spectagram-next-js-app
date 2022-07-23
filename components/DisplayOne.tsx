import Image from 'next/image'

export default function DisplayOne() {
  return (
    <div className="display-01">
        <div className='displayOne-content'>
          <Image src='/image.png' width="500" height="500" alt='loading'></Image>

          <h3>Ecstatic Solar Eclipse</h3>
          <p className='date'>7 January 2022</p>

          <p className='content'>A male Adelie penguin performed this Ecstatic Vocalization is very is<br />in silhouette during the  December 4 solar eclipse, the final is very is<br /> eclipse of 2021. Of course his Ecstatic Vocalization is a is very is very<br />special display that male penguins use to claim their is very isis very <br />territory and advertise theircondition. This penguin's territory, is very <br /> at Cape Crozier Antarctica, is located in one of the largest is very is is<br />Adelie penguin colonies. The colony has been studied by is very is is <br />researchers for over 25 years. From there, last December's is very is<br />eclipse was about 80 percent total when seen at its maximum is us<br />phase as the Moon's shadow crossed planet Earth's southernmost is<br />continent.   Status Updates: Deploying the James Webb Space Telescope</p>

          <p className='copy-right'>© Point Blue Conservation Science</p>
        </div>
    </div>
  )
}
