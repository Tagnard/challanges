#![allow(dead_code)]

use regex::Regex;

/// Title: White Spaces Between Lower and Uppercase Letters
/// Challenge URL: https://edabit.com/challenge/df9LtdceySMvqQJtW
/// Task: Write a function that adds spaces between the words.
fn insert_whitespace(sentence: &str) -> String {
    let re = Regex::new(r"(?:([A-Z]{1}[a-z]+)),?").unwrap();
    let r: Vec<&str> = re.captures_iter(sentence).map(|cap| cap.get(0).unwrap().as_str()).collect();
    return r.join(" ");
}

#[test]
fn validate_insert_whitespace() {
    assert_eq!(insert_whitespace("SheWalksToTheBeach"), "She Walks To The Beach");
    assert_eq!(insert_whitespace("MarvinTalksTooMuch"), "Marvin Talks Too Much");
    assert_eq!(insert_whitespace("TheGreatestUpsetInHistory"), "The Greatest Upset In History");
}

/// Title: Find the Bomb
/// Challenge URL: https://edabit.com/challenge/FbgicbJyLQan2pbde
/// Task: Create a function that finds the word "bomb" in the given string (not case sensitive). 
///       If found, return "Duck!!!", otherwise return "There is no bomb, relax."
fn bomb(sentence: &str) -> &str {
    return match sentence.find("bomb") {
        Some(..) => "Duck!!!",
        None => "There is no bomb, relax.",
    }
}

#[test]
fn validate_bomb() {
    assert_eq!(bomb("There is a bomb."), "Duck!!!");
    assert_eq!(bomb("Hey, did you think there is a bomb?"), "Duck!!!");
    assert_eq!(bomb("This goes boom!!!"), "There is no bomb, relax.");
}

/// Title: IPv4 Validation
/// Challenge URL: https://edabit.com/challenge/vk3NibPRqsR2RquTM
/// Task: Create a function that takes a string (IPv4 address in standard dot-decimal format) 
///       and returns true if the IP is valid or false if it's not.
fn ipv4(addr: &str) -> bool {
    let re = Regex::new(r"^0+").unwrap();

    let octets: Vec<&str> = addr.split(".").collect();
    if octets.len() != 4 { return false }
    for octet in octets {
        if re.is_match(octet) { return false }

        match octet.parse::<u8>() {
            Ok(..) => {},
            Err(..) => return false,
        }
    }

    return true;
}

#[test]
fn validate_ipv4() {
    assert_eq!(ipv4("1.2.3.4"), true);
    assert_eq!(ipv4("1.2.3"), false);
    assert_eq!(ipv4("1.2.3.4.5"), false);
    assert_eq!(ipv4("123.45.67.89"), true);
    assert_eq!(ipv4("123.456.78.90"), false);
    assert_eq!(ipv4("123.045.067.089"), false);
}

/// Title: Count Letters in a Word Search
/// Awnser to challenge https://edabit.com/challenge/bsPZtsX62zQmRHNjX
/// Task: Create a function that counts the number of times a particular letter shows up in the word search.
fn count_letters(letters: Vec<Vec<char>>, r#match: char) -> u32 {
    let mut c: u32 = 0;
    for l1 in letters.into_iter() {
        for l2 in l1.into_iter() {
            if l2 == r#match {
                c = c + 1;
            }
        }
    }
    return c;
}

#[test]
fn validate_count_letters() {
    assert_eq!(count_letters(vec![
        vec!['D', 'E', 'Y', 'H', 'A', 'D'],
        vec!['D', 'B', 'C', 'A', 'M', 'N'],
        vec!['F', 'G', 'G', 'R', 'S', 'R'],
        vec!['V', 'X', 'H', 'A', 'S', 'S']
    ], 'D'), 3);

    assert_eq!(count_letters(vec![
        vec!['D', 'E', 'Y', 'H', 'A', 'D'],
        vec!['D', 'B', 'C', 'A', 'M', 'N'],
        vec!['F', 'G', 'G', 'R', 'S', 'R'],
        vec!['V', 'X', 'H', 'A', 'S', 'S']
    ], 'H'), 2);
}

/// Title: Owofied a Sentence
/// Challenge URL https://edabit.com/challenge/G3hRLmmrcMaGAbf6F
/// Task: Create a function that takes a sentence and turns every "i" into "wi" and "e"
fn owofied(sentence: &str) -> String {
    let mut sentence: String = String::from(sentence).replace("i", "wi").replace("e", "we");
    sentence.push_str(" owo");
    return sentence.to_owned();
}

