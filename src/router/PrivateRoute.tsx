import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { RootState } from '../store';

export const PrivateRoute = ({ children }: any) => {
    const { status } = useSelector((state: RootState) => state.auth);

    if (status === 'not-authenticated') {
        return <Navigate to='/login' replace />
    }
    return children;

}
