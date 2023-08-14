// Write your code here
import {Component} from 'react'
import './index.css'
// eslint-disable-next-line import/no-cycle
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {login: false}

  ChangeStatus = () => this.setState(prev => ({login: !prev.login}))

  render() {
    const {login} = this.state
    const button = login ? Logout(this.ChangeStatus) : Login(this.ChangeStatus)
    const message = Message(login)

    return (
      <div className="main-container">
        <div className="bg-container">
          <h1>{message}</h1>
          {button}
        </div>
      </div>
    )
  }
}

export default Home
