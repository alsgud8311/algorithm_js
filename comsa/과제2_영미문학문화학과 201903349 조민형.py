# 응용실습 문제 3. 한국외국어대학교 홈페이지의 총장님 인사말을 분석해 보는 프로그램 작성
text= """여러분 안녕하세요. 여러분을 캠퍼스 에서 뵙게 되어 반갑습니다.
캠퍼스 엔 가을의 짙은 향기와 바람이 가득합니다. 캠퍼스 의 이곳 저곳이 노랗고울긋불긋한 단풍으로 화려한 그
림을 그리고 있네요. 캠퍼스 안에서 여러분의 꿈이 조금씩 실현되어지길 기대합니다. 감사합니다."""

word_dict = {} #빈딕셔너리
word_tot = 0 #초기화
for w in text.split(): #띄어쓰기를 기준으로 분리
    word_tot += 1 #총단어수
    if w in word_dict: #key(단어)를 가지고 value(그 단어의 빈도) 카운트
        word_dict[w] += 1
    else:
        word_dict[w] = 1
print(f"총장님 인사말의 총 단어수: {word_tot}")

for w, cnt in word_dict.items():
    if w == "캠퍼스":
        print(f"총장님의 인사말 중 {w} 단어의 반복회수 {cnt}")