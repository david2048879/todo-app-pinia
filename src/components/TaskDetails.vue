<template>
    <div class="task p-4 bg-white mt-2  flex justify-between ">
        <h3 class="inline-block">{{ task.title }}</h3>
<div class="icons inline-block text-right">
    <i class="material-icons ml-3 p-2 text-xl text-gray-300 hover:bg-violet-600 active:text-red-700"  @click="taskStore.deleteTask(task.id)">delete</i>
    <i class="material-icons ml-3 p-2 text-xl text-gray-300 hover:bg-violet-600 active:text-red-700" :class="{ active: task.isFav}"
     @click="taskStore.toggleFav(task.id)"
     
     >favorite</i>
</div>



    </div>
</template>

<script>
import { useTaskStore } from '../stores/TaskStore'
    export default {
        props: ['task'],
        setup() {
            const taskStore = useTaskStore()

            return { taskStore }
        }
        
    }
</script>