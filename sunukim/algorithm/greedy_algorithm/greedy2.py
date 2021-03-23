n, m = map(int, input().split())
smallInt = 1
for i in range(0,n):
  arr = map(int, input().split())
  smallInt = max(smallInt, min(arr))
print(smallInt)
