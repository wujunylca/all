<template>
  <div>
    <BorderBox8 style="overflow: hidden">
      <div class="roles-center">
        <ScrollBoard
          :config="testData"
          style="height: 290px; padding: 0px"
        ></ScrollBoard>
        <WaterLevelPond
          :config="waterConfig"
          style="width: 200px; height: 200px; margin-top: 60px"
        >
        </WaterLevelPond>
      </div>
    </BorderBox8>
  </div>
</template>

<script setup lang="ts">
import {
  // BorderBox13,
  // BorderBox11,
  BorderBox8,
  ScrollBoard,
  WaterLevelPond,
} from "@kjgl77/datav-vue3";

const testData = {
  data: [
    ["鲁班", "3333", "<span class='scr-up'>↑22%</span>"],
    ["王昭君", "46362", "<span class='scr-down'>↓13%</span>"],
    ["凯皇", "23532", "<span class='scr-up'>↑22%</span>"],
    ["吕布", "2343", "<span class='scr-down'>↓13%</span>"],
    ["貂蝉", "6643", "<span class='scr-up'>↑22%</span>"],
    ["关羽", "67333", "<span class='scr-down'>↓13%</span>"],
    ["亚瑟", "4455", "<span class='scr-up'>↑22%</span>"],
    ["韩信", "34534", "<span class='scr-down'>↓13%</span>"],
    ["女娲", "7454", "<span class='scr-up'>↑22%</span>"],
    ["杨戬", "345", "<span class='scr-down'>↓13%</span>"],
  ],
  header: ["英雄", "上场", "环比"],
  index: true,
  columnWidth: [50],
  align: ["center"],
  headerBGC: "#0f1325", //表头
  oddRowBGC: "#0f1325", //奇数行
  evenRowBGC: "#171c33", //偶数行
};

const waterConfig = {
  data: [55],
  shape: "round",
};
</script>

<style scoped>
.roles-center {
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: center;
  align-items: center;
}
</style>
