const map = L.map('map', {
  center: [36.5, 127.8],
  zoom: 7,
  scrollWheelZoom: true  // 스크롤로 확대/축소 안 됨
});

map.setMaxBounds([
  [34.0, 125.5],
  [39.6, 132.0]
]);

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
    note: "첫 100명산 도전, 법모랑 함께 등반"
  },
  {
    name: "주흘산",
    lat: 36.778068,
    lng: 128.106006,
    photo: "images/02.jpg",
    date: "2018-06-30",
    note: "주흘산 주봉 법모랑 같이 갔는데 많이 힘들어 함"
  },
  {
    name: "청량산",
    lat: 36.794336,
    lng: 128.908553,
    photo: "images/03.jpg",
    date: "2018-08-12",
    note: "본격 적으로 100명산 도전, 최병배 선생님과 처음 시작"
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
    note: "1일 2산행 도전(함백, 태백산)"
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
    note: "비가 많이 와서 산행에 어려움이 있었고 암자에서 배가 고파 눈치없게 떡을 많이 먹었다.ㅋ"
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
    note: "길을 잘못들어 헤메였으며, 날씨가 흐려 경치는 별로였음"
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
    name: "지리산 반야봉",
    lat: 36.984983,
    lng: 128.256754,
    photo: "images/13.jpg",
    date: "2018-11-04",
    note: "지리산 반야봉 등반 멀리서 보면 여자 가슴처럼 보여짐."
  },

  {
    name: "금수산",
    lat: 37.279994,
    lng: 128.596094,
    photo: "images/14.jpg",
    date: "2018-12-08",
    note: "올겨울 들어 가장 추웠지만 미세먼지 없는 화창한 날씨라 경치가 너무 좋았음."
  },


  {
    name: "팔공산",
    lat: 36.016377,
    lng: 128.694556,
    photo: "images/15.jpg",
    date: "2018-12-10",
    note: "대구 딸에게 갔다가 오는 길에 하늘공원으로 가서 쉽게 갔다 올 수 있었다 2시간 정도 소요"
  },


  {
    name: "청화산",
    lat: 36.603707,
    lng: 127.920357,
    photo: "images/16.jpg",
    date: "2018.12.22",
    note: "충북 괴산에 있는 청화산에 올랐다."
  },


  {
    name: "대야산",
    lat: 36.669121,
    lng: 127.929446,
    photo: "images/17.jpg",
    date: "2018.12.22",
    note: "용추계곡을 지나 피아골방향으로 올라가서 밀재로 내려왔음. 계곡을 보면서 걸으니 여름에 오고싶어 지네요"
  },


  {
    name: "도락산",
    lat: 36.856303,
    lng: 128.311325,
    photo: "images/18.jpg",
    date: "2019-01-19",
    note: "우암 송시열은 깨달음을 얻는 데는 나름데로 길이 있어야 하고 거기에는 또한 즐거움이 뒤따라야 한다 라는 뜻에서 산이름을 지었다고 합니다."
  },


  {
    name: "속리산",
    lat: 36.543193,
    lng: 127.870804,
    photo: "images/19.jpg",
    date: "2019-01-26",
    note: "천왕봉에 오르니 미세먼지도 적고 화창한 날싸라 즐겁게 산행을 하였음."
  },


  {
    name: "화왕산",
    lat: 35.547123,
    lng: 128.531684,
    photo: "images/20.jpg",
    date: "2019-02-09",
    note: "화왕산은 아내와 함께 온적이 있어 더 친근감이 가네요."
  },


  {
    name: "달마산",
    lat: 34.382578,
    lng: 126.585164,
    photo: "images/21.jpg",
    date: "2019-02-16",
    note: "달마산 달마봉 정상에 오르고 천년고찰 미황사에는 매화꽃이 피어 남도의 정취를 느낄 수 있었습니다."
  },


  {
    name: "두륜산",
    lat: 34.471914,
    lng: 126.637561,
    photo: "images/22.jpg",
    date: "2019-02-17",
    note: "두륜산 가련봉 정상에 올랐는데 겨울철에 남도의 산들이 너무 푸근하고 좋습니다."
  },


  {
    name: "백운산",
    lat: 37.279994,
    lng: 128.596094,
    photo: "images/101.jpg",
    date: "2022-08-21",
    note: "명산100 완등을 축하 합니다."
  },


  {
    name: "지리산",
    lat: 35.3634,
    lng: 127.7308,
    photo: "images/100.jpg",
    date: "2024-05-03",
    note: "봄꽃이 만개했던 날"
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