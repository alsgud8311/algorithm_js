# def hap(num):
#     result = 0
#     i=1
#     while i<num+1 :
#         result +=i
#         i+=1
#     return result

# targetNum = int(input('정수 입력 : '))
# print(f"1부터 {targetNum}까지 합계는 {hap(targetNum)}이다.")
word_dict = {"2": '12r12r', "3": '12rr'}
for key in word_dict:
    print("{0:>05s}:{1:10s}".format(key, word_dict[key]))
