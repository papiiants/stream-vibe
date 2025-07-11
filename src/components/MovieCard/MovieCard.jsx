import './MovieCard.scss'
import {Image} from "minista";
import Badge from "@/components/Badge";

const MovieCard = (props) => {
  const {
    title,
    imgSrc,
    duration,
    views,
    href = '/movie',
  } = props

  return (
    <a
      className="movie-card"
      href={href}
      title={title}
    >
      <h3 className="visually-hidden">{title}</h3>
      <Image
        className="movie-card__image"
        src={imgSrc}
      />
      <div className="movie-card__body">
        {duration && (
          <Badge
            iconName="clock"
            iconAriaLabel="Duration"
            hasFillIcon
          >
            {duration}
          </Badge>
        )}
        {views && (
          <Badge
            iconName="eye"
            iconAriaLabel="Views"
            hasFillIcon
          >
            {views}
          </Badge>
        )}
      </div>
    </a>
  )
}

export default MovieCard