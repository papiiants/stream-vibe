import './CategoryCard.scss'
import {Image} from 'minista'
import Icon from '@/components/Icon'
import Badge from '@/components/Badge'

const CategoryCard = (props) => {
  const {
    title,
    images =  [],
    badge,
  } = props

  return (
    <a className="category-card" href="/movies">
      <div className="category-card__images">
        {images.map((imgSrc, index) => (
          <Image
            className="category-card__image"
            src={imgSrc}
            key={index}
          />
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">
          <span>{title}</span>
          {badge && (
            <Badge />
          )}
        </h3>
        <Icon
          className="category-card__icon"
          name="arrow-right"
        />
      </div>
    </a>
  )
}

export default CategoryCard