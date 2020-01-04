import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { fbConfig } from '../config/fbConfig'

firebase.initializeApp(fbConfig)
firebase.firestore().settings({})

export { firebase }
