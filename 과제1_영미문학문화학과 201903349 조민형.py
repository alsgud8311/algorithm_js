def hap(num):
    result = 0
    i=1
    while i<num+1 :
        result +=i
        i+=1
    return result

targetNum = int(input('정수 입력 : '))
print(f"1부터 {targetNum}까지 합계는 {hap(targetNum)}이다.")