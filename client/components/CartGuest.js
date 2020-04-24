import React from 'react'
import {connect} from 'react-redux'
import Cart from './Cart'
import {fetchPuzzlesForCart} from '../store/cart'

// on mount, this component copies data from window.localStorage
// which thunk will dispatch in api request for the corresponding puzzle data
// by sending the window.localStorage cartObj in the req.body as guestCart
// the returned puzzles go on state for info display in the cart
// quantity is added to the json data (array of puzzles) before res.jsoning it

class CartGuest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mounted: false
    }
  }

  componentDidMount() {
    const cartData = window.localStorage
    this.props.fetchCart(cartData)
    this.setState({mounted: true})
  }

  render() {
    if (this.state.mounted) {
      const {cartArray} = this.props
      console.log('Consolement from CartGuest component, our state:', cartArray)
      return (
        <div>
          <Cart orderArray={cartArray} />
        </div>
      )
    } else {
      return (
        <div>
          <h2>Loading cart...</h2>
          <img
            src="loadingPuzzleGif.webp"
            alt="Animated Puzzle Pieces"
            height="160"
            width="160"
          />
        </div>
      )
    }
  }
}

const mapState = state => {
  return {
    cartArray: state.cart.guestCart
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCart: cartData => dispatch(fetchPuzzlesForCart(cartData))
  }
}

export default connect(mapState, mapDispatch)(CartGuest)
