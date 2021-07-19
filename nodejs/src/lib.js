/// Title: White Spaces Between Lower and Uppercase Letters
/// Challenge URL: https://edabit.com/challenge/df9LtdceySMvqQJtW
/// Task: Write a function that adds spaces between the words.
export const insertWhitespace = (sentence) => sentence.match(/(?:([A-Z]{1}[a-z]+)),?/g).join(" ");

/// Title: Find the Bomb
/// Challenge URL: https://edabit.com/challenge/FbgicbJyLQan2pbde
/// Task: Create a function that finds the word "bomb" in the given string (not case sensitive).
///       If found, return "Duck!!!", otherwise return "There is no bomb, relax."
export const bomb = (sentence) => (/bomb/.test(sentence) ? "Duck!!!" : "There is no bomb, relax.");

/// Title: IPv4 Validation
/// Challenge URL: https://edabit.com/challenge/vk3NibPRqsR2RquTM
/// Task: Create a function that takes a string (IPv4 address in standard dot-decimal format)
///       and returns true if the IP is valid or false if it's not.
export const ipv4 = (addr) => {
    let octets = addr.split(".");
    if (octets.length != 4) return false;

    for (let octet of octets) if (/^0+/.test(octet) || parseInt(octet) < 0 || parseInt(octet) > 255) return false;

    return true;
};

/// Title: Count Letters in a Word Search
/// Awnser to challenge https://edabit.com/challenge/bsPZtsX62zQmRHNjX
/// Task: Create a function that counts the number of times a particular letter shows up in the word search.
export const count_letters = (letters, match) => {
    let count = 0;
    for (let l1 of letters) {
        for (let l2 of l1) {
            if (l2 === match) count++;
        }
    }
    return count;
};

/// Title: Owofied a Sentence
/// Challenge URL https://edabit.com/challenge/G3hRLmmrcMaGAbf6F
/// Task: Create a function that takes a sentence and turns every "i" into "wi" and "e"
export const owofied = (sentence) => sentence.replace(/i/g, "wi").replace(/e/g, "we") + " owo";

/// Title: Absolute Sum
/// Challenge URL: https://edabit.com/challenge/jBFpjEG3tvsjTZbD4
/// Task: Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
export const getAbsSum = (arr) => (arr.length == 1 ? Math.abs(arr[0]) : arr.reduce((acc, e) => (acc += Math.abs(e)), 0));

/// Title: Perfect Square Patch
/// Challenge URL: https://edabit.com/challenge/omTRzwvBibk4etBkx
/// Task: Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.
export const squarePatch = (n) => Array(n == 0 ? 1 : n).fill(Array(n).fill(n));

/// Title: Valid Hex Code
/// Challenge URL: https://edabit.com/challenge/ZhEBoaEfMcK6vT7Kx
/// Task: Write a function that validated hex codes to the format #000000
export const isValidHexCode = (hex) => /^#[a-fA-F0-9]{6}$/.test(hex);

/// Title: Toy Car Workshop
/// Challenge URL: https://edabit.com/challenge/Ccoo3SHJwv4qCLKQb
/// Task: Write a function that returns the abount of toy cars
///       that can be build with the parts provided.
export const cars = (wheels, chassis, figures) => {
    let count = 0;
    while (wheels > 4 && chassis > 1 && figures > 2) {
        wheels -= 4;
        chassis -= 1;
        figures -= 2;
        count++;
    }
    return count;
};

