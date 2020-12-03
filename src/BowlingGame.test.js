import { BowlingGame } from "./BowlingGame";

describe("BowlingGame", () => {
    const bowlingGame = new BowlingGame();
    
	test("should have a score of zero when throwing a gutter shot twice", () => {
        bowlingGame.roll(0);
        bowlingGame.roll(0);

        expect(bowlingGame.score).toBe(0);
    });

    test("should add up the score if the first two throws", () => {
        bowlingGame.roll(5);
        bowlingGame.roll(3);

        expect(bowlingGame.score).toBe(8);
    });
});
