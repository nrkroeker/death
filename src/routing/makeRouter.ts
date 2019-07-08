import createRouter, { Plugin, PluginFactory, Router, State } from 'router5';
import browserPlugin from 'router5-plugin-browser';
import { RouterStore } from 'stores';
// import { IRoute } from 'Interfaces';

function makeRouterPlugin(routes: any, store: RouterStore): PluginFactory {
    function routerPlugin(): Plugin {
        return {
            onTransitionSuccess(nextState: State, prevState: State) {
                const nextRoute = store.routes[nextState.name];
                store.setRoute(nextRoute);
            }
        }
    }
    routerPlugin.pluginName = 'MOBX_ROUTER5_PLUGIN';
    return routerPlugin;
}

export function makeRouter(routes: { [key: string]: any }, store: any): Router {
    const router = createRouter(Object.values(routes));
    router.usePlugin(
        browserPlugin(),
        makeRouterPlugin(routes, store)
    )
    return router;
}
