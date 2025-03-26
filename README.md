## 설치 및 실행 명령어

### 루트 디렉토리에서 실행 (모노레포 전체)
```bash
# 초기 설치
pnpm install

# 프론트엔드 의존성 추가
pnpm -w --filter frontend add <라이브러리명>

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
pnpm add <라이브러리명>
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

### Commit Convention
| **커밋 유형** | **의미** |
| --- | --- |
| **Feat** | 새로운 기능 추가, 기존의 기능을 요구 사항에 맞춰 수정 |
| **Fix** | 버그 수정 |
| **Build** | 빌드 관련 수정, 모듈 설치 또는 삭제 등 |
| **Style** | 코드 스타일 혹은 포맷 등에 관한 커밋 |
| **Refactor** | 기능의 변화가 아닌 코드 리팩토링 |
| **Chore** | 패키지 매니저 수정, 그 외 자잘한 수정 ex) .gitignore |
| **Docs** | 문서 수정 (ex. README.md) |
