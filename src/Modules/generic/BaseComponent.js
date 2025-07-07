class BaseComponent {
  constructor() {
    if(this.constructor === BaseComponent) {
      throw new Error('Not possible to create BaseComponent (abstract class) instance!')
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop]
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop]

        target[prop] = newValue

        if(newValue !== oldValue) {
          this.updateUI()
        }

        return true
      },
    })
  }

  /*
   * UI Rerendering in response to update state
   */
  updateUI() {
    throw new Error("It's necessary tu realize updateUI method!")
  }
}

export default BaseComponent