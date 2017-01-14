/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('dtutorials', [])

.service('Dtutorials', [function(){
    
    var dtutorials_list = [
        {
          key: '翼下之風1',
          name: '翼下之風',
          description: '生命相對論1',
          long_descr: '生命相對論第五輯-1翼下之風，來賓是陳鳳文＆她的女兒劉沁如。陳鳳文分享了如何在失婚之後，走過生命的幽谷，女兒沁如也見證了在這個過程中，家庭和信仰的力量。',
          id: '5XjBIOLSIa0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT1.JPG?alt=media&token=3c6a0b3a-2cb8-458e-a66a-3649ca5b41b2'
        },
        {
          key: '愛在千里之外2',
          name: '愛在千里之外',
          description: '生命相對論2',
          long_descr: '光啟社為天主教之聲製作的節目-生命相對論五-1 愛- 在千里之外，由廖惇孟＆高蕾雅分享他們快樂服務，當志工的故事。',
          id: 'AjOLLWX26bM',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT2.JPG?alt=media&token=f0dd1207-ed4f-4ed4-a92f-8cd208c378f6'
        },
        {
          key: '一堂生命必修課3',
          name: '一堂生命必修課',
          description: '生命相對論3',
          long_descr: '光啟社為天主教之聲所製作的生命相對論，第五輯中的第3集--一堂生命必修課，由黎建球＆何佳瑞一起來分享，一門值得用一輩子學習的課程--哲學，它其實是很生活化的學問喔！',
          id: 'J0NZNxB0ozM',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT3.JPG?alt=media&token=dc854ebd-3828-40df-bdca-471229d68b31'
          
        },
        {
          key: '生活藝術湧清泉4',
          name: '生活藝術湧清泉',
          description: '生命相對論4',
          long_descr: '生活藝術湧清泉',
          id: 'JWGo8CBkLkE',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT4.JPG?alt=media&token=0a243cb2-8612-497c-b4e5-316c14febfff'
          
        },
        {
          key: '為你執一盞燈5',
          name: '為你執一盞燈',
          description: '生命相對論5',
          long_descr: '為你執一盞燈',
          id: 'Mh5-FN2989c',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT5.JPG?alt=media&token=2fe56c79-d2ce-4110-98c4-25aa987e8143'
        },
        {
          key: '手繪生活幸福書6',
          name: '手繪生活幸福書',
          description: '生命相對論6',
          long_descr: '手繪生活幸福書',
          id: '-N3rex0gk-0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT6.JPG?alt=media&token=40a84a64-479c-4d70-8fef-c9713e114144'
        },
        {
          key: '我們的文化大學7',
          name: '我們的文化大學',
          description: '生命相對論7',
          long_descr: '生命相對論一我們的文化大學',
          id: 'oVmoCgk2Ph0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT7.JPG?alt=media&token=39ff1df5-4038-4054-a77c-7d2c51334972'
        },
        {
          key: '剪一段文學光影8',
          name: '剪一段文學光影',
          description: '生命相對論8',
          long_descr:'生命相對論',
          id: '1ONiEiBiV9U',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT8.JPG?alt=media&token=d35e4598-8872-47f0-b9d6-076ad0999bda'
        },
       {
          key: '奉獻無悔行醫路9',
          name: '奉獻無悔行醫路',
          description: '生命相對論9',
          long_descr:'生命相對論一-6 奉獻無悔行醫路',
          id: 'wNcfXWrhiv8',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT9.JPG?alt=media&token=140332a8-6203-4acc-91e4-3bddeeadb065'
        },
        {
          key: '南台灣的心靈燈塔(上)10',
          name: '南台灣的心靈燈塔( 上)',
          description: '生命相對論10',
          long_descr:'生命相對論6-1 南台灣的心靈燈塔(上)',
          id: 'ej8laQhK51o',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT12.JPG?alt=media&token=7aefc5e8-da22-46a9-aa1b-c33382096b1e'
        },
        {
          key: '南台灣的心靈燈塔(下)11',
          name: '南台灣的心靈燈塔(下)',
          description: '生命相對論11',
          long_descr:'生命相對論6-1 南台灣的心靈燈塔(下)',
          id: 'ff6Bbfarddg',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT13.JPG?alt=media&token=4fdb8907-f6b3-4837-ad74-4539a9a18aa9'
        },
       {
          key: '行動，看見改變(上)12',
          name: '行動，看見改變(上)',
          description: '生命相對論12',
          long_descr:'生命相對論6-2 行動，看見改變(上)',
          id: '4L60nU7MA8U',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT14.JPG?alt=media&token=1f5b9fef-d07a-45e6-8adb-136d89be5948'
        },
        {
          key: '行動看見改變(下集)13',
          name: '行動看見改變(下集)',
          description: '生命相對論13',
          long_descr:'生命相對論6-2行動看見改變(下集)',
          id: '97wUuERPb3Y',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT15.JPG?alt=media&token=399dae17-8d6a-454e-84f6-e8f3c029b2f7'
        },
        {
          key: '白色巨塔下的基督徒(上集)14',
          name: '白色巨塔下的基督徒(上集)',
          description: '生命相對論14',
          long_descr:'生命相對論6-3 白色巨塔下的基督徒(上集)',
          id: 'wmaAno33ssk',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT16.JPG?alt=media&token=56e6dc55-b4a4-4687-99f6-426b3aa65194'
        },
         {
          key: '白色巨塔下的基督徒(下集)15',
          name: '白色巨塔下的基督徒(下集)',
          description: '生命相對論15',
          long_descr:'生命相對論6-3 白色巨塔下的基督徒(下集)',
          id: 'pv_H_6B5QO8',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT17.JPG?alt=media&token=dd959c2a-c7ad-42e9-ad0f-8dcd81bd8c4b'
        },
        {
          key: '使一切無限大(上集)16',
          name: '愛 使一切無限大(上集)',
          description: '生命相對論16',
          long_descr:'生命相對論6-4 愛 使一切無限大(上集)',
          id: 'ElHLheX7iig',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT18.JPG?alt=media&token=601a3128-aaee-45c7-bc90-1085b6a5755d'
        },
        {
          key: '愛 使一切無限大(下集)17',
          name: '愛 使一切無限大(下集)',
          description: '生命相對論17',
          long_descr:'生命相對論6-4 愛 使一切無限大(下集)',
          id: 'PGLTXZcbJSk',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT19.JPG?alt=media&token=455e9014-a29c-4d36-b6ec-4e44b7b1f3b1'
        },
        {
          key: '生命盡處的光(上集)18',
          name: '生命盡處的光(上集)',
          description: '生命相對論18',
          long_descr:'生命相對論6-5 生命盡處的光(上集)',
          id: '-xs31H_67WU',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT20.JPG?alt=media&token=7e53fcf9-d4b0-4fd5-be9e-e711de3e096c'
        },
        {
          key: '生命盡處的光(下)19',
          name: '生命盡處的光(下)',
          description: '生命相對論19',
          long_descr:'生命相對論6-5 生命盡處的光(下)',
          id: 'ZGw68njIF1k',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT21.JPG?alt=media&token=d01989e7-ec3e-4d85-8896-8a0e245de3b8'
        },
        {
          key: '天使在人間(上集)20',
          name: '天使在人間(上集)',
          description: '生命相對論20',
          long_descr:'生命相對論6-6 天使在人間(上集)',
          id: '7RZv8ONHnvs',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT10.JPG?alt=media&token=deca0a17-167b-48bf-b6c0-d2a7df7e461a'
        },
        {
          key: '天使在人間(下集）21',
          name: '天使在人間(下集）',
          description: '生命相對論21',
          long_descr:'生命相對論6-6 天使在人間(下集）',
          id: '09RYC2Ygtxs',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/VidaThumbnails%2FVT11.JPG?alt=media&token=72014a1d-efef-4edf-911f-6faedb8fbb75'
        }
        
      ];
      
      var dtutorials_keys = {};

      for (var i=0;i<dtutorials_list.length;i++){
        dtutorials_keys[dtutorials_list[i].key] = dtutorials_list[i];
      }

    return {
        list: dtutorials_list,
        keys: dtutorials_keys
    }

}]);