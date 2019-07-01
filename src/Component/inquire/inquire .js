import React,{Component} from 'react';
import {Button,Menu, Icon,PageHeader, List, Typography,Pagination,Input } from 'antd';
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
const { SubMenu } = Menu;
const { Search } = Input;
const data = [
  '德里克.罗斯',
  '勒布朗.詹姆斯',
  '克里斯.保罗',
];
var bbtn=document.getElementById('bbtn');
var search2=document.getElementById('search');
var text=document.getElementsByTagName('p')[0];
var text1=text.innerHTML;
var arr=[];
var str=text1;
bbtn.onclick=function(){
  str=text1
  arr=search2.value;
  str=str.split(arr).join('<span>'+arr+'</span>');
  text.innerHTML=str;
}
function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

class Home extends  Component{
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };
  render() {
    return(
      <div>
        <div style={{position:"fixed", top: 0, left: 0, width: '100%',zIndex:'1000',}}>
          <Link to="/"><PageHeader style={{backgroundColor:"#FF8C00",}} onBack={() => null} title="返回" subTitle="Home" />,</Link>
          <img style={{width:'170px',height:'60px',position:'absolute',top:'0px',right:'0px',}} src={require('../../../src/Image/源浩网.png')}/>
        </div>
        <div style={{ display:"flex"}}>

          <div style={{
            height:'100vh',
            flex:'0.5',
          }}>
            <Menu
              mode="inline"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              style={{ width: 256 ,marginTop:'50px',backgroundColor:'\t#FAF0E6',}}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
              <Icon type="appstore" />
              <span>数据查询</span>
            </span>
                }
              >
                <Menu.Item key="1"><Link to="/inquire">关键字搜索</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/keyWord">按时间顺序显示</Link></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                  <Icon type="setting" />
              <span>数据管理</span>
            </span>
                }
              >
                <Menu.Item key="5"><Link to="/addData">增加数据</Link></Menu.Item>
                <Menu.Item key="6">修改数据</Menu.Item>
                <Menu.Item key="7">删除数据</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          {/*<div style={{position:"absolute",top:"80px",left:"500px  "}}>*/}
          {/*  <Search type={text} name={"searchs"} placeholder="请输入关键字" onSearch={value => console.log(value)} enterButton />*/}
          {/*</div>*/}
        </div>
        <div style={{
          flex:2,
        }}>
          <h3 style={{ }}>Default Size</h3>
          <List style={{marginTop:'34px',zIndex:'99'}}
                header={<div>表头</div>}
                footer={<div>表尾</div>}
                bordered
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text mark></Typography.Text> {item}
                  </List.Item>
                )}
          />
          <input type="text" name="search" id="search" value="馋" onClick="this.value='' "/>
          <input type="button" name="" id="bbtn" value="搜索"/>
          <div id="div">
            <p>馋，在英文里找不到一个十分适当的字。罗马暴君尼禄，以至于英国的亨利八世，在大宴群臣的时候，常见其撕下一根根又粗又壮的鸡腿，举起来大嚼，旁若无人，好一副饕餮相！但那不是馋。埃及废王法鲁克，据说每天早餐一口气吃二十个荷包蛋，也不是馋，只是放肆，只是没有吃相。对有某一种食物有所偏好，于是大量的吃，这是贪多无厌。馋，则着重在食物的质，最需要满足的是品味。上天生人，在他嘴里安放一条舌，舌上还有无数的味蕾，教人焉得不馋？馋，基于生理的要求；也可以发展成为近于艺术的趣味。
              也许我们中国人特别馋一些。馋字从食，有声。毚音谗，本义是狡兔，善于奔走，人为了口腹之欲，不惜多方奔走以膏馋吻，所谓“为了一张嘴，跑断两条腿”。</p>
        </div>
      </div>
      // <div style={{textAlign:'center'}}>
      //   <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
      // </div>
      // </div>
    )
  }
}
export default Home;