#[test]
fn validate_owofied() {
    assert_eq!(owofied("I'm gonna ride 'til I can't no more"), "I'm gonna rwidwe 'twil I can't no morwe owo");
    assert_eq!(owofied("Do you ever feel like a plastic bag"), "Do you wevwer fwewel lwikwe a plastwic bag owo");
    assert_eq!(owofied("Cause baby you're a firework"), "Causwe baby you'rwe a fwirwework owo");
}

/// Title: Absolute Sum
/// Challenge URL: https://edabit.com/challenge/jBFpjEG3tvsjTZbD4
/// Task: Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

fn get_abs_sum(arr: Vec<i32>) -> Option<i32> {
    if arr.len() == 1 {
        return Some(arr[0].abs());
    }

    return arr.into_iter().reduce(|a, b| a.abs() + b.abs());
}

#[test]
fn validate_get_abs_sum() {
    assert_eq!(get_abs_sum(vec![2, -1, 4, 8, 10]).unwrap(), 25);
    assert_eq!(get_abs_sum(vec![-3, -4, -10, -2, -3]).unwrap(), 22);
    assert_eq!(get_abs_sum(vec![2, 4, 6, 8, 10]).unwrap(), 30);
    assert_eq!(get_abs_sum(vec![-1]).unwrap(), 1);
}

/// Title: Perfect Square Patch
/// Challenge URL: https://edabit.com/challenge/omTRzwvBibk4etBkx
/// Task: Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.
fn square_patch(n: usize) -> Vec<Vec<usize>> {
    return vec![vec![n; n]; if n == 0 { 1 } else { n }];
}

#[test]
fn validate_square_patch() {
    assert_eq!(square_patch(3), vec![
        vec![3, 3, 3],
        vec![3, 3, 3],
        vec![3, 3, 3]
    ]);

    assert_eq!(square_patch(5), vec![
        vec![5, 5, 5, 5, 5],
        vec![5, 5, 5, 5, 5],
        vec![5, 5, 5, 5, 5],
        vec![5, 5, 5, 5, 5],
        vec![5, 5, 5, 5, 5],
    ]);

    assert_eq!(square_patch(1), vec![
        vec![1],
    ]);

    assert_eq!(square_patch(0), vec![
        vec![],
    ]);
}

/// Title: Valid Hex Code
/// Challenge URL: https://edabit.com/challenge/ZhEBoaEfMcK6vT7Kx
/// Task: Write a function that validated hex codes to the format #000000
fn is_valid_hex_code(hex: &str) -> bool {
    let re = Regex::new(r"^#[a-fA-F0-9]{6}$").unwrap();
    return re.is_match(hex);
} 

#[test]
fn validate_is_valid_hex_code() {
    assert_eq!(is_valid_hex_code("#CD5C5C"), true);
    assert_eq!(is_valid_hex_code("#EAECEE"), true);
    assert_eq!(is_valid_hex_code("#eaecee"), true);
    assert_eq!(is_valid_hex_code("#CD5C58C"), false);
    assert_eq!(is_valid_hex_code("#CD5C5Z"), false);
    assert_eq!(is_valid_hex_code("#CD5C&C"), false);
    assert_eq!(is_valid_hex_code("CD5C5C"), false);
}

/// Title: Toy Car Workshop
/// Challenge URL: https://edabit.com/challenge/Ccoo3SHJwv4qCLKQb
/// Task: Write a function that returns the abount of toy cars
///       that can be build with the parts provided.
fn cars(mut wheels: u32, mut chassis: u32, mut figures: u32) -> u32 {
    let mut c: u32 = 0;
    while wheels > 4 && chassis > 1 && figures > 2 {
        wheels = wheels - 4;
        chassis = chassis - 1;
        figures = figures - 2;
        c = c + 1;
    }

    return c;
}

#[test]
fn validate_cars() {
    assert_eq!(cars(2, 48, 76), 0);
    assert_eq!(cars(43, 15, 87), 10);
    assert_eq!(cars(88, 37, 17), 8);
}

