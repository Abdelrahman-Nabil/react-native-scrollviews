import Constants from '../../assets/constants'

delayedPromise = (ms, value) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms);
  });
}
getData = (orderBy, filterBy, callback) => {
  // a call to the API here

  fetch(`example.com?orderBy=${orderBy}&filterBy=${filterBy}`, {
			headers: {/*request headers*/},
      method: 'GET'
		})
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				callback(data)
			})
			.catch((exception) => {
				callback(exception)
			})
}
const USE_REAL_API = false; // change to `true` when needed

shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
export const loadActions = (source) => async dispatch => {
  let payload = null
  if(USE_REAL_API){
    payload = await getData()
  }
  else{
    payload = await delayedPromise(500, [
      {  "key": 0,
      "url": "https://i.imgur.com/CIPKVJo.jpg",
      "description":"Stunning!",
      "translation": "مذهل!"
    },
    {  "key": 1,
      "url": "https://i.imgur.com/CchNQmg.jpg",
      "description":"Art",
      "translation": "فن"
    },
    {  "key": 2,
      "url": "https://i.imgur.com/vNrFIg6.jpg",
      "description":"Wow!",
      "translation": "واو!"

    },
    {  "key": 3,
      "url": "https://i.imgur.com/3uLDVHh.jpg",
      "description":"Escape yourself",
      "translation": "اهرب من نفسك!"

    },
    {  "key": 4,
      "url": "https://i.imgur.com/aYgRAWz.jpg",
      "description":"RUN!",
      "translation": "اهرب!"

    },
    {  "key": 5,
      "url": "https://i.imgur.com/Qu76vgH.jpg",
      "description":"Free",
      "translation": "الحرية"

    },
    {  "key": 6,
      "url": "https://i.imgur.com/kIv7O4l.jpg",
      "description":"Magnificent shot!",
      "translation": "لقطة رائعة!"

    },
    {  "id": 7,
    "url": "https://i.imgur.com/jjfUrNu.jpg",
    "description":"Haha!",
    "translation": "هاها!"

  },
  {  "id": 8,
    "url": "https://i.imgur.com/ESK6NPU.jpg",
    "description":":P",
    "translation": "لسان",
  },
  {  "id": 9,
    "url": "https://i.imgur.com/VTQgBcM.jpg",
    "description":"Perfect timing!",
    "translation": "التوقيت المثالي!"

  },
  {  "id": 10,
    "url": "https://i.imgur.com/5jUc5F9.jpg",
    "description":"Motorcycle surfing",
    "translation": "التزحلق بالدراجة"

  },
  {  "id": 11,
    "url": "https://i.imgur.com/zAoGaP5.jpg",
    "description":"Margot Robbie",
    "translation": "مارجوت روبي"

  },
  {  "id": 12,
    "url": "https://i.imgur.com/6ZezkPW.jpg",
    "description":"Muscular boy!",
    "translation": "الأستاذ عضلات!"
  },
  {  "id": 13,
    "url": "https://i.imgur.com/89OZaT2.jpg",
    "description":"The mother of dragons",
    "translation": "أم التنانين"

  },
  {  "id": 14,
    "url": "https://i.imgur.com/kkDYbHZ.jpg",
    "description":"Couple of the day",
    "translation": "لقطة اليوم!"
  }
    ])
  }
  console.log(payload)
  dispatch({type: source == 'refresh' ? Constants.REFRESH_DATA : Constants.LOAD_DATA, payload: shuffle(payload)})
}
