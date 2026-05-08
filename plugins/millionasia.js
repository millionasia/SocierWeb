const groupActivityImages = [
  'https://images.pexels.com/photos/7648476/pexels-photo-7648476.jpeg?auto=compress&cs=tinysrgb&w=900&h=620&fit=crop',
  'https://images.pexels.com/photos/7648045/pexels-photo-7648045.jpeg?auto=compress&cs=tinysrgb&w=900&h=620&fit=crop',
  'https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=900&h=620&fit=crop',
  'https://images.pexels.com/photos/7647934/pexels-photo-7647934.jpeg?auto=compress&cs=tinysrgb&w=900&h=620&fit=crop',
  'https://images.pexels.com/photos/7648050/pexels-photo-7648050.jpeg?auto=compress&cs=tinysrgb&w=900&h=620&fit=crop',
  'https://images.pexels.com/photos/8761345/pexels-photo-8761345.jpeg?auto=compress&cs=tinysrgb&w=900&h=620&fit=crop',
  'https://images.pexels.com/photos/8761348/pexels-photo-8761348.jpeg?auto=compress&cs=tinysrgb&w=900&h=620&fit=crop',
  'https://images.pexels.com/photos/6950184/pexels-photo-6950184.jpeg?auto=compress&cs=tinysrgb&w=900&h=620&fit=crop',
  'https://images.pexels.com/photos/7648052/pexels-photo-7648052.jpeg?auto=compress&cs=tinysrgb&w=900&h=620&fit=crop',
  'https://images.pexels.com/photos/8761547/pexels-photo-8761547.jpeg?auto=compress&cs=tinysrgb&w=900&h=620&fit=crop',
  'https://images.pexels.com/photos/7648474/pexels-photo-7648474.jpeg?auto=compress&cs=tinysrgb&w=900&h=620&fit=crop'
]

const newsSeeds = [
  ['2026-05-01', '三創協會春季研討會圓滿落幕', '會員與產業夥伴齊聚交流，聚焦城市創新與數位應用。'],
  ['2026-04-25', '數位轉型專案啟動公告', '協會將啟動系列輔導與工作坊，協助會員掌握 AI 與雲端工具。'],
  ['2026-04-20', '招募新進會員：共創智慧未來', '歡迎跨域夥伴加入三創協會，一起拓展產業合作與交流網絡。'],
  ['2026-04-12', '會員產業參訪成果分享', '透過企業現場參訪，促進會員理解產業轉型與服務創新。'],
  ['2026-04-05', '三創青年培力計畫開放報名', '邀請青年團隊參與提案訓練，培養跨域合作與專案執行能力。'],
  ['2026-03-28', '智慧城市交流圓桌紀錄發布', '彙整專家與會員觀點，作為後續倡議與合作專案參考。'],
  ['2026-03-18', '協會服務平台改版預告', '新版網站將強化消息、活動、花絮與會員服務資訊的整合。'],
  ['2026-03-08', '跨域共創小聚活動紀要', '不同領域會員分享實務經驗，激盪合作提案與後續交流。'],
  ['2026-02-24', '年度會員服務調查啟動', '邀請會員提供意見，協助協會優化活動規劃與服務內容。'],
  ['2026-02-10', '三創協會新春交流會花絮上線', '回顧新春交流會精彩片段，延續會員間的合作動能。'],
  ['2026-01-28', '創新服務案例募集公告', '邀請會員提交創新服務案例，作為年度成果展示內容。'],
  ['2026-01-18', '會員專屬資源包更新', '新增活動簡報、政策資訊與數位工具清單，提供會員下載參考。'],
  ['2026-01-08', '三創協會年度計畫說明', '公布年度活動方向與重點議題，邀請會員共同參與推動。'],
  ['2025-12-22', '跨協會策略合作備忘錄簽署', '協會與產業夥伴建立合作機制，擴大資源串聯與服務範圍。'],
  ['2025-12-08', '會員成果故事專欄啟動', '以專欄形式記錄會員實踐案例，增加社群能見度與交流機會。']
]

