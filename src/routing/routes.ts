import { Death } from 'components';

export const routes = {
    Death: {
        name: 'Death',
        path: '/death',
        component: Death,
        activate: () => {
            console.log('Activated death game')
        }
    }
}