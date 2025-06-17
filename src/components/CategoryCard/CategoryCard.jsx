import './CategoryCard.scss'
import {Image} from "minista";
import Icon from "@/components/Icon";

const CategoryCard = (props) => {
  const {
    title,
    images =  [],
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
      <span className="category-card__body">
        <h3 className="category-card__title">
          {title}
          <Icon
            className="category-card__icon"
            name="arrow-right"
          />
        </h3>
      </span>
    </a>
  )
}

export default CategoryCard