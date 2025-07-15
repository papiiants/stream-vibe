import './Accordion.scss'
import classNames from 'classnames'

const Accordion = (props) => {
  const {
    titleLevelClassName = 'h5',
    title,
    subtitle,
    id,
    name,
    isOpen,
    children,
  } = props

  return (
    <div className="accordion">
      <details
        className="accordion__details"
        name={name}
        open={isOpen}
      >
        <summary className="accordion__summary">
          <h3 className={classNames('accordion__title', titleLevelClassName)}>
            <span role="term" aria-details={id}>{title}</span>
            {subtitle && (
              <span className="accordion__subtitle">{subtitle}</span>
            )}
          </h3>
        </summary>
      </details>
      <div
        className="accordion__content"
        id={id}
        role="defenition"
      >
        <div className="accordion__content-inner">
          <div className="accordion__content-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion