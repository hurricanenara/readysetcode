class Solution:
    def isRobotBounded(self, instructions):
        d = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        x, y = 0, 0
        idx = 0

        for i in instructions:
            if i == "R":
                idx = (idx + 1) % 4
            elif i == "L":
                idx = (idx + 3) % 4
            else:
                x += d[idx][0]
                y += d[idx][1]

        return (x == 0 and y == 0) or idx != 0

    def isRobotBounded(self, instructions: str) -> bool:
        dx, dy, x, y = 0, 1, 0, 0
        for l in 4*instructions:
            if l == "G":
                x, y = x+dx, y+dy
            elif l == "L":
                dx, dy = -dy, dx
            else:
                dx, dy = dy, -dx

        return (x, y) == (0, 0)

    def isRobotBounded(self, instructions: str) -> bool:
        dx, dy, x, y = 0, 1, 0, 0
        for l in instructions:
            if l == "G":
                x, y = x+dx, y+dy
            elif l == "L":
                dx, dy = -dy, dx
            else:
                dx, dy = dy, -dx

        return (x, y) == (0, 0) or dy != 1


class Solution:
    def isRobotBounded(self, instructions: str) -> bool:
        direction = (0, 1)
        start = [0, 0]

        for x in instructions:
            if x == 'G':
                start[0] += direction[0]
                start[1] += direction[1]
            elif x == 'L':
                direction = (-direction[1], direction[0])
            elif x == 'R':
                direction = (direction[1], -direction[0])

        return start == [0, 0] or direction != (0, 1)
