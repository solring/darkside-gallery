import PictureGrid from "./PictureGrid"
import testPic from '../assets/images/emilywang.jpg'

const data = {
  title: "Title",
  desc: "this is a test",
  height: 320,
  img: testPic,
  tags: ["tag1", "tag2", "tag3"],
}

function randH() {
  return 150 + Math.floor(Math.random() * 400)
}

const mockList = Array(12).fill(0).map(() => ({...data, height: randH()}))

export default {
  title: 'PicGrid/PictureGrid',
  component: PictureGrid
}

const Template = (args) => <PictureGrid {...args} />
export const Default = Template.bind({})
Default.args = {
  items: mockList
}