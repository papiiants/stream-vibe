import './Seasons.scss'
import classNames from 'classnames'

const Seasons = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'seasons')}
    >
      Seasons
    </div>
  )
}

export default Seasons