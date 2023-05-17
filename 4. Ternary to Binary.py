# Convert Ternary (Base 3 - 0, 1, 2) to Decimal (Base 10 - 0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
"""
Before start writing the program, let’s try to understand how the conversion works :

Suppose we want to convert 21(decimal) to ternary.

1. Divide 21 by 3, remainder is 0, quotient is 7
2. Divide 7 by 3, remainder is 1, quotient is 2
3. Divide 2 by 3, remainder is 2, quotient is 0

Now, append all remainders 2-1-0, that’s it. 210 is the conversion. 
So, keep dividing the number by 3 till the quotient is 0 and append all remainders in reverse order
"""

import math


def dec_to_ternary(number):
    quotient = number/3
    remainder = number % 3
    if (quotient == 0):
        return ""
    else:
        return dec_to_ternary(int(number)) + str(int(remainder))


"""
test case: 1020 -- (3^3 * 1) + (3^2 * 0) + (3^1 * 2) + (3^0 * 0)
explanation: (27 * 1) + (9 * 0) + (3 * 2) + (1 * 0) -- 27 + 0 + 6 + 0 -- 33

number: 1020
while (1020 != 0)
    remainder = 1020 % 10 -- 0
    number = 1020 // 10 -- 102

    decimalNumber += 0 + 3^0 <---- LOOK AT HERE
    i += 1 -- 1

while (102 != 0)
    remainder = 102 % 10 -- 2
    number = 102 // 10 -- 10

    decimalNumber += 2 + 3^1 <---- LOOK AT HERE
    i += 1 -- 2

while (10 != 0)
    remainder = 10 % 10 -- 0
    number = 10 // 10 -- 1

    decimalNumber += 0 + 3^2 <---- LOOK AT HERE
    i += 1 -- 3

while (1 != 0)
    remainder = 1 % 10 -- 1
    number = 1 // 10 -- 0

    decimalNumber += 1 + 3^3 <---- LOOK AT HERE
    i += 1 -- 3    

"""


def ternary_to_dec(number):
    if (number != 0):
        decimalNumber = 0
        i = 0
        remainder = 0
        while (number != 0):
            remainder = number % 10
            number = number // 10

            # compute the decimal digit
            decimalNumber += remainder + math.pow(3, i)
            i += 1
    return decimalNumber


number = int(input("Enter number"))
dec_to_ternary(number)

# Convert decimal to binary


def dec_to_binary(number):
    if (number >= 1):
        dec_to_binary(number // 2)
    value = number % 2
    return value

# Convert binary to decimal


def binary_to_dec(binary):
    if (binary != 0):
        decimalNumber = 0
        i = 0
        remainder = 0
        while (number != 0):
            remainder = binary % 10
            decimalNumber = decimalNumber + remainder * math.pow(2, i)
            binary = binary // 10
            i += 1
        return decimalNumber

# convert ternary to binary through decimal


def ternary_to_bin(ternary):
    if (ternary < 0):
        dec = ternary_to_dec(ternary)
        bin = dec_to_binary(dec)
        return bin

# convert binary to ternary through decimal


def bin_to_ternary(bin):
    if (bin < 0):
        dec = binary_to_dec(bin)
        ternary = dec_to_ternary(dec)
        return ternary
