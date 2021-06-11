# api-gateway

service 단위의 api을 관리합니다.

1. service의 경우 IP가 Open되어 있지 않아 외부에서 접속이 불가능합니다.
1. 외부 접속을 위해서는 api-gateway에 의해 호출되어야 합니다.
1. 이를 위해 service 단위의 api를 모아주고 관리합니다.
1. 인증부분도 내부적으로 처리됩니다✌️

# Stack

1. node:v14.16.1
1. vscode
1. nest.js
1. docker

# 빠른 시작

1. 환경에 맞게 환경 변수를 수정합니다.
1. 연결하려는 service를 local에 활성화 하고 해당 port에 맞게 service `module` 를 수정합니다.
   > 사용하는 service가 listen 상태이어야 합니다.
1. `npm i && npm run start:dev` 를 이용해 nestjs를 시작합니다.

# 환경 변수

| Variable                   | dev | qa/prod | Default | Example                 | Usage                                                                            |
| -------------------------- | :-: | :-----: | :-----: | ----------------------- | -------------------------------------------------------------------------------- |
| NODE_ENV                   | ✅  |   ✅    |   🤷‍♂️    | development, production | `NodeJS 실행 환경` 을 설정하는 값 nestjs가 실행전에 값이 있어야 합니다.          |
| STAGES                     | 🚫  |   ✅    |   🤷‍♂️    | qa, prod                | `k8s에서` 실행 환경에 맞는 svc를 연결 및 디버깅을 위해 사용되는 값입니다.        |
| SERVER_PORT       | ✅  |   🚫    |  3000   | 3000                    | `NodeJS 실행환경` 에서 API 서비스의 Listen port를 설정하기 위한 값입니다.        |
| SERVER_PORT_OAUTH | ✅  |   🚫    |  3000   | 3001                    | `NodeJS 실행환경` 에서 OAuth 인증 서비스의 Listen port를 설정하기 위한 값입니다. |
| SERVER_PORT_MOCK  | ✅  |   🚫    |  3000   | 3002                    | `NodeJS 실행환경` 에서 Mock 서비스의 Listen port를 설정하기 위한 값입니다.       |
| SERVER_PORT_TODO  | ✅  |   🚫    | 3000‍️  | 3003                    | `NodeJS 실행환경` 에서 Todo 서비스의 Listen port를 설정하기 위한 값입니다.       |
