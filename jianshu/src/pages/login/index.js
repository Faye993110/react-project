import React, {PureComponent} from 'react';
import './style.css';
 import {connect} from 'react-redux';
// import {actionCreators} from './store';

class Login extends  PureComponent {
    componentDidMount(){
       
    }
    render(){
        return(
            <div className = 'loginWrapper'>
               <div className = 'loginBox'>
                   <input className = 'input' placeholder = 'ID'></input>
                   <input className = 'input' placeholder = 'Password'></input>
               </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({

})

const mapDispatch = (dispatch) => ({
   
  
})

export default connect(mapStateToProps, mapDispatch)(Login);