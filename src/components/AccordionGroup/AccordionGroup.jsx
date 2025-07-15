import './AccordionGroup.scss'
import classNames from 'classnames'

const AccordionGroup = (props) => {
  const {
    /**
     * '' (default) | 'dark'
     */
    className,
    mode = '',
    columns = 1,
    children,
    isOrderedList = true,
  } = props

  const itemPerColumn = Math.ceil(children.length / columns)
  const ListTag = isOrderedList ? 'ol' : 'ul'

  return (
    <ListTag
      className={classNames(className, 'accordion-group', {
        [`accordion-group--${columns}-columns`]: columns > 1,
        'accordion-group--has-counter': isOrderedList,
        [`accordion-group--${mode}`]: mode,
      })}
    >
      {children.map((child, index) => (
        <li
          className={classNames('accordion-group__item', {
            'accordion-group__item--last-column-item': columns > 1 && itemPerColumn / (index + 1) === 1
          })}
          key={index}
         >
          {child}
        </li>
      ))}
    </ListTag>
  )
}

export default AccordionGroup