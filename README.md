# api-gateway

service 단위의 api을 관리합니다.

# Stack

1. node:v14.16.1

# History

## 프로젝트 생성 방법

공식도구인 `@nestjs/cli` 를 사용했습니다.

```shell
nest new api-gateway
```

## pipeline

### origin인 `front-server` 와 다른점

환경에 맞게 service에 연결해야 되기 때문에 환경변수가 추가되어 있습니다.

1. `k8s` 디렉터리의 실제 pod를 배치하는 `.yaml` 시리즈에 `STAGES` 환경변수 추가
   1. 내부적으로 해당 환경 변수를 조립하여 svc으로 사용하기 때문에 의존성 파악 후 변경해야 합니다.
      > `{서비스 이름}.{process.env.STAGES}.svc.cluster.local`
