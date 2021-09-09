import React from 'react'
import { render, screen, waitFor, fireEvent, getByRole, getAllByTestId, waitForElementToBeRemoved } from '@testing-library/react'

import MainScreen from '../MainScreen'

import { Provider } from 'react-redux'
import createStore from '../../store'

// mock server
import mockServer from '../../mockServer'

let store = null
let server = null

beforeAll(() => {
  server = mockServer()
})

afterAll(() => {
  server.shutdown()
})

beforeEach(() => {
  store = createStore()
})

it('General tests: phone layout', async () => {
  const { container } = render(
    <Provider store={store}>
      <MainScreen />
    </Provider>
  )

  // Wait for fetch to complete
  await waitFor(() => screen.findByTestId('navTabs'), {timeout: 10000})
  await waitFor(() => screen.findByTestId('picGrid'), {timeout: 10000})

  // snapshot
  expect(container.firstChild).toMatchSnapshot()

  // Click tabs
  const tabs = screen.getByTestId('navTabs')
  const tab1 = getByRole(tabs, 'button', {name: "fan-art"})
  const tab2 = getByRole(tabs, 'button', {name: "illustration"})
  const tab3 = getByRole(tabs, 'button', {name: "design"})

  expect(screen.getAllByRole('button', {name: /#.*?/})).toHaveLength(9)

  fireEvent.click(tab1)
  // TODO: check articles

  fireEvent.click(tab2)
  // TODO: check articles

  fireEvent.click(tab3)
  // TODO: check articles
})

it('General tests: normal layout', async () => {

  const mockMedia = (query) => {
    return {
      matches: false,
      media: query,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }
  }
  global.matchMedia = mockMedia

  const { container } = render(
    <Provider store={store}>
      <MainScreen />
    </Provider>
  )

  // Wait for fetch to complete
  await waitFor(() => screen.findByTestId('navTabs'), {timeout: 10000})
  await waitFor(() => screen.findByTestId('picGrid'), {timeout: 10000})

  // snapshot
  expect(container.firstChild).toMatchSnapshot()

  // Click tabs
  const tabs = screen.getByTestId('navTabs')
  const tab1 = getByRole(tabs, 'button', {name: "fan-art"})
  const tab2 = getByRole(tabs, 'button', {name: "illustration"})
  const tab3 = getByRole(tabs, 'button', {name: "design"})

  fireEvent.click(tab1)
  const tag = await screen.findByText(/Golden Kamuy/)
  expect(screen.getAllByRole('button', {name: /#.*?/})).toHaveLength(6)

  fireEvent.click(tab2)

  fireEvent.click(tab3)
  expect(await screen.findByText(/Poster/)).toBeInTheDocument()
  expect(screen.getAllByRole('button', {name: /#.*?/})).toHaveLength(3)
})