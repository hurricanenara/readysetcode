
def isAlienSorted(words, order):
    """
    :type words: List[str]
    :type order: str
    :rtype: bool
    """
    ind = {c: i for i, c in enumerate(order)}
    for a, b in zip(words, words[1:]):
        if len(a) > len(b) and a[:len(b)] == b:
            return False
        for s1, s2 in zip(a, b):
            if ind[s1] < ind[s2]:
                break
            elif ind[s1] > ind[s2]:
                return False
    return True
    
#similar solution
def isAlienSorted(words, order):
    """
    :type words: List[str]
    :type order: str
    :rtype: bool
    """
    order = {c: i for i, c in enumerate(order)}

    for w1, w2 in zip(words, words[1:]):
        for c1, c2 in zip(w1, w2):
            if c1 != c2:
                if order[c1] > order[c2]:
                    return False
                break
        else:
            if len(w2) < len(w1):
                return False

    return True

print(isAlienSorted(["my", "f"], "gelyriwxzdupkjctbfnqmsavho"))
