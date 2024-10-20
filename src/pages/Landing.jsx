import { Navigate } from "react-router-dom"

export const Landing = () => {
    return (

        <h2> Landing</h2>

    )

}

// eslint-disable-next-line react/prop-types
export const Home = ({ user }) => {

    if (!user) {
        return (
            // Redireccionar
            <Navigate to={'/Landing'} />
        )

    }


    return (


        <h2>Home Page (Private)</h2>


    )

}


export const Dashboard = () => <h2>Dashboard Page</h2>
export const Analytics = () => <h2>Analytics Page (private : permiso analytic)</h2>
export const Admin = () => <h2>Admin Page (private : permiso admin)</h2>
