/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './UserHome'
export {Login, Signup} from './auth-form'
export {default as AllPuzzles} from './AllPuzzles'
export {default as AllUsers} from './AllUsers'
export {default as SinglePuzzle} from './SinglePuzzle'
export {default as CartGuest} from './CartGuest'
export {default as CartUser} from './CartUser'
export {default as CreatePuzzle} from './Admin/CreatePuzzle'
export {default as EditPuzzle} from './Admin/EditPuzzle'
