import HelloWorld from '../components/HelloWorld.vue'
import AccountsList from '../components/Accounts/List.vue'

const routes = [
    {
        path: '/',
        name: 'Hello',
        component: HelloWorld
    },
    {
        path: '/contas',
        component: AccountsList
    }
]

export default routes