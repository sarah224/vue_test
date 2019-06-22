<template>
    <div class="my_resume">
        <el-row>
            <el-col :span="6" class="slide">
                <div class="user">
                    <img :src="user.photo" alt="" class="photo">
                    <p class="name">{{user.name}}</p>
                    <p class="job">{{user.job}}</p>
                </div>

                <div class="contact">
                    <h4>
                        <icon name="comments" class="icon"></icon>
                        联系方式
                    </h4>
                    <p>
                        <icon name="phone" class="icon"></icon>
                         {{contact.tel}}
                    </p>
                    <p>
                        <icon name="envelope" class="icon"></icon>
                        {{contact.Email}}
                    </p>
                </div>
                <div class="basicInfo">
                    <h4>
                        <icon name="user-circle" class="icon"></icon>
                        基本资料
                    </h4>
                    <p>
                        <icon name="map-marker" class="icon"></icon>
                        {{basicInfo.home}}</p>
                    <p>
                        <icon name="university" class="icon"></icon>
                        {{basicInfo.school}}</p>
                    <p>
                        <icon name="graduation-cap" class="icon"></icon>
                        {{basicInfo.major}}
                    </p>
                    <p>
                        <icon name="birthday-cake" class="icon"></icon>
                        {{basicInfo.birthday}}
                    </p>
                </div>
                <div class="skills">
                    <h4>
                        <icon name="desktop" class="icon"></icon>
                        专业技能</h4>
                    <div v-for="(item, index) in skills" :key="index">
                        <p class="name">{{item.name}}</p>
                        <p class="fullValue">
                            <span class="value" :style="{width: item.value + '%'}"></span>
                        </p>
                    </div>
                </div>
                <h4>
                    <icon name="tags" class="icon"></icon>
                    自我评价
                </h4>
                <div>
                    <p v-for="(item, index) in myWord"
                       :key="index"
                       :style="{
                        fontSize: item.size + 'px',
                        color: item.color,
                        paddingLeft: item.paddingLeft + 'px'}">
                        {{item.name}}

                    </p>
                </div>

                <!--<div class="capability" ref="capability"></div>-->
            </el-col>
            <el-col :span="18" class="content">
                <h2>RESUME</h2>
                <div class="company">
                    <h4><icon name="building" class="icon"></icon> 工作经历</h4>
                    <el-timeline>
                        <el-timeline-item
                                v-for="(company, index) in companies"
                                :key="index"
                                placement="top"
                                :timestamp="company.timestamp"
                        >
                            <h5 class="name">
                                {{company.name}}
                            </h5>
                            <div>
                                <span class="frameTag"
                                      v-for="(position, index) in company.positions"
                                      :key="index">
                                    {{position}}
                                </span>
                            </div>
                            <p class="projects">
                                项目:
                                <span v-for="(project, index) in company.projects"
                                    :key="index">
                                    {{project}}
                                </span>
                            </p>

                        </el-timeline-item>
                    </el-timeline>
                </div>
                <div>
                    <h4><icon name="list-ul" class="icon"></icon> 项目经验</h4>
                    <el-timeline>
                        <el-timeline-item
                                v-for="(project, index) in projects"
                                :key="index"
                                placement="top"
                                :timestamp="project.timestamp"
                                >
                            <h5 class="name">
                                {{project.name}}
                            </h5>
                            <div v-if="project.frames">
                                <span class="frameTag" v-for="(frame, index) in project.frames" :key="index">
                                    {{frame}}
                                </span>
                            </div>
                            <p v-if="project.desc">
                                {{project.desc}}
                            </p>
                            <ol class="taskList">
                                <li v-for="(task, index) in project.tasks" :key="index">
                                    {{task}}
                                </li>
                            </ol>
                            <p v-if="project.achievement">
                                <icon name="trophy" class="icon2"></icon>
                                {{project.achievement}}
                            </p>
                        </el-timeline-item>
                    </el-timeline>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .my_resume{
        /*height: 200vh;*/
        ul{
            padding: 0;
        }
        .icon{
            padding-right: 8px;
        }
        .icon2{
            color: #83becb;
        }
        .slide{
            padding: 0 20px;
            height: 100vh;
            background-color: #83becb;
            h4{
                height: 50px;
                line-height: 50px;
            }

            .user{
                text-align: center;
                margin-bottom: 10px;
                .photo{
                    width: 14vh;
                    border-radius: 14vh;
                    margin-top: 30px;
                }
                .name{
                    font-size: 32px;
                    line-height: 40px;
                    height: 40px;
                }

            }
            .contact{
                p{
                    line-height: 26px;
                    height: 26px;
                }
                /*border-bottom: 1px solid;*/
            }
            .basicInfo{
                p{
                    line-height: 26px;
                    height: 26px;
                }

            }
            .skills{
                .name{
                    display: inline-block;
                    width: 80px;
                    padding-left: 8px;
                }
                .fullValue{
                    position: relative;
                    display: inline-block;
                    height: 15px;
                    width: 100%;
                    background-color: #eeeeee;
                    .value{
                        display: inline-block;
                        position: absolute;
                        height: 15px;
                        background-color: #cde6ec;
                    }
                }
            }
        }
        .content{
            height: 100vh;
            padding: 20px;
            h2{
                color: #83becb;
            }
            h4{
                line-height: 40px;
                height: 40px;
            }
            .name{
                font-size: 16px;
                /*margin-bottom: 6px;*/
            }
            .frameTag{
                color: #83becb;
                /*padding: 1px 8px;*/
                /*border-radius: 4px;*/
                /*border: 1px solid #83becb;*/
                /*margin: 4px;*/
            }
            .taskList{
                margin: 10px 0;
                font-size: 14px;
                padding-left: 20px;
                /*list-style: none;*/
            }
            .company{
                .projects{
                    margin: 8px 0;
                    font-size: 14px;
                }
            }
        }
    }
