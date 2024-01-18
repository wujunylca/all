<template>
  <CapsuleChart :config="config" style="height: 200px"></CapsuleChart>
</template>
<script setup lang="ts">
import { CapsuleChart } from "@kjgl77/datav-vue3";

const config = {
  data: [
    {
      name: "吃鸡",
      value: 55,
    },
    {
      name: "王者",
      value: 120,
    },
    {
      name: "卡丁车",
      value: 71,
    },
    {
      name: "曙光",
      value: 66,
    },
    {
      name: "酷跑",
      value: 80,
    },
    {
      name: "绝地",
      value: 35,
    },
    {
      name: "丧尸围城",
      value: 15,
    },
  ],
  colors: ["#e062ae", "#fb7293", "#e690d1", "#32c5e9", "#96bfff"],
  unit: "实时在线人数",
  labelNum: 8,
};
</script>
<style scoped></style>
