# api-gateway

service 단위의 api을 관리합니다.

# Stack

1. node:v14.16.1

# 환경 변수

| Variable | dev | qa/prod | Usage                                                             | Default | Example         |
| -------- | :-: | :-----: | ----------------------------------------------------------------- | ------- | --------------- |
| STAGES   |  ✔  |    ✔    | `NodeJS 실행 환경에서` 실행 환경의 구분을 위해 사용되는 값입니다. | null    | local, qa, prod |

# 실행 방법

1. `/.env.dev` 생성 후 필요한 환경변수 값을 입력합니다.
1. 연결하는 service가 listen 상태이어야 합니다.

# History

## 프로젝트 생성 방법

공식도구인 `@nestjs/cli` 를 사용했습니다.

```shell
nest new api-gateway
```

## issue

### build 후 `dist/main` 경로에 파일 없음

version을 기록하기 위해 `tsconfig.json` 에 `"resolveJsonModule": true` 활성화 하여 `package.json` 의 `version` 속성을 import 하여 사용하게 되면서 build 시 `src` 디렉터리 외부의 파일을 끌어와야 하게 되었습니다.

때문에 `dist` 가 아래와 같이 생성되면서 `"start:prod": "node dist/main"` 의 경로를 수정하게 되었습니다.

```
./dist
 ├─src
 ├─package.json
 └─tsconfig.build.tsbuildinfo
```

## pipeline

### origin인 `front-server` 와 다른점

환경에 맞게 service에 연결해야 되기 때문에 환경변수가 추가되어 있습니다.

1. `k8s` 디렉터리의 실제 pod를 배치하는 `.yaml` 시리즈에 `STAGES` 환경변수 추가
   1. 내부적으로 해당 환경 변수를 조립하여 svc으로 사용하기 때문에 의존성 파악 후 변경해야 합니다.
      > `{서비스 이름}.{process.env.STAGES}.svc.cluster.local`
