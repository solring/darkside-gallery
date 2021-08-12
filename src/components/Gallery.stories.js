import Gallery from "./Gallery"
import { Provider } from "react-redux"
import configureAppStore from '../store'

const store = configureAppStore()

const decos = [
  (story) => <Provider store={store}>{story()}</Provider>
]

export default {
  title: 'Gallery/Gallery',
  component: Gallery,
  decorators: decos
};

const Template = (args) => <Gallery {...args} />
export const Default = Template.bind({})
Default.args = {

}