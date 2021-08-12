import PictureGrid from "./PictureGrid"
import {mockItem} from '../utils/mockdata'

function randH() {
  return 150 + Math.floor(Math.random() * 400)
}

const mockList = Array(24).fill(0).map(() => ({...mockItem, height: randH()}))

export default {
  title: 'PicGrid/PictureGrid',
  component: PictureGrid
}

const Template = (args) => <PictureGrid {...args} />
export const Default = Template.bind({})
Default.args = {
  items: mockList
}