import { shallowMount } from '@vue/test-utils'
import Discover from '@/components/Discover.vue'

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Discover);
});

afterEach(() => {
  wrapper.destroy();
});

describe('Discover', () => {
  it('renders the component', () => {
    const div = wrapper.findAll('.discover_cards');

    expect(div.length).toBe(1);
  });
  
})