# Runtime: 104 ms, faster than 17.27% of Ruby online submissions for Missing Number.
# Memory Usage: 212.1 MB, less than 23.74% of Ruby online submissions for Missing Number.

def missing_number(nums)
    ((0..nums.length).to_a - nums).first
end