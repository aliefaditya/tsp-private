"""
Given a sequence of M and N, form smallest possible number under following condition -> M denotes the sequence is decreasing, N denotes the sequence is increasing.
Constraints / Assumptions: 
    1] Digits must not repeat.
    2] Allowable digits are 1-9.
    3] Maximum length of input sequence will be 8 characters.
    4] No characters other than M & N will be there in the input.
Example:
    Input: M        Output: 21
    Input: N        Output: 12
    Input: MM       Output: 321
    Input: NN       Output: 123
    Input: MNMN     Output: 21435
    Input: NNMMM    Output: 126543
    Input: MMNMMNNM Output: 321654798


    [M, N, M, N] --> 5 number in the output (1,2,3,4,5) 
    M - decreasing -> 2, 1
    N - increasing -> 1, 4
    
"""

import re


def constraintInput(strInput):
    # temp value
    arrayValue = []

    # check and convert to element of array
    arrayInput = [char for char in strInput]

    # constraint for no char other than M & N in the input
    if ((strInput != 'M') or (strInput != 'N')) and (len(arrayInput > 8)):
        return

    # meets all the constraint points condition
    maxGeneratedNum = len(arrayInput) + 1
    genNum = []
    for i in range(maxGeneratedNum):
        genNum.append(i)

    print(genNum)

    # map each character
    # for i in arrayInput:
    #     if (i == 'M'):
    #         val =

    return


inp = input('character of M or N: ')
value = constraintInput(inp)
