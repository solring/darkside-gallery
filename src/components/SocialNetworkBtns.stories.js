import SocialNetworkBtns from "./SocialNetworkBtns"

export default {
  title: 'Sidebar/SocialNetworkBtns',
  component: SocialNetworkBtns
}
const Template = (args) => <SocialNetworkBtns {...args} />;
export const Default = Template.bind({});
Default.args = {
  color1: "#4466aa",
  color2: "#ee55aa",
}