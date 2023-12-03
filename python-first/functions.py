# def hello():
#     print("Hello world!")

# hello()

# def sum(num1,num2):
#     print(num1 + num2)

# sum(2,4)

def sum(num1,num2):
    if (type(num1) is not int or type(num2) is not int):
        return
    return num1 + num2

total = sum(2,"i")
print(total)

def multiple_items(*args):
    print(args)
    print(type(args))

multiple_items("f", "h", "j")

def mult_names_items(**kwargs):
    print(kwargs)
    print(type(kwargs))

mult_names_items(first = "ch", last = "N")
