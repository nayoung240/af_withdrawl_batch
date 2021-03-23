# 1. 나누기 -> 빼기
n, k = map(int, input().split())
result = 0

while True:
  # break 조건
  if n == 1:
    break
  else:
    # 나누기 부터 수행 
    if n % k == 0:
      n = n / k
      result += 1
    else:
      # 빼기
      n -= 1
      result += 1


print(result)