import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'
import TaskForm from '../components/TaskForm.vue'
import Favorate from '../components/Favorate.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/edit',
            component: Edit
        },
        {
            path: '/add',
            component: TaskForm
        },
        {
            path: '/favorate',
            component: Favorate
        },
        
    ]
})

export default router