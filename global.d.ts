declare module 'redux-persist/integration/react' {
    import { ReactNode } from 'react';
    import { Persistor } from 'redux-persist';

    interface PersistGateProps {
        children?: ReactNode;
        loading?: ReactNode;
        persistor: Persistor;
        onBeforeLift?: () => void | Promise<void>;
    }

    export class PersistGate extends React.Component<PersistGateProps> { }
}
