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

| 이름 | 파트 | 담당 업무 |
|---|---|---|
| (팀장) | PM / 레포 관리 | 일정 관리, 머지 관리 |
| (팀원 1) | 프론트엔드 A | 메인 화면 (index.html, style.css) |
| (팀원 2) | 프론트엔드 B | 스터디 소개 + 활동 앨범 페이지 |
| (팀원 3) | 백엔드 A | Supabase DB 테이블 설계 |
| (팀원 4) | 백엔드 B | Supabase API 연동 (supabase.js) |
| (팀원 5) | 구글 폼 연동 | 지원하기 페이지 (apply.html) |
| (팀원 6) | 배포 / QA | Netlify 배포 + 전체 테스트 |
| (팀원 7) | 발표 / 문서 | 발표자료 제작 + 발표 |

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

## ⏰ 개발 일정

| 일차 | 내용 |
|---|---|
| 1일차 | 역할 확정, 브랜치 생성, 환경 세팅 |
| 2~3일차 | 각자 담당 파트 개발 |
| 4~5일차 | 기능 통합, PR 머지, 버그 수정 |
| 6일차 | Netlify 배포, 최종 테스트 |
| 7일차 | 발표자료 마무리, 최종 점검 |

---

## 📌 주요 기능

- [ ] 메인 화면
- [ ] 스터디 소개 페이지
- [ ] 활동 앨범 페이지
- [ ] 지원하기 (구글 폼 연동)
- [ ] Supabase DB 연동
- [ ] Netlify 배포

## 권한 구조

- auth.users : Supabase 인증 사용자
- admins : 관리자 권한 사용자
- albums, studies, notices는 관리자만 생성 가능