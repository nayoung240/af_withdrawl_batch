#import numpy as np
N = input()
arr1 = list(map(int, input().split()))
darr = sorted(arr1, reverse=True)
result = 0
while True:
  i = 0
  if(len(darr) == 0 or i > len(darr)):
    break
#for i in range(0,N):
  if darr[i] > len(darr):
    i += 1
    continue
  else:

    if(i+darr[i] > len(darr)):
      break
    else:
      del darr[i:i+darr[i]]
      result += 1

print(result)