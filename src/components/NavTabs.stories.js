import NavTabs from "./NavTabs"

import { categories } from "../utils/constants"

const decos = [
  (story) => <div className="p-4 bg-dark vh-100">{story()}</div>
]

export default {
  title: 'NavTabs/NavTabs',
  component: NavTabs,
  decorators: decos
}

const Template = (args) => <NavTabs {...args} />
export const Default = Template.bind({});
Default.args = {
  items: categories,
  selected: -1,
  selectedTags: null,
}

export const Selected = Template.bind({});
Selected.args = {
  items: categories,
  selected: 2,
  selectedTags: null,
}

export const SelectedTags = Template.bind({});
SelectedTags.args = {
  items: categories,
  selected: 0,
  selectedTags: [false, false, true, true, false, true],
}
