import React from "react";
import axios from '../config/axios'
import UserProfile from "./UserProfile";
import Posts from "./Posts";
import { Container } from "react-bootstrap";
import CintaKoding from "./CintaKoding";
import { Row, Col } from "react-bootstrap"

class Dashboard extends React.Component {
    constructor () {
        super()
        this.state = {
            me: JSON.parse(localStorage.getItem('user')),
            users: [],
            posts: [],
            activePages: 1,
            isPostsLoading: true
        }
    }

    componentDidMount() {
        axios.get(`/posts?_start=${this.state.activePages}&_limit=10`)
            .then((response) => {
                const posts = response.data
                this.setState({ posts, isPostsLoading: false })
            })
        axios.get(`/users?_start=0&_limit=20`)
            .then((response) => {
                const users = response.data
                this.setState({ users, isPostsLoading: false })
            })
    }

    componentWillUnmount() {
        this.setState({ isPostsLoading: false})
    }

    render () {
        const { users, me, posts, isPostsLoading } = this.state
        return(
            <div className="App">
                <div className="mt-2">
                    <Container fluid>
                        <Row>
                        <CintaKoding />
                        <Col>
                        { isPostsLoading ? (
                            <div className="d-flex justify-content-center my-5">
                            <pre className="text-primary">Loading Posts... <span className="spinner-border spinner-border-sm mt-1"></span></pre>
                        </div>
                        ): <Posts posts={posts} users={users}/> }
                        </Col>
                        <UserProfile user={me} />
                        </Row>
                    </Container>
                </div>            
            </div>
        )
    }
}

export default Dashboard