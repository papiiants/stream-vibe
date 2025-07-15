import './Field.scss'
import classNames from 'classnames'
import getIdFromTitle from '@/utils/getIdFromTitle'

const Field = (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    /**
     * undefined (default text) | 'email' | 'textarea'
     */
    type,
    placeholder,
    isRequired,
    inputMove,
  } = props

  const Component = type === 'textarea' ? 'textarea' : 'input'

  return (
    <div
      className={classNames(className, 'field')}
    >
      <label
        className="field__label"
        htmlFor={id}
      >
        {label} {isRequired && (
          <span
            className="field__required-star"
            aria-hidden="true"
          >*</span>
        )}
      </label>
      <div className="field__body">
        <Component
          className="field__control"
          id={id}
          type={type}
          placeholder={placeholder}
          required={isRequired}
          inputMove={inputMove}
        />
      </div>
    </div>
  )
}

export default Field