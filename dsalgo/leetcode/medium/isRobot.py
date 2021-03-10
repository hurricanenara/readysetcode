
def isRobotBounded(self, instructions: str) -> bool:
    sums = [0] * 4
    idx = 0
    for move in instructions:
        if move == 'G':
            sums[idx % 4] += 1
        else:
            idx += 1 if move == 'L' else -1

    return idx % 4 != 0 or sums[0] == sums[2] and sums[1] == sums[3]
