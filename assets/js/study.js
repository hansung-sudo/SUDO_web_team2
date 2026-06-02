const studies = [
  {
    title: 'CS 기초 스터디',
    description: '운영체제, 네트워크, 자료구조 등 컴퓨터 과학의 핵심 개념을 함께 공부합니다.',
    category: 'CS 기초',
    is_active: true
  },
  {
    title: '코딩테스트 / 알고리즘 스터디',
    description: '코딩테스트 문제 풀이와 알고리즘 개념을 체계적으로 학습합니다.',
    category: '알고리즘',
    is_active: true
  },
  {
    title: '웹 개발 스터디',
    description: '프론트엔드와 백엔드 기술을 함께 배우고 실전 프로젝트를 진행합니다.',
    category: '웹 개발',
    is_active: true
  },
  {
    title: 'AI / 머신러닝 스터디',
    description: '인공지능과 머신러닝의 기초부터 최신 트렌드까지 심도 있게 탐구합니다.',
    category: 'AI / ML',
    is_active: true
  },
  {
    title: '데이터 사이언스 스터디',
    description: '데이터 분석, 시각화, 통계 등 데이터 사이언스 전반을 학습합니다.',
    category: '데이터',
    is_active: true
  },
  {
    title: '앱 개발 스터디',
    description: 'Android / iOS 앱 개발을 배우고 직접 앱을 만들어봅니다.',
    category: '앱 개발',
    is_active: true
  }
]

function loadStudies() {
  const grid = document.querySelector('.grid')
  if (!grid) return

  grid.innerHTML = ''

  studies.forEach(study => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
      <span class="card-category">${study.category}</span>
      <h3>${study.title}</h3>
      <p>${study.description}</p>
      <span class="card-badge">모집 중</span>
    `
    grid.appendChild(card)
  })
}

loadStudies()
