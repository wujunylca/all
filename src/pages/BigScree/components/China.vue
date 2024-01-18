<template>
  <BorderBox10>
    <div class="center-warp">
      <div class="flop">
        <div class="flop-item">
          今日累计销量
          <DigitalFlop :config="state.config" style="height: 30px" />
        </div>
        <div class="flop-item">
          本周累计销量
          <DigitalFlop :config="state.config" style="height: 30px" />
        </div>
        <div class="flop-item">
          本月累计销量
          <DigitalFlop :config="state.config" style="height: 30px" />
        </div>
        <div class="flop-item">
          季度累计销量
          <DigitalFlop :config="state.config" style="height: 30px" />
        </div>
        <div class="flop-item">
          年度销量
          <DigitalFlop :config="state.config" style="height: 30px" />
        </div>
        <div class="flop-item">
          今日目标销量
          <DigitalFlop :config="state.config" style="height: 30px" />
        </div>
      </div>
      <div ref="chinaMap" class="map"></div>
    </div>
  </BorderBox10>
</template>

<script setup lang="ts">
import { DigitalFlop, BorderBox10 } from "@kjgl77/datav-vue3";
import { reactive, onMounted, onUnmounted, ref } from "vue";
import * as echarts from "echarts";
import * as china from "../../../source/china.json";
import chinaCityData from "../../../source/region-count.json";

const chinaMap = ref();

const state = reactive({
  timeInterval: 0,
  config: {
    number: [100],
    content: "{nt}万元",
  },
});

onMounted(() => {
  let myChart = echarts.init(chinaMap.value, "shine");
  echarts.registerMap("china", china);

  const dataSource = chinaCityData.map((item) => {
    return {
      name: item.region,
      value: item.count,
    };
  });

  console.log(dataSource, "ddd");

  const option = {
    tooltip: {
      formatter: function (params = { name: "", value: "" }) {
        console.log(params);
        return `${params?.name} 收入：${params?.value} 万元`;
      },
    },
    visualMap: {
      type: "piecewise",
      splitNumber: 2,
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 5,
      textGap: 5,
      textStyle: {
        fontSize: 10,
        color: "#b0c2f9",
      },
      min: 5,
      max: 600,
      calculable: true,
      seriesIndex: [0],
      inRange: {
        color: ["#7acaec", "#32c5e8", "#223423"],
      },
    },
    geo: {
      map: "china",
      roam: true, //开启鼠标缩放和漫游
      zoom: 1, //地图缩放级别
      selectedMode: "single",
      top: 10,
      bottom: 10,
      layoutCenter: ["50%", "50%"],
      itemStyle: {
        normal: {
          borderColor: "#7ad5ff7f",
          shadowOffsetY: 5,
          shadowBlur: 15,
          areaColor: "rgba(5,21,35,0.1)",
        },
      },
      //layoutSize: "100%", //保持地图宽高比
      // label: {
      //   show: true,
      //   fontSize: 10,
      //   color: "#ceac09",
      // },
      center: [105, 35],
    },
    series: [
      {
        name: "地域分布",
        type: "map",
        geoIndex: 0,
        itemStyle: {
          normal: {
            // 背景渐变色
            areaColor: {
              type: "linear-gradient",
              x: 0,
              y: 300,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "RGBA(19,96,187,1)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "RGBA(7,193,223,1)", // 50% 处的颜色
                },
              ],
              global: true, // 缺省为 false
            },
            borderColor: "#4ECEE6",
            borderWidth: 1,
          },
          emphasis: {
            areaColor: "#4f7fff",
            borderColor: "rgba(0,242,252,.6)",
            borderWidth: 2,
            shadowBlur: 10,
            shadowColor: "#00f2fc",
          },
        },
        data: dataSource,
      },
    ],
  };

  myChart.setOption(option);

  state.timeInterval = setInterval(() => {
    state.config.number[0] += Math.random() * 100;
  }, 1000);
});

onUnmounted(() => {
  clearInterval(state.timeInterval);
});
</script>
<style scoped>
.center-warp {
  padding: 24px;
}
.flop {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 24px;
  font-weight: 700;
}

.flop-item {
  width: 30%;
}

.map {
  width: 100%;
  height: 400px;
  flex: 1;
}
</style>
