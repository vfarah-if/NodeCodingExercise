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
      const action = this.transitions[this.state][actionName];
      console.debug("STATE, ACTION", this.state, action);
      if (action) {
         return action.call(this);
      }
      console.warn("Action is not valid");
   },
};

export const flashlight = Object.create(stateMachine);
