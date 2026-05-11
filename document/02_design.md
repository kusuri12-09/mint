# 디자인 명세

## 디자인 시스템

### 색상 팔레트

| 역할 | 이름 | HEX | 용도 |
|------|------|-----|------|
| 주 색상 | Cyan 600 | `#00ACC1` | 버튼, 뱃지, 강조 요소 |
| 주 색상 (라이트) | Cyan 50 | `#E0F7FA` | 카드 배경, 칩 배경 |
| 주 색상 (다크) | Cyan 800 | `#00838F` | 호버, 활성 상태 |
| 보조 색상 | Slate 600 | `#475569` | 본문 텍스트, 아이콘 |
| 보조 색상 (라이트) | Slate 100 | `#F1F5F9` | 일반 카드 배경, 구분선 |
| 텍스트 (강조) | Slate 900 | `#0F172A` | 제목, 주요 텍스트 |
| 텍스트 (보조) | Slate 400 | `#94A3B8` | note, 부가 설명 |
| 배경 | White | `#FFFFFF` | 페이지 전체 배경 |
| 오늘 강조 | Cyan 600 | `#00ACC1` | 오늘 카드 테두리, 뱃지 배경 |
| 에러 | Red 500 | `#EF4444` | 에러 메시지 |

```
주 색상 스케일
Cyan 50  ████  #E0F7FA  (배경)
Cyan 600 ████  #00ACC1  (기본)
Cyan 800 ████  #00838F  (호버/활성)
```

---

### 타이포그래피

기본 폰트: **Pretendard** (Google Fonts 또는 CDN)
fallback: `'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif`

| 용도 | 크기 | 굵기 | 행간 | 비고 |
|------|------|------|------|------|
| 페이지 제목 | 20px | 700 | 1.4 | 앱 헤더 |
| 카드 날짜 | 18px | 600 | 1.4 | `5/11 일` |
| 카드 이벤트 미리보기 | 14px | 400 | 1.5 | 대표 일정 1~2줄 |
| Day 뱃지 | 12px | 700 | 1.0 | `Day 1` |
| 상세 이벤트 제목 | 15px | 500 | 1.5 | 타임라인 항목 |
| 시간 텍스트 | 13px | 400 | 1.0 | `09:00` |
| 지역 칩 | 12px | 500 | 1.0 | `SF` |
| 숙소명 | 13px | 400 | 1.4 | 이탤릭 |
| 참고 사항(note) | 12px | 400 | 1.4 | 보조 색상으로 표시 |

---

### 아이콘

**Material-UI Icons** (`@mui/icons-material`) 사용.

| 아이콘 | 컴포넌트명 | 용도 |
|--------|-----------|------|
| 달력 | `CalendarToday` | 날짜 옆 장식 |
| 위치 핀 | `LocationOn` | 장소(location) 앞 |
| 숙소 | `Hotel` | 숙소 정보 앞 |
| 정보 | `InfoOutlined` | note 앞 |
| 뒤로가기 | `ArrowBackIos` | 상세 화면 헤더 |
| 오늘 | `TodayOutlined` | 오늘 카드 강조 뱃지 |
| 비행기 | `FlightTakeoff` | 이동 일정(SF, 인천 포함 region) |

아이콘 크기: 기본 `18px`, 헤더 `22px`

---

### 버튼 스타일

#### 기본 버튼 (Primary)

| 상태 | 배경색 | 텍스트 색 | 테두리 |
|------|--------|-----------|--------|
| 기본 | `#00ACC1` | `#FFFFFF` | 없음 |
| 호버 | `#00838F` | `#FFFFFF` | 없음 |
| 활성(Pressed) | `#006064` | `#FFFFFF` | 없음 |
| 비활성 | `#E0F7FA` | `#94A3B8` | 없음 |

```
border-radius: 8px
padding: 10px 20px
font-size: 15px / font-weight: 600
transition: background-color 0.2s ease
```

#### 뒤로가기 버튼 (Icon Button)

| 상태 | 배경색 | 아이콘 색 |
|------|--------|-----------|
| 기본 | 투명 | `#0F172A` |
| 호버 | `#F1F5F9` | `#00ACC1` |

```
border-radius: 50%
padding: 8px
touch area: 44×44px
```

#### 카드 (탭 가능 영역)

| 상태 | 배경색 | 테두리 | 그림자 |
|------|--------|--------|--------|
| 기본 | `#FFFFFF` | `1px solid #E2E8F0` | `0 1px 3px rgba(0,0,0,0.08)` |
| 호버/탭 | `#F1F5F9` | `1px solid #00ACC1` | `0 4px 12px rgba(0,172,193,0.15)` |
| 오늘 강조 | `#E0F7FA` | `2px solid #00ACC1` | `0 4px 12px rgba(0,172,193,0.2)` |

```
border-radius: 12px
padding: 16px
margin-bottom: 12px
transition: box-shadow 0.2s, border-color 0.2s
```

---

## 와이어프레임 및 목업

### 화면 1 — 전체 일정 목록 (메인)

