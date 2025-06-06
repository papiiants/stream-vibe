import './Button.scss'
import classNames from 'classnames'

const Button = (props) => {
  const {
    className,
    href,
    target,
    type = 'button',
    label,
    isLabelHidden = false,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined

  return (
    <Component
      className={classNames(className, 'button')}
      title={title}
      aria-label={title}
      {...specificProps}
    >
      {!isLabelHidden && (
        <span className="button__label">{label}</span>
      )}
    </Component>
  )
}

export default Button