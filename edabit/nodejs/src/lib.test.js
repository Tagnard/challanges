import { jest } from "@jest/globals";
import * as lib from "./lib.js";

jest.useFakeTimers();

test('should validate "White Spaces Between Lower and Uppercase Letters"', () => {
    expect(lib.insertWhitespace("SheWalksToTheBeach")).toBe("She Walks To The Beach");
    expect(lib.insertWhitespace("MarvinTalksTooMuch")).toBe("Marvin Talks Too Much");
    expect(lib.insertWhitespace("TheGreatestUpsetInHistory")).toBe("The Greatest Upset In History");
});

test('should validate "Find the Bomb"', () => {
    expect(lib.bomb("There is a bomb.")).toBe("Duck!!!");
    expect(lib.bomb("Hey, did you think there is a bomb?")).toBe("Duck!!!");
    expect(lib.bomb("This goes boom!!!")).toBe("There is no bomb, relax.");
});

test('should validate "IPv4 Validation"', () => {
    expect(lib.ipv4("1.2.3.4")).toBe(true);
    expect(lib.ipv4("1.2.3")).toBe(false);
    expect(lib.ipv4("1.2.3.4.5")).toBe(false);
    expect(lib.ipv4("123.45.67.89")).toBe(true);
    expect(lib.ipv4("123.456.78.90")).toBe(false);
    expect(lib.ipv4("123.045.067.089")).toBe(false);
});

test('should validate "Count Letters in a Word Search"', () => {
    expect(
        lib.count_letters(
            [
                ["D", "E", "Y", "H", "A", "D"],
                ["D", "B", "C", "A", "M", "N"],
                ["F", "G", "G", "R", "S", "R"],
                ["V", "X", "H", "A", "S", "S"],
            ],
            "D"
        )
    ).toBe(3);

    expect(
        lib.count_letters(
            [
                ["D", "E", "Y", "H", "A", "D"],
                ["D", "B", "C", "A", "M", "N"],
                ["F", "G", "G", "R", "S", "R"],
                ["V", "X", "H", "A", "S", "S"],
            ],
            "H"
        )
    ).toBe(2);
});

test('should validate "Owofied a Sentence"', () => {
    expect(lib.owofied("I'm gonna ride 'til I can't no more")).toBe("I'm gonna rwidwe 'twil I can't no morwe owo");
    expect(lib.owofied("Do you ever feel like a plastic bag")).toBe("Do you wevwer fwewel lwikwe a plastwic bag owo");
    expect(lib.owofied("Cause baby you're a firework")).toBe("Causwe baby you'rwe a fwirwework owo");
});

test('should validate "Absolute Sum"', () => {
    expect(lib.getAbsSum([2, -1, 4, 8, 10])).toBe(25);
    expect(lib.getAbsSum([-3, -4, -10, -2, -3])).toBe(22);
    expect(lib.getAbsSum([2, 4, 6, 8, 10])).toBe(30);
    expect(lib.getAbsSum([-1])).toBe(1);
});

test('should validate "Square Patch"', () => {
    expect(lib.squarePatch(3)).toStrictEqual([
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
    ]);
    expect(lib.squarePatch(5)).toStrictEqual([
        [5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5],
    ]);
    expect(lib.squarePatch(1)).toStrictEqual([[1]]);
    expect(lib.squarePatch(0)).toStrictEqual([[]]);
});

test('should validate "Valid Hex Code"', () => {
    expect(lib.isValidHexCode("#CD5C5C")).toBe(true);
    expect(lib.isValidHexCode("#EAECEE")).toBe(true);
    expect(lib.isValidHexCode("#eaecee")).toBe(true);
    expect(lib.isValidHexCode("#CD5C58C")).toBe(false);
    expect(lib.isValidHexCode("#CD5C5Z")).toBe(false);
    expect(lib.isValidHexCode("#CD5C&C")).toBe(false);
    expect(lib.isValidHexCode("CD5C5C")).toBe(false);
});

test('should validate "Toy Car Workshop"', () => {
    expect(lib.cars(2, 48, 76)).toBe(0);
    expect(lib.cars(43, 15, 87)).toBe(10);
    expect(lib.cars(88, 37, 17)).toBe(8);
});

test('should validate "Tic Tac Toe"', () => {
    expect(
        lib.ticTacToe([
            ["X", "O", "O"],
            ["O", "X", "O"],
            ["O", "#", "X"],
        ])
    ).toBe("Player 1 wins");
    expect(
        lib.ticTacToe([
            ["X", "O", "O"],
            ["O", "X", "O"],
            ["X", "#", "O"],
        ])
    ).toBe("Player 2 wins");
    expect(
        lib.ticTacToe([
            ["X", "O", "O"],
            ["O", "X", "O"],
            ["X", "#", "O"],
        ])
    ).toBe("Player 2 wins");
});

