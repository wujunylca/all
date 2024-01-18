<template>
  <div class="btn-warp">
    <div class="btn">
      <Button :bg="true">本周热度</Button>
    </div>
  </div>
  <ConicalColumnChart
    :config="config"
    style="height: 200px; width: 500px"
  ></ConicalColumnChart>
</template>
<script setup lang="ts">
import { ConicalColumnChart, Button } from "@kjgl77/datav-vue3";

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
      name: "绝地",
      value: 71,
    },
    {
      name: "曙光",
      value: 66,
    },
    {
      name: "丧尸围城",
      value: 80,
    },
    {
      name: "酷跑",
      value: 35,
    },
    {
      name: "卡丁车",
      value: 15,
    },
  ],
  img: [
    "http://datav.jiaminghi.com/img/conicalColumnChart/1st.png",
    "http://datav.jiaminghi.com/img/conicalColumnChart/2st.png",
    "http://datav.jiaminghi.com/img/conicalColumnChart/3st.png",
    "http://datav.jiaminghi.com/img/conicalColumnChart/4st.png",
    "http://datav.jiaminghi.com/img/conicalColumnChart/5st.png",
    "http://datav.jiaminghi.com/img/conicalColumnChart/6st.png",
    "http://datav.jiaminghi.com/img/conicalColumnChart/7st.png",
  ],
};
</script>
<style scoped>
.btn-warp {
  display: flex;
  justify-content: flex-end;
}
.btn {
  width: 100px;
  display: flex;
  justify-content: flex-end;
}
</style>
