import { test } from '~util/testing'
import VListTile from 'src/components/lists/VListTile'
import ripple from 'src/directives/ripple'
import Vue from 'vue/dist/vue.common'

VListTile.directives = {
  ripple
}

const stub = {
  name: 'router-link',
  render: h => h('button')
}

test('VListTile.vue', ({ mount }) => {
  it('should render correctly', () => {
    const wrapper = mount(VListTile)

    expect(wrapper.is('li')).toBe(true)
    expect(wrapper.find('a').length).toBe(1)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render <li> with <a> when using href prop', () => {
    const wrapper = mount(VListTile, {
      propsData: {
        href: 'http://www.google.com'
      }
    })

    const a = wrapper.find('a')[0]

    expect(wrapper.is('li')).toBe(true)
    expect(a.hasAttribute('href', 'http://www.google.com')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render <li> with <button> when using to prop', () => {
    const instance = Vue.extend()
    instance.component('router-link', stub)

    const wrapper = mount(VListTile, {
      propsData: {
        to: '/home'
      },
      instance
    })

    expect(wrapper.is('li')).toBe(true)
    expect(wrapper.find('button').length).toBe(1)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
