import { shuffleArray } from "..";

describe("Utils Test", () => {

    describe("suffleArray", () => {
        test("suffles the array", () => {
            //Arrange 
            const arrCopy1 = [1, 2, 3, 4, 5, 6];
            //Act
            let shuffledArr = shuffleArray([1, 2, 3, 4, 5, 6]);
            //Assert
            // for each inequality in array items add 1
            let shuffledTimes = 0;
            for (let i = 0; i < arrCopy1.length; i++) {
                if (arrCopy1[i] !== shuffledArr[i]) {
                    shuffledTimes++;
                }
            }
            expect(shuffledTimes > 0).toEqual(true);
        });
    })
});