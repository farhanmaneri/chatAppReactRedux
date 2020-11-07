import React from 'react'
import {connect} from 'react-redux'
import { facebook_login } from '../../store/action'


class Home extends React.Component {
 
  render() {
  
    return (
      <div>
      
        <button onClick={()=>this.props.facebook_login(this.props.history)} >Facebook Login</button>
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  user: state.user
})
const mapDispatchToProps = (dispatch)=> ({
  
  facebook_login: (history)=> dispatch(facebook_login(history))
  
})
export default connect(mapStateToProps,mapDispatchToProps) (Home);
