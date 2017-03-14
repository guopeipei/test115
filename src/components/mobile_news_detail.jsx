import React, {Component} from 'react'
import {BackTop} from 'antd'
import axios from 'axios'


import MobileNewsBlock from './mobile_news_block'
import NewsComment from './news_comments'


class MobileNewsDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      news:''
    }
  }

  componentDidMount(){
    this.showDetail(this.props)
  }

  //当接收到父传过来新的props时调用
  componentWillReceiveProps(nextProps){
    this.showDetail(nextProps)
  }

  //显示新闻详情

  showDetail = (props) => {
    const uniquekey = this.props.params.news_id
    const url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${uniquekey}`
    axios.get(url)
        .then(response =>{
          const news = response.data
          this.setState({news})
        } )
  }

  render() {
    return (
      <div style={{padding:'10px'}}>
        <div className="mobileDetailsContainer" dangerouslySetInnerHTML={{__html: this.state.news.pagecontent}}></div>
        <hr/>
        <NewsComment newsId={this.props.params.news_id}/>
        <BackTop />
      </div>
    )
  }
}

export default MobileNewsDetail