import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { Block, View, Image, Text, Swiper, SwiperItem, ScrollView } from '@tarojs/components';
import SearchInput from '@/components/searchInput/index';
import { getMarketData } from '@/api/index';
import { AtRate } from 'taro-ui';
import messagePng from '@/assets/images/message.png'
import videoPng from '@/assets/images/video.png'
import videoCirclePng from '@/assets/images/video-circle.png'
import fileHeaderPng from '@/assets/images/file-header.png'
import bookPng from '@/assets/images/book.png'
import guessPng from '@/assets/images/guess.png'
import bestIcon from '@/assets/images/best-icon.png'
import authIcon from '@/assets/images/auth-icon.png'
import playPng from '@/assets/images/play.png'
import playColorPng from '@/assets/images/play-color.png'
import './market.scss';

class Market extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      isShow: false,
      searchVal: '' /* 空值，以上搜索输入框状态 */,
      indicatorDots: false,
      autoplay: true,
      circular: true,
      interval: 5000,
      duration: 500 /* 以上滑块视图容器 */,
      bannerList: [],
      iconList: [],
      adInfo: {},
      newsList: [],
      lessonList: [],
      partList: [],
      specialList: [],
      bookList: [],
      scrollBanner: [],
      guessList: [] /* 以上数据接口 */
    };
  }

  showMack = () => {
    let that = this;
    that.setState({
      isShow: true,
      searchVal: ''
    });
  };

  hideMask = () => {
    let that = this;
    that.setState({
      isShow: false
    });
  };

  // 获取市场列表API
  getMarketList = () => {
    let that = this;
    getMarketData()
      .then(res => {
        if (res.errorMsg == '0') {
          that.setState({
            bannerList: res.bannerList || [],
            iconList: res.iconList || [],
            adInfo: res.adInfo || {},
            newsList: res.newsList || [],
            lessonList: res.lessonList || [],
            partList: res.partList || [],
            specialList: res.specialList || [],
            bookList: res.bookList || [],
            scrollBanner: res.scrollBanner || [],
            guessList: res.guessList || []
          });
        }
      })
      .catch(err => {
        console.error(`请求接口失败:`, err);
      });
  };
  getMoreMarketList = () => {
    let that = this;
    that.state.guessList.length < 50 &&
      getMarketData()
        .then(res => {
          if (res.errorMsg == '0') {
            that.setState({
              guessList: that.state.guessList.concat(res.guessList)
            });
          }
        })
        .catch(err => {
          console.error(`请求接口失败:`, err);
        });
  };

  // componentWillMount(options = this.$router.params || {}) {}

  componentDidMount() {
    this.getMarketList();
  }

  componentDidShow() {}

  onPullDownRefresh = () => {
    Taro.stopPullDownRefresh();
  };
  onReachBottom = () => {
    this.getMoreMarketList();
  };
  onShareAppMessage = () => {};
  config = {
    navigationBarTitleText: '市场'
  };

  render() {
    const {
      isShow,
      searchVal,
      indicatorDots,
      circular,
      autoplay,
      interval,
      duration,
      bannerList,
      iconList,
      adInfo,
      newsList,
      lessonList,
      partList,
      specialList,
      bookList,
      scrollBanner,
      guessList
    } = this.state;

    const [partList0={}, partList1={}, partList2={}] = partList

    return (
      <View className="container market-container">
        <View className="search-wrap">
          {/* 提问 */}
          <SearchInput
            ref="searchRef"
            show={isShow}
            value={searchVal}
            market-class="search-input search-mask-input"
            showMack={this.showMack.bind(this)}
            hideMask={this.hideMask.bind(this)}
          />
          {/* 喇叭图标 */}
          <View className="search-button">
            <Image
              className="search-button-icon"
              src={messagePng}
            />
          </View>
        </View>
        {/*  滑块视图容器   */}
        <Swiper
          key={Math.random()}
          className="market-swiper-wrap"
          indicatorDots={indicatorDots}
          circular={circular}
          autoplay={autoplay}
          interval={interval}
          duration={duration}>
          {bannerList.map((item, index) => {
            return (
              <Block key={index}>
                <SwiperItem className="market-swiper">
                  <View className="market-swiper-item">
                    <Image src={item.src} className="market-swiper-img" />
                  </View>
                </SwiperItem>
              </Block>
            );
          })}
        </Swiper>
        {/*  滑块视图容器end   */}
        {/*  icon图标列表   */}
        <View className="market-icon-list">
          {iconList.map((item, index) => {
            return (
              <View className="market-icon-item" key={index}>
                <Image className="market-icon-img" src={item.icon} />
                <View className="market-icon-text">{item.title}</View>
              </View>
            );
          })}
        </View>
        {/*  banner广告  */}
        <View className="market-ad">
          <Image className="market-ad-img" src={adInfo.src} />
        </View>
        {/*  新闻列表   */}
        <View className="market-news-list">
          <View className="market-news-header">每日新知</View>
          {newsList.map(item => {
            return (
              <View className="market-news-item" key={item.id}>
                <Image className="market-news-icon" src={playPng} />
                <View className="market-news-title">{item.keyword + ' : ' + item.title}</View>
                <View className="market-news-time">{item.time}</View>
              </View>
            );
          })}
          <View className="market-news-footer">
            <View className="market-news-btn">
              <Image
                className="market-news-img"
                src={playColorPng}
              />
              <View className="market-news-text">免费播放全部</View>
            </View>
            <View className="market-news-more">查看更多>></View>
          </View>
        </View>
        {/*  私家课视频   */}
        <View className="market-video">
          <View className="market-video-header">
            <Image className="market-video-icon" src={videoPng} />
            <View className="market-video-text">私家课</View>
          </View>
          <View className="market-video-list">
            {lessonList.map(item => {
              return (
                <View className="market-video-item" key={item.id}>
                  <Image className="market-video-img" src={item.image} />
                  <View className="market-video-area">
                    <View className="market-video-title">{item.title}</View>
                    <View className="market-video-into">{item.nickname}</View>
                    <View className="market-video-price">
                      {item.time.toFixed(1) + '小时 ' + item.speak + '讲 ' + '¥' + item.price}
                    </View>
                  </View>
                  <View className="market-video-play">
                    <Image
                      className="market-play-btn"
                      src={videoCirclePng}
                    />
                    <View className="market-play-text">试听</View>
                  </View>
                </View>
              );
            })}
          </View>
          <View className="market-vidoe-footer">查看更多>></View>
        </View>
        {/*  部分广告   */}
        <View className="market-part">
          <View className="market-part-left">
            <View className="market-part-title">{partList0.title}</View>
            <Image className="market-part-img" src={partList0.image} />
          </View>
          <View className="market-part-right">
            <View className="market-part-top">
              <View className="market-part-text">
                <View className="market-part-title">{partList1.title}</View>
                <View className="market-part-tip">{partList1.tip}</View>
              </View>
              <Image className="market-part-img" src={partList1.image} />
            </View>
            <View className="market-part-bottom">
              <View className="market-part-text">
                <View className="market-part-title">{partList2.title}</View>
                <View className="market-part-tip">{partList2.tip}</View>
              </View>
              <Image className="market-part-img" src={partList2.image} />
            </View>
          </View>
        </View>
        {/*  课程特邀嘉宾   */}
        <View className="market-lesson">
          <View className="market-lesson-header">
            <Image
              className="market-lesson-icon"
              src={fileHeaderPng}
            />
            <View className="market-lesson-text">课程 · 特邀嘉宾</View>
          </View>
          <View className="market-lesson-list">
            {specialList.map(item => {
              return (
                <View className="market-lesson-item" key={item.id}>
                  <Image className="market-lesson-image" src={item.image} />
                  <View className="market-lesson-info">
                    <View className="market-lesson-title">{item.title}</View>
                    <View className="market-lesson-nickname">{item.nickname}</View>
                    <View className="market-lesson-actprice">{'¥' + item.price * 0.5}</View>
                    <View className="market-lesson-price">{'¥' + item.price}</View>
                  </View>
                </View>
              );
            })}
            <View className="market-lesson-more">查看更多>></View>
          </View>
        </View>
        {/*  新书抢先看  */}
        <View className="market-book">
          <View className="market-book-header">
            <Image className="market-book-icon" src={bookPng} />
            <View className="market-book-text">新书抢先看</View>
          </View>
          <View className="market-book-list">
            {bookList.map(item => {
              return (
                <View className="market-book-item" key={item.id}>
                  <Image className="market-book-img" src={item.image} />
                  <View className="market-book-name">{item.name}</View>
                  <View className="market-book-actprice">{'¥' + item.price * 0.5}</View>
                  <View className="market-book-price">{'¥' + item.price}</View>
                </View>
              );
            })}
            <View className="market-book-more">查看更多>></View>
          </View>
        </View>
        {/*  滚动视图banner  */}
        <View className="market-banner">
          <ScrollView className="market-scroll-view" scrollX="true">
            {scrollBanner.map((item, index) => {
              return (
                <View
                  className={
                    'market-banner-item ' + (index == scrollBanner.length - 1 ? 'last-item' : '')
                  }
                  key={item.id}>
                  <Image className="market-banner-img" src={item.src} />
                </View>
              );
            })}
          </ScrollView>
        </View>
        {/*  猜您喜欢   */}
        <View className="market-guess">
          <View className="market-guess-header">
            <Image className="market-guess-icon" src={guessPng} />
            <View className="market-guess-text">猜您喜欢</View>
          </View>
          <View className="market-guess-list">
            {guessList.map(item => {
              return (
                <View className="market-guess-item" key={item.id}>
                  <View className="market-guess-info">
                    <View className="market-guess-title">{item.title}</View>
                    <View className="market-guess-nickname">{item.nickname}</View>
                    {(item.bestAnswer || item.auth) && (
                      <View className="market-guess-wrap">
                        {item.bestAnswer && (
                          <Image
                            className="market-info-icon market-icon-best"
                            src={bestIcon}
                          />
                        )}
                        {item.auth && (
                          <Image
                            className="market-info-icon market-icon-auth"
                            src={authIcon}
                          />
                        )}
                      </View>
                    )}
                    {/* 星星评价 */}
                    <View className="market-guess-number">
                      <Text decode={true}>&nbsp;{item.number + '人参与'}</Text>
                    </View>
                    <View className="market-guess-score">
                      <AtRate className="market-score-item" size="15" value={item.score} />
                      <View className="market-guess-price">{'¥' + item.price}</View>
                    </View>
                  </View>
                  <Image className="market-guess-img" src={item.image} />
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

export default Market;
