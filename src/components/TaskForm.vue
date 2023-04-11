<template>
    <form class="ml-40 mt-40" @submit.prevent="handleSubmit">
        <input 
        class="border-0 p-2 rounded text-gray-500 text-center m-30"
        type="text"
        placeholder="I need to......"
        v-model="newTask"
        >
        <button class="bg-yellow-400 p-2 border-0 rounded-4xl">Add</button>

    </form>
</template>

<script>
import { useTaskStore } from '../stores/TaskStore'
import { ref } from 'vue';
    export default {
        setup(){
            const taskStore = useTaskStore()

            const newTask = ref('')

            const handleSubmit = () => {
                if(newTask.value.length > 0){
                    taskStore.addTask({
                        title: newTask.value,
                        isFave: false,
                        id: Math.floor(Math.random() * 10000)
                    })
                }
                newTask.value = ''
            }
            return { handleSubmit, newTask }
        }
        
    }
</script>