import 'swiper/css'
import './Slider.scss'
import SliderNavigation from "./components/SliderNavigation";

const Slider = (props) => {
  const {
    children,
    navigationTargetElementId = null,
  } = props

  return (
    <div
      className="slider"
      data-js-slider=""
    >
      <div className="slider__swiper" data-js-slider-swiper="">
        <ul className="slider__list swiper-wrapper">
          {children.map((slide, index) => (
            <li
              className="slider__item swiper-slide"
              key={index}
            >
              {slide}
            </li>
          ))}
        </ul>
      </div>

      {!navigationTargetElementId && (
        <SliderNavigation className="slider__navigation" />
      )}
    </div>
  )
}

export default Slider