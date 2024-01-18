import { ref } from "vue";

export default function windowResize() {
  const screenRef = ref();

  const timer = ref(0);

  let scale = {
    width: "1",
    height: "1",
  };

  const baseWidth = 1920;
  const baseHeight = 1080;
  const baseRate = parseFloat((baseWidth / baseHeight).toFixed(5)); //维持设计稿的基本比率

  const updateRate = () => {
    console.log("-------333");
    if (!screenRef.value) {
      return;
    }

    const currentRate = parseFloat(
      (window.innerWidth / window.innerHeight).toFixed(5)
    );

    if (currentRate > baseRate) {
      //更宽
      scale.width = ((window.innerHeight * baseRate) / baseWidth).toFixed(5); //  浏览器应该渲染的宽度（浏览器的高度*基本比率）/设计稿的宽度

      scale.height = (window.innerHeight / baseHeight).toFixed(5);
    } else {
      //更高
      scale.width = (window.innerWidth / baseWidth).toFixed(5);
      scale.height = (window.innerWidth / baseRate / baseHeight).toFixed(5);
    }
    screenRef.value.style.transform = `scale(${scale.width},${scale.height})`;
  };

  const resize = () => {
    clearTimeout(timer.value);

    timer.value = window.setTimeout(() => {
      updateRate();
    }, 200);
  };

  const listerDraw = () => {
    window.addEventListener("resize", resize);
  };

  const listerUnDraw = () => {
    window.removeEventListener("resize", resize);
  };

  return {
    screenRef,
    updateRate,
    listerDraw,
    listerUnDraw,
  };
}