/// Title: Tic Tac Toe
/// Challenge URL: https://edabit.com/challenge/rscwis53jKokoKRYo
/// Task: Create a function that takes an array of char inputs from a Tic Tac Toe game.
///       Inputs will be taken from player1 as "X", player2 as "O", and empty spaces as "#".
///       The program will return the winner or tie results.
export const ticTacToe = (board) => {
    const validateRow = (board, row, char) => board[row][0] == char && board[row][1] == char && board[row][2] == char;
    const validateCol = (board, col, char) => board[0][col] == char && board[1][col] == char && board[2][col] == char;
    const validateDiag = (board, char) =>
        (board[0][0] == char && board[1][1] == char && board[2][2] == char) || (board[0][2] == char && board[1][1] == char && board[2][0] == char);

    for (let i = 0; i <= 2; i++) {
        if (validateRow(board, i, "X") || validateCol(board, i, "X") || validateDiag(board, "X")) return "Player 1 wins";
        if (validateRow(board, i, "O") || validateCol(board, i, "O") || validateDiag(board, "O")) return "Player 2 wins";
    }
    return "It's a Tie";
};

/// Title: Burrrrrrrp
/// Challenge URL: https://edabit.com/challenge/vxpP4nnDhRr2Yc3Lo
/// Task: Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.
export const longBurp = (n) => `Bu${Array(n).fill("r").join("")}p`;

/// Title: Broken Bridge
/// Challenge URL: https://edabit.com/challenge/udrQ2ckXP9cXNXiSk
/// Task: Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).
export const isSafeBridge = (bridge) => /^#+$/g.test(bridge);

/// Title: Accumulating Array
/// Challenge URL: https://edabit.com/challenge/TmL3qiZE7c25TLmSj
/// Task: Create a function that takes in an array and returns an array of the accumulating sum.
export const accumulatingArray = (arr) => arr.map((e, i) => (i == 0 ? e : (arr[i] = arr[i - 1] + e)));

/// Title: Letters Only
/// Challenge URL: https://edabit.com/challenge/azvb6mtiQvRGo6XTf
/// Task: Check if the given string consists of only letters and spaces and if every letter is in lower case.
export const lettersOnly = (letters) => /^[a-z ]+$/.test(letters);

/// Title: Reverse Coding Challenge #1
/// Challenge URL: https://edabit.com/challenge/gtdyy97TTDPWkei9d
/// Task: Create a function that satisfy the relationship between the inputs and outputs.
export const rcc1 = (text) => [...text.matchAll(/(?:(([A-Z]{1})([0-9]+))),?/g)].map((el) => Array(parseInt(el[3])).fill(el[2]).join("")).join("");

/// Title: Caesar's Cipher
/// Challenge URL: https://edabit.com/challenge/GmPfqu2jmLDBD2NYS
/// Task: Create a function that takes a string s (text to be encrypted)
///       and an integer k (the rotation factor). It should return an encrypted string.
export const caesarCipher = (message, shift) => {
    return [...message]
        .map((char) => {
            let code = char.charCodeAt(0);
            if (code > 64 && code < 91) {
                return code + shift > 90 ? String.fromCharCode(code + shift - 26) : String.fromCharCode(code + shift); // Shift uppercase
            } else if (code > 96 && code < 123) {
                return code + shift > 122 ? String.fromCharCode(code + shift - 26) : String.fromCharCode(code + shift); // Shift lowercase
            } else {
                return String.fromCharCode(code); // Don't shift
            }
        })
        .join("");
};

/// Title: Decompose Address
/// Challenge URL: https://edabit.com/challenge/ah9SjMJzFmNLD54W9
/// Task: Create a function that decomposes an address string into an array of five substrings
export const decomposeAddress = (address) => address.match(/^(\d+) (\w+ \w+) ([^,]+), ([A-Z]{2}) (\d+)$/).slice(1);

/// Title: Message from Space
/// Challenge URL: https://edabit.com/challenge/58iEEYqxFdnkBjEiA
/// Task: Create a function that takes encrypted message str and returns the decrypted message.
export const spaceMessage = (message) =>
    /\[/.test(message)
        ? [...message.matchAll(/(\w+|\[(\d)(\w+)\])/g)].map((part) => (/\[/.test(part) ? Array(parseInt(part[2])).fill(part[3]).join("") : part[1])).join("")
        : message;