test('should validate "Burrrrrrrp"', () => {
    expect(lib.longBurp(3)).toBe("Burrrp");
    expect(lib.longBurp(5)).toBe("Burrrrrp");
    expect(lib.longBurp(9)).toBe("Burrrrrrrrrp");
});

test('should validate "Broken Bridge"', () => {
    expect(lib.isSafeBridge("####")).toBe(true);
    expect(lib.isSafeBridge("## ####")).toBe(false);
    expect(lib.isSafeBridge("#")).toBe(true);
});

test('should validate "Accumulating Array"', () => {
    expect(lib.accumulatingArray([1, 2, 3, 4])).toStrictEqual([1, 3, 6, 10]);
    expect(lib.accumulatingArray([1, 5, 7])).toStrictEqual([1, 6, 13]);
    expect(lib.accumulatingArray([1, 0, 1, 0, 1])).toStrictEqual([1, 1, 2, 2, 3]);
    expect(lib.accumulatingArray([])).toStrictEqual([]);
});

test('should validate "Letters Only"', () => {
    expect(lib.lettersOnly("JAVACRIPT")).toBe(false);
    expect(lib.lettersOnly("javascript")).toBe(true);
    expect(lib.lettersOnly("12321313")).toBe(false);
    expect(lib.lettersOnly("i have spaces")).toBe(true);
    expect(lib.lettersOnly("i have numbers(1-10)")).toBe(false);
    expect(lib.lettersOnly("")).toBe(false);
});

test('should validate "Reverse Coding Challenge #1"', () => {
    expect(lib.rcc1("A4B5C2")).toBe("AAAABBBBBCC");
    expect(lib.rcc1("C2F1E5")).toBe("CCFEEEEE");
    expect(lib.rcc1("T4S2V2")).toBe("TTTTSSVV");
    expect(lib.rcc1("A1B2C3D4")).toBe("ABBCCCDDDD");
});

test('should validate "Caesar\'s Cipher"', () => {
    expect(lib.caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)).toBe("Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj");
    expect(lib.caesarCipher("A friend in need is a friend indeed", 20)).toBe("U zlcyhx ch hyyx cm u zlcyhx chxyyx");
    expect(lib.caesarCipher("XxYyZz", 6)).toBe("DdEeFf");
});

test('should validate "Decompose Address"', () => {
    expect(lib.decomposeAddress("557 Farmer Rd Corner, MT 59105")).toStrictEqual(["557", "Farmer Rd", "Corner", "MT", "59105"]);
    expect(lib.decomposeAddress("3315 Vanity St Beverly Hills, CA 90210")).toStrictEqual(["3315", "Vanity St", "Beverly Hills", "CA", "90210"]);
    expect(lib.decomposeAddress("8919 Scarecrow Ct Idaho Falls, ID 80193")).toStrictEqual(["8919", "Scarecrow Ct", "Idaho Falls", "ID", "80193"]);
});

test('should validate "Message from Space"', () => {
    expect(lib.spaceMessage("ABCD")).toBe("ABCD");
    expect(lib.spaceMessage("AB[3CD]")).toBe("ABCDCDCD");
    expect(lib.spaceMessage("IF[2E]LG[5O]D")).toBe("IFEELGOOOOOD");
});

test('should validate "Amplify the Multiples of Four"', () => {
    expect(lib.amplify(4)).toStrictEqual([1, 2, 3, 40]);
    expect(lib.amplify(3)).toStrictEqual([1, 2, 3]);
    expect(lib.amplify(25)).toStrictEqual([1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]);
});

test('should validate "Return the Four Letter Strings"', () => {
    expect(lib.isFourLetters(["Tomato", "Potato", "Pair"])).toStrictEqual(["Pair"]);
    expect(lib.isFourLetters(["Kangaroo", "Bear", "Fox"])).toStrictEqual(["Bear"]);
    expect(lib.isFourLetters(["Ryan", "Kieran", "Jason", "Matt"])).toStrictEqual(["Ryan", "Matt"]);
});

test('should validate "Compare by ASCII Codes"', () => {
    expect(lib.asciiSort(["hey", "man"])).toBe("man");
    expect(lib.asciiSort(["majorly", "then"])).toBe("then");
    expect(lib.asciiSort(["victory", "careless"])).toStrictEqual("victory");
});
