import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from './routes/route';
import { MainLayout } from './layouts';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map(({ path, Component, Layout = MainLayout }, id) => {
                    return (
                        <Route
                            key={id}
                            path={path}
                            element={
                                <Layout>
                                    <Component />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
