export default class Auth{
  constructor(firebase){
    this.firebase = firebase;
  }

  signUp({ email, password, errorHandler, successHandler }) {
    this.firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((success)=>{
        successHandler(success)
      }).then(()=>{
        console.log("successfully added users")
      })
      .catch(function(error) {
        if(error)
          errorHandler(error)
      });
  }

  signIn({email, password, errorHandler, successHandler}) {
    console.log({email, password, errorHandler, successHandler})
    this.firebase.auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
      successHandler();
    })
    .catch(function(error) {
      if(error)
        errorHandler(error)
    })
  }

  signOut({ sucessHandler , erroHandler }) {
    this.firebase.auth().signOut()
    .then(()=>{
    })
    .catch((error)=>{
    });
  }

  forgotPassword({ email, firebase }){
    firebase.auth().sendPasswordResetEmail(
    email, this.actionCodeSettings)
    .then(function() {
      // Password reset email sent.
    })
    .catch(function(error) {
      // Error occurred. Inspect error.code.
    });
  }

  signInWithFacebook({ firebase , successHandler, errorHandler }){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(function() {
      firebase.auth().getRedirectResult().then(function(result) {
      }).catch(function(error) {
        errorHandler(error)
      });
    });
  }

}
