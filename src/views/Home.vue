
<script >
import { useTaskStore } from '../stores/TaskStore';
import TaskDetails from '../components/TaskDetails.vue';
import { ref } from 'vue';
import TaskForm from '../components/TaskForm.vue';

export default{
  components: { TaskDetails, TaskForm },
  setup(){
    const taskStore = useTaskStore();
    const filter = ref('all')

    //FETCH TASK
    taskStore.getTasks()

    return { taskStore, filter }
  }

}

</script>



<template>
  <main>
     <!-- NEW TASK FORM -->
    <div class="new-task-form">
        <!-- <TaskForm /> -->
      </div>

 <!-- Filter -->
 <nav class="filter">
      <button @click="filter ='all'">all task</button>
      <button @click="filter ='favs'">favorites task</button>
    </nav>

    <!-- ----------------LOADING------------------ -->

    <!-- <div class="loading" v-if="taskStore.loading">Loading tasks....................</div> -->

    <div class="task-list" v-if="filter === 'all'">
        <p>you have {{ taskStore.totalCount }} tasks left to do</p>
    <div  v-for="task in taskStore.tasks " :key="task.id">
      <TaskDetails :task="task"/>
    </div>
    </div>
    <div class="task-list" v-if="filter ==='favs'">
      <p>you have {{ taskStore.favCount }} favoriate task</p>
    <div  v-for="task in taskStore.favs " :key="task.id">
      <TaskDetails :task="task"/>
    </div>

    <Favorate />
    </div>
  </main>
</template>



<style lang="scss" scoped>

</style>