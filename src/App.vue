<template>
  <div class="container max-w-md min-h-screen mx-auto overflow-hidden shadow-md md:max-w-2xl">
    <!-- header -->
    <nav class="flex items-center justify-between p-5 mx-auto border-b max-w-7xl lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <div  class="w-auto h-8 logo">IoT 제어 데스크 웹</div>
        </a>
      </div>
      
      <div class=" lg:flex lg:flex-1 lg:justify-end">
        <span class="cursor-pointer material-symbols-outlined">move</span>
        <!-- <a href="#" class="font-semibold text-gray-900 text-sm/6">Log in <span aria-hidden="true">&rarr;</span></a> -->
      </div>
    </nav>

    <!-- Item Section -->
     <div class="px-5 divide-y divide-gray-100">
       <ul role="list" >
         <li class="flex justify-between py-5 gap-x-6">
           <div class="flex min-w-0 gap-x-4">
            <!-- data -->
            <span @click="on('1')" v-if="!lightCheck" class="material-symbols-outlined">lightbulb</span>
            <span @click="off('1')" v-else  class="material-symbols-outlined">emoji_objects</span>
            <div class="logo light-logo">조명 제어</div>
           </div>
           <div class="flex flex-col items-end shrink-0">
            <!-- toggle -->
            <ToggleSwitch  v-model="lightCheck" />
           </div>
         </li>
         <li class="flex justify-between py-5 gap-x-6">
           <div class="flex min-w-0 gap-x-4">
            <!-- data -->
            <span @click="on('2')" v-if="!airconCheck" class="material-symbols-outlined">lightbulb</span>
            <span @click="off('2')" v-else  class="material-symbols-outlined">emoji_objects</span>
            <div class="logo light-logo">에어컨 제어</div>
           </div>
           <div class="flex flex-col items-end shrink-0">
            <!-- toggle -->
            <ToggleSwitch  v-model="airconCheck" />
           </div>
         </li>
         <li class="flex justify-between py-5 gap-x-6">
           <div class="flex min-w-0 gap-x-4">
            <!-- data -->
            <span @click="on('3')" v-if="!beamProjector1" class="material-symbols-outlined">lightbulb</span>
            <span @click="off('3')" v-else  class="material-symbols-outlined">emoji_objects</span>
            <div class="logo light-logo">빔프로젝트#1 제어</div>
           </div>
           <div class="flex flex-col items-end shrink-0">
            <!-- toggle -->
            <ToggleSwitch  v-model="beamProjector1" />
           </div>
         </li>
       </ul>
     </div>
  </div>
</template>

<script setup lang="ts">
const lightCheck = ref<boolean>(false);
const airconCheck = ref<boolean>(false);
const beamProjector1 = ref<boolean>(false);

const on = (type: string) => {
  switch(type) {
    case "1":
      lightCheck.value = true;
      break
    case "2":
      airconCheck.value = true;
      break
    case "3":
      beamProjector1.value = true;
      break
  }
}


const off = (type: string) => {
  switch(type) {
    case "1":
      lightCheck.value = false;
      break
    case "2":
      airconCheck.value = false;
      break
    case "3":
      beamProjector1.value = false;
      break
  }
}
</script>

<style lang="scss" scoped>

.container {
  background: #83a4d4;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #b6fbff, #83a4d4);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #b6fbff, #83a4d4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.logo {

  color: #222425; /* Replace with your desired blue color */
  font-size: 20px; /* Adjust size as needed */
  font-weight: bold;
}

.light-logo {
  color: #222425;
  font-size: 16px;
}
</style>
