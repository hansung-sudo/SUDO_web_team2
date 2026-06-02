const albums = [
  {
    title: 'SUDO 활동',
    description: '한성대학교 AI/IT 소모임 SUDO 활동 사진입니다.',
    image_url: '../assets/images/KakaoTalk_20260602_170200715.png',
    activity_date: '2026.06.02'
  },
  {
    title: 'SUDO 활동',
    description: '한성대학교 AI/IT 소모임 SUDO 활동 사진입니다.',
    image_url: '../assets/images/KakaoTalk_20260602_170249142.png',
    activity_date: '2026.06.02'
  },
  {
    title: 'SUDO 활동',
    description: '한성대학교 AI/IT 소모임 SUDO 활동 사진입니다.',
    image_url: '../assets/images/KakaoTalk_20260602_170337098.png',
    activity_date: '2026.06.02'
  },
  {
    title: 'SUDO 활동',
    description: '한성대학교 AI/IT 소모임 SUDO 활동 사진입니다.',
    image_url: '../assets/images/KakaoTalk_20260602_170438215.jpg',
    activity_date: '2026.06.02'
  },
  {
    title: 'SUDO 활동',
    description: '한성대학교 AI/IT 소모임 SUDO 활동 사진입니다.',
    image_url: '../assets/images/KakaoTalk_20260602_170438215_01.jpg',
    activity_date: '2026.06.02'
  }
]

function loadAlbums() {
  const grid = document.querySelector('.album-grid')
  if (!grid) return

  grid.innerHTML = ''

  albums.forEach(album => {
    const card = document.createElement('div')
    card.className = 'album-card'
    card.innerHTML = `
      <img src="${album.image_url}" alt="${album.title}" />
      <div class="album-info">
        <h3>${album.title}</h3>
        <p>${album.description}</p>
        <div class="album-date">${album.activity_date}</div>
      </div>
    `
    grid.appendChild(card)
  })
}

loadAlbums()
