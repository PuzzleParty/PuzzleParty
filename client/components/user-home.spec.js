/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {UserHome} from './UserHome'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('UserHome', () => {
  let userHome

  beforeEach(() => {
    const singleUser = {email: 'cody@email.com'}
    // userHome = shallow(<UserHome email="cody@email.com" />)
    userHome = shallow(<UserHome singleUser={singleUser} />)
  })

  it('renders the email in an h3', () => {
    expect(userHome.find('h3').text()).to.be.equal('cody@email.com')
  })
})
