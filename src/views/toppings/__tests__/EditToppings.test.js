const {
    render,
    screen,
    fireEvent,
    within,
    getByRole,
    act,
    cleanup,
} = require('@testing-library/react')
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from 'store/store'
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom'
import { SettingsProvider } from 'common/contexts/SettingsContext'
import { MatxTheme } from 'components'
import EditToppings from '../EditToppings'
import { toppingsAdded } from '../store/toppingsSlice'
beforeAll(() => {
    store.dispatch(
        toppingsAdded({
            id: 1,
            tname: 'tname',
            tdesc: 'tdesc',
            price: 80,
        })
    )
})

beforeEach(() => {
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Navigate to="toppings/edit/1" replace />
                                }
                            />
                            <Route
                                path="toppings/edit/:id"
                                element={<EditToppings />}
                            />
                        </Routes>
                    </Router>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
})

const clickAndWait = async (element) => {
    await act(async () => {
        fireEvent.click(element)
    })

    await act(async () => {
        jest.runOnlyPendingTimers()
    })
}

afterEach(cleanup)

describe('testing view of ToppingsEdit Component', () => {
    test('should render EditToppings and display the heading Edit Form', async () => {
        const headingNote = screen.getByText(/Edit Form/i)
        expect(headingNote).toBeInTheDocument()
    })

    test('should have all input fields present in the edit form', async () => {
        const saveToppingsButtonElement = screen.getByRole('button', {
            name: /save/i,
        })
        const tnameElement = screen.getByLabelText(/Tname/i)
        const tdescElement = screen.getByLabelText(/Tdesc/i)
        const priceElement = screen.getByLabelText(/Price/i)

        expect(saveToppingsButtonElement).toBeInTheDocument()

        expect(tnameElement).toBeInTheDocument()
        expect(tdescElement).toBeInTheDocument()
        expect(priceElement).toBeInTheDocument()
    })

    test('should be able to give inputs to all fields of Toppings edit form', async () => {
        const tnameElement = screen.getByLabelText(/Tname/i)
        const tdescElement = screen.getByLabelText(/Tdesc/i)
        const priceElement = screen.getByLabelText(/Price/i)

        fireEvent.change(tnameElement, { target: { value: 'tname' } })
        fireEvent.change(tdescElement, { target: { value: 'tdesc' } })
        fireEvent.change(priceElement, { target: { value: 42 } })

        expect(tnameElement.value).toBe('tname')

        expect(tdescElement.value).toBe('tdesc')

        expect(priceElement.value).toBe('42')
    })

    test('should return error message when save button is clicked on invalid form', async () => {
        jest.useFakeTimers()
        const tnameElement = screen.getByLabelText(/Tname/i)
        const tdescElement = screen.getByLabelText(/Tdesc/i)
        const priceElement = screen.getByLabelText(/Price/i)

        fireEvent.change(tnameElement, { target: { value: '' } })
        fireEvent.change(tdescElement, { target: { value: '' } })
        fireEvent.change(priceElement, { target: { value: '' } })
        await act(async () => {
            jest.runOnlyPendingTimers()
        })
        const saveToppingsButtonElement = screen.getByRole('button', {
            name: /save/i,
        })

        await clickAndWait(saveToppingsButtonElement)

        const errorList = await screen.findAllByText('this field is required')
        expect(errorList).toHaveLength(3)
    })
})
