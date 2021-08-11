import PicCard from "./PicCard"
import testPic from '../assets/images/emilywang.jpg'

const decos = [
  (story) => <div style={{width: "200px"}}>{story()}</div>
]

export default {
  title: 'PicGrid/PicCard',
  component: PicCard,
  decorators: decos
}

const Template = (args) => <PicCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: "Title",
  desc: "this is a test",
  height: 320,
  img: testPic,
  tags: ["tag1", "tag2", "tag3"],
}