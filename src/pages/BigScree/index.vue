<template>
  <div class="screen-conteriner">
    <div class="screen" ref="screenRef">
      <Header></Header>
      <section class="con">
        <div class="con-left">
          <BorderBox13 style="height: 300px">
            <div class="test">
              <Area />
            </div>
          </BorderBox13>
          <BorderBox13 style="height: 300px">
            <div class="test">
              <Capsulechart />
            </div>
          </BorderBox13>
        </div>
        <div class="con-center">
          <China />
        </div>
        <div class="con-right">
          <RolesRank />
        </div>
      </section>
      <section class="con con2">
        <div class="con-extra-left">
          <BorderBox11 style="height: 300px">
            <div class="test">还没开始</div>
          </BorderBox11>
        </div>
        <div class="con-extra-right">
          <BorderBox11 style="height: 300px">
            <div class="test">还没开始</div>
          </BorderBox11>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import RolesRank from "./components/RolesRank.vue";
import Area from "./components/Area.vue";
import Capsulechart from "./components/Capsulechart.vue";
import China from "./components/China.vue";
// import { reactive } from "vue";
import {
  BorderBox13,
  BorderBox11,
  // BorderBox8,
  // ScrollBoard,
} from "@kjgl77/datav-vue3";
// import windowResize from "./utils";
// import windowResize from "./utils/resize";

// const config = reactive({});

// const { screenRef, calcRate, windowDraw, unWindowDraw } = windowResize();
// const { screenRef, updateRate, listerDraw, listerUnDraw } = windowResize();

// onMounted(() => {
//   listerDraw();
//   updateRate();
// });

// onUnmounted(() => {
//   listerUnDraw();
// });
</script>

<style scoped>
.test {
  padding: 40px 20px;
}

.screen-conteriner {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url("../../assets/home_bg.png");
}

.screen {
  background-image: url("../../assets/home_bg.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.con {
  display: flex;
  margin-top: 48px;
  color: #fff;
  gap: 10px;
  padding: 0px 24px;
}

.con2 {
  margin-top: 12px;
}

.con-left {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.con-center {
  width: 760px;
}
.con-right {
  flex: 1;
}

.con-extra-left,
.con-extra-right {
  flex: 1;
}
</style>
