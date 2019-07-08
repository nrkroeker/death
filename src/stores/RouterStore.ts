import { Router } from 'router5';
import { action, computed, observable } from 'mobx';
import { makeRouter, routes } from 'routing';
import { IRoute } from 'interfaces';

export class RouterStore {
    @observable
    private route?: IRoute;
    readonly routes: { [key: string]: IRoute } = routes;
    router: Router = makeRouter(this.routes, this);

    @action
    setRoute = (route?: IRoute) => {
        this.route = route;
        if (this.route) {
            this.route.activate();
        }
    }

    @action
    start = () => this.router.start()

    @computed
    get renderedScene() {
        return !this.route ? null : this.route.component;
    }
}
