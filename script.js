const map = L.map('map').setView([36.5, 127.8], 7); // 대한민국 중심

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

 const mountains = [

 {
    name: "치악산",
    lat: 37.364995,
    lng: 128.055601,
    photo: "images/01.jpg",
    date: "2018-05-20",
    note: "첫 100명산 도전이며 친구 법모랑 함께 등반 했다. 여러가지 등산코스가 있지만 구룡사 쪽에서 등산을 시작한다면 계곡 쪽을 추천하고 싶다."
  },

{
    name: "주흘산",
    lat: 36.778068,
    lng: 128.106006,
    photo: "images/02.jpg",
    date: "2018-06-30",
    note: "소백산맥의 중심 주흘산을 담다. 주흘산은 조령산 포암산 월악산 등과 더불어 소백산맥의 중심을 이루며 높이 1108.4m로 산세가 아름답다."
  },
  {
    name: "청량산",
    lat: 36.794336,
    lng: 128.908553,
    photo: "images/03.jpg",
    date: "2018-08-12",
    note: "본격 적으로 100명산 도전 최병배 선생님과 처음 시작"
  },
  {
    name: "주왕산",
    lat: 36.38935,
    lng: 129.162394,
    photo: "images/04.jpg",
    date: "2018-08-15",
    note: "얼음둥둥 콩국수 먹었는데 맛이 별로 였음"
  },
  {
    name: "함백산",
    lat: 37.161181,
    lng: 128.917603,
    photo: "images/05.jpg",
    date: "2018-08-18",
    note: "1일 2산행 도전(함백 태백산)"
  },
  {
    name: "태백산",
    lat: 37.096379,
    lng: 128.916636,
    photo: "images/06.jpg",
    date: "2018-08-19",
    note: "당골광장-태백산-장군봉-부쇠봉-문수봉 약13km 5시간 소요됨"
  },
  {
    name: "오대산 비로봉",
    lat: 37.794591,
    lng: 128.543609,
    photo: "images/07.jpg",
    date: "2018-09-03",
    note: "겨울에 오대산 능선에 오르면 멋스러운 전나무와 고사목 아름다운 설경 등이 어우러져 겨울산의 신비로움을 느낄 수 있다."
  },
  {
    name: "오대산 노인봉",
    lat: 37.78251,
    lng: 128.639083,
    photo: "images/08.jpg",
    date: "2018-09-03",
    note: "왕복 8km 이지만 비교적 쉬운 산행이었음"
  },
  {
    name: "소백산",
    lat: 36.957437,
    lng: 128.484869,
    photo: "images/09.jpg",
    date: "2018-09-09",
    note: "나 혼자 비로봉 오름 경치가 너무 좋았음"
  },
  {
    name: "조령산",
    lat: 36.771456,
    lng: 128.044244,
    photo: "images/10.jpg",
    date: "2018-09-15",
    note: "길을 잘못들어 헤메였으며 날씨가 흐려 경치는 별로였음"
  },
  {
    name: "월악산",
    lat: 36.88608,
    lng: 128.105847,
    photo: "images/11.jpg",
    date: "2018-10-09",
    note: "마애봉-영봉-중봉-하봉 순으로 종주하였음 5시간 소요"
  },
  {
    name: "지리산 바래봉",
    lat: 35.421814,
    lng: 127.57632,
    photo: "images/12.jpg",
    date: "2018-11-03",
    note: "곧바로 쇄석산장으로 향함 황홀한 일몰을 보면 금연을 다짐함"
  },
  {
    name: "지리산 천왕봉",
    lat: 35.33691,
    lng: 127.730623,
    photo: "images/13.jpg",
    date: "2018-11-04",
    note: "지리산 천왕봉"
  },
  {
    name: "지리산 천왕봉",
    lat: 35.33692,
    lng: 127.730623,
    photo: "images/14.jpg",
    date: "2018-11-04",
    note: "지리산 천왕봉"
  },
  {
    name: "금수산",
    lat: 36.984983,
    lng: 128.256754,
    photo: "images/15.jpg",
    date: "2018-12-08",
    note: "올겨울 들어 가장 추웠지만 미세먼지 없는 화창한 날씨라 경치가 너무 좋았음"
  },
  {
    name: "팔공산",
    lat: 36.016377,
    lng: 128.694556,
    photo: "images/16.jpg",
    date: "2018-12-10",
    note: "대구 딸에게 갔다가 오는 길에 하늘공원으로 가서 쉽게 갔다 올 수 있었다 2시간 정도 소요"
  },
  {
    name: "청화산",
    lat: 36.603707,
    lng: 127.920357,
    photo: "images/17.jpg",
    date: "2018.12.22",
    note: "충북 괴산에 있는 청화산에 올랐다"
  },
  {
    name: "대야산",
    lat: 36.669121,
    lng: 127.929446,
    photo: "images/18.jpg",
    date: "2018.12.22",
    note: "용추계곡을 지나 피아골방향으로 올라가서 밀재로 내려왔음 계곡을 보면서 걸으니 여름에 오고싶어 지네요"
  },
  {
    name: "도락산",
    lat: 36.856303,
    lng: 128.311325,
    photo: "images/19.jpg",
    date: "2019-01-19",
    note: "우암 송시열은 깨달음을 얻는 데는 나름데로 길이 있어야 하고 거기에는 또한 즐거움이 뒤따라야 한다 라는 뜻에서 산이름을 지었다고 합니다"
  },
 {
    name: "속리산",
    lat: 36.543193,
    lng: 127.870804,
    photo: "images/20.jpg",
    date: "2019-01-26",
    note: "천왕봉에 오르니 미세먼지도 적고 화창한 날싸라 즐겁게 산행을 하였음"
  },
  {
    name: "화왕산",
    lat: 35.547123,
    lng: 128.531684,
    photo: "images/21.jpg",
    date: "2019-02-09",
    note: "화왕산은 아내와 함께 온적이 있어 더 친근감이 가네요"
  },
  {
    name: "달마산",
    lat: 34.382578,
    lng: 126.585164,
    photo: "images/22.jpg",
    date: "2019-02-16",
    note: "달마산 달마봉 정상에 오르고 천년고찰 미황사에는 매화꽃이 피어 남도의 정취를 느낄 수 있었습니다"
  },
  {
    name: "두륜산",
    lat: 34.471914,
    lng: 126.637561,
    photo: "images/23.jpg",
    date: "2019-02-17",
    note: "두륜산 가련봉 정상에 올랐는데 겨울철에 남도의 산들이 너무 푸근하고 좋습니다"
  },
 {
    name: "천관산",
    lat: 34.531669,
    lng: 126.919697,
    photo: "images/24.jpg",
    date: "2019-03-01",
    note: "천관산 인증신청 합니다"
  },
  {
    name: "팔영산",
    lat: 34.617153,
    lng: 127.436453,
    photo: "images/25.jpg",
    date: "2019-03-02",
    note: "팔영산 깃대봉 인증삿"
  },
  {
    name: "가야산",
    lat: 35.823577,
    lng: 128.120582,
    photo: "images/26.jpg",
    date: "2019-03-09",
    note: "날씨 맑고 미세먼지 양호함 즐거운 산행으로 마무리"
  },
  {
    name: "칠보산",
    lat: 36.740037,
    lng: 127.927891,
    photo: "images/27.jpg",
    date: "2019-03-11",
    note: "칠보산 인증샸 입니다"
  },
  {
    name: "태화산",
    lat: 37.117592,
    lng: 128.485383,
    photo: "images/28.jpg",
    date: "2019-03-24",
    note: "태화산 인증신청"
  },
  {
    name: "선운산",
    lat: 35.498586,
    lng: 126.569022,
    photo: "images/29.jpg",
    date: "2019-03-30",
    note: "고창 선운산 인증"
  },
  {
    name: "백암산",
    lat: 35.461286,
    lng: 126.868469,
    photo: "images/30.jpg",
    date: "2019-04-02",
    note: "백암산 상왕봉 인증신청."
  },


  {
    name: "내장산",
    lat: 35.47832,
    lng: 126.889075,
    photo: "images/31.jpg",
    date: "2019-04-03",
    note: "내장산 신선봉 입니다."
  },


  {
    name: "천성산",
    lat: 35.414873,
    lng: 129.122927,
    photo: "images/32.jpg",
    date: "2019-04-14",
    note: "양산 천성산 입니다."
  },
  {
    name: "황악산",
    lat: 36.118076,
    lng: 127.966822,
    photo: "images/33.jpg",
    date: "2019-05-12",
    note: "김천 황악산 입니다."
  },
  {
    name: "장안산",
    lat: 35.629213,
    lng: 127.595046,
    photo: "images/34.jpg",
    date: "2019-05-14",
    note: "새벽부터 전북 장수 장안산에 올랐다 이른 아침이라 안개가 짙다."
  },
 {
    name: "마이산",
    lat: 35.763584,
    lng: 127.396739,
    photo: "images/35.jpg",
    date: "2019-05-15",
    note: "아침일찍 마이산 산행을 마쳤습니다."
  },


  {
    name: "동악산",
    lat: 35.282,
    lng: 127.251925,
    photo: "images/36.jpg",
    date: "2019-05-25",
    note: "곡성 동악산 인증입니다."
  },


  {
    name: "지리산 반야봉",
    lat: 35.316596,
    lng: 127.569399,
    photo: "images/37.jpg",
    date: "2019-05-26",
    note: "노고단-반야봉 코스로 화창한 날씨라 기분이 좋습니다."
  },


  {
    name: "덕유산",
    lat: 35.859883,
    lng: 127.746321,
    photo: "images/38.jpg",
    date: "2019-06-06",
    note: "덕유산 인증 입니다."
  },


  {
    name: "운장산",
    lat: 35.911331,
    lng: 127.357646,
    photo: "images/39.jpg",
    date: "2019-06-23",
    note: "운장산 인증 입니다."
  },


  {
    name: "구봉산",
    lat: 35.92316,
    lng: 127.416524,
    photo: "images/40.jpg",
    date: "2019-06-23",
    note: "두륜산 가련봉 정상에 올랐는데 겨울철에 남도의 산들이 너무 푸근하고 좋습니다."
  },


  {
    name: "금오산 현월봉",
    lat: 36.091786,
    lng: 128.300225,
    photo: "images/41.jpg",
    date: "2019-07-17",
    note: "금오산 현월봉 인증 했어요."
  },


  {
    name: "설악산 대청봉",
    lat: 38.119062,
    lng: 128.465286,
    photo: "images/42.jpg",
    date: "2019-08-25",
    note: "설악산 대청봉 입니다."
  },


  {
    name: "방태산 주억봉",
    lat: 37.888115,
    lng: 128.390009,
    photo: "images/43.jpg",
    date: "2019-08-25",
    note: "방태산 주억봉 1444m 입니다."
  },

  {
    name: "계방산",
    lat: 37.728257,
    lng: 128.465416,
    photo: "images/44.jpg",
    date: "2019-09-29",
    note: "계방산 인증 입니다."
  },

  {
    name: "가리왕산",
    lat: 37.461642,
    lng: 128.563042,
    photo: "images/45.jpg",
    date: "2019-09-30",
    note: "가리왕산 인증입니다."
  },

  {
    name: "연인산",
    lat: 37.898784,
    lng: 127.414388,
    photo: "images/46.jpg",
    date: "2019-10-12",
    note: "가평군 연인산 입니다."
  },

  {
    name: "명지산",
    lat: 37.941532,
    lng: 127.432207,
    photo: "images/47.jpg",
    date: "2019-10-14",
    note: "명지산 입니다."
  },

  {
    name: "화악산",
    lat: 37.989347,
    lng: 127.498155,
    photo: "images/48.jpg",
    date: "2019-10-13",
    note: "가평 화악산 인증입니다."
  },

  {
    name: "구병산",
    lat: 36.469584,
    lng: 127.861734,
    photo: "images/49.jpg",
    date: "2019-11-10",
    note: "보은 구병산 입니다."
  },

  {
    name: "두타산",
    lat: 37.426639,
    lng: 129.004428,
    photo: "images/50.jpg",
    date: "2019-11-25",
    note: "삼척 두타산 인증"
  },

  {
    name: "용화산",
    lat: 38.038181,
    lng: 127.747992,
    photo: "images/51.jpg",
    date: "2019-11-30",
    note: "춘천 용화산 입니다."
  },

  {
    name: "오봉산",
    lat: 38.000049,
    lng: 127.807184,
    photo: "images/52.jpg",
    date: "2019-11-30",
    note: "춘천 오봉산 입니다."
  },

  {
    name: "가리산(홍천)",
    lat: 37.871378,
    lng: 127.956469,
    photo: "images/53.jpg",
    date: "2019-12-01",
    note: "홍천 가리산 입니다."
  },

  {
    name: "한라산 백록담",
    lat: 33.361009,
    lng: 126.535659,
    photo: "images/54.jpg",
    date: "2019-12-11",
    note: "제주 한라산 백록담 입니다."
  },


  {
    name: "월출산",
    lat: 34.766684,
    lng: 126.704081,
    photo: "images/55.jpg",
    date: "2020-02-01",
    note: "전남 영암군 월출산 입니다."
  },


  {
    name: "덕룡산",
    lat: 34.538568,
    lng: 126.699227,
    photo: "images/56.jpg",
    date: "2020-02-02",
    note: "전남 덕룡산 동봉 인증입니다."
  },


  {
    name: "도봉산",
    lat: 37.698506,
    lng: 127.015026,
    photo: "images/57.jpg",
    date: "2020-05-16",
    note: "서울 도봉산 신선대 정상 입니다."
  },


  {
    name: "북한산 백운대",
    lat: 37.658698,
    lng: 126.978272,
    photo: "images/58.jpg",
    date: "2020-05-16",
    note: "서울 성북구 북한산 백운대 정산입니다."
  },


  {
    name: "수락산",
    lat: 37.699173,
    lng: 127.081237,
    photo: "images/59.jpg",
    date: "2020-05-17",
    note: "서울 노원구 상계동 수락산 주봉 입니다."
  },


  {
    name: "천마산",
    lat: 37.680237,
    lng: 127.273314,
    photo: "images/60.jpg",
    date: "2020-05-17",
    note: "경기도 남양주시 천마산 정상입니다."
  },


  {
    name: "마니산(강화도)",
    lat: 37.615564,
    lng: 126.430025,
    photo: "images/61.jpg",
    date: "2020-08-15",
    note: "인천 강화군 마니산 정상입니다."
  },


  {
    name: "팔봉산",
    lat: 37.695984,
    lng: 127.697044,
    photo: "images/62.jpg",
    date: "2020-08-16",
    note: "강원 홍천군 팔봉산 정상입니다."
  },


  {
    name: "조계산",
    lat: 35.001299,
    lng: 127.31359,
    photo: "images/63.jpg",
    date: "2020-09-12",
    note: "전남 순천시 조계산 정상입니다."
  },


  {
    name: "백운산(광양)",
    lat: 35.106372,
    lng: 127.621344,
    photo: "images/64.jpg",
    date: "2020-09-13",
    note: "전남 광양시 백운산 정상입니다."
  },


  {
    name: "감악산(원주)",
    lat: 37.229681,
    lng: 128.141768,
    photo: "images/65.jpg",
    date: "2020-09-21",
    note: "강원도 원주시 감악산 정상입니다."
  },


  {
    name: "재약산",
    lat: 35.545386,
    lng: 128.980541,
    photo: "images/66.jpg",
    date: "2020-10-06",
    note: "경남 밀양시 재약산 정상입니다."
  },


  {
    name: "운악산",
    lat: 37.878689,
    lng: 127.322899,
    photo: "images/67.jpg",
    date: "2020-10-11",
    note: "경기도 운악산 정상입니다."
  },


  {
    name: "삼악산",
    lat: 37.839782,
    lng: 127.660429,
    photo: "images/68.jpg",
    date: "2020-10-11",
    note: "강원 춘천시 삼악산 정상입니다."
  },


  {
    name: "광덕산",
    lat: 36.687811,
    lng: 127.027875,
    photo: "images/69.jpg",
    date: "2020-10-17",
    note: "충남 천안시 광덕산 정상입니다."
  },


  {
    name: "응봉산",
    lat: 37.076589,
    lng: 129.230517,
    photo: "images/70.jpg",
    date: "2021-01-30",
    note: "울진 응봉산 정상입니다."
  },


  {
    name: "비슬산",
    lat: 35.715453,
    lng: 128.523791,
    photo: "images/71.jpg",
    date: "2021-02-07",
    note: "대구 달성군 비슬산 정상입니다."
  },


  {
    name: "덕항산",
    lat: 37.309148,
    lng: 129.012521,
    photo: "images/72.jpg",
    date: "2021-02-20",
    note: "강원도 삼척시 덕항산 정상입니다."
  },


  {
    name: "남산",
    lat: 35.788446,
    lng: 129.222876,
    photo: "images/73.jpg",
    date: "2021-03-06",
    note: "경주 남산 정상입니다."
  },


  {
    name: "금정산",
    lat: 35.280139,
    lng: 129.050583,
    photo: "images/74.jpg",
    date: "2021-03-06",
    note: "경남 양산시 금정산 정상입니다."
  },


  {
    name: "내연산",
    lat: 36.278644,
    lng: 129.289861,
    photo: "images/75.jpg",
    date: "2021-03-07",
    note: "경북 영덕군 내연산 정상입니다."
  },


  {
    name: "황석산",
    lat: 35.655174,
    lng: 127.755471,
    photo: "images/76.jpg",
    date: "2021-05-22",
    note: "경남 함양군 황석산 정상입니다."
  },


  {
    name: "황매산",
    lat: 35.494066,
    lng: 127.974609,
    photo: "images/77.jpg",
    date: "2021-05-23",
    note: "경남 합천군 황매산 정상입니다."
  },


  {
    name: "대둔산",
    lat: 36.124589,
    lng: 127.320472,
    photo: "images/78.jpg",
    date: "2021-06-05",
    note: "충남 논산군 대둔산 정상입니다."
  },


  {
    name: "계룡산",
    lat: 36.352011,
    lng: 127.200346,
    photo: "images/79.jpg",
    date: "2021-06-05",
    note: "충남 공주시 계룡산 정상입니다."
  },


  {
    name: "칠갑산",
    lat: 36.413035,
    lng: 126.884918,
    photo: "images/80.jpg",
    date: "2021-06-06",
    note: "충남 청양군 칠갑산 정상입니다."
  },


  {
    name: "오서산",
    lat: 36.458367,
    lng: 126.659331,
    photo: "images/81.jpg",
    date: "2021-06-06",
    note: "충남 홍성군 오서산 정상입니다."
  },

  {
    name: "무등산",
    lat: 35.121830,
    lng: 127.002832,
    photo: "images/82.jpg",
    date: "2021-09-04",
    note: "광주시 동구 무등산 정상입니다."
  },


  {
    name: "불갑산",
    lat: 35.19074,
    lng: 126.565029,
    photo: "images/83.jpg",
    date: "2021-09-04",
    note: "전남 영광군 불갑산 정상입니다."
  },
  {
    name: "축령산",
    lat: 35.370958,
    lng: 126.726042,
    photo: "images/84.jpg",
    date: "2021-09-05",
    note: "전남 장성군 축령산 정상입니다."
  },
  {
    name: "방장산",
    lat: 35.455635,
    lng: 126.754379,
    photo: "images/85.jpg",
    date: "2021-09-05",
    note: "전남 장성군 방장산 정상입니다."
  },
  {
    name: "모악산",
    lat: 35.728588,
    lng: 127.08524,
    photo: "images/86.jpg",
    date: "2021-10-02",
    note: "전북 완주군 모악산 정상입니다."
  },
  {
    name: "내변산(변산)",
    lat: 35.623238,
    lng: 126.582396,
    photo: "images/87.jpg",
    date: "2021-10-02",
    note: "전북 부안 변산 정상입니다."
  },
  {
    name: "가야산(충남)",
    lat: 36.706541,
    lng: 126.608205,
    photo: "images/88.jpg",
    date: "2021-10-03",
    note: "충남 예산군 가야산 정상입니다."
  },
  {
    name: "용봉산",
    lat: 36.643662,
    lng: 126.64925,
    photo: "images/89.jpg",
    date: "2021-10-03",
    note: "충남 홍성군 용봉산 정상입니다."
  },
  {
    name: "청계산",
    lat: 37.427998,
    lng: 127.043578,
    photo: "images/90.jpg",
    date: "2021-10-30",
    note: "서울 서초구 청계산 정상입니다."
  },
  {
    name: "관악산",
    lat: 37.444935,
    lng: 126.964317,
    photo: "images/91.jpg",
    date: "2021-10-30",
    note: "서울 관악구 관악산 정상입니다."
  },
  {
    name: "감악산(파주)",
    lat: 37.941077,
    lng: 126.969883,
    photo: "images/92.jpg",
    date: "2021-10-31",
    note: "경기도 파주시 감악산 정상입니다."
  },
  {
    name: "소요산",
    lat: 37.938513,
    lng: 127.08791,
    photo: "images/93.jpg",
    date: "2021-10-31",
    note: "경기도 동두천시 소요산 정상입니다."
  },
  {
    name: "용문산",
    lat: 37.56215,
    lng: 127.548597,
    photo: "images/94.jpg",
    date: "2022-04-02",
    note: "경기도 양평 용문산 정상입니다."
  },
  {
    name: "유명산",
    lat: 37.575283,
    lng: 127.486572,
    photo: "images/95.jpg",
    date: "2022-04-03",
    note: "경기도 가평군 유명산 정상입니다."
  },
  {
    name: "가지산",
    lat: 35.619684,
    lng: 129.002975,
    photo: "images/96.jpg",
    date: "2022-04-23",
    note: "울산 울주군 가지산 정상입니다."
  },
  {
    name: "신불산",
    lat: 35.539361,
    lng: 129.054111,
    photo: "images/97.jpg",
    date: "2022-04-24",
    note: "울산 울주군 신불산 정상입니다."
  },
  {
    name: "천태산",
    lat: 36.159169,
    lng: 127.6001,
    photo: "images/98.jpg",
    date: "2022-06-11",
    note: "충북 영동군 천태산 정상입니다."
  },
  {
    name: "민주지산",
    lat: 36.039956,
    lng: 127.849098,
    photo: "images/99.jpg",
    date: "2022-06-12",
    note: "충북 영동군 민주지산 정상입니다."
  },
  {
    name: "백덕산",
    lat: 37.396431,
    lng: 128.2935,
    photo: "images/100.jpg",
    date: "2022-08-20",
    note: "강원도 영월 백덕산 정상입니다."
  },

   {
    name: "백운산",
    lat: 37.279994,
    lng: 128.596094,
    photo: "images/101.jpg",
    date: "2022-08-21",
    note: "명산100 완등을 축하 합니다."
  }
];

mountains.forEach(mountain => {
  const marker = L.marker([mountain.lat, mountain.lng])
    .addTo(map)
    .bindTooltip(mountain.name, {
      permanent: false,     // 마우스 올렸을 때만 보이게
      direction: "top"      // 툴팁 위치 (위쪽)
    });

  marker.on('click', () => {
    document.getElementById('photo').src = mountain.photo;
    document.getElementById('mountain-name').textContent = `산 이름: ${mountain.name}`;
    document.getElementById('date').textContent = `등반 날짜: ${mountain.date}`;
    document.getElementById('note').textContent = `메모: ${mountain.note}`;
  });
});