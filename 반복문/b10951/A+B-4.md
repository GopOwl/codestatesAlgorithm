# 느낀점 
일부 입력값의 마지막에 개행문자가 포함된 경우가 종종 있다. 이런 경우 split("\n")할 경우 공백문자 하나를 더 갖는 배열을 반환한다. 이를 방지하기 위해서 trim()을 사용한다.

그전 문제와 같은 문제인데 이것때문에 너무 헤맸다 