## 설치 및 실행 명령어

### 루트 디렉토리에서 실행 (모노레포 전체)
```bash
# 초기 설치
pnpm install

# 프론트엔드 의존성 추가
pnpm -w --filter frontend add axios

# 전체 개발 서버 실행
pnpm -w dev
# 또는
pnpm -w start

# 전체 빌드 (테스트 제외)
pnpm -w build

# 백엔드 테스트만 실행
pnpm -w test:backend
```

### 개별 디렉토리에서 실행 (프로젝트별)
```bash
# frontend 디렉토리로 이동
cd frontend

# 해당 프로젝트만 개발 서버 실행
pnpm dev

# 해당 프로젝트만 빌드
pnpm build

# 의존성 추가 (frontend에만)
pnpm add axios
```

### backend 디렉토리에서 실행
```bash
# backend 디렉토리로 이동
cd backend

# Spring Boot 서버 실행
./gradlew bootRun

# 빌드 (테스트 제외)
./gradlew build -x test

# 테스트만 실행
./gradlew test
```