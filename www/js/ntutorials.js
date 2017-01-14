/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ntutorials', [])

.service('Ntutorials', [function(){
    
    var ntutorials_list = [
        {
          key: '遠洋鮪釣台灣之光',
          name: '第001集 遠洋鮪釣 台灣之光',
          description: '台灣的遠洋漁業在世界上非常著名，尤其是台灣的遠洋鮪釣漁業更是威楊國際喔！想知道台灣的遠洋鮪釣漁業有多厲害嗎？這一集mijung就要帶大家一塊去認識台灣的漁業之光-遠洋鮪釣漁業的故事。',
          id: '2tqrp4qOWkI',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z1.JPG?alt=media&token=e3fe4308-7064-4c74-9a07-99d42952f1d3'
        },
        {
          key: '屏東黑鮪 觀光趣',
          name: '第002集 屏東黑鮪 觀光趣',
          description: '說到屏東的東港，我們絕對不能錯過的就是東港的三寶-黑鮪魚、櫻花蝦、油魚子。在每年四月上旬一直到七月初的時候，是屏東東港舉辦”屏東黑鮪魚文化觀光季的重要日子喔！究竟黑鮪魚有多好吃，黑鮪魚文化觀光季有多好玩呢？大家不要錯過精彩的節目內容囉！',
          id: 'drOdgV-kZe0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z2.JPG?alt=media&token=621e380f-eb85-48c9-aa20-8dab74a6016e'
        },
        {
          key: '好客漁港 永安遊',
          name: '第003集 好客漁港 永安遊',
          description: '這一集的台灣漁鄉走透透，我們來到了桃園。桃園沿海一帶有著非常多豐富的海洋生態景觀，每到假日總會吸引大批的觀光人潮喔。想和mijung一塊體驗桃園漁鄉的魅力嗎？我們現在就一塊出發去囉！',
          id: '9UK5zGNWz7w',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z3.JPG?alt=media&token=b1711f2c-6572-40dc-9c6f-88821090fe8f'
          
        },
        {
          key: '海角一樂園 驚艷貢寮',
          name: '第004集 海角一樂園 驚艷貢寮',
          description: '這一集的台灣漁鄉之旅，我們來到了位在東北海岸的貢寮。說到了貢寮，大家想到的會是貢寮的海洋文化音樂祭，還是福隆的海水浴場呢？其實在貢寮這邊還有許多在地的漁業文化。現在就跟著mijung一塊去探索囉！',
          id: 'emPHOY3j76U',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z4.JPG?alt=media&token=ab0289ad-3239-460c-91ae-64c04b7778c6'
          
        },
        {
          key: '美麗海洋 豐鱙之鄉',
          name: '第005集 美麗海洋 豐鱙之鄉',
          description: '屏東枋寮漁港，漁產豐富，其中最著名的就是魩仔魚產業，是全台灣魩仔魚生產處的兩處之一。素有北頭城，南枋寮的稱號。現在就跟著mijung的腳步一塊來認識聞名全台的魩仔魚產業囉！',
          id: 'ufSRScy39PI',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z5.JPG?alt=media&token=9c034bb2-68bd-48b6-a465-e110d8eb6cfa'
        },
        {
          key: '山城 海洋 好美栗',
          name: '第006集 山城 海洋 好美栗',
          description: '這一集的台灣漁鄉走透透，我們來到了中台灣的苗栗。除了要帶大家體驗海釣的樂趣之外呢，我們還要走進時光隧道裡，一塊去體驗早期漁民捕魚的智慧喔！另外呢我們還要出海，一塊去體驗漁民捕魚的辛苦。大家準備好了嗎？我們現在就出發囉！',
          id: 'cRTtyZvQmAc',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z6.JPG?alt=media&token=c291bcf4-3b73-4e83-883d-e8e6e89ee600'
        },
        {
          key: '南島 海洋 飛魚行',
          name: '第007集 南島 海洋 飛魚行',
          description: '屏東的恆春擁有獨特的南島風情，豐富的海洋資源，以級獨特的海洋景觀，是民眾親海和賞海的最佳去處。現在就跟著mijung一塊出發去囉！',
          id: "O8AIN7n8rHk",
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z7.JPG?alt=media&token=bc5602a2-9547-4c53-b379-20583960b26d'
        },
        {
          key: '山海漁鄉 與鯨豚共舞',
          name: '第008集 山海漁鄉 與鯨豚共舞',
          description: '這一集的台灣漁鄉之旅，來到了北台灣的遊憩重鎮-頭城。這邊的烏石港除了有各式各樣的熱門水上運動，鄰近的大溪漁港更是宜蘭地區重要的漁港之一喔。現在就跟著mijung的腳步，一塊走訪頭城在地的漁鄉之美吧！',
          id: 'Q2DkV5axBhw',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z8.JPG?alt=media&token=6aac87d7-f3a2-49ce-8c60-dfad66c0f391'
        },
        {
          key: '海上精靈 飛魚行',
          name: '第009集 海上精靈 飛魚行',
          description: '在台灣每年的三月份到七月的時候，是飛魚迴遊的季節，而在台灣的各地我們都可以看到不同的飛魚文化。像是在南台灣，我們可以看到當地的漁民是如何利用飛 魚，來發展出觀光特色。而在蘭嶼我們更可以看到達悟族人，所創造出來的飛魚文化。在台灣的東北角更可以看到飛魚卵的捕捉喔！',
          id: 'GMoWpgK78Zw',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z9.JPG?alt=media&token=17a568c1-63cd-4afc-909d-ef2f46ba39cc'
        },
        {
          key: '黃金海岸 浪漫古都',
          name: '第010集 黃金海岸 浪漫古都',
          description: '今天我們來到台南府城，這個擁有悠久文化與歷史的古都。這邊除了有逛不完的歷史古蹟，還有吃不完的美食小吃，更有數不盡的漁業文化活動。那麼現在台南的漁鄉之旅，出發囉！',
          id: 'v2QOexdAL_U',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z10.JPG?alt=media&token=f6248db4-90d0-48db-b455-5805488825f5'
        },
        {
          key: '豐饒漁鄉 漫遊南瀛',
          name: '第011集 豐饒漁鄉 漫遊南瀛',
          description: '今天的樂活漁鄉之旅，我們帶大家來到台南縣了。在早期這邊的漁民，除了從事傳統的漁撈作業，也漸漸的開始發展淺海的養殖漁業，加上台南地區特殊的潟湖地形，使的沿岸風光既豐富又多變。相信這會是一趟滿載收穫的旅程，我們現在就出發吧！',
          id: 'Dii9Ng_9geY',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z11.JPG?alt=media&token=d96ae9aa-d272-4ed8-9786-587490cabddb'
        },
        {
          key: '瑰麗漁港 湖光山色',
          name: '第012集 瑰麗漁港 湖光山色',
          description: '這一集我們逛台灣遊漁鄉的時間，要來個好康大放送喔！除了要帶大家到台中的梧棲漁港一塊出海，去找尋中華白海豚的蹤跡，以及認識在地的”鯛及雜魚延繩釣”漁法之外，我們還要到日月潭去認識在地獨特的漁業文化喔。',
          id: 'phplfNIoaQs',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z12.JPG?alt=media&token=ff80a205-e195-4168-9a3f-8a391ab86435'
        },
        {
          key: '愛戀漁之鄉 瑞芳新魅力',
          name: '第013集 愛戀漁之鄉 瑞芳新魅力',
          description: '這一集我們逛台灣遊漁鄉的時間，我們帶大家來到台北縣的瑞芳鎮。想知道這邊美味的鯊魚烟是如何做的嗎？想要體驗這邊最夯最有趣的夜釣活動嗎？想知道當地人口中的水中女蛟龍究竟是何方神聖嗎？就跟著mijung的腳步一塊來感受瑞芳的漁業新魅力囉。',
          id: '8rDlBgOXgUQ',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z13.JPG?alt=media&token=82125371-9240-4132-af1a-c6e8a169875b'
        },
       {
          key: '帝王海產 鮮蚵鄉',
          name: '第014集 帝王海產 鮮蚵鄉',
          description: '這一集的台灣漁鄉走透透的時間，我們帶大家來到嘉義囉。嘉義這邊有哪些漁業特色呢？當然最有名的就是蚵仔養殖啦。其實，蚵仔就是牡蠣，但是呢大家對於牡蠣的認識又有多少呢？這一集就跟著mijung一塊來深入探索嘉義特有的蚵仔文化吧！',
          id: 'TOiZ6sm1K0Y',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z14.JPG?alt=media&token=c1e4971c-5080-4c96-bffa-708ef8212338'
        },
        {
          key: '台西漁鄉 樂雲林',
          name: '第015集 台西漁鄉 樂雲林',
          description: '又到了我們逛台灣遊漁鄉的時間了，台灣西部海岸地形平坦加上腹地面積廣大，所以非常適合養殖漁業的發展，那麼這一集呢mijung帶大家來到了雲林縣，究竟這邊有哪些全台數一數二的特色漁業呢？現在就跟著mijung一塊逛雲林。',
          id: 'QtglEVYlBLo',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z15.JPG?alt=media&token=1da014f6-0414-41e9-af31-da655abefbd7'
        },
        {
          key: '石斑魚故鄉 永安風采',
          name: '第016集 石斑魚故鄉 永安風采',
          description: '台灣的沿海有許多的鄉鎮，在一鄉一特色的政策之下，發展出許多許多的漁業文化，而高雄的永安鄉從早期的鹽田、養殖漁業，一直到現在以石斑魚的故鄉聞名全台。接下來mijung就帶大家一塊來認識。',
          id: 'ZwG5F0vQmxs',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z16.JPG?alt=media&token=7ed2a875-8971-4716-8c0e-de83a1cd382c'
        },
        {
          key: '來去台東 親海自在行',
          name: '第017集 來去台東 親海自在行',
          description: '從平原到高山，從溪流到海洋，台東如夢似幻般的自然美景，一直都是休閒渡假的最佳首選。今天我們來到台東縣，要帶大家一塊來欣賞在地的漁鄉風情、海洋風光，究竟台東有哪些地方特色的漁業文化呢？',
          id: 'tW7o75rqNK0',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z17.JPG?alt=media&token=8e737fe6-bc1b-4e4b-b263-c0a783ac9150'
        },
        {
          key: '台灣鯛新滋味',
          name: '第018集 台灣鯛新滋味',
          description: '在台灣的養殖漁業當中，這幾年來數量非常多，並且在品種的改良以及研發上面都有不錯的成就，那就是素有台灣國寶魚之稱的-台灣鯛。各位觀眾朋友品嘗過牠的美味嗎？今天這一集mijung就要帶大家一塊來感受台灣鯛的魅力囉！',
          id: 'zQgiWnRx1vQ',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z18.JPG?alt=media&token=ca135891-131a-4a58-8c32-6aec24bd3ce9'
        },
        {
          key: '海上公園 小琉球',
          name: '第019集 海上公園 小琉球',
          description: '台灣是屬於海島型的國家，在附近有許多特色的島嶼，都有著不同的美麗風貌。今天mijung要帶大家造訪的，是以珊瑚礁地形而聞名的小琉球。小琉球是全台唯一的珊瑚礁島，加上一年四季氣候溫暖，非常適合觀光旅遊。',
          id: 'nYXw_1EaGtQ',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z19.JPG?alt=media&token=9dfac19b-dfc2-4171-95ef-2197da6772cc'
        },
        {
          key: '碧海藍天 美麗菊島',
          name: '第020集 碧海藍天 美麗菊島',
          description: '這一集的漁鄉趴趴走，我們帶大家來到了美麗的菊島-澎湖。我們除了要認識在地的箱網養殖，欣賞美麗的潮間帶生物之外，還要帶大家體驗在地最熱門最夯的-漁業體驗活動海上牧場！',
          id: 'dGn6C5xRi68',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z20.JPG?alt=media&token=943641bb-47e4-4838-9270-2a1e07650dac'
        },
        {
          key: '洄瀾漫遊 山海花蓮',
          name: '第021集 洄瀾漫遊 山海花蓮',
          description: '越過中央山脈我們走進台灣的後山，一整片風光明媚的蔚藍海岸，在我們眼前璀璨登場。這一集我們帶大家來到了花蓮的石梯漁港。要帶著大家從生態漁業上的認識，一直到搭船賞鯨、夜釣南魷的親身體驗。',
          id: 'fYv-aajeRRY',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z21.JPG?alt=media&token=d69e4317-2ded-44bf-b727-08b949daa3b1'
        },
        {
          key: '魅力鯖魚 豐饒之旅',
          name: '第022集 魅力鯖魚 豐饒之旅',
          description: '今天帶大家來的地方，是位在宜蘭蘇澳的南方澳漁港。這裡可是全台灣三大漁港之一喔。mijung身後停了這麼多艘漁船，你們知道嗎，南方澳漁港同時也是全國十大魅力漁港中同舟共濟第一名喔！到底南方澳漁港有什麼樣的魅力呢？我們現在就一塊去瞧瞧吧。',
          id: '_YLnAMJF4zA',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z22.JPG?alt=media&token=1904b450-5d8f-49c7-94f8-7491d76120cc'
        },
        {
          key: '漁鄉樂活北淡水',
          name: '第023集 漁鄉樂活北淡水',
          description: '今天我們來到的這個地方，是早期和現代都相當熱鬧非凡的地區，那就是北台灣的淡水。我們不僅要去認識整個淡水，早期漁業演變歷史，還要去體驗各式各養的漁業活動。再來呢，我們要跟著樂活達人一塊暢遊淡水。',
          id: 'DBYogPOIliQ',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z23.JPG?alt=media&token=2d137f16-9811-4d19-a7f7-b1176262b6c3'
        },
        {
          key: '聽海觀濤 夜探基隆',
          name: '第024集 聽海觀濤 夜探基隆',
          description: '這一集我們帶大家來到了位在北台灣的基隆，如果呢來到了基隆大家只知道逛基隆夜市的話，那你可就落伍囉。這一集mijung帶大家一塊來體驗，夏天這邊非常有名的夜釣小管活動，還要帶大家品嘗有基隆第一味之稱的飛魚卵水餃，還要帶大家到碧砂漁港，去採買當季最新鮮的魚貨喔。',
          id: 'HIbdOQ0OMY8',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z24.JPG?alt=media&token=767ff01f-d647-4e0a-99dd-45c7c1b721bc'
        },
       {
          key: '逍遙列島 漫遊馬祖',
          name: '第025集 逍遙列島 漫遊馬祖',
          description: '馬祖卡蹓！歡迎大家到馬祖玩。這一串灑落在閩江口外的列島呢，走過了漁業的豐收時期，現在展現的是以休閒渡假的漁鄉新風貌。這一集呢，我們要一同探索馬祖的漁鄉魅力，除了要體驗海邊採集的樂趣，也要跟著在地的漁民一起出海釣大魚喔！',
          id: 'A6OjYCa8gJs',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z25.JPG?alt=media&token=3050ed8c-62ab-4c70-8042-f153dd697545'
        },
        {
          key: '海天一色 綠島遊蹤',
          name: '第026集 海天一色 綠島遊蹤',
          description: '今天要帶大家去的地方是綠島。這個位在台灣東南方海面上的小島，有著美麗的珊瑚礁景觀，以及迷人的海岸風光，現在呢就跟著mijung一塊出發吧！',
          id: 'WrffnJ4XkNM',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z26.JPG?alt=media&token=5893c796-6564-407e-ae66-7ac5d2c41272'
        },
        {
          key: '樂活彰化 漁鄉樂逍',
          name: '第027集 樂活彰化 漁鄉樂逍遙',
          description: '這一集的台灣漁鄉走透透的時間，我們帶大家來到了位在中西部的彰化縣，除了要去認識神奇的古老漁法，還要一塊去體驗，在地非常夯的漁業休閒活動喔。現在呢就跟著mijung一塊去感受彰化的漁業魅力囉。',
          id: 'd2kq99G0MII',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z27.JPG?alt=media&token=a1d8a05a-c1d5-444a-9c46-a83d20bebe16'
        },
        {
          key: '海上桃花源 漫遊金門',
          name: '第028集 海上桃花源 漫遊金門',
          description: '經過了一個多小時的飛行時間，我們終於抵達這個富有戰地色彩的海上桃花源-金門。這裡的好山好水好空氣，孕育出許多精采的漁鄉文化以及漁業活動。現在呢就跟著mijung的腳步走一趟深度的金門之旅囉。',
          id: 'X_I9j-tVPrI',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z28.JPG?alt=media&token=63e5c0da-67e4-4815-bf20-af3c99ca005c'
        },
        {
          key: '金門漁鄉新風情',
          name: '第029集 金門漁鄉新風情',
          description: '四面環海的金門擁有豐富的農業資源，漁業發展歷史悠久，本集再次探索金門漁鄉風情，將帶大家體驗古厝漁鄉之旅，當地的石蚵文化，瓊林古厝的瓊林宴....等等金門當地的特有文化民俗。',
          id: 'g6NByfFmNvQ',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z29.JPG?alt=media&token=fcc782ff-9ae3-4c6a-a1e8-d4987ebffdef'
        },
        {
          key: '樂遊旗魚祭',
          name: '第030集 樂遊旗魚祭',
          description: '台東成功的新港漁港同時也是東部最大的港口，近年來配合海洋觀光的推動，也積極投入休閒漁業的發展，本集帶大家看看成功漁港旗魚文化祭、烏石鼻漁港、三仙台....等等景點，出海新玩法.....等精彩的介紹。',
          id: 'BIlVd1e7808',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z30.JPG?alt=media&token=fef850b3-d20b-41de-8e13-d710e70aa66b'
        },
        {
          key: '鮮魚活跳南台灣',
          name: '第031集 鮮魚活跳南台灣',
          description: '高雄林邊養殖漁業是南部的漁業重鎮，除了新鮮漁貨之外，還有經過加工的美容聖品-膠原蛋白....漁業相關開發產品，好吃又好用，大家一起來看看吧!',
          id: 'ik-fk9mz5PM',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z31.JPG?alt=media&token=ab23548d-953f-4421-9e9d-164ff5ac45a7'
        },
        {
          key: '活力前鎮 戀戀秋刀魚',
          name: '第032集 活力前鎮 戀戀秋刀魚',
          description: '本集介紹高雄前鎮漁港漁市，遠洋漁貨拍賣過程還有前鎮漁港的大明星秋刀魚外銷檢驗和美味的秋刀魚大餐，告訴你秋刀魚這樣吃最美味啦!',
          id: 'IYuc_jawECQ',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z32.JPG?alt=media&token=eddc922c-bb96-4a27-92a0-f2e3d59801c4'
        },
        {
          key: '美食 海鮮 蚵仔寮',
          name: '第033集 美食 海鮮 蚵仔寮',
          description: '緊鄰高雄市北邊梓官鄉的第二大港口蚵仔寮漁港，曾獲選十大魅力漁港，是高雄主要海鮮來源之一，也是全省39家漁會近海漁撈最豐富的漁港，當每日漁船陸續入港，蚵仔寮觀光漁市，也開始熱鬧起來，現撈螃蟹.蝦子.鮮魚..等等，除了活跳跳海鮮之外，加工漁貨和柯仔寮漁港精心研製的海味伴手禮，都是一定要帶回家的必買清單喔!在漁港附近還有一片廣闊的溼地公園-援中港濕地公園，來到援中港濕地公園可以欣賞豐富的生態美景，大家一起來走走吧!',
          id: 'LBws5jnofh4',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z33.JPG?alt=media&token=a483e8aa-57c5-4ce8-aea2-45bdbe70e65d'
        },
         {
          key: '愛戀漁鄉 茄萣情',
          name: '第034集 愛戀漁鄉 茄萣情',
          description: '高雄縣北部茄萣鄉興達港是台灣歷史悠久的漁村，週邊近海及養殖漁業都十分發達，其中近年來開發的情人碼頭，浪漫的美麗夜景最適合情侶一起享受夜晚浪漫的時光，白天還有動力帆船可以體驗，除了有優良的景觀，這裡的養殖鰻魚也是很重要的產地，很適合當伴手禮喔。',
          id: 'ufUfADtOtrQ',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z34.JPG?alt=media&token=3c71a5d7-28e0-493a-bc1f-c17c0e0ee019'
        },
       {
          key: '金色漁鄉 魅力四射',
          name: '第035集 金色漁鄉 魅力四射',
          description: '黃金漁鄉之旅，金山萬里位於台灣北端，面臨東海，四周與石門.三芝.北投.士林相鄰，著名景點有富基漁港觀光漁市也是北台灣的海產勝地，金山有全台三個唯一景點-燭台雙嶼.夫妻石.神祕海岸.蹦火船....等等當地特殊地理環境與漁業文化，還有夜釣白帶魚精彩體驗喔。',
          id: 'iOskyo7NXac',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z35.JPG?alt=media&token=eed30a0d-28aa-4685-beee-44af5452923f'
        },
        {
          key: '蟹黃之鄉 風情萬種',
          name: '第036集 蟹黃之鄉 風情萬種',
          description: '黃金漁鄉之旅第二站，來到了萬里地區，萬里瀕臨太平洋與基隆市、陽明山、汐止相鄰，風化的地質景觀與溫泉、石花菜都很有名，特別是螃蟹的捕獲量非常高，成了新北市嚐鮮的好去處，大家一起來萬里走走吧',
          id: 'v0CoebpYTtI',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z36.JPG?alt=media&token=bc35b1f0-1eab-4881-83b0-c9ee5a72eb97'
        },
        {
          key: '彌陀"虱"想起',
          name: '第037集 彌陀"虱"想起',
          description: '高雄縣彌陀鄉位於高雄西部，以阿公店溪與永安為界，彌陀鄉的特色漁業是虱目魚養殖，每年都會舉辦虱目魚文化節，到虱目魚文化節有各式各樣虱目魚製成的食品與商品，好吃又好玩!!!除了虱目魚文化節之外，還有百年的媽祖廟可以求姻緣，想要一覽彌陀漁港美麗的風貌，那就不能錯過漁港旁的漯底山，漯底山特殊地形與獨特美景都只有在彌陀鄉看的到喔!!',
          id: 'A6OfV71M8ic',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z37.JPG?alt=media&token=938be33f-0132-4291-996f-2121d76c151a'
        },
        {
          key: '戀戀烏魚情',
          name: '第038集 戀戀烏魚情',
          description: '對台灣人來說烏魚是一種非常珍貴的一種魚種，冬至前後10天烏魚會從大陸東海迴游至台灣產卵，是漁民口中的烏金，位於高雄的興達港從前是捕獲烏魚的重鎮，因此也被稱於烏魚的故鄉，不論是養殖烏魚還是野生烏魚，在這裡都有一定的產量，還有烏魚三寶美味大餐，大家一起來體驗烏魚之鄉的美吧!',
          id: 'LOrntmi9XyU',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z38.JPG?alt=media&token=c12c53fd-4170-440f-b290-1e50375d19bf'
        },
        {
          key: '繽紛漁樂北台灣',
          name: '第039集 繽紛漁樂北台灣',
          description: '桃園海岸線總長約43公哩，為北台灣休閒漁業發展的重鎮，而新竹則擁有美麗的海岸景觀，近年來也發展了獨特的風景遊憩區，例如:南寮休閒舊港、竹圍漁港、新竹漁港、金城湖、香山濕地、紅樹林景觀區....等等觀光景點，其中竹圍漁港與台北的富基漁港、基隆的碧砂漁港，更是並列為北台灣三大魚貨供應地，大家一起來體驗繽紛的漁樂生活吧!',
          id: 'rrWb4bCiTtQ',
          image: 'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/PesciThumb99%2F99Z39.JPG?alt=media&token=c2684ac4-e066-4e58-9e65-1c1c7dfb1bdf'
        }
       
      ];
      
      var ntutorials_keys = {};

      for (var i=0;i<ntutorials_list.length;i++){
        ntutorials_keys[ntutorials_list[i].key] = ntutorials_list[i];
      }

    return {
        list: ntutorials_list,
        keys: ntutorials_keys
    }

}]);