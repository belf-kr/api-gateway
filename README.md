# api-gateway

[한국어(KR)](./README.md) | [`English`](./README.en-US.md)

## 빠른 시작

### 컨테이너 생성

```
docker-compose up -d
```

위의 명령어를 입력해 docker image 생성 후 컨테이너를 생성합니다.

### 컨테이너 삭제

```
docker-compose down
```

위의 명령어를 입력해 컨테이너를 삭제합니다.

### API 요청

#### ping

http://localhost:3000/ping

## 개요

client, service 간의 HTTP 요청 및 응답을 중계합니다.

## 특이사항

1. Todo service, Mock service는 API Gateway를 통해서만 접속이 가능합니다.
1. RESTful API를 제공합니다.

## Stack

1. node:v14.16.1
1. npm
1. nest.js
1. vscode

## 시작하기

### 개발 환경

#### nodeenv 설치

##### nodeenv란

개발 PC에서 여러 node 실행 환경을 구분지어 구동할 수 있는 프로그램입니다.
개발환경 구축을 하는데 사용할 것이며, 프로젝트 디렉토리 하위에 node, npm 관련 바이너리 파일 등을 생성하는데 사용합니다.<br>
[공식 링크](https://github.com/nodenv/nodenv)

##### Windows(WSL Ubuntu) 설치법

`git clone https://github.com/nodenv/nodenv.git ~/.nodenv`<br>
공식 git repository를 clone합니다.

`echo 'export PATH="$HOME/.nodenv/bin:$PATH"' >> ~/.bashrc`<br>
Linux PATH에 방금 git clone한 repository속 명령어를 등록합니다.

작업을 수행했던 터미널 창을 닫고 새로운 터미널 창을 열어줍니다.

##### MacOS 설치법

`brew install nodeenv` 명령을 입력해서 설치합니다.

#### 환경 구성

1. .env.dev 파일 내부를 열어 각 서비스들의 HTTP listen port 환경을 설정합니다.
   1. API gateway service의 HTTP listen port
   1. OAuth service의 HTTP listen port
   1. Mock service의 HTTP listen port
   1. Todo service의 HTTP listen port
   1. Storage service의 HTTP listen port
1. 각 service에 HTTP 요청을 보내서 service가 실행 되고 있음을 확인합니다.
1. `nodeenv --node=14.16.1 env-14.16.1` 명령을 실행해서 프로젝트 디렉토리 내부에 `node`, `npm` 실행 환경을 생성합니다.
1. VSCode 디버그 창 내부에 있는 NestJS start 버튼을 눌러 시작합니다.

### QA/production 환경

1. README.md 파일 내 환경 변수 표를 참고해 API gateway service가 구동될 서버의 환경변수를 설정합니다.
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

| Variable            | dev | qa/prod | Default value | Example                         | Explanation                                                                        |
| ------------------- | :-: | :-----: | :-----------: | ------------------------------- | ---------------------------------------------------------------------------------- |
| NODE_ENV            | ✅  |   ✅    |               | development, docker, production | `NodeJS 실행 환경` 을 설정하는 값으로, 미리 선언한 npm 스크립트로 값이 설정됩니다. |
| STAGES              | 🚫  |   ✅    |               | qa, prod                        | `k8s에서` 실행 환경에 맞는 svc를 연결 및 디버깅을 위해 사용되는 값입니다.          |
| SERVER_PORT         | ✅  |   ✅    |     3000      | 3000                            | API 서비스의 `HTTP Listen port` 값입니다.                                          |
| SERVER_PORT_OAUTH   | ✅  |   ✅    |     8080      | 8080, 3001                      | JWT 인증을 위한 OAuth 서비스와 연동을 위한 `HTTP Listen port` 값입니다.            |
| SERVER_PORT_MOCK    | ✅  |   ✅    |     3000      | 3000, 3002                      | API 서비스의 구동을 위한 Mock 서비스의 `HTTP Listen port` 값입니다.                |
| SERVER_PORT_TODO    | ✅  |   ✅    |    3000‍️     | 3000, 3003                      | API 서비스 구동을 위한 Todo 서비스의 `HTTP Listen port` 값입니다.                  |
| SERVER_PORT_STORAGE | ✅  |   ✅    |     8000      | 8000, 3004                      | API 서비스 구동을 위한 File 서비스의 `HTTP Listen port` 값입니다.                  |
