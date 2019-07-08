import { Route } from 'router5';

export interface IRoute extends Route {
    component: any;
    activate: () => void;
}