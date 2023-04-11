<script setup>
import Sidebar from "./components/Sidebar.vue";


</script>


<template>
  
  <div class="app">

 
    <Sidebar />
    <router-view />

    <div class="text-blue-500 "> hello tailwind css</div>
    
    
    
  </div>
</template>
<style src="./assets/tailwind.css"></style>

<style  lang="scss" >
:root{
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --prey: #64748b;
  --dark-alt: #1e293b;
  --light: #f1f5f9;
  --sidebar-width: 300px
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'fira sans', sans-serif;
}
body{
  background: var(--light);
}
button{
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app{
  display: flex;
  main{
    flex: 1 1 0;
    padding: 2rem;
  }
  @media (max-width: 768px){
    padding-left: 6rem;

  }
}

</style>
