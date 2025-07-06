import getParams from "@/utils/getParams";

const rootSelector = '[data-js-tabs]'

class Tabs {
  selectors = {
    root: rootSelector,
    navigation: '[data-js-tabs-navigation]',
    button: '[data-js-tabs-button]',
    content: '[data-js-tabs-content]',
  }

  stateClasses = {
    isActive: 'is-active',
  }

  stateCSSVariables = {
    activeButtonWidth: '--tabsNavigationActiveButtonWidth',
    activeButtonOffsetLeft: '--tabsNavigationActiveButtonOffsetLeft',
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.params = getParams(this.rootElement, this.selectors.root)
    this.navigationElement = this.params.navigationTargetElementId
      ? document.getElementById(this.params.navigationTargetElementId)
      : this.rootElement.querySelector(this.selectors.navigation)
    this.buttonElements = [...this.navigationElement.querySelectorAll(this.selectors.button)]
    this.contentElements = [...this.rootElement.querySelectorAll(this.selectors.content)]
    this.state = {
      activeTabIndex: this.buttonElements.findIndex(({ ariaSelected }) => ariaSelected)
    }
    this.limitTabsIndex = this.buttonElements.length - 1
    this.bindEvents()
    setTimeout(this.bindObservers, 500)
  }

  updateUI() {
    const { activeTabIndex } = this.state

    this.buttonElements.forEach((buttonElement, index) => {
      const isActive = index === activeTabIndex

      buttonElement.classList.toggle(this.stateClasses.isActive, isActive)
      buttonElement.ariaSelected = isActive
      buttonElement.tabIndex = isActive ? 0 : -1
    })

    this.contentElements.forEach((contentElement, index) => {
      const isActive = index === activeTabIndex

      contentElement.classList.toggle(this.stateClasses.isActive, isActive)
    })
  }

  onButtonClick(buttonIndex) {
    this.state.activeTabIndex = buttonIndex
    this.updateUI()
  }

  bindEvents() {
    this.buttonElements.forEach((buttonElement, index) => {
      buttonElement.addEventListener('click', () => this.onButtonClick(index))
    })
    document.addEventListener('keydown', this.onKeyDown)
  }
}

class TabsCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
       new Tabs(element)
    })
  }
}

export default TabsCollection