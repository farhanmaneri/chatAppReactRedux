
import firebase from '../../configrations/firebase'



// const set_data = ()=>{
//     return(dispatch)=>{
//         dispatch({
//             type:'SETDATA',
//             user:[{name:'ali', email:'ali@gmail.com'}] ,
//         })
//     }
// }
const facebook_login = (history)=>{

return (dispatch)=>{
    var provider = new firebase.auth.FacebookAuthProvider();
firebase.auth().signInWithPopup(provider)
.then(function(result) {
  var token = result.credential.accessToken;
  var user = result.user;
  let create_user = {
      name : user.displayName,
      email : user.email,
      profile : user.photoURL,
      uid : user.uid
  }
firebase.database().ref('/').child(`user/${user.uid}`).set(create_user)
.then(()=>{
    dispatch({type:'SETUSER', payload:create_user})
    alert('user login successfully')
    history.push('/chat')
})
  console.log('user===>', create_user)
})
.catch(function(error) {
  var errorMessage = error.message;
  console.log('error==>', errorMessage)
  });

}
}

const get_user = ()=>{
    return(dispatch)=>{
        let user = [];
        firebase.database().ref('/').child('user').on('child_added',(data)=>{
        user.push(data.val())
        })
        console.log(user)
        dispatch({type:'SETFIREBASEUSER', payload: user})
    }
}

export {
   get_user,
    facebook_login, 
    
   
}