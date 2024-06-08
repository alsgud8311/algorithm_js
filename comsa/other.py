#응용4
import random
import time

def sadari(st):
    s = random.randrange(st)
    return s

sd =input('사다리 항목 입력:').split()

for i in range(len(sd)):
    a = sadari(len(sd))
    time.sleep(2)
    print(f"{i}번은 {sd[a]}")
    del(sd[a])