import './Support.scss'
import {Image} from 'minista'

const Support = () => {
  const titleId = 'support-title'

  return (
    <section
      className="support container"
      aria-labelledby={titleId}
    >
      <div className="support__body">
        <div className="support__info"></div>
        <Image
          className="support__image"
          src="/src/assets/images/support/1.png"
        />
      </div>
      <form
        className="support__form"
        action=""
      ></form>
    </section>
  )
}

export default Support