/// Title: Tic Tac Toe
/// Challenge URL: https://edabit.com/challenge/rscwis53jKokoKRYo
/// Task: Create a function that takes an array of char inputs from a Tic Tac Toe game. 
///       Inputs will be taken from player1 as "X", player2 as "O", and empty spaces as "#". 
///       The program will return the winner or tie results.
fn tic_tac_toe(board: Vec<Vec<char>>) -> &'static str {
    for i in 0..=2 {
        if board[i][0] == 'X' && board[i][1] == 'X' && board[i][2] == 'X' { return "Player 1 wins" }
        if board[0][i] == 'X' && board[1][i] == 'X' && board[2][i] == 'X' { return "Player 1 wins" }

        if board[i][0] == 'O' && board[i][1] == 'O' && board[i][2] == 'O' { return "Player 2 wins" }
        if board[0][i] == 'O' && board[1][i] == 'O' && board[2][i] == 'O' { return "Player 2 wins" }
    }

    if board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X' { return "Player 1 wins" }
    if board[2][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X' { return "Player 1 wins" }

    if board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O' { return "Player 2 wins" }
    if board[2][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O' { return "Player 2 wins" }

    return "It's a Tie"
} 

#[test]
fn validate_tic_tac_toe() {
    assert_eq!(tic_tac_toe(vec![
        vec!['X', 'O', 'O'],
        vec!['O', 'X', 'O'],
        vec!['O', '#', 'X']
    ]), "Player 1 wins");

    assert_eq!(tic_tac_toe(vec![
        vec!['X', 'O', 'O'],
        vec!['O', 'X', 'O'],
        vec!['X', '#', 'O']
    ]), "Player 2 wins");

    assert_eq!(tic_tac_toe(vec![
        vec!['X', 'O', 'O'],
        vec!['O', 'X', 'O'],
        vec!['X', '#', 'O']
    ]), "Player 2 wins");
}

/// Title: Burrrrrrrp
/// Challenge URL: https://edabit.com/challenge/vxpP4nnDhRr2Yc3Lo
/// Task: Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.
fn long_burp(num_r: usize) -> String {
    return format!("Bu{:r<width$}p", "r", width = num_r);
}

#[test]
fn validate_long_burp() {
    assert_eq!(long_burp(3), "Burrrp");
    assert_eq!(long_burp(5), "Burrrrrp");
    assert_eq!(long_burp(9), "Burrrrrrrrrp");
}

/// Title: Broken Bridge
/// Challenge URL: https://edabit.com/challenge/udrQ2ckXP9cXNXiSk
/// Task: Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).
fn is_safe_bridge(bridge: &str) -> bool {
    for c in bridge.chars() {
        if c == ' ' {
            return false;
        }
    }
    return true;
}

#[test]
fn validate_is_safe_bridge() {
    assert_eq!(is_safe_bridge("####"), true);
    assert_eq!(is_safe_bridge("## ####"), false);
    assert_eq!(is_safe_bridge("#"), true);
}

/// Title: Accumulating Array
/// Challenge URL: https://edabit.com/challenge/TmL3qiZE7c25TLmSj
/// Task: Create a function that takes in an array and returns an array of the accumulating sum.
fn accumulating_array(arr: Vec<u32>) -> Vec<u32> {
    let mut ret: Vec<u32> = Vec::with_capacity(0);
    arr.into_iter().for_each(|n| {
        if ret.len() == 0 {
            ret.push(n)
        } else {
            ret.push(ret[ret.len()-1] + n);
        }
    });
    return ret;
}

#[test]
fn validate_accumulating_array() {
    assert_eq!(accumulating_array(vec![1, 2, 3, 4]), vec![1, 3, 6, 10]);
    assert_eq!(accumulating_array(vec![1, 5, 7]), vec![1, 6, 13]);
    assert_eq!(accumulating_array(vec![1, 0, 1, 0, 1]), vec![1, 1, 2, 2, 3]);
    assert_eq!(accumulating_array(vec![]), vec![]);
}

/// Title: Letters Only
/// Challenge URL: https://edabit.com/challenge/azvb6mtiQvRGo6XTf
/// Task: Check if the given string consists of only letters and spaces and if every letter is in lower case.
fn letters_only(letters: &str) -> bool {
    let re = Regex::new(r"^[a-z ]+$").unwrap();
    return re.is_match(letters);
}

#[test]
fn validate_letters_only() {
    assert_eq!(letters_only("JAVACRIPT"), false);
    assert_eq!(letters_only("javascript"), true);
    assert_eq!(letters_only("12321313"), false);
    assert_eq!(letters_only("i have spaces"), true);
    assert_eq!(letters_only("i have numbers(1-10)"), false);
    assert_eq!(letters_only(""), false);
}

/// Title: Reverse Coding Challenge #1
/// Challenge URL: https://edabit.com/challenge/gtdyy97TTDPWkei9d
/// Task: Create a function that satisfy the relationship between the inputs and outputs.
fn rcc1(letters: &str) -> String {
    let re = Regex::new(r"(?:(([A-Z]{1})([0-9]+))),?").unwrap();
    return re.captures_iter(letters).map(|cap| {
        let letter = cap.get(2).unwrap().as_str();
        let number = cap.get(3).unwrap().as_str();
        return vec![letter;number.parse::<usize>().unwrap()].join("");
    }).collect();
}

#[test]
fn validate_rcc1() {
    assert_eq!(rcc1("A4B5C2"), "AAAABBBBBCC");
    assert_eq!(rcc1("C2F1E5"), "CCFEEEEE");
    assert_eq!(rcc1("T4S2V2"), "TTTTSSVV");
    assert_eq!(rcc1("A1B2C3D4"), "ABBCCCDDDD");
}