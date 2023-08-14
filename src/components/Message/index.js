// Write your code here
import './index.css'

const Message = status => {
  if (status === true) {
    return <h1 className="main-heading">Welcome User</h1>
  }
  return <h1 className="main-heading">Please Login</h1>
}

export default Message