</style>

<script>
    // 引入基本模板
//    let echarts = require('echarts/lib/echarts');
    // 引入柱状图组件
//    require('echarts/lib/chart/radar');
//    require('echarts/lib/chart/bar');
    // 引入提示框和title组件
//    require('echarts/lib/component/tooltip')
//    require('echarts/lib/component/title')
    import commonzyl from '../assets/commonzyl'

    export default {
        components:{
        },
        data() {
            return {
                ...commonzyl,
                projects: [{
                    name: '遥感数据智能管理系统2.0~3.0（前端组长、项目经理）',
                    frames: ['React', 'Dva', 'umi', 'Antd', 'Material-UI', 'openlayers'],
                    desc:'',
                    tasks:[
                        "2.0 担任前端组长，负责制定开发计划，承担遥感数据管理和地图浏览页面的开发。",
                        "3.0 担任项目经理，负责产品重构功能设计、部分接口设计及前端整体交互设计，"
                        + "产品组件结构划分、负责搭建基本框架，承担登录及用户管理的开发。",
                    ],
                    achievement:"",
                    timestamp: '2018/06至今'
                }, {
                    name: '遥感数据智能管理系统1.0',
                    frames: ['Vue', 'Element', 'openlayers', 'Cesium','Echarts', 'Canvas'],
                    desc: '该产品是一款基于网格算法实现遥感数据免切片一键发布、快速浏览的数据管理系统，为遥感数据部门大量历史堆积数据及不断增加的新数据的管理及应用提供一种解决方案。',
                    tasks:[
                        "主要负责产品维护优化、需求开发及业务分支管理工作；",
                        "开发了无限加载列表组件，解决大量数据不分页快速浏览问题；",
                        "通过路由异步组件和懒加载解决了项目过大造成首页加载内容过多时间过长问题；",
                        "在地图浏览页面，基于openlayers和Echarts实现了随空间范围变动实时查询影像数据，分类创建统计结果，包括卫星分类统计及时间轴统计，使得查询统计更高效直观;",
                        "基于openlayers实现了多种地图功能，包括测量、标记、分屏对比、卷帘对比、影像轮播、局部视图等，并优化了地图浏览效果，使浏览更加顺畅;",
                        "利用网络获取功能配置文件的方法，解决产品定制化高、版本繁多对开发和测试造成的压力过重问题。"
                    ],
                    achievement:"",
                    timestamp: '2018/08/11至今'
                }, {
                    name: '常用地图JavaScript库的应用及拓展研究（独立负责人）',
                    frames: ['openlayers', 'cesium', 'leaflet', 'arcgis', '天地图'],
                    desc:"常用地图JavaScript库的技术调研、技术突破及demo开发，为本公司或客户相关提供技术支持和保障，对数管系统系列产品订单成交起到促进作用。",
                    tasks:[
//                        "负责常用地图JavaScript库的技术调研、技术突破及demo开发，为本公司或客户相关提供技术支持和保障，对数管系统系列产品订单成交起到促进作用。"
                    ],
                    achievement:"",
                    timestamp: '2017/12至今'
                },
//                    {
//                    name: '一款基于微信公众号的图片标记信息获取WebApp',
//                    frames: ['Vue', 'Element', 'Swiper'],
//                    esc:'',
//                    tasks:[
////                        "结合Swiper编写了图片展示组件，实现在移动端左右滑动切换展示图片及相应的文字。",
//                    ],
//                    achievement:"",
//                    timestamp: '2017/03-2017/06'
//                },
                    {
                    name: '智能停车（Web端、移动端开发）',
                    frames: ['jquery', 'Bootstrap', '百度地图'],
                    desc:'该项目为解决城市的停车问题、缓解交通压力、方便实名出行提供了一套整体解决方案，包括停车场数据服务平台、停车诱导平台、停车场规划平台、手机支付平台。 ',
                    tasks:[
                        "负责停车项目前期市场调研与竞品分析;",
                        "负责停车项目相关论文专利等科技文档撰写, 发表相关论文2篇（EI/中文）专利1项；",
                        "与产品经理沟通，参与停车项目功能及UI设计;",
                        "参与停车项目的Web端及移动端页面开发工作：基于百度地图实现了停车诱导展示功能，使用Websocket实时获取车辆位置并在地图上绘制车辆轨迹；更新了原来前端页面的兼容性问题，参与移动端页面的开发",
                    ],
                     achievement:"",
                    timestamp: '2015/05-2017/06'
                }
                ]
            }
        },
        mounted() {
//            this.initMyCapability();
        },
        methods: {
            initMyCapability () {
                let myChart = echarts.init(this.$refs.capability);
                myChart.setOption({
                    legend: {
                        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
                    },
                    radar: {
                        // shape: 'circle',
                        name: {
                            textStyle: {
                                color: '#fff',
                                backgroundColor: '#999',
                                borderRadius: 3,
                                padding: [2, 3]
                            }
                        },
                        indicator: [
                            { name: '团队协作', max: 10},
                            { name: '思维逻辑', max: 10},
                            { name: '大局观', max: 10},
                            { name: '主动性', max: 10},
                            { name: '解决问题', max: 10},
                            { name: '学习能力', max: 10}
                        ],
                        radius: 50
                    },
                    series: [{
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data : [
                            {
                                value : [8,8,8,8,8,8],
                                areaStyle: {
                                    normal: {
                                        color: 'rgba(255, 255, 255, 0.5)'
                                    }
                                }
                            }
                        ]
                    }]
                });
            }
        }
    }
</script>


