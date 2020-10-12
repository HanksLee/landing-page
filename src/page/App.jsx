import React from 'react';
import { hot } from "react-hot-loader";
import logo from '@/assets/img/Trade4U Logo.svg';
import product_stock from '@/assets/img/product_stock.svg';
import product_list from '@/assets/img/product_list.svg';
import product_pocket from '@/assets/img/product_pocket.svg';
import tradeItem_honor from '@/assets/img/tradeItem_honor.svg';
import tradeItem_platform from '@/assets/img/tradeItem_platform.svg';
import tradeItem_pay from '@/assets/img/tradeItem_pay.svg';
import tradeItem_support from '@/assets/img/tradeItem_support.svg';
import { Form, Input, Button, Select } from 'antd';
import './index.scss';
import 'antd/dist/antd.css';
import Block from '../components/Block';
import TradeItem from '../components/TradeItem';
import FeedbackItem from '../components/FeedbackItem';
<<<<<<< HEAD
import StepItem from '../components/StepItem';
import Johnson from '@/assets/img/Johnson.svg';
import AssetsItem from '../components/AssetsItem';
import trendIcon from '@/assets/img/trendIcon.svg';
import googleDownload from '@/assets/img/googleDownload.svg';
import iosDownload from '@/assets/img/iosDownload.svg';
import desktopDownload from '@/assets/img/desktopDownload.svg';
=======
import Johnson from '@/assets/img/Johnson.svg';
import AssetsItem from '../components/AssetsItem';

import trendIcon from '@/assets/img/trendIcon.svg';
>>>>>>> 7f5114cf492fdfa9bfdae6b923891dde003bf611



class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="lending-page">
        <header className="lending-page-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <span className="logoText">Trade4U</span>
          </div>
          <div>
            <Select
              defaultValue={"chinese"}
              placeholder="选择"
            >
              <Select.Option value={"chinese"}>
                <span>中文</span>
              </Select.Option>
              <Select.Option value={"english"}>
                <span>英文</span>
              </Select.Option>
            </Select>
          </div>
        </header>
        <div className="lending-page-content">
<<<<<<< HEAD
          <Block
=======
        <Block
