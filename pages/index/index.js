//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    active: 0,
    radio: '1',
    index: 0,
    commericePrice: '',
    limtyear: 20,
    commericeWay: '旧版基准利率',
    basePR: '4.9',
    show: false,
    actions: [],
    type: '',
    toggleBusiness: false,
    houseTotalPrice: '',
    downPayRatio: 30,
    firstPayMoney: ''
  },
  goSheet(e){
    console.log(e.target.id)
    switch (e.target.id) {
      case 'year':
       this.setData({
         type: 'year',
         actions:[
           {
             name: '30'
           },
           {
             name: '29'
           },
           {
             name: '28'
           },
           {
             name: '27'
           },
           {
             name: '26'
           },
           {
             name: '25'
           },
           {
             name: '24'
           },
           {
             name: '23'
           },
           {
             name: '22'
           },
           {
             name: '21'
           },
           {
             name: '20'
           },
           {
             name: '19'
           },
           {
             name: '18'
           },
           {
             name: '17'
           },
           {
             name: '16'
           },
           {
             name: '15'
           },
           {
             name: '14'
           },
           {
             name: '13'
           },
           {
             name: '12'
           },
           {
             name: '11'
           },
           {
             name: '10'
           },
           {
             name: '9'
           },
           {
             name: '8'
           },
           {
             name: '7'
           },
           {
             name: '6'
           },
           {
             name: '5'
           },
           {
             name: '4'
           },
           {
             name: '3'
           },
           {
             name: '2'
           },
           {
             name: '1'
           }
         ]
       });
            break;
      case 'profileRate':
        this.setData({
          type: 'profileRate',
          actions: [
            {
              name: '旧版基准利率'
            },
            {
              name: '最新LPR'
            }
          ]
        });
        break;
      case 'loanRate' :
        this.setData({
          type: 'loanRate',
          actions: [
            {
              name: 3.43
            },
            {
              name: 3.68
            },
            {
              name: 3.92
            },
            {
              name: 4.17
            },
            {
              name: 4.41
            },
            {
              name: 4.66
            },
            {
              name: 5.15
            },
            {
              name: 5.39
            },
            {
              name: 5.64
            },
            {
              name: 5.88
            },
            {
              name: 6.13
            },
            {
              name: 6.37
            },
          ]
        });
        break;
      case 'firstPayRatio':
        this.setData({
          type: 'firstPayRatio',
          actions: [
            {
              name: 20
            },
            {
              name: 25
            },
            {
              name: 30
            },
            {
              name: 35
            },
            {
              name: 40
            },
            {
              name: 45
            },
            {
              name: 50
            },
            {
              name: 55
            },
            {
              name: 60
            },
            {
              name: 65
            },
            {
              name: 70
            },
            {
              name: 75
            },
            {
              name: 80
            },
          ]
        });
      default:
        break;
    }
    this.setData({ show: true });
  },
  onGetUserInfo(e) {
    console.log(e.detail);
  },
  onChange(event) {
    console.log(event)
  },
  onRadioChange(event) {
    this.setData({
      toggleBusiness: event.detail== "1" ? false : true,
      radio: event.detail
    });
  },
  //事件处理函数
  bindViewTap: function(e) {
    console.log(e)
    this.setData({
      index: e.target.dataset.index
    })
  },
  onClose:function(e){
    console.log(e)
    if(e.detail.detail === "" || !e.detail.detail){
      this.setData({
        show: false
      });
      return;
    }
    switch (e.detail.type) {
      case 'year':
        this.setData({
          limtyear: e.detail.detail
        });
        break;
      case 'profileRate':
        this.setData({
          commericeWay: e.detail.detail
        });
        break;
      case 'loanRate' :
        this.setData({
          basePR: e.detail.detail
        });
        break;
      case 'firstPayRatio' :
        this.setData({
          downPayRatio: e.detail.detail
        });
        break;
      default:
        break;
    }
    this.setData({
      show: false
    })
  },
  onLoad: function () {
   
 

    
  },
})
