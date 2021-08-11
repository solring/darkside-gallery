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
  items: categories
}