import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../components/common/ErrorBoundary';
import routes from './routes/Routes';
import Footer from '../components/Footer';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';

const Header = React.lazy(() => import('../components/Header'));

function Root() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Suspense fallback={<Loading type="header" />}>
                        <Header />
                    </Suspense>
                    <main className="main container">
                        <Suspense fallback={<Loading />}>
                            <Switch>
                                {routes.map(({ path, Component }) => {
                                    return (
                                        <Route
                                            key={path}
                                            exact
                                            path={path}
                                            render={() => (
                                                <ErrorBoundary>
                                                    <Component />
                                                </ErrorBoundary>
                                            )}
                                        />
                                    );
                                })}
                                <Route render={() => <Error statusCode={404} type="error404" />} />
                            </Switch>
                        </Suspense>
                    </main>
                    <Footer />
                </BrowserRouter>
            </div>
        </>
    );
}

export default Root;
