import { Navigate } from "react-router-dom"


// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children, user }) {


    if (!user) {
        return <Navigate to='/landing' />
    }

    return (children)
}