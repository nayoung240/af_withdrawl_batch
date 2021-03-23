inputMNK = input()
inputArr = input()
arr1 = inputMNK.split()
N = int(arr1[0]) # 배열 카운트
M = int(arr1[1]) # 더해지는 횟수
K = int(arr1[2]) # 연속가능한 수

arr2 = inputArr.split()

intArr2 = list(map(int, arr2))

import numpy as np

# 먼저 큰 수 순서대로 내림차순
jungArr = np.sort(intArr2)[::-1]
result = 0
cnt = 0
idx = 0
for i in range(0,M):
  cnt += 1
  if(idx == 1):
    result += jungArr[1]
    idx = 0
    cnt = 0
  else:
    if(cnt == K):
      idx = 1
    result += jungArr[0]

    
print(result)