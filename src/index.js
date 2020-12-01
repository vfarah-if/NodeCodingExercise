const stateMachine = {
  state: "OFF",
  transitions: {
    OFF: {
      press() {
        this.state = "ON";
      },
    },
    ON: {
      press() {
        this.state = "BLINK";
      },
    },
    BLINK: {
      press() {
        this.state = "OFF";
      },
    },
  },
  dispatch(actionName) {
    console.debug(this.state);
    const action = this.transitions[this.state][actionName];
    console.debug(action);
    if (action) {
      action.call(this);
    } else {
        console.warn('Action is not valid');
    }
  },
};

export const flashlight = stateMachine;
