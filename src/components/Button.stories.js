import Button from "./Button";

const decorators = [(story) => <div className="p-4 bg-primary">{story()}</div>]

export default {
  title: 'Primitives/Button',
  component: Button,
  decorators: decorators
};
const Template = (args) => <Button {...args}>Test content</Button>;
export const Default = Template.bind({});
Default.args = {
};