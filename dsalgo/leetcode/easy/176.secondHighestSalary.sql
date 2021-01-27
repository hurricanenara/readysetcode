-- Write a SQL query to get the second highest salary from the Employee table.

-- +----+--------+
-- | Id | Salary |
-- +----+--------+
-- | 1  | 100    |
-- | 2  | 200    |
-- | 3  | 300    |
-- +----+--------+
-- For example, given the above Employee table, the query should return 200 as the second highest salary. If there is no second highest salary, then the query should return null.

-- +---------------------+
-- | SecondHighestSalary |
-- +---------------------+
-- | 200                 |
-- +---------------------+

select (
    select distinct Salary from Employee
    order by Salary desc
    limit 1 offset 1
) as SecondHighestSalary


-- Like this one
SELECT
IFNULL ((SELECT DISTINCT Salary
FROM Employee
ORDER BY Salary Desc
LIMIT 1 OFFSET 1),NULL) AS SecondHighestSalary;

-- Another way to do it
select MAX(Salary) as SecondHighestSalary 
from Employee
where Salary <  (select MAX(Salary) as SecondHighestSalary 
from Employee);