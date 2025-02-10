# 📖 웨스트민스터 소요리 문답 앱

웨스트민스터 소요리 문답(107문)을 **더 쉽게 탐색하고 학습**할 수 있도록 제작된 **React 기반의 웹 애플리케이션**입니다.  
사용자는 검색 기능, 목차 네비게이션, 페이지네이션을 활용하여 원하는 문답을 편리하게 확인할 수 있습니다.

---

## 🚀 주요 기능

### 📌 **문답 탐색 및 검색**
- **전체 107문**을 **10개씩 페이지네이션**하여 가독성 향상
- **검색 기능**을 통해 원하는 질문을 빠르게 찾기 가능
- **목차(TOC) 모달**을 통해 특정 문항으로 즉시 이동 가능

### 📌 **향상된 UI/UX**
- **Glassmorphism & Neumorphism** 스타일 적용
- **다크 모드 최적화** (사용자 환경에 맞는 자동 컬러 적용)
- **부드러운 애니메이션 및 인터랙션** (3D 효과, 모달 트랜지션)

### 📌 **페이지네이션 & 자동 스크롤**
- 한 페이지당 **10개 문답 표시**
- "이전 / 다음" 버튼을 이용한 페이지 이동
- **목차에서 특정 문항을 선택하면 해당 페이지로 자동 이동 후 스크롤**

### 📌 **반응형 디자인**
- **모바일 및 데스크톱 완벽 대응**
- **목차 및 검색 UI 최적화** (모바일에서는 화면 크기에 맞게 조정)
- **맞춤형 커스텀 스크롤바 적용**

---

## ⚙️ 기술 스택

### 📌 **프론트엔드**
- **React** + **Vite** → 빠르고 최적화된 환경
- **React Hooks** → `useState`, `useEffect`, `useRef`, `useImperativeHandle` 사용
- **CSS3** → Glassmorphism & Neumorphism 스타일 적용
- **Tailwind-like Custom CSS Variables** → 일관된 스타일링
- **Heroicons** → UI 아이콘 사용 (`@heroicons/react/24/solid`)

### 📌 **데이터 관리**
- **JSON 기반 데이터 관리** (`public/data/`)
- **Custom Hook (`useCatechismData`)** → 데이터 불러오기 및 상태 관리
- **Fetch API** → JSON 파일 로드 및 상태 업데이트

### 📌 **최적화 및 접근성**
- **React.memo** → 불필요한 리렌더링 방지
- **ARIA 속성 및 키보드 네비게이션** 적용
- **Debounce 기능 적용** (검색 성능 최적화)

---

## 📥 설치 및 실행 방법

### 1️⃣ **프로젝트 클론**
```bash
git clone https://github.com/your-username/westminster-catechism-app.git
cd westminster-catechism-app

2️⃣ 의존성 설치
npm install
# 또는
yarn install

3️⃣ 개발 서버 실행
npm run dev
# 또는
yarn dev