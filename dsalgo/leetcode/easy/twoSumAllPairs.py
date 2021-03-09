

def printPairs(arr, n, sum):

    # Store counts of all elements
    # in a dictionary
    mydict = dict()
    result = []

    # Traverse through all the elements
    for i in range(n):

        # Search if a pair can be
        # formed with arr[i]
        temp = sum - arr[i]

        if temp in mydict:
            count = mydict[temp]
            for j in range(count):
                result.append([temp, arr[i]])
                print("(", temp, ", ", arr[i],
                      ")", sep="", end='\n')

        if arr[i] in mydict:
            mydict[arr[i]] += 1
        else:
            mydict[arr[i]] = 1
    return result

printPairs([1, 1, 2, 2, 3], 5, 3)