<template>
  <div class="header">
    <div class="header-title">热门游戏数据统计可视化平台</div>
    <div class="header-left">
      <Decoration10 dur="4"></Decoration10>
    </div>

    <div class="header-center">
      <Decoration5 dur="2" :color="['#45a1f1', '#45a1f1']"></Decoration5>
    </div>
    <div class="header-right">
      <Decoration10 dur="4" :reverse="true"></Decoration10>
    </div>
  </div>
  <div class="header-extra">
    <div class="extra-left">
      <Button
        border="Border3"
        style="height: 30px; width: 300px; line-height: 30px"
        color="#c8161d"
        font-color="#e18a3b"
        >纯属个人虚构，认真你就输了</Button
      >
    </div>
    <div class="extra-center">
      <Decoration3 dur="10" />
    </div>
    <div class="extra-right">
      <Button
        border="Border5"
        color="#e18a3b"
        style="height: 30px; width: 300px; line-height: 30px"
      >
        {{ time.showTimeLabel }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Decoration5,
  // Decoration2,
  Decoration10,
  Decoration3,
  Button,
} from "@kjgl77/datav-vue3";
import { reactive, onMounted, onUnmounted } from "vue";

// import "../../../source/echarts-map-china.js";
// import "./source/echarts-map-shine.js";

const time = reactive({
  timeInterval: 0,
  showTimeLabel: "",
});

onMounted(() => {
  time.timeInterval = setInterval(() => {
    time.showTimeLabel = new Date().toLocaleString();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(time.timeInterval);
});
</script>

<style scoped>
.header {
  display: flex;
  padding: 0px 24px;
  padding-top: 48px;
  position: relative;
}

.header-title {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -90%);
  font-size: 30px;
  background-image: linear-gradient(#fff, #45a1f1);
  /* 背景绘制在方框内 */
  background-clip: text;
  /* 文字是透明的，文字就能透过展示出背景色 */
  -webkit-text-fill-color: transparent;
}
.header-left {
  flex: 1;
}

.header-right {
  flex: 1;
  transform: rotate(180deg) translateY(4px);
}
.header-center {
  width: 600px;
  position: relative;
  top: 8px;
}

.header-extra {
  padding: 0px 24px;
  display: flex;
  margin-top: 48px;
}

.extra-left,
.extra-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background-color: #0f1325;
  position: relative;
  margin-right: 40px;
}
.extra-left::after {
  position: absolute;
  content: "";
  top: 0px;
  right: -39px;
  width: 0px;
  height: 0px;
  border-top: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid #0f1325;
  border-left: 20px solid #0f1325;
  z-index: 2;
}
.extra-right {
  margin-right: 0px;
  margin-left: 30px;
  position: relative;
}
.extra-right::after {
  position: absolute;
  content: "";
  top: 0px;
  left: -39px;
  width: 0px;
  height: 0px;
  border-top: 20px solid transparent;
  border-left: 20px solid transparent;
  border-right: 20px solid #0f1325;
  border-bottom: 20px solid #0f1325;
}
.extra-center {
  width: 300px;
  border: 1px solid;
  margin: 0px 24px;
}
</style>
