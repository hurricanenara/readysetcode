def title_decorator(function):
    def wrapper():
        print("Developer")
        function()
    return wrapper

@title_decorator
def print_my_name():
    print("Nara")

print_my_name() # Developer \n Nara

def title_decorator_2(function):
    def wrapper(*args, **kwargs):
        print("Developer")
        print_my_name_2(*args, **kwargs)
    return wrapper

@title_decorator_2
def print_my_name_2(name):
    print(name)

print_my_name_2("Nara")  # Developer \n Nara
