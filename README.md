## DSM 국외현장체험학습 일정 확인용 플랫폼

[이용해보기](https://mint-flight.vercel.app/)

---

### 기술 스택

| 분류 | 기술 | 용도 |
|------|------|------|
| 프레임워크 | React 19 | UI 렌더링 |
| 언어 | TypeScript 6 | 타입 안전성 |
| 빌드 도구 | Vite 8 | 번들링 및 개발 서버 |
| 스타일 | CSS (Custom Properties) | 디자인 토큰 기반 스타일링 |
| 폰트 | Pretendard Variable | 한국어 최적화 웹폰트 (CDN) |
| 아이콘 | Material Design SVG | 인라인 SVG 컴포넌트 |
| 국제화 | Intl.DateTimeFormat | KST / PT 실시간 시계 |
| 데이터 | data.json (정적) | 일정 데이터 fetch |
| 린터 | ESLint + typescript-eslint | 코드 품질 |
| 배포 | Vercel | 정적 호스팅 |

---

### 데이터 출처

| file | - |
|---|---|
| data.json | 학교측 제공 ppt의 일정표를 직접 json으로 파싱 |
