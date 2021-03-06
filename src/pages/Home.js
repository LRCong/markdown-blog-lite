import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './Home.css'

import GradualPicture from '../components/GradualPicture'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import BlogContent from '../components/BlogContent.js'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogType: "All", selectedBlog: ''
        };
    }

    handleNavClick = (e, type) => {
        e.preventDefault();
        this.setState({
            blogType: type
        });
    };

    handleSelect = (e, name) => {
        this.setState({ selectedBlog: name });
        this.props.history.push('/blog/' + this.state.selectedBlog);
    };

    render() {
        return <div className='app'>
            <GradualPicture
                words="吾将上下而求索"
                wordsSize={'35px'}
                wordsColor={'black'}
                imgUrl='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607428413945&di=7221b1de845e609e354875fab83d7602&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F9345d688d43f8794fc510cfbd51b0ef41ad53abc.jpg'
                imgHeight={'125px'}
                imgWidth={'90%'}
            ></GradualPicture>
            <div className="content-container">
                <Switch>
                    <Route exact path='/home' render={(props) => (<div>
                        <Header handleNavClick={this.handleNavClick}></Header>
                        <BlogList blogType={this.state.blogType} handleSelect={this.handleSelect}></BlogList>
                    </div>)}></Route>
                    <Route path='/home/blog/:name' component={BlogContent}></Route>
                </Switch>
            </div>
        </div>;
    }
}