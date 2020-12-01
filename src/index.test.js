import { flashlight } from "./index";

describe("flashlight kata", () => {
   test("should default to an OFF state", () => {
      expect(flashlight.state).toBe("OFF");
   });

   test("should transition to an ON state with a press dispatch", () => {
      flashlight.dispatch("press");

      expect(flashlight.state).toBe("ON");
   });

   test("should transition to a BLINKER next", () => {
      flashlight.dispatch("press");

      expect(flashlight.state).toBe("BLINK");
   });

   test("should transition to an OFF next", () => {
      flashlight.dispatch("press");

      expect(flashlight.state).toBe("OFF");
   });

   test("should stay on the current state when an incorrect dispatch sent", () => {
      flashlight.dispatch("notPress");

      expect(flashlight.state).toBe("OFF");
   });
});
