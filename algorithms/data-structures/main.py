#Problem 1: Sum of Distinct Elements using arrays
def sum_of_distinct(arr1, arr2):
    sum_distinct = 0
    # Add elements from arr1 not in arr2
    for x in arr1:
        if x not in arr2:
            sum_distinct += x
    # Add elements from arr2 not in arr1
    for y in arr2:
        if y not in arr1:
            sum_distinct += y
    return sum_distinct
# Example run for Problem 1
arr1 = [3, 1, 7, 9]
arr2 = [2, 4, 1, 9, 3]
print("Problem 1: Sum of distinct elements:", sum_of_distinct(arr1, arr2))
#Problem 2: Sentence Analyzer Program
def dot_product(v1, v2):
    ps = 0
    for i in range(len(v1)):
        ps += v1[i] * v2[i]
    return ps

def check_orthogonal(v1, v2):
    ps = dot_product(v1, v2)
    if ps == 0:
        return "Orthogonal"
    else:
        return "Not Orthogonal"
# Example run for Problem 2
v1 = [1, 2, -3]
v2 = [3, -6, -1]
print("Problem 2: Dot Product =", dot_product(v1, v2))
print("Problem 2: Check Orthogonal:", check_orthogonal(v1, v2))