const eventSeeds = [
  ['2026-06-15', '【講座】AI 驅動的商業革命', '邀請業界講者分享 AI 導入場景與企業轉型策略。'],
  ['2026-07-01', '年度理監事改選大會', '辦理年度會員大會與理監事改選，凝聚協會治理共識。'],
  ['2026-08-10', '夏季會員聯誼交流賽', '透過輕鬆互動活動，促進會員彼此認識與跨域合作。'],
  ['2026-08-26', '智慧製造趨勢分享會', '聚焦智慧製造、資料治理與 AI 生產力應用案例。'],
  ['2026-09-12', '三創會員共創工作坊', '以議題分組方式共同發想協會服務與產業合作提案。'],
  ['2026-09-30', '企業參訪：數位服務創新', '安排會員參訪數位服務企業，交流產品與營運經驗。'],
  ['2026-10-18', '品牌經營與社群溝通講座', '協助會員掌握品牌定位、內容策略與社群經營方法。'],
  ['2026-11-05', '城市創新提案交流會', '邀請會員提出城市創新觀點，媒合可能合作夥伴。'],
  ['2026-11-22', '年度成果展示暨交流晚會', '展示年度專案成果，並促進會員、顧問與合作單位交流。'],
  ['2026-12-12', '三創協會歲末會員大會', '回顧年度成果、說明來年計畫，凝聚會員共同參與。'],
  ['2027-01-09', '新春創業趨勢早餐會', '以早餐交流形式分享新年度創業與投資趨勢。'],
  ['2027-01-28', '會員品牌診斷工作坊', '協助會員檢視品牌定位、受眾溝通與服務價值主張。'],
  ['2027-02-14', '青年創新團隊媒合日', '邀請青年團隊與企業會員進行短講、展示與合作媒合。'],
  ['2027-03-03', 'ESG 與永續創新論壇', '聚焦 ESG 實務、永續策略與中小企業轉型資源。'],
  ['2027-03-21', 'AI 工具實戰小班課', '以小班實作方式帶領會員導入 AI 生產力工具。'],
  ['2027-04-11', '跨境商機交流茶會', '分享海外市場資訊與跨境服務案例，促進會員合作。'],
  ['2027-05-06', '年度城市共創論壇', '邀請產官學研代表共同討論城市創新與產業合作議題。']
]

const directorAvatars = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/men/52.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/61.jpg',
  'https://randomuser.me/api/portraits/men/41.jpg',
  'https://randomuser.me/api/portraits/men/46.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/71.jpg',
  'https://randomuser.me/api/portraits/men/84.jpg',
  'https://randomuser.me/api/portraits/women/50.jpg',
  'https://randomuser.me/api/portraits/men/22.jpg',
  'https://randomuser.me/api/portraits/women/76.jpg',
  'https://randomuser.me/api/portraits/women/65.jpg',
  'https://randomuser.me/api/portraits/women/81.jpg',
  'https://randomuser.me/api/portraits/men/57.jpg',
  'https://randomuser.me/api/portraits/men/36.jpg',
  'https://randomuser.me/api/portraits/men/79.jpg',
  'https://randomuser.me/api/portraits/men/64.jpg',
  'https://randomuser.me/api/portraits/men/88.jpg'
]

