const Home = React.lazy(() => import("../page/Home"))

export const route = [
    {
        id: 1,
        path: "/",
        component: Home
    }
]