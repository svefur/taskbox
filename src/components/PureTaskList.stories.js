import PureTaskList from './PureTaskList.vue'
import * as TaskStories from './Task.stories'

export default {
    component: PureTaskList,
    title: 'PureTaskList',
    tags: ['autodocs'],
    decorators: [() => ( { template: '<div style="margin: 3em"><story/><div>' }) ],
    ArgTypes: {
        onPinTask: {},
        onArchiveTask: {},
    }
}

export const Default = {
    args: {
        tasks: [
            { ...TaskStories.Default.args.task, id: '1', title: 'Tasks 1' },
            { ...TaskStories.Default.args.task, id: '2', title: 'Tasks 2' },
            { ...TaskStories.Default.args.task, id: '3', title: 'Tasks 3' },
            { ...TaskStories.Default.args.task, id: '4', title: 'Tasks 4' },
            { ...TaskStories.Default.args.task, id: '5', title: 'Tasks 5' },
            { ...TaskStories.Default.args.task, id: '6', title: 'Tasks 6' }
        ]
    }
}

export const WithPinnedTasks = {
    args: {
        tasks: [
            ...Default.args.tasks.slice(0, 5 ),
            { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }
        ]
    }
}
export const WithArchivedTasks = {
    args: {
        tasks: [
            ...Default.args.tasks.slice(0, 5 ),
            { id: '6', title: 'Task 6 (archived)', state: 'TASK_ARCHIVED' }
        ]
    }
}

export const Loading = {
    args: {
        tasks: [],
        loading: true
    }
}

export const Empty = {
    args: {
        ...Loading.args,
        loading: false
    }
}