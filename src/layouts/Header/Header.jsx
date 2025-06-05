import './Header.scss'
import Logo from "@/components/Logo";

const Header = () => {
  const menuItems = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Movies & Shows',
      href: '/movies'
    },
    {
      label: 'Support',
      href: '/support'
    },
    {
      label: 'Subscriptions',
      href: '/subscriptions'
    }
  ]

  return(
    (
      <header className="header">
        <div className="header__inner container">
          <Logo className="header__logo" loading="eager" />

          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({label, href}, index) => (
                <li className="header__menu-item" key={index}>
                  <a className="header__menu-link" href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
       </header>
    )
  )
}

export default Header