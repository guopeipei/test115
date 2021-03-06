import React, {Component} from 'react'
import NewsHeader from './news-header.js'
import NewsFooter from './news_footer.js'
import '../css/pc.css'
class App extends Component {

    render() {
        return (
            <div>
                <NewsHeader />
                {this.props.children}
                <NewsFooter />
            </div>
        )
    }
}

export default App