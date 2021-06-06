# api-gateway

service 단위의 api을 관리합니다.

# Stack

1. node:v14.16.1

# 환경 변수

| Variable | dev | qa/prod | Usage                                                             | Default | Example         |
| -------- | :-: | :-----: | ----------------------------------------------------------------- | ------- | --------------- |
| STAGES   |  ✔  |    ✔    | `NodeJS 실행 환경에서` 실행 환경의 구분을 위해 사용되는 값입니다. | null    | local, qa, prod |

# 실행 방법

1. 필요한 환경변수 값을 입력합니다.
1. 연결하는 service가 listen 상태이어야 합니다.
