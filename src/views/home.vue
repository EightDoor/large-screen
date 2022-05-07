<template>
  <v-chart class="chart" :option="option" />
  <v-chart class="chart1" :option="option1" />
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  setup: () => {
    const option = ref({
      title: {
        text: "Traffic Sources",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"],
      },
      series: [
        {
          name: "Traffic Sources",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            { value: 335, name: "Direct" },
            { value: 310, name: "Email" },
            { value: 234, name: "Ad Networks" },
            { value: 135, name: "Video Ads" },
            { value: 1548, name: "Search Engines" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });

    const option1 = ref({
      color: ["#67F9D8", "#FFE434", "#56A3F1", "#FF917C"],
      title: {
        text: "Customized Radar Chart",
      },
      legend: {},
      radar: [
        {
          indicator: [
            { text: "Indicator1" },
            { text: "Indicator2" },
            { text: "Indicator3" },
            { text: "Indicator4" },
            { text: "Indicator5" },
          ],
          center: ["25%", "50%"],
          radius: 120,
          startAngle: 90,
          splitNumber: 4,
          shape: "circle",
          axisName: {
            formatter: "【{value}】",
            color: "#428BD4",
          },
          splitArea: {
            areaStyle: {
              color: ["#77EADF", "#26C3BE", "#64AFE9", "#428BD4"],
              shadowColor: "rgba(0, 0, 0, 0.2)",
              shadowBlur: 10,
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(211, 253, 250, 0.8)",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(211, 253, 250, 0.8)",
            },
          },
        },
        {
          indicator: [
            { text: "Indicator1", max: 150 },
            { text: "Indicator2", max: 150 },
            { text: "Indicator3", max: 150 },
            { text: "Indicator4", max: 120 },
            { text: "Indicator5", max: 108 },
            { text: "Indicator6", max: 72 },
          ],
          center: ["75%", "50%"],
          radius: 120,
          axisName: {
            color: "#fff",
            backgroundColor: "#666",
            borderRadius: 3,
            padding: [3, 5],
          },
        },
      ],
      series: [
        {
          type: "radar",
          emphasis: {
            lineStyle: {
              width: 4,
            },
          },
          data: [
            {
              value: [100, 8, 0.4, -80, 2000],
              name: "Data A",
            },
            {
              value: [60, 5, 0.3, -100, 1500],
              name: "Data B",
              areaStyle: {
                color: "rgba(255, 228, 52, 0.6)",
              },
            },
          ],
        },
        {
          type: "radar",
          radarIndex: 1,
          data: [
            {
              value: [120, 118, 130, 100, 99, 70],
              name: "Data C",
              symbol: "rect",
              symbolSize: 12,
              lineStyle: {
                type: "dashed",
              },
              label: {
                show: true,
                formatter: function (params) {
                  return params.value;
                },
              },
            },
            {
              value: [100, 93, 50, 90, 70, 60],
              name: "Data D",
              areaStyle: {
                color: "red",
              },
            },
          ],
        },
      ],
    });

    return { option, option1 };
  },
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
