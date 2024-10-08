import { Provider } from "react-redux"
import { persistor, store } from "."

import { PersistGate } from 'redux-persist/integration/react'
import { ReactNode } from 'react'

interface ChildrenProps {
    children: ReactNode
}


export function ReduxProvider({ children }: ChildrenProps) {
    return <Provider store={store}><PersistGate loading={null} persistor={persistor}>{children}</PersistGate></Provider>
}