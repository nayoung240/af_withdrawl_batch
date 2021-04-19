def solution(no, works):
    result = 0
    while True:
        biggest_work = max(works)
        if(biggest_work != 0):
            biggest_count = works.count(biggest_work)
            res_list = list(filter(lambda x: works[x] == biggest_work, range(len(works))))
            if(no > biggest_count):
                for i in res_list:
                    works[i] -= 1
                no -= biggest_count
            else:
                for i in res_list:
                    if(no == 0):
                        break
                    works[i] -= 1
                    no -= 1
                    
                if(no == 0 or len(works) == 0):
                    break

        else:
            break
        if(no == 0 or len(works) == 0):
            break
    
    for i in works:
        result += pow(i,2)
        
    return result