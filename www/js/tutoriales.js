/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('tutoriales', [])

.service('Tutoriales', [function(){
    
    var tutoriales_list = [
        {
          key: '',
          name: '第27集：2017年3月',
          description: '《OH MY GOD》',
           long_descr: '',
           long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第28集：2017年3月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第29集：2017年3月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
          
        },
        {
          key: '',
          name: '第30集：2017年4月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
          
        },
        {
          key: '',
          name: '第31集：2017年4月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第32集：2017年4月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第33集：2017年4月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第34集：2017年5月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第35集：2017年5月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
       {
          key: '',
          name: '第36集：2017年5月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第37集：2017年6月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第38集：2017年6月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第39集：2017年6月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第40集：2017年8月',
          description: '《OH MY GOD》',
           long_descr: '',
           long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第41集：2017年9月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第42集：2017年9月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
          
        },
        {
          key: '',
          name: '第43集：2017年9月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
          
        },
        {
          key: '',
          name: '第44集：2017年10月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第45集：2017年10月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第46集：2017年10月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第47集：2017年11月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第48集：2017年11月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
       {
          key: '',
          name: '第49集：2017年11月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第50集：2017年12月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第51集：2017年12月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        },
        {
          key: '',
          name: '第52集：2017年12月',
          description: '《OH MY GOD》',
          long_descr: '',
          long_descr1: '',
          id: '',
          image: ''
        }
       
       
      ];
      
      var tutoriales_keys = {};

      for (var i=0;i<tutoriales_list.length;i++){
        tutoriales_keys[tutoriales_list[i].key] = tutoriales_list[i];
      }

    return {
        list: tutoriales_list,
        keys: tutoriales_keys
    }

}]);