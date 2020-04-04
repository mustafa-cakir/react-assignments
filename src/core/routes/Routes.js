import { lazy } from 'react';
import {
    URL_ASSIGNMENTS_1,
    URL_ASSIGNMENTS_2,
    URL_ASSIGNMENTS_3,
    URL_ASSIGNMENTS_4,
    URL_ASSIGNMENTS_5,
} from './constants';

const Homepage = lazy(() => import('../../screens/Homepage'));
const Assignments1 = lazy(() => import('../../screens/Assignments1'));
const Assignments2 = lazy(() => import('../../screens/Assignments2'));
const Assignments3 = lazy(() => import('../../screens/Assignments3'));
const Assignments4 = lazy(() => import('../../screens/Assignments4'));
const Assignments5 = lazy(() => import('../../screens/Assignments5'));

const routes = [
    {
        path: '/',
        Component: Homepage,
    },
    {
        path: URL_ASSIGNMENTS_1,
        Component: Assignments1,
    },
    {
        path: URL_ASSIGNMENTS_2,
        Component: Assignments2,
    },
    {
        path: URL_ASSIGNMENTS_3,
        Component: Assignments3,
    },
    {
        path: URL_ASSIGNMENTS_3,
        Component: Assignments3,
    },
    {
        path: URL_ASSIGNMENTS_4,
        Component: Assignments4,
    },
    {
        path: URL_ASSIGNMENTS_5,
        Component: Assignments5,
    },
];

export default routes;
