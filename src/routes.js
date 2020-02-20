import VueRouter from 'vue-router'

import Home from './components/Home'
import UserList from './components/user/List'
import UserProfile from './components/user/Profile'
import EmployeesList from './components/employees/EmployeesList'
// import UserProfileForm from './components/user/ProfileForm'


export default new VueRouter({
    routes: [
        {
            path: '', // http://localhost:8080/
            component: Home
        },
        {
            path: '/users', // http://localhost:8080/users
            component: UserList
        },
        {
            path: '/users/:id', // http://localhost:8080/users/1
            component: UserProfile
        },
        {
            path: '/employees', // http://localhost:8080/users/1
            component: EmployeesList
        }
        // {
        //     path: '', // http://localhost:8080/users/1
        //     component: UserProfileForm
        // }
		// {
		// 	path: '*',
		// 	component: Error404
		// }
    ],
    mode: 'history' // http://localhost:8080/#/users => http://localhost:8080/users
})