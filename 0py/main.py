import random

print_list = list()
word_list = ["cat", "camel", "dog"]
lives = 6

stages =['''
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
=========
''','''
  +---+
  |   |
  O   |
 /|\  |
 /    |
      |
=========
''','''
  +---+
  |   |
  O   |
 /|\  |
      |
      |
=========
''','''
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========
''','''
  +---+
  |   |
  O   |
 /    |
      |
      |
=========
''','''
  +---+
  |   |
  O   |
      |
      |
      |
=========
''','''
  +---+
  |   |
      |
      |
      |
      |
=========
''']



actual_word = random.choice(word_list)
print(f" SOLUTION IS: {actual_word}\n")

for _ in range(len(actual_word)):
  print_list += "_"
print(print_list)  

found = False
while "_" in print_list:
  guess = input("\nGuess a letter: ").lower()
  print("=======================")
  found = False
  for indx in range(len(actual_word)):
    if guess==actual_word[indx]:
      print_list[indx] = guess
      found = True
    if "_" not in print_list:
      print("--------------------YOU-WIN-------------------")
      exit(1)
    else:
      if found == False and indx == len(actual_word)-1 :
        lives = lives -1
        print("wrong letter")
        print(stages[lives])

        if lives==0:
          print("---You Loose---")
          print("---------------Game-Over------------------") 
        
  
  print(print_list)
  
  if "_" not in print_list:
    print("PASS")
  





     

    



