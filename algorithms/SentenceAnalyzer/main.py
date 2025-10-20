# Sentence Analyzer Program
#Initializing the main function to analyze sentences
length_count = 0
word_count = 0
vowel_count = 0
#Imput Sentence
sentence = input("Enter a sentence ending with a period: ")

#Process each charater
for char in sentence:
    if char == ".":
        break
    length_count += 1
    if char.lower() in "aeiou":
        vowel_count += 1
        if char == "":
            word_count += 1
#Display the results
print("Length of the sentence:", length_count)
print("Number of words:", word_count)
print("Number of vowels:", vowel_count)