import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { getFirestore, createFirestoreInstance, reduxFirestore } from 'redux-firestore'
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import thunk from 'redux-thunk'
import { App } from './components/App'
import { rootReducer } from './store/reducers/rootReducer'
import { firebase } from './config/firebaseConfig'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebase}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}
    >
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>, 
  document.getElementById('root')
)