>>>>>>> 7f5114cf492fdfa9bfdae6b923891dde003bf611
            classStyle="invest-background"
            titleTop="超过300"
            title="投资全球最受欢迎的资产"
            titleContent="从成熟的行业到新兴的新兴时代，从十几种不同的途径中进行明智的投资。"
            content={
              <>
<<<<<<< HEAD
                <TradeItem
=======
            <TradeItem
>>>>>>> 7f5114cf492fdfa9bfdae6b923891dde003bf611
                  tradeItemIcon={tradeItem_support}
                  tradeItemTitle="支持24/7"
                  tradeItemContent="一支會說您的母語的專業團隊將隨時為您提供支持。"
                />
              </>
            }
          />
          <Block
            classStyle=""
            titleTop="超过300种可用资产"
            title="投资全球最受欢迎的资产"
            titleContent="从成熟的行业到新兴的新兴时代，从十几种不同的途径中进行明智的投资。"
            content={
              <>
<<<<<<< HEAD
                <AssetsItem assetsText="原油WTI" />
                <AssetsItem assetsText="原油WTI" />
                <AssetsItem assetsText="原油WTI" />
                <AssetsItem assetsText="原油WTI" />
                <AssetsItem assetsText="原油WTI" />
                <AssetsItem assetsText="原油WTI" />
=======
               <AssetsItem assetsText="原油WTI"/>
               <AssetsItem assetsText="原油WTI"/>
               <AssetsItem assetsText="原油WTI"/>
               <AssetsItem assetsText="原油WTI"/>
               <AssetsItem assetsText="原油WTI"/>
               <AssetsItem assetsText="原油WTI"/>
>>>>>>> 7f5114cf492fdfa9bfdae6b923891dde003bf611
              </>
            }
          />
          <Block
            classStyle=""
            title="為什麼選擇WeTrader投資？"
            content={
              <>
                <TradeItem
                  tradeItemIcon={tradeItem_honor}
                  tradeItemTitle="屢獲殊榮的平台"
                  tradeItemContent="屢獲殊榮的軟件受到業內最受尊敬的專家的認可和讚揚。"
                />
                <TradeItem
                  tradeItemIcon={tradeItem_platform}
                  tradeItemTitle="可定制的界面"
                  tradeItemContent="定制平台以使其更適合您的需求，從圖表類型到顏色主題。"
                />
                <TradeItem
                  tradeItemIcon={tradeItem_pay}
                  tradeItemTitle="便捷取款"
                  tradeItemContent="您可以使用各種可用的付款系統即時提取資金。"
                />
                <TradeItem
                  tradeItemIcon={tradeItem_support}
                  tradeItemTitle="支持24/7"
                  tradeItemContent="一支會說您的母語的專業團隊將隨時為您提供支持。"
                />
              </>
            }
          />
          <Block
            classStyle="dark-background"
            title="強大且易於使用的功能"
            titleContent="有時投資可能會變得複雜而混亂。Trade4U使用直觀的工具打破了投資的複雜性，這些工具可以提高效率和簡便性。"
            content={
              <>
                <div><img src={product_stock} alt="product"></img></div>
                <div><img src={product_list} alt="product"></img></div>
                <div><img src={product_pocket} alt="product"></img></div>
              </>
            }
          />
          <Block
            classStyle=""
            title="客戶怎麼說"
            titleContent="受到全球超過46,000,000名投資者的信賴。"
            content={
              <>
                <FeedbackItem
                  feedbackText="一看到平台，便爱上了平台。它干净简洁的设计对我来说很重要。"
                  feedbackMember="马特．约翰逊"
                  memberPhoto={Johnson}
                />
                <FeedbackItem
                  feedbackText="一看到平台，便爱上了平台。它干净简洁的设计对我来说很重要。"
                  feedbackMember="马特．约翰逊"
                  memberPhoto={Johnson}
                />
                <FeedbackItem
                  feedbackText="一看到平台，便爱上了平台。它干净简洁的设计对我来说很重要。"
                  feedbackMember="马特．约翰逊"
                  memberPhoto={Johnson}
                />
                <FeedbackItem
                  feedbackText="一看到平台，便爱上了平台。它干净简洁的设计对我来说很重要。"
                  feedbackMember="马特．约翰逊"
                  memberPhoto={Johnson}
                />
                <FeedbackItem
                  feedbackText="一看到平台，便爱上了平台。它干净简洁的设计对我来说很重要。"
                  feedbackMember="马特．约翰逊"
                  memberPhoto={Johnson}
                />
              </>
            }
          />
          <Block
<<<<<<< HEAD
            classStyle=""
            title="很容易上手"
            content={
              <>
                <StepItem
                alignText="left"
                 stepItemStep="1"
                stepItemTitle="注册"
                stepItemContent="使用您的电子邮件地址免费创建一个帐户"
                />
                <StepItem
                alignText="center"
                 stepItemStep="2"
                stepItemTitle="探索平台"
                stepItemContent="看到投资感觉而又不冒风险"
                />
                <StepItem
                alignText="right"
                 stepItemStep="3"
                stepItemTitle="投资赚钱"
                stepItemContent="选择一种资产，让您的金钱为您服务"
                />
              </>
            }
          />
          <Block
            classStyle="dark-background download-content"
=======
            classStyle="dark-background"
>>>>>>> 7f5114cf492fdfa9bfdae6b923891dde003bf611
            title="准备免费进入投资世界吗？"
            titleContent="立即下载使用平台。"
            content={
              <>
<<<<<<< HEAD
                <div className="download-icon-left"><img src={trendIcon} /></div>
                <div className="download-icon-right">
                  <div><img src={googleDownload} alt="download"/></div>
                  <div><img src={iosDownload} alt="download"/></div>
                  <div><img src={desktopDownload} alt="download"/></div>
                </div>
=======
              <div className="invest-icon">
              <img src={trendIcon}/>
              </div>
           
>>>>>>> 7f5114cf492fdfa9bfdae6b923891dde003bf611
              </>
            }
          />
        </div>
        <footer></footer>
      </div>
    )
  }
}

export default hot(module)(App);