import './MovieDetails.scss'
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Slider from "@/components/Slider";
import PersonCard from "@/components/PersonCard";

const MovieDetails = () => {
  const titleId = 'movie-details-title'
  const castSliderNavigationId = 'movie-cast-slider-navigation'

  const castItems = [
    {
      imgSrc: '/src/assets/images/people/1.jpg',
      imgAlt: 'Hampur Shampur',
    },
    {
      imgSrc: '/src/assets/images/people/2.jpg',
      imgAlt: 'Hampur Shampur',
    },
    {
      imgSrc: '/src/assets/images/people/3.jpg',
      imgAlt: 'Hampur Shampur',
    },
    {
      imgSrc: '/src/assets/images/people/4.jpg',
      imgAlt: 'Hampur Shampur',
    },
    {
      imgSrc: '/src/assets/images/people/5.jpg',
      imgAlt: 'Hampur Shampur',
    },
    {
      imgSrc: '/src/assets/images/people/6.jpg',
      imgAlt: 'Hampur Shampur',
    },
    {
      imgSrc: '/src/assets/images/people/7.jpg',
      imgAlt: 'Hampur Shampur',
    },
    {
      imgSrc: '/src/assets/images/people/8.jpg',
      imgAlt: 'Hampur Shampur',
    },

    {
      imgSrc: '/src/assets/images/people/1.jpg',
      imgAlt: 'Hampur Shampur',
    },
    {
      imgSrc: '/src/assets/images/people/2.jpg',
      imgAlt: 'Hampur Shampur',
    },
    {
      imgSrc: '/src/assets/images/people/3.jpg',
      imgAlt: 'Hampur Shampur',
    },
    {
      imgSrc: '/src/assets/images/people/4.jpg',
      imgAlt: 'Hampur Shampur',
    },
    {
      imgSrc: '/src/assets/images/people/5.jpg',
      imgAlt: 'Hampur Shampur',
    },
    {
      imgSrc: '/src/assets/images/people/6.jpg',
      imgAlt: 'Hampur Shampur',
    },
    {
      imgSrc: '/src/assets/images/people/7.jpg',
      imgAlt: 'Hampur Shampur',
    },
    {
      imgSrc: '/src/assets/images/people/8.jpg',
      imgAlt: 'Hampur Shampur',
    },
  ]

  return (
    <section
      className="movie-details container"
      aria-labelledby={titleId}
    >
      <h2 className="visually-hidden" id={titleId}>
        Detailed movie information
      </h2>
      <div className="movie-details__main">
        <div className="movie-details__panel">
          <div className="movie-details__group">
            <h3 className="movie-details__title">
              Description
            </h3>
            <div className="movie-details__description">
              <p>A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
            </div>
          </div>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">
              Cast
            </h3>
            <SliderNavigation
              id={castSliderNavigationId}
              hasPagination={false}
              buttonMode="black-08"
              mode="rounded"
            />
          </header>
          <Slider
            navigationTargetElementId={castSliderNavigationId}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: 'auto',
              spaceBetween: 10,
              breakpoints: {
                1024: {
                  slidesPerView: 'auto',
                  spaceBetween: 20,
                  allowTouchMove: false,
                },
              },
            }}
          >
            {castItems.map((castItem, index) => (
              <PersonCard {...castItem} key={index} />
            ))}
          </Slider>
        </div>
        <div className="movie-details__panel"></div>
      </div>
      <aside className="movie-details__info">
        <div className="movie-details__panel"></div>
      </aside>
    </section>
  )
}

export default MovieDetails