import './PlansComparison.scss'
import classNames from 'classnames'

const PlansComparison = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'plans-comparison')}
    >
      PlansComparison
    </div>
  )
}

export default PlansComparison