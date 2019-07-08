import React from 'react';
import './App.css';
import { RouterStore } from 'stores';

class App extends React.Component {
    private routerStore = new RouterStore();

    componentWillMount() {
        const { router } = this.routerStore;
        router.start();
    }

    render() {
        const Component = this.routerStore.renderedScene;
        return (
            <div id='App'>
                <Component />
            </div>
        );
    }
}

export default App;
