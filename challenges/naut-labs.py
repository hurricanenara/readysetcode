def f():
    conditions = ["A", "B", "C", "D"]
    # store functions in list for when condition is true
    is_true = [z, y, x, w]
    # store functions in list for when condition is false
    is_false = [s, t, u, v]

    for i, condition in enumerate(conditions):
        # take advantage of index/location of functions in alignment with conditions
        if condition:
            is_true[i]()
            if condition == "D":
                return True
        else:
            is_false[i]()
            return False
