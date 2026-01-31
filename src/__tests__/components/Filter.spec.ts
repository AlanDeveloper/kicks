import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Filter from '../../components/Filter.vue'
import { sneakersMock } from '../../mocks/sneakers'
import { categoriesMock } from '../../mocks/categories'
import { Category } from '../../types/Category'

const factory = (props = {}) => {
  return mount(Filter, {
    props: {
      filteredSneakers: sneakersMock,
      categories: categoriesMock,
      activeCategory: 0,
      ...props,
    },
  })
}

describe('Filter.vue', () => {
  it('renders the title correctly', () => {
    const wrapper = factory()

    expect(wrapper.text()).toContain('Todos os produtos')
  })

  it('displays the product count', () => {
    const wrapper = factory()

    const itemsCount = sneakersMock.length
    expect(wrapper.text()).toContain(`${itemsCount} produtos disponíveis`)
  })

  it('renders filter buttons', () => {
    const wrapper = factory()

    expect(wrapper.text()).toContain('Todos')

    categoriesMock.forEach((category: Category) => {
      expect(wrapper.text()).toContain(category.name)
    })
  })

  it('applies active class to the selected category', async () => {
    const wrapper = factory({
      activeCategory: categoriesMock[0].id,
    })

    await wrapper.vm.$nextTick()

    const activeButton = wrapper
      .findAll('button')
      .find((button) => button.text() === categoriesMock[0].name)

    expect(activeButton?.classes()).toContain('bg-primary')
  })
})
