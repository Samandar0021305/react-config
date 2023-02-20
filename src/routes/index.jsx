import React, { Suspense, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'


import { route } from "./RenderRoute"


const RenderRoute = (route) => {
    route.map(val => {
        val.children && val.children.length ? (
            <React.Fragment key={val.id}>
                {<Route path={val.path} element={<val.component />} />}
                {RenderRoute(val.children)}
            </React.Fragment>
        ) : (
            <Route path={val.path} element={<val.component />} />
        )
    })
}



const index = React.memo(() => {
    const RenderRoutes = useMemo(() => RenderRoute(route), [route])

    return (
        <Suspense fallback={<h1>Loading....</h1>}>
            <Routes>
                {RenderRoutes}
            </Routes>
        </Suspense>
    )
})

export default index