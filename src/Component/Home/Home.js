import React,{Component} from 'react';
import {Button,Menu, Icon,PageHeader, List, Typography,Pagination } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const data = [
  '公牛队.',
  '雷霆队',
  '鹈鹕队',
];
  // const x = (x,y) =>{return x * y };
  // document.getElementById("demo").innerText =x(10,4);
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
  function(){
    //电话
    var inputphone=document.getElementById("Phone");
    var spanphone=document.getElementById("phoneId");
    var phonecontent=inputphone.value;
    var regphone=/^(0?[1-9]{2,3}-?)?[1-9]\d{6,7}(-\d{1,4})?$/;
    if(regphone.test(phonecontent)){
      spanphone.innerHTML = "正确".fontcolor("green");
      return true;
    }else{
      spanphone.innerHTML = "格式不对".fontcolor("red");
      return false;
    }
  }
  render() {
    return(
      <div>
        <div style={{position:"fixed", top: 0, left: 0, width: '100%',zIndex:'1000',}}>
        <Link to="/Login"><PageHeader style={{backgroundColor:"#FF8C00",}} onBack={() => null} title="返回" subTitle="登录界面" />,</Link>
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
          </div>
        </div>

        </div>
        // <div style={{textAlign:'center'}}>
        //   <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
        // </div>,
        // </div>
    )
  }
}
export default Home;

