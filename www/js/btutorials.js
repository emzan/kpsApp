/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('btutorials', [])

.service('Btutorials', [function(){
    
    var btutorials_list = [
        {
          key: ' 婆婆媽媽19',
          name: '第19集  婆婆媽媽',
          description: ' 婆婆媽媽19',
          id: 'BCvSTsS1Jiw',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2FO1.JPG?alt=media&token=143a3a93-035b-420f-8833-318e97ba55ac'
        },
        {
          key: '健康GOGO 10集 醫藥分業',
          name: '健康GOGO 10集 醫藥分業',
          description: '健康GOGO 10集 醫藥分業',
          id: 'apLdGWUdiO0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2FO2.JPG?alt=media&token=fefa47b3-6a74-4d37-8d51-978f171bb50a'
        },
        {
          key: '健康GOGO 6集 痛風',
          name: '健康GOGO 6集 痛風',
          description: '健康GOGO 6集 痛風',
          id: 'lm6axoSNL9c',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2FO3.JPG?alt=media&token=026c7d06-b9cd-4627-bccf-a11e77ed56d8'
          
        },
        {
          key: '可愛的陌生人 1',
          name: '可愛的陌生人 1',
          description: '可愛的陌生人 1',
          id: 'tUBf3ndBgr0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2FO4.JPG?alt=media&token=0f3e7433-1276-4804-a489-2691fab1ecf1'
          
        },
        {
          key: 'PB 爆米花221',
          name: 'PB 爆米花221',
          description: 'PB 爆米花221',
          id: 'NxCFFeFEqE4',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2FO5.JPG?alt=media&token=866134fa-5b5f-4117-9502-0ffb015560ad'
        },
        {
          key: '注音ㄅㄆㄇ第一集',
          name: '注音ㄅㄆㄇ第一集',
          description: '注音ㄅㄆㄇ第一集',
          id: '5RIuvOGQBmY',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2FO6.JPG?alt=media&token=9fb005bb-bf89-4926-9a35-465e7c4b99e2'
        },
        {
          key: 'ABC Do Re Mi廣告',
          name: 'ABC Do Re Mi廣告',
          description: 'ABC Do Re Mi',
          id: 'R3GD21CUWPE',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2FO7.JPG?alt=media&token=a7d18d50-9ba7-4e4f-b2e6-bb9c09cc1ef8'
        },
        {
          key: '光啟社 紀錄片',
          name: '光啟社 紀錄片',
          description: '光啟社',
          id: 'fzFVPQ-y48c',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/OldPrograms%2FO8.JPG?alt=media&token=eb8054c6-b4d6-48d8-9f3e-79280c23da86'
        }
       
       
        
      ];
      
      var btutorials_keys = {};

      for (var i=0;i<btutorials_list.length;i++){
        btutorials_keys[btutorials_list[i].key] = btutorials_list[i];
      }

    return {
        list: btutorials_list,
        keys: btutorials_keys
    }

}]);