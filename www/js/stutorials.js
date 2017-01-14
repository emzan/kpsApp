/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('stutorials', [])

.service('Stutorials', [function(){
    
    var stutorials_list = [
        {
          key: '新北市建安國小',
          name: '第一集：環保綠旗學校 新北市建安國小',
          description: '第一集：環保綠旗學校 新北市建安國小',
          id: '7_wZ1CXIf2o',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC1.JPG?alt=media&token=7b313841-6568-4ac9-95af-43d030b4c5d0'
        },
        {
          key: '繪本動畫故事1',
          name: '第一集-繪本動畫故事',
          description: '繪本動畫故事1',
          id: '73AavLmxiSI',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB1A.JPG?alt=media&token=e1a902a8-526c-4fc1-a74f-6db6700fcb76'
        },
         {
          key: '兒童創作故事1',
          name: '第一集-兒童創作故事',
          description: '兒童創作故事1',
          id: '0qb8kK-RJWI',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB1B.JPG?alt=media&token=24f3948e-0a80-4b53-916b-df2bf2dd8b80'
        },
       {      
        key:'E01 大朋友的分享',
        name:'E01 大朋友的分享',
        description: 'E01 大朋友的分享',
        id: 'HKJvo_yrB20',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA1C.JPG?alt=media&token=7f677e52-ff9c-4274-ab00-7ec3f24dd3ad'
        },
        {
          key: '台北市永樂國小',
          name: '第二集：藝文雲集 台北市永樂國小',
          description: '第二集：藝文雲集 台北市永樂國小',
          id: 'CZsOHJUWi4o',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC2.JPG?alt=media&token=8f6c461a-b3de-446b-8a8a-035aef1e1feb'
        },
         {
          key: '繪本動畫故事2',
          name: '第二集-繪本動畫故事',
          description: '繪本動畫故事2',
          id: 'UjVTpECSRjo',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB2A.JPG?alt=media&token=ba3a7f0e-559c-4bae-a1e8-dca12d7d5393'
        },
         {
          key: '兒童創作故事2',
          name: '第二集-兒童創作故事',
          description: '兒童創作故事2',
          id: 'XulaGhzXszw',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB2B.JPG?alt=media&token=d9a5b4b1-57f2-469a-8158-0d51f0083591'
        },
       {      
        key:'E02 大朋友的分享',
        name:'E02 大朋友的分享',
        description: 'E02 大朋友的分享',
        id: 'jUAGa5ZsSCE',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA2C.JPG?alt=media&token=3bf31057-a1d4-46fb-ab69-c467f0b36b48'
        },
        {
          key: '台南市西門國小',
          name: '第三集：古城尋獅 台南市西門國小',
          description: '第三集：古城尋獅 台南市西門國小',
          id: 'EghMczSLEAc',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC3.JPG?alt=media&token=9499f6ad-f2c2-4fa2-9f23-e2581a29a090'
        },
        {
          key: '繪本動畫故事3',
          name: '第三集-繪本動畫故事',
          description: '繪本動畫故事3',
          id: '5SN6tlLLHk4',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB3A.JPG?alt=media&token=461cb907-9605-4217-8bf4-98ffab562985'
        },
         {
          key: '兒童創作故事3',
          name: '第三集-兒童創作故事',
          description: '兒童創作故事3',
          id: 'fZmp72p1tlg',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB3B.JPG?alt=media&token=dcc40845-1c24-4afe-b125-8586f8aec53e'
        },
       {      
        key:'E03 大朋友的分享',
        name:'E03 大朋友的分享',
        description: 'E03 大朋友的分享',
        id: 'q15WahEzfgM',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA3C.JPG?alt=media&token=97b06b46-ed90-4ef4-8a00-ded587a0f0be'
        },
        {
          key: '靴子裡的大世界4',
          name: '第四集 靴子裡的大世界',
          description: '靴子裡的大世界4',
          id: 'cUWaPhJ5X7w',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC4.JPG?alt=media&token=8869a8d0-9ab1-4c7e-af72-70fe9b30b38c'
        },
        {
          key: '繪本動畫故事4',
          name: '第四集-繪本動畫故事',
          description: '繪本動畫故事4',
          id: 'uMq-QplqZoo',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB4A.JPG?alt=media&token=9113d9bf-edde-4826-9cc2-18465f173203'
        },
         {
          key: '兒童創作故事4',
          name: '第四集-兒童創作故事',
          description: '兒童創作故事4',
          id: '-jNu4eILoIs',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB4B.JPG?alt=media&token=1454b715-d4a1-495a-bd50-d35df34493d9'
        },
       {      
        key:'E04 大朋友的分享',
        name:'E04 大朋友的分享',
        description: 'E04 大朋友的分享 ',
        id: '7WBNhbP-puw',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA4C.JPG?alt=media&token=dd2fd061-838c-4260-9cdb-06f88e3e2e52'
        },
        {
          key: '台中市 大元國小',
          name: '第五集：藝術滿學堂 台中市 大元國小',
          description: '第五集：藝術滿學堂 台中市 大元國小',
          id: 'AG3PYeK-e8M',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC5.JPG?alt=media&token=afb73603-d803-45ee-b51b-b62322a14bda'
        },
        {
          key: '繪本動畫故事5',
          name: '第五集-繪本動畫故事',
          description: '繪本動畫故事5',
          id: '1k8dm9scTug',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB5A.JPG?alt=media&token=9dd7d841-231b-4c1b-beca-6b54618444c9'
        },
         {
          key: '兒童創作故事5',
          name: '第五集-兒童創作故事',
          description: '兒童創作故事5',
          id: 'XAjxHupfeKg',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FB5B.JPG?alt=media&token=2afe2c37-4b0e-4460-8c73-192d13343825'
        },
       {      
        key:'E05 大朋友的分享',
        name:'E05 大朋友的分享',
        description: 'E05 大朋友的分享 ',
        id: 'YxKXjAsaSQM',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA5C.JPG?alt=media&token=44ec074d-bb91-4143-b966-7af0a972aa5c'
        },
        {
          key: '靴子裡的大世界6',
          name: '第六集-靴子裡的大世界',
          description: '靴子裡的大世界6',
          id: 'n8Ph5RD5Sxc',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC6.JPG?alt=media&token=c5c7af38-fa99-4e3d-aeaf-26354a833291'
        },
        {
          key: '兒童創作故事6',
          name: '第六集-兒童創作故事',
          description: '兒童創作故事6',
          id: 'BZJiR7Yxmjk',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC6A.JPG?alt=media&token=a730de11-0d7a-47fb-84cc-9ed1901cc79c'
        },
        {
          key: '繪本動畫故事6',
          name: '第六集-繪本動畫故事',
          description: '繪本動畫故事6',
          id: 'AVre48mRzPc',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC6B.JPG?alt=media&token=6d1bcba0-3f77-4fdd-a7d1-17ad79aafb7f'
        },
         {      
        key:'E06 大朋友的分享',
        name:'E06 大朋友的分享',
        description: 'E06 大朋友的分享 ',
        id: 'BBTjG9I74zI',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA6C.JPG?alt=media&token=b10ce270-e769-4f62-b0cd-ccddc2544f91'
        },
        {
          key: '靴子裡的大世界7',
          name: '第七集 靴子裡的大世界',
          description: "靴子裡的大世界7",
          id: "pGMelB8c_nk",
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC7.JPG?alt=media&token=9849832a-be3b-4f39-a4b5-cdbc64a76ae1'
        },
        {
          key: '兒童創作故事7',
          name: '第七集 兒童創作故事',
          description: "兒童創作故事7",
          id: "C2fCPsLrHGE",
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC7A.JPG?alt=media&token=a1ab484a-8b4e-4eda-923d-174dcefcc7dd'
        },
         {
          key: '繪本動畫故事7',
          name: '第七集 繪本動畫故事',
          description: "繪本動畫故事7",
          id: "PqUqBT0Xz5E",
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC7B.JPG?alt=media&token=dd270a41-4bc5-4a04-8704-7452773a1924'
        },
        {      
        key:'E07 大朋友的分享',
        name:'E07 大朋友的分享',
        description: 'E07 大朋友的分享 ',
        id: 'kd3_0yVZDmk',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA7C.JPG?alt=media&token=8cb7d0da-b967-4fa1-8265-5bb61003ffdd'
        },
        {
          key: '靴子裡的大世界8',
          name: '第八集 靴子裡的大世界',
          description: '靴子裡的大世界',
          id: 'uHGas9BAOtA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC8.JPG?alt=media&token=f0d39364-30ff-49d4-a071-486a6bef07fb'
        },
        {
          key: '兒童創作故事',
          name: '第八集 兒童創作故事',
          description: '兒童創作故事8',
          id: 'iu2yZSkjjdo',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC8A.JPG?alt=media&token=4edd97f6-b439-44bd-b594-9d3ac38754c7'
        },
        {
          key: '繪本動畫故事',
          name: '第八集 繪本動畫故事',
          description: '繪本動畫故事8',
          id: 'hqzlX4MuYkQ',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC8B.JPG?alt=media&token=49802a3f-85c7-4da2-8718-3891c581fd63'
        },
        {      
        key:'E8 大朋友的分享',
        name:'E8 大朋友的分享',
        description: 'E8 大朋友的分享 ',
        id: 'Bj8nMLdrCSs',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA8C.JPG?alt=media&token=d9a04c0a-b0df-4ff0-a394-ff17d3fba22c'
        },
        {
          key: '花蓮縣 銅門國小',
          name: '第9集：在校園找樂子 花蓮縣 銅門國小',
          description: '第9集：在校園找樂子 花蓮縣 銅門國小',
          id: 'ScSljtXEO5s',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC9.JPG?alt=media&token=03bb48f9-1122-4582-bc9c-ecd584a712b0'
        },
        {
          key: '繪本動畫故事',
          name: '第9集：繪本動畫故事',
          description: '第9集：繪本動畫故事',
          id: 'P-xOMmQ5YkA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC9B.JPG?alt=media&token=a2b2d475-9005-4e25-88bb-a3a46b015e6b'
        },
        {
          key: '兒童創作故事',
          name: '第9集：兒童創作故事',
          description: '第9集：兒童創作故事',
          id: 'Q2qkuLaK88o',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC9A.JPG?alt=media&token=5d91fb28-80d9-41b0-8dbe-01d1dfe7d80e'
        },
         {      
        key:'E9 大朋友的分享',
        name:'E9 大朋友的分享',
        description: 'E9 大朋友的分享 ',
        id: 'JrQ_DBbzTBI',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FA9C.JPG?alt=media&token=5ff8a498-f068-4c0e-a1f1-c25fcc44801c'
        },
        {
          key: '靴子裡的大世界',
          name: '第十集 靴子裡的大世界',
          description: '靴子裡的大世界10',
          id: 'TPyMCfB6TXc',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC10.JPG?alt=media&token=773dedfe-c879-481c-a903-b2a6932f8607'
        },
         {
          key: '繪本動畫故事',
          name: '第十集 繪本動畫故事',
          description: '繪本動畫故事10',
          id: 'ndnVI-Ia4JQ',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC10B.JPG?alt=media&token=21c2ea17-7403-441f-a577-50f54d6d98b1'
        },
         {
          key: '兒童創作故事',
          name: '第十集 兒童創作故事',
          description: '兒童創作故事10',
          id: 'vrpVAkmygD8',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC10A.JPG?alt=media&token=366303f5-08c1-43e7-a9b1-48412c326b4d'
        },
        {      
        key:'E10 大朋友的分享',
        name:'E10 大朋友的分享',
        description: 'E10 大朋友的分享 ',
        id: 'QYvonj9wl60',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FCE10.JPG?alt=media&token=db6657ed-b7a2-4d0e-9a47-83ddec0fef53'
        },
        {
          key: '屏東縣 凌雲國小',
          name: '第11集：壯志凌雲 屏東縣 凌雲國小',
          description: '第11集：壯志凌雲 屏東縣 凌雲國小',
          id: 'C-aO8ZI2qUM',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC11.JPG?alt=media&token=83d22418-134c-4854-9a40-6403159a0d8d'
        },
        {
            key: '兒童創作故事',
            name: '兒童創作故事11',
            description: '兒童創作故事11',
            id: 'pzML0zPKkwM',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC11A.JPG?alt=media&token=426a143b-8a05-42ad-a1a1-288eadbdb30c'
            
        },
        {
            key: '繪本動畫故事',
            name: '繪本動畫故事11',
            description: '繪本動畫故事11',
            id: 'LYcN4xAdqak',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC11B.JPG?alt=media&token=2d45bb2d-dc70-4b8b-9d56-a000e1a0aa21'
            
        },
        {      
        key:'E11 大朋友的分享',
        name:'E11 大朋友的分享',
        description: 'E11 大朋友的分享 ',
        id: '1Aq9bIiLPkE',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FCE11.JPG?alt=media&token=e81a7800-9cb9-4247-a3b1-11951160ad60'
        },
        {
          key: '嘉義縣 北回國小',
          name: '第12集：太陽的後裔 嘉義縣 北回國小',
          description: '第12集：太陽的後裔 嘉義縣 北回國小',
          id: 'A3dKHvrtq_o',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC12.JPG?alt=media&token=a17f9692-37cf-4dfc-86bd-5ab4633c4034'
        },
        {
            key: '繪本動畫故事',
            name: '繪本動畫故事12',
            description: '繪本動畫故事12',
            id: 'Gm61oCyxq64',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC12B.JPG?alt=media&token=2826de3c-407f-4fcc-ac49-4bc0c5ccf825'
            
        },
        {
            key: '兒童創作故事',
            name: '兒童創作故事12',
            description: '兒童創作故事12',
            id: 'c6QENAIcHgQ',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC12A.JPG?alt=media&token=67dd2d42-8405-4d5c-9de0-7af83a3a4416'
            
        },
        {      
        key:'E12 大朋友的分享',
        name:'E12 大朋友的分享',
        description: 'E12 大朋友的分享 ',
        id: 'IY6IlryN07c',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FCE12.JPG?alt=media&token=c58f8e49-b32d-4bdc-b74b-c049288b28fd'
        },
        {
          key: '靴子裡的大世界',
          name: '第十三集：靴子裡的大世界',
          description: '靴子裡的大世界13',
          id: 'v6sG0wnzloM',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC13.JPG?alt=media&token=87e1e676-f9ab-4ef8-b02a-fa778002d42f'
        },
        {
            key: '精彩特色學校',
            name: '精彩特色學校13',
            description: '精彩特色學校13',
            id: '5ptTIpFeRYI',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC13B.JPG?alt=media&token=1cf3ac59-b842-4176-afc4-0c4efc9f737d'
            
        },
        {
            key: '兒童創作故事',
            name: '兒童創作故事13',
            description: '兒童創作故事13',
            id: 'vX2zfxBrckg',
            image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FC13A.JPG?alt=media&token=ac38c3c9-fd25-40e1-8c62-d85970418108'
            
        },
         {      
        key:'E13 大朋友的分享',
        name:'E13 大朋友的分享',
        description: 'E13 大朋友的分享 ',
        id: 'XDjUh_DCZ4o',
        image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/BambiniThumb%2FCE13.JPG?alt=media&token=f1e481cd-17a8-4813-9efc-8ea343e73767'
        }
       
        
      ];
      
      var stutorials_keys = {};

      for (var i=0;i<stutorials_list.length;i++){
        stutorials_keys[stutorials_list[i].key] = stutorials_list[i];
      }

    return {
        list: stutorials_list,
        keys: stutorials_keys
    }

}]);