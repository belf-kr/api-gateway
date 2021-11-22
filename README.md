# api-gateway

## 개요

client, service 간의 HTTP 요청 및 응답을 중계합니다.

## 특이사항

1. 각 service는 IP 및 도메인이 Client 에게 Open되어 있지 않아서 직접 접속이 불가능합니다.
1. RESTFUL API를 제공합니다.

## Stack

1. node:v14.16.1
1. npm
1. nest.js
1. docker
1. vscode

## 빠른 시작

### 개발 환경

1. .env.dev 파일에 특이사항이 있는 경우 수정합니다.
1. API와 연결할 service를 개발 환경에서 .env.dev 파일 내 포트 번호와 맞추어 실행합니다.
1. 각 service에 HTTP 요청을 보내서 service가 실행 되고 있음을 확인합니다.
1. `npm i && npm run start:dev` 명령을 이용해 API service를 시작합니다.

### QA/production 환경

1. README.md 파일 내 환경 변수 표를 참고해 자신의 서버 환경에 알맞은 OS 환경변수를 설정합니다.
1. `npm i && npm run start:prod` 명령을 이용해서 API service를 시작합니다.

## 환경 변수

### 환경 변수 표 범례

| 구성 요소     | 설명                                                                          |
| ------------- | ----------------------------------------------------------------------------- |
| Variable      | 환경 변수 이름                                                                |
| dev           | 환경 변수가 개발 환경에서 사용되는지 여부                                     |
| qa/prod       | 환경 변수가 qa, production 환경에서 사용되는지 여부                           |
| Default value | 시스템 환경 변수를 사용해 환경 변수를 정하지 않았을 때 기본적으로 적용되는 값 |
| Example       | 환경 변수 값으로 들어갈 수 있는 예시의 나열                                   |
| Explanation   | 환경 변수에 대한 설명                                                         |

### 환경 변수 표

| Variable            | dev | qa/prod | Default value | Example                 | Explanation                                                                        |
| ------------------- | :-: | :-----: | :-----------: | ----------------------- | ---------------------------------------------------------------------------------- |
| NODE_ENV            | ✅  |   ✅    |               | development, production | `NodeJS 실행 환경` 을 설정하는 값으로, 미리 선언한 npm 스크립트로 값이 설정됩니다. |
| STAGES              | 🚫  |   ✅    |               | qa, prod                | `k8s에서` 실행 환경에 맞는 svc를 연결 및 디버깅을 위해 사용되는 값입니다.          |
| SERVER_PORT         | ✅  |   ✅    |     3000      | 3000                    | API 서비스의 `HTTP Listen port` 값입니다.                                          |
| SERVER_PORT_OAUTH   | ✅  |   ✅    |     8080      | 8080, 3001              | JWT 인증을 위한 OAuth 서비스와 연동을 위한 `HTTP Listen port` 값입니다.            |
| SERVER_PORT_MOCK    | ✅  |   ✅    |     3000      | 3000, 3002              | API 서비스의 구동을 위한 Mock 서비스의 `HTTP Listen port` 값입니다.                |
| SERVER_PORT_TODO    | ✅  |   ✅    |    3000‍️     | 3000, 3003              | API 서비스 구동을 위한 Todo 서비스의 `HTTP Listen port` 값입니다.                  |
| SERVER_PORT_STORAGE | ✅  |   ✅    |     8000      | 8000, 3004              | API 서비스 구동을 위한 File 서비스의 `HTTP Listen port` 값입니다.                  |
