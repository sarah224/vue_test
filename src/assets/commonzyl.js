export default {
  user:{
    photo: require('../assets/zyl.jpg'),
    name: '张艳丽',
    job: '前端工程师 · 4年',
  },
  contact: {
    tel: '17601643592',
    Email: 'sarahzhx@163.com',
  },

  basicInfo:{
    home: '北京',
    school: '青岛大学 · 硕士',
    major: ' 信号与信息处理',
    birthday: '1989/03/31'
  },
  skills: [
    {name: 'HTML/HTML5', value: 95},
    {name: 'CSS/CSS3/Less', value: 88},
    {name: 'JavaScript/ES6', value: 88},
    {name: 'Vue+Element', value: 87},
    {name: 'React+Dva+Antd', value: 80},
    {name: 'NodeJS', value: 50},
    {name: 'Git&Webpack', value: 50},
    {name: 'PS', value: 30},
  ],
  myColors: ['#eeeeee'],
  myWord: [
    {
      // name为文字云内容
      name: "团队合作",
      // value为文字云权重
      size: 20,
      paddingLeft: 40,
      color: '#eeeeee'
    },
    {
      name: "大局观",
      size: 24,
      paddingLeft: 67,
      color: '#eeeeee'
    },
    {
      name: "主动性",
      size: 20,
      paddingLeft: 45,
      color: '#eeeeee'
    },
    {
      name: "学习能力",
      size: 16,
      paddingLeft: 20,
      color: '#eeeeee'
    },
    {
      name: "思路灵活",
      size: 18,
      paddingLeft: 70,
      color: '#eeeeee'
    },
    {
      name: "解决问题",
      size: 20,
      paddingLeft: 40,
      color: '#eeeeee'
    }
  ],
  companies:[{
    name: '北京云游九州时空科技有限公司',
    positions: ['前端研发工程师', '前端组长','项目经理'],
    projects:[
      "【遥感数据智能管理系统1.0、2.0、3.0】",
      "【常用地图JavaScript库的应用研究】",
    ],
    timestamp: '2017/08/11至今'
  }, {
    name: '青岛智能产业技术研究院',
    positions: ['专业技术工程师'],
    projects:[
      "【智能停车】",
    ],
    timestamp: '2015/05/11-2017/08/10'
  }]
}
