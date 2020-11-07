import React from 'react'
import { connect } from 'react-redux'
import {get_user} from '../../store/action'

class Chat extends React.Component {
    componentDidMount(){
        this.props.get_user()
    }
    render() {
        let user = this.props.current_user;
        return (
            <div>
                <h1>Welcome! {user.name} </h1>
                <img src={user.profile} alt='' />
                <p>email: {user.email}</p>
                <div>
                    <h4>
                        Chat User:
                    </h4>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    current_user: state.current_user
})
  const mapDispatchToProps = (dispatch)=> ({

    get_user: ()=> dispatch(get_user())

  })
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