class MillionasiaCore {
  constructor() {
    this.associationName = '社團法人臺北市三創協會'
    this.englishName = 'Taipei Socier Association.'
    this.brandLink = 'https://www.millionasia.com'
    this.powerBrand = 'AgileWeb'

    this.navigation = [
      { label: '首頁', to: '/' },
      { label: '協會介紹', to: '/about' },
      { label: '協會理監事', to: '/directors' },
      { label: '最新消息', to: '/news' },
      { label: '活動公告', to: '/events' },
      { label: '花絮留影', to: '/gallery' }
    ]

    this.introduction = {
      title: '促進產業交流與創新合作的民間團體',
      summary:
        '社團法人臺北市三創協會以會員交流、知識分享與跨域合作為主要服務方向，協助會員掌握產業趨勢並建立穩定的合作網絡。',
      paragraphs: [
        '社團法人臺北市三創協會為依法設立之民間社團組織，服務對象包含企業經營者、專業工作者、創新服務團隊與關心城市發展及產業轉型之個人。',
        '協會關注創新、創業與創價等議題，但不限定於單一產業或技術領域。面對數位轉型、AI 應用、品牌經營、永續發展與組織治理等變化，協會希望以中立、開放的方式整理資訊、邀請專家分享。',
        '在會務推動上，協會重視會員參與、資訊透明與穩健運作。各項活動以促進交流與累積實務經驗為目標，並視會員需求逐步擴充服務內容。'
      ],
      highlights: ['會員交流', '知識分享', '產業參訪', '資源媒合'],
      principles: [
        '以會員需求作為活動規劃的重要依據。',
        '以中性方式提供資訊與交流機會。',
        '鼓勵不同領域會員建立長期合作關係。',
        '逐步累積協會資料、活動紀錄與服務流程。'
      ]
    }

    this.directors = [
      ['理事長', '陳智權'], ['常務理事', '王金山'], ['常務理事', '江耀國'], ['常務理事', '張淑卿'], ['常務理事', '吳宗寶'],
      ['理事', '蔡榮根'], ['理事', '許英昌'], ['理事', '林秀玲'], ['理事', '黃國煌'], ['理事', '賴調元'],
      ['理事', '鄧傳馨'], ['理事', '吳垣'], ['理事', '饒瑞瑛'], ['理事', '鄭玉梅'], ['理事', '李麗鶴'],
      ['常務監事', '郭宗銘'], ['監事', '張漢卿'], ['監事', '黃建中'], ['監事', '陳明聰'], ['監事', '張文侯']
    ].map(([title, name], index) => ({
      id: index + 1,
      title,
      name,
      avatar: directorAvatars[index]
    }))

    this.news = newsSeeds.map(([date, title, summary], index) => ({
      id: index + 1,
      date,
      title,
      summary,
      image: groupActivityImages[index % groupActivityImages.length],
      content: [
        `${summary} 本消息提供會員與訪客了解協會近期工作進度，內容可作為後續活動參與、資料查詢或會務聯繫的參考。`,
        '協會將依照實際辦理情形持續更新相關資訊，包含活動成果、參與方式、後續服務與可公開之紀錄。若會員對此項內容有進一步需求，可透過協會既有聯絡窗口洽詢。',
        '本頁目前為快速原型示意內容，未來可串接後台管理系統，支援完整文章編輯、附件上傳、分類標籤與發布狀態管理。'
      ],
      related: ['會員服務', '產業交流', '會務公告'][index % 3]
    }))

    this.events = eventSeeds.map(([date, title, summary], index) => ({
      id: index + 1,
      date,
      title,
      summary,
      image: groupActivityImages[(index + 3) % groupActivityImages.length],
      time: index % 2 === 0 ? '14:00 - 16:30' : '09:30 - 12:00',
      location: ['臺北市產業交流中心', '三創協會會議室', '會員企業示範場域'][index % 3],
      audience: ['協會會員', '產業夥伴', '對主題有興趣之來賓'],
      agenda: [
        '來賓報到與交流',
        '主題分享與案例說明',
        '會員提問與綜合討論',
        '會後交流與後續媒合'
      ],
      content: [
        `${summary} 活動規劃以實務交流為主，協助參與者在有限時間內掌握主題背景、案例經驗與可能的合作方向。`,
        '活動當日將安排主題說明、案例分享與交流討論，並視現場狀況保留彈性時間，讓會員能針對自身需求提出問題或分享經驗。',
        '本頁為快速原型示意內容，後續可加入線上報名、名額限制、講者介紹、活動附件與報到通知等功能。'
      ]
    }))

    this.heroImage = {
      url: 'https://images.pexels.com/photos/8761324/pexels-photo-8761324.jpeg?auto=compress&cs=tinysrgb&w=1920&h=980&fit=crop',
      title: '多人參與研討活動'
    }

    this.allPhotos = Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      url: groupActivityImages[index % groupActivityImages.length].replace('w=900&h=620', 'w=1000&h=760'),
      title: `活動花絮 ${index + 1}`,
      description: [
        '會員於活動現場進行交流，分享近期專案與合作需求。',
        '講者與參與者互動討論，整理主題重點與後續可行方向。',
        '工作坊分組討論過程，呈現跨領域協作與共同發想。',
        '會後交流時段，會員延伸討論合作可能與資源需求。'
      ][index % 4]
    }))
  }

  getRandomHighlights() {
    return [...this.allPhotos].sort(() => 0.5 - Math.random()).slice(0, 10)
  }

  getFooterNotice() {
    return `${this.associationName} 版權所有`
  }

  findNews(id) {
    return this.news.find((item) => item.id === Number(id))
  }

  findEvent(id) {
    return this.events.find((item) => item.id === Number(id))
  }

  getAdjacent(collection, id) {
    const index = collection.findIndex((item) => item.id === Number(id))
    return {
      previous: index > 0 ? collection[index - 1] : null,
      next: index >= 0 && index < collection.length - 1 ? collection[index + 1] : null
    }
  }
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      millionasia: new MillionasiaCore()
    }
  }
})
