# SUDO 웹사이트 — 한성대학교 AI/IT 소모임

한성대학교 AI/IT 소모임 SUDO의 공식 웹사이트 제작 프로젝트입니다.

---

## 🛠 기술 스택

| 역할 | 기술 |
|---|---|
| 프론트엔드 | HTML / CSS / JavaScript |
| 데이터베이스 | Supabase (PostgreSQL) |
| 신청 폼 | Google Forms |
| 배포 | Netlify |
| 협업 | GitHub |

---

## 📁 폴더 구조

```
├── index.html              # 메인 화면
├── pages/
│   ├── study.html          # 스터디 소개 페이지
│   ├── album.html          # 활동 앨범 페이지
│   └── apply.html          # 지원하기 페이지 (구글 폼 연동)
├── assets/
│   ├── css/
│   │   └── style.css       # 공통 스타일
│   ├── js/
│   │   ├── main.js         # 메인 화면 스크립트
│   │   ├── study.js        # 스터디 소개 스크립트
│   │   ├── album.js        # 활동 앨범 스크립트
│   │   ├── apply.js        # 지원하기 스크립트
│   │   └── supabase.js     # Supabase 클라이언트 설정
│   └── images/             # 이미지 파일
└── README.md
```

---

## 👥 역할 분담

| 이름 | 파트 | 담당 파일 |
|---|---|---|
| 팀장 | PM / 레포 관리 | README, 머지 관리 |
| 팀원 1 | 프론트엔드 A | index.html, style.css |
| 팀원 2 | 프론트엔드 B | study.html, album.html |
| 팀원 3 | 백엔드 A | Supabase DB 설계 |
| 팀원 4 | 백엔드 B | supabase.js, API 연동 |
| 팀원 5 | 구글 폼 연동 | apply.html, apply.js |
| 팀원 6 | 배포 / QA | Netlify 배포, 테스트 |

---

## 🌿 브랜치 전략

```
main          ← 최종 배포용 (직접 push 금지)
└── dev       ← 통합 브랜치
    ├── feature/frontend-main
    ├── feature/frontend-pages
    ├── feature/backend-db
    ├── feature/backend-api
    ├── feature/apply-form
    └── feature/deploy
```

- 작업은 반드시 본인 브랜치에서 진행
- 완료 후 `dev` 브랜치로 PR 생성
- 팀장이 코드 리뷰 후 머지

---

## 🚀 개발 시작하는 법

```bash
# 1. 레포 클론
git clone https://github.com/hansung-sudo/SUDO_web_team2.git

# 2. 본인 브랜치 생성
git checkout -b feature/본인파트

# 3. 작업 후 커밋
git add .
git commit -m "feat: 작업 내용 간단히 설명"

# 4. 푸시
git push origin feature/본인파트

# 5. GitHub에서 dev 브랜치로 PR 생성
```

---

## 📋 커밋 메시지 규칙

| 태그 | 설명 |
|---|---|
| `feat:` | 새 기능 추가 |
| `fix:` | 버그 수정 |
| `style:` | CSS/디자인 수정 |
| `docs:` | README 등 문서 수정 |
| `refactor:` | 코드 리팩토링 |

---

## 📌 주요 기능

- [ ] 메인 화면
- [ ] 스터디 소개 페이지
- [ ] 활동 앨범 페이지
- [ ] 지원하기 (구글 폼 연동)
- [ ] Supabase DB 연동
- [ ] Netlify 배포
