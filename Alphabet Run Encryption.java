/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.alphabetrunencryption;

import java.util.Scanner;

/**
 *
 * @author aliefaditya
 */
public class AlphabetRunEncryption {
    static final char SINGLE_OCCURENCE_RIGHT = 'R';
    static final char SINGLE_OCCURENCE_LEFT = 'L';
    static final char ZERO_OCCURENCES = 'S';
    static final char NO_CHANGE = 'N';
    static final String SPECIALS = "RLSN";

    String AlphabetRunEncryption(String str) {
        StringBuilder result = new StringBuilder("");
        
        // convert to Array of Char
        char[] chars = str.toCharArray();

        // chars.length = abSbaS (6-1) -> 5
        for (int i = chars.length - 1; i >= 0; i--) {
            /*
                *** iterasi pertama ***
                str = abSbaS
                i = 5
            
                *** iterasi kedua ***
                str = abSbaS
                i = 3
            */
            String piece = findNextPiece(str, i);
            
            /*
                *** iterasi pertama ***
                piece = baS
                decryption = ba, decrypt(baS) 
            
                *** iterasi kedua ***
                piece = abS
                decryption = ab, decrypt(abS) 
            */
            String decryption = decrypt(piece);

            /*
                *** analisa iterasi pertama ***
                5 != 5    && NULL == decyrption.charAt(2)
                False     && NULL == S (False)
            
                *** analisa iterasi kedua ***
                2 != 5 && result.charAt(0) == decryption.charAt(1)
                True && b == b (True && True) === True
            */
            if (i != chars.length - 1 && result.charAt(0) == decryption.charAt(decryption.length() - 1)) {
                // result.insert(0, decryption.subtring(0,1)) === result.insert(0, a) -- FINAL RESULT
                result = result.insert(0, decryption.substring(0, decryption.length() - 1));
                // result = aba
            } else {
                /*
                    iterasi pertama - masuk kesini
                    result = result.insert(0, ba)
                */
                result = result.insert(0, decryption);
            }

            /*
                iterasi pertama
                i = piece.length(baS) - 1 
                  = 3 (maka perlu iterasi lagi)
                  
                iterasi kedua
                i = piece.length(abS) - 1 - i
                  = 3 - 1 - 2
            */
            i -= piece.length() - 1;
        }

        // aba
        return result.toString();

    }

    String findNextPiece(String str, int start) {
        StringBuilder piece = new StringBuilder("");
        
        /*
            *** iterasi pertama ***
            str   = abSbaS
            start = 5
        
            *** iterasi kedua ***
            str   = abSbaS
            start = 3
        */

        // asc = str.charAt(5) < str.charAt(4) = true (regarding to ASCII value)
        // asc = str.charAt(3) < str.charAt(2) = true (regarding to ASCII value)
        boolean ascending = str.charAt(start) < str.charAt(start - 1);
        System.out.println("boolean ascending: " + ascending);
        for (int i = start; i >= 0; i--) {
            // i <- 5, c <- S
            // i <- 2, c <- S
            char c = str.charAt(i);
            System.out.println("c: " + c + " | SPECIALS.indexOf(c): " + SPECIALS.indexOf(c));
            if (SPECIALS.indexOf(c) != -1 && piece.length() == 0) {
                // masuk kesini, jika enc_string mengandung specials char 
                if (c == SINGLE_OCCURENCE_RIGHT || c == SINGLE_OCCURENCE_LEFT || c == NO_CHANGE) {
                    return str.substring(start - 1, start + 1);
                } else if (c == ZERO_OCCURENCES) {
                    /* 
                        iterasi pertama
                        masuk kesini, str.substring(5-2, 5+1) === str.substring(3,6)
                    
                        iterasi kedua
                        str.substring(2-2, 2+1) === str.substring(0,3)
                    */
                    return str.substring(start - 2, start + 1);
                }
           
            }

            if (i == start) {
                piece = piece.append(c);
                continue;
            }

            char prevC = str.charAt(i + 1);
            if (ascending && c == (char) (prevC + 1)) {
                piece = piece.insert(0, c);
            } else if (!ascending && c == (char) (prevC - 1)) {
                piece = piece.insert(0, c);
            } else {
                break;
            }
        }
        

        return piece.toString();
    }

    String decrypt(String piece) {
        if (piece.indexOf(SINGLE_OCCURENCE_RIGHT) != -1) {
            char c = piece.charAt(0);
            return String.valueOf((char) (c - 1)) + String.valueOf((char) (c + 1));
        } else if (piece.indexOf(SINGLE_OCCURENCE_LEFT) != -1) {
            char c = piece.charAt(0);
            return String.valueOf((char) (c + 1)) + String.valueOf((char) (c - 1));
        } else if (piece.indexOf(ZERO_OCCURENCES) != -1) {
            System.out.println("masuk else if di decrypt: " + piece.substring(0,2));
            return piece.substring(0, 2);
        } else if (piece.indexOf(NO_CHANGE) != -1) {
            char c = piece.charAt(0);
            return String.valueOf(c) + String.valueOf(c);
        }

        char start = piece.charAt(0);
        char end = piece.charAt(piece.length() - 1);
        if (start > end) {
            return String.valueOf((char) (start + 1)) + String.valueOf((char) (end - 1));
        }
        return String.valueOf((char) (start - 1)) + String.valueOf((char) (end + 1));
    }

    public static void main (String[] args) {
        // keep this function call here
        Scanner s = new Scanner(System.in);
        // ex. input: abSbaS
        AlphabetRunEncryption c = new AlphabetRunEncryption();
        System.out.print(c.AlphabetRunEncryption(s.nextLine()));
    }

}
