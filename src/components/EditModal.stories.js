import EditModal from "./EditModal"
import { Provider } from "react-redux"
import configureAppStore from '../store'

const store = configureAppStore()

const decos = [
  (story) => <Provider store={store}>{story()}</Provider>
]

export default {
  title: 'Post/EditModal',
  component: EditModal,
  decorators: decos
}
const Template = (args) => <EditModal {...args} />
export const Default = Template.bind({})
Default.args = {
  toggle: true
}