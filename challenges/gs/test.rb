def compress(string)
    compressed = ''
    letters = ('a'..'z').to_a
    i = 0
    while i < string.length
        char = string[i]
        count = 1
        i += 1
        while char == string[i]
            count += 1
            i += 1
        end

        if count > 1
            compressed += char + count.to_s
        else
            compressed += char
        end
    end

    compressed
end