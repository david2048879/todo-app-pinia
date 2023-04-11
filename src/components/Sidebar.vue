<template>
    <div>
        <aside class="bg-gray-800 min-h-screen flex flex-col" :class="`${is_expanded && 'is_expanded'}`">
        <div class="logo">
            <img src="../assets/vue.svg" alt="logo">
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>
        <h3 class="ml-9 text-white">Menu</h3>
        <div class="menu flex flex-col p-5 text-white" >
            <router-link class="button m-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..." to="/">
                <span class="material-icons">home</span>
                <span class="text ml-3">All Tasks</span>
            </router-link>
            <router-link class="button m-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..." to="/add">
                <span class="material-icons">add</span>
                <span class="text ml-3">Add New todo</span>
            </router-link>
            <router-link class="button m-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..." to="/edit">
                <span class="material-icons">edit</span>
                <span class="text ml-3">Edit</span>
            </router-link>
            <router-link class="button m-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..." to="/favorate">
                <span class="material-icons">favorite</span> 
                <p class="fav-n relative left-5 bottom-9 text-red-400"> {{ taskStore.favCount }}</p>
                <span class="text ml-3 ml-10 relative bottom-12 " >Favorates Task</span>
            </router-link>
            
            
        </div>
    </aside>
    </div>
    
</template>

<script setup>
import { useTaskStore } from '../stores/TaskStore';

import { ref } from 'vue'
const taskStore = useTaskStore();
const is_expanded = ref(false)

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
}





</script>
<style src="../assets/tailwind.css"></style>

<style lang="scss" scoped>
// .fav-n{
//    color: red;
//    background: rgb(235, 167, 167);
//    font-weight: bold;
//     position: relative;
//     right: 30px;
//     top: -10px;
//     padding: 3px;

    
// }
// aside{
//     display: flex;
//     flex-direction: column;
//     width: calc(2rem + 32px);
//     min-height: 100vh;
//     overflow: hidden;
//     padding: 1rem;

//     background: var(--dark-alt);
//     color: var(--light);

//     .logo{
//         margin-bottom: 1rem;
//         img{
//             width: 2rem;
//         }
//     }
    .menu-toggle-wrap{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle{
            transition: 0.2s ease-out;

            .material-icons{
                font-size: 2rem;
                color: var(--light);
            }
            &:hover{
                .material-icons{
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
        
    }
    // h3, .button .text{
    //     opacity: 0;
    //     transition: 0.3s ease-out;
    // }
    // h3{
    //     color: gray;
    //     font-size: 0.875rem;
    //     margin-bottom: 0.5rem;
    //     text-transform: uppercase;
    // }

   
    // .menu{
    //     margin: 0 -1rem;
    //     .button{
    //         display: flex;
    //         align-items: center;
    //         text-decoration: none;
    //         padding: 0.5rem 1rem;
    //         transition: 0.2s ease-out;

    //         .material-icons{
    //             font-size: 2rem;
    //             color: var(--light);
    //             margin-right: 1rem;
    //             transition: 0.2s ease-out;
    //         }
    //         .text{
    //             color: var(--light);
    //             transition: 0.2s ease-out;
    //         }
    //         &:hover, &.router-link-exact-active{
    //             background: rgb(101, 98, 98);
    //             .material-icons{
    //             color: var(--primary);
    //         }
    //         }
    //         &.router-link-exact-active{
    //             border-right: 5px solid var(--primary);
    //         }
           
    //     }

    // }
    // &.is_expanded{
    //     width: var(--sidebar-width);

    //     .menu-toggle-wrap{
    //         top: -3rem;

    //         .menu-toggle{
    //             transform: rotate(-180deg);
    //         }
    //         h3, .button .text{
    //          opacity: 2;
        
    //         }
    //         .button{
    //             .material-icons{
    //                 margin-right: 1rem;
    //             }
    //         }
        
           
    //     }
    // }

    // transition: 0.2s ease-out;
    // @media(max-width: 768px){
    //     position: fixed;
    //     z-index: 99;
    // }
    


</style>