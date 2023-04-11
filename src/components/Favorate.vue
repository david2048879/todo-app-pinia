<template>
    <main>
       <!-- NEW TASK FORM -->
      <div class="new-task-form">
          <!-- <TaskForm /> -->
        </div>
  
   <!-- Filter -->
   <!-- <nav class="filter">
        <button @click="filter ='all'">all task</button>
        <button @click="filter ='favs'">favorites task</button>
      </nav> -->
  
      <!-- <div class="task-list" v-if="filter === 'all'">
          <p>you have {{ taskStore.totalCount }} tasks left to do</p>
      <div  v-for="task in taskStore.tasks " :key="task.id">
        <TaskDetails :task="task"/>
      </div>
      </div> -->
      <div class="task-list max-w-3xl m-6" >
        <p>you have {{ taskStore.favCount }} favoriate task</p>
      <div  v-for="task in taskStore.favs " :key="task.id">
        <TaskDetails :task="task"/>
      </div>

      </div>
    </main>
  </template>
  


<script >
import { useTaskStore } from '../stores/TaskStore';
import TaskDetails from '../components/TaskDetails.vue';
import { ref } from 'vue';

export default{
  components: { TaskDetails },
  setup(){
    const taskStore = useTaskStore();
    const filter = ref('all')

    return { taskStore, filter }
  }

}

</script>
