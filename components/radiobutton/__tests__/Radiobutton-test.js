/* global it, expect, describe */

import React from 'react'
import Radiobutton from '../'
import {mount} from 'enzyme'

const noop = () => {}

describe('Radiobutton', () => {
  it('should render a simple example', () => {
    const wrapper = mount(<Radiobutton name='test' onChange={noop} />)
    expect(wrapper.find(Radiobutton).length).toEqual(1)
  })

  it('should render given items', () => {
    const wrapper = mount(
      <Radiobutton name='test' items={['Dog', 'Cat', 'Mouse']} onChange={noop} />
    )
    const buttons = wrapper.find(Radiobutton)
    expect(buttons.length).toEqual(1)
    expect(buttons.text()).toEqual('DogCatMouse')
  })

  // it('should select given radio button', () => {
  //   const wrapper = mount(
  //     <Radiobutton
  //       name='test'
  //       items={['rb-Dog', 'rb-Cat', 'rb-Mouse']}
  //       selectedValue='rb-Mouse'
  //       onChange={noop}
  //     />
  //   )
  //   // cannot use class to find element since enzyme does not work with svg at the moment
  //   expect(wrapper.find('[value="rb-Mouse"]').node.checked).toBe(true)
  // })

  // it('should callback with current index on change event', (done) => {
  //   const callback = (item) => {
  //     expect(item).toEqual('rb-Dog')
  //     done()
  //   }
  //   const wrapper = mount(
  //     <Radiobutton
  //       name='test'
  //       items={['rb-Dog', 'rb-Cat', 'rb-Mouse']}
  //       selectedValue='rb-Mouse'
  //       onChange={callback}
  //     />
  //   )
  //   wrapper.find('[value="rb-Dog"]').simulate('change')
  // })
})
