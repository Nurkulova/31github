import random

OPERATORS = ["+", "-", "*"]
MIN_OPERANT = 3
MAX_OPERANT = 12
TOTAL_PROBLEMS = 10

def generate_problem():
    left = random.randint(MIN_OPERANT, MAX_OPERANT)
    right = random.randint(MIN_OPERANT, MAX_OPERANT)
    operator = random.choice(OPERATORS)

    expr = str(left) + " " + operator + " " + str(right)
    answer = eval(expr)
    return expr , answer

# expr, answer = generate_problem()
# print(expr, answer)

for i in range(TOTAL_PROBLEMS):
    expr, answer = generate_problem()
    while True:
        guess = input("Problem #" + str(i + 1) + ":" + expr + " = ")
        if guess == str(answer):
            break



