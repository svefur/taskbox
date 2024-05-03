import PureInboxScreen from './PureInboxScreen.vue'
import { fireEvent, within } from '@storybook/test'

export default {
    component: PureInboxScreen,
    title: 'PureInboxScreen',
    tags: ['autodocs']
}

export const Default = {}

export const Error = {
    args: { error: true }
}

export const WithInteractions = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        await fireEvent.click(canvas.getByLabelText('Something again'))

        await fireEvent.click(canvas.getByLabelText('Something else'))
    }
}