```
┌─────────────────────────┐  360px
│  ✈ 국외현장체험학습      │  ← 헤더 (bg: #00ACC1, text: white)
│     2025. 5. 11 ~ 5. 17 │
├─────────────────────────┤
│                         │
│ ┌─────────────────────┐ │
│ │ [Day 1]  5/11 일    │ │  ← 오늘 카드 (border: #00ACC1, bg: #E0F7FA)
│ │ 📍 대전  인천  SF   │ │    지역 칩
│ │ 12:00 집결 및 출국  │ │    대표 이벤트 미리보기
│ │ 저녁  호텔 체크인   │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ [Day 2]  5/12 월    │ │  ← 일반 카드
│ │ 📍 SF               │ │
│ │ 06:00 호텔 조식     │ │
│ │ 20:00 호텔 복귀     │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ [Day 3]  5/13 화    │ │
│ │ 📍 SF               │ │
│ │ 10:00 호텔 조식     │ │
│ │ 밤    호텔 휴식     │ │
│ └─────────────────────┘ │
│           ...           │
│                         │
└─────────────────────────┘
```

**컴포넌트 구성**
- `<AppHeader>` — 서비스 제목, 날짜 범위
- `<DayCard>` — 날짜, 지역 칩, 이벤트 미리보기, 오늘 강조 variant
- `<RegionChip>` — 지역명 칩

---

### 화면 2 — 일별 상세

```
┌─────────────────────────┐  360px
│ ← │ Day 3 · 5/13 화     │  ← 헤더 (뒤로가기 + 날짜)
├─────────────────────────┤
│ 📍 SF                   │  ← 지역 칩 row
│ 🏨 Crown Plaza Union    │  ← 숙소 (hotel 있을 경우)
├─────────────────────────┤
│                         │
│  10:00  ●───────────    │  ← 타임라인 시작
│         호텔 조식 후 출발 │
│         │               │
│  13:00  ●               │
│         Google 방문 및  │
│         Googleplex 견학 │
│         │               │
│  14:00  ●               │
│         Computer History│
│         Museum 관람     │
│         │               │
│  16:30  ●               │
│         Apple Visitor   │
│         Center 방문     │
│         │               │
│  17:30  ●               │
│         KIC SV 방문     │
│         │               │
│  18:00  ●               │
│         석식 및 자유시간 │
│         │               │
│  밤     ●               │
│         호텔 휴식       │  ← 타임라인 끝
│                         │
└─────────────────────────┘
```

**타임라인 스타일**
- 세로 선: `2px solid #E2E8F0`
- 점(●): `8px` 원형, 색상 `#00ACC1`
- 시간 컬럼 너비: `52px`, 우측 정렬, 색상 `#94A3B8`
- 이벤트 제목: `#0F172A`, 15px
- note: 이탤릭, `#94A3B8`, 12px, 제목 하단에 표시

**컴포넌트 구성**
- `<DetailHeader>` — 뒤로가기 버튼, Day 뱃지, 날짜
- `<RegionChip>` — 재사용
- `<HotelInfo>` — 숙소명 + Hotel 아이콘 (hotel 없으면 미렌더링)
- `<Timeline>` — 이벤트 목록 래퍼
- `<TimelineItem>` — 시간 + 제목 + note + location

---

### 화면 3 — 에러 상태

```
┌─────────────────────────┐
│  ✈ 국외현장체험학습      │
├─────────────────────────┤
│                         │
│         ⚠              │
│   일정을 불러올 수       │
│   없습니다              │
│                         │
│   [ 다시 시도 ]         │  ← Primary 버튼
│                         │
└─────────────────────────┘
```

---

## 스토리북 컴포넌트 시각화

Storybook을 통해 아래 컴포넌트와 화면을 독립적으로 개발·검수한다.

### 컴포넌트 스토리 목록

| 스토리 경로 | 컴포넌트 | 주요 args |
|-------------|----------|-----------|
| `UI/RegionChip` | `<RegionChip>` | `label`, `variant(primary\|default)` |
| `UI/DayBadge` | `<DayBadge>` | `day`, `isToday` |
| `UI/HotelInfo` | `<HotelInfo>` | `name` |
| `Card/DayCard` | `<DayCard>` | `schedule`, `isToday`, `onClick` |
| `Card/DayCard/Today` | `<DayCard>` | `isToday: true` |
| `Timeline/TimelineItem` | `<TimelineItem>` | `time`, `title`, `note`, `location` |
| `Timeline/TimelineItem/NoTime` | `<TimelineItem>` | `time: ""` |
| `Timeline/Timeline` | `<Timeline>` | `events` |
| `Screen/MainScreen` | 전체 목록 화면 | mock data 전체 |
| `Screen/DetailScreen` | 일별 상세 화면 | 단일 `DaySchedule` |
| `Screen/ErrorScreen` | 에러 화면 | `onRetry` |

### 스토리북 설정 방향

- **Viewport 애드온**: 기본 뷰포트를 `iPhone SE (375px)`로 고정
- **Backgrounds 애드온**: `#FFFFFF` (라이트) / `#0F172A` (다크) 토글
- **A11y 애드온**: 색상 대비 및 접근성 자동 검사
