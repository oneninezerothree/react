import React, { Component } from 'react'
import Header from '../../components/Header/Header';
import { withRouter } from "react-router-dom";
import axios from 'axios'
import './Detail.css'
export default withRouter(class Detail extends Component {
    state = {
        content: ''
    }
    componentDidMount() {
        const { id } = this.props.match.params
        console.log(id)
        this.getDetail(id)
    }
    render() {
        return (
            <div>
                <Header status={{
                    name: "",
                    template: (
                        <div style={{
                            color: 'white'
                        }}
                            onClick={() => {
                                window.history.go(-1)
                            }}
                        >返回</div>
                    )
                }} />
                <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
            </div>
        )
    }
    async getDetail(id) {
        const content = (await axios.get(`https://cnodejs.org/api/v1/topic/${id}`)).data.data.content
        this.setState({
            content
        })
        console.log(content)
    }
})