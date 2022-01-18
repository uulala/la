<template>
  <div class="la-xiyouji" ref="xiyouji">
    <slot />
    <div class="box">
      <div class="bajie"></div>
      <div class="tangseng"></div>
      <div class="shaseng"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LaXiyouji",
  mounted() {
    const cw = this.$refs.xiyouji.clientWidth;
    const root = document.documentElement;
    const ss = cw + 590 + 210;
    root.style.setProperty("--cw", `${-cw}px`);
    root.style.setProperty("--cw2", `${ss}px`);
    root.style.setProperty("--time", `${ss / 100}s`);
  },
};
</script>
<style >
:root {
  --cw: -600px;
  --cw2: 1400px;
  --time: 10s;
}
.la-xiyouji {
  position: relative;
  height: 200px;
  background-image: linear-gradient(
    to bottom right,
    rgb(245, 163, 176),
    rgb(247, 247, 78),
    rgb(189, 189, 26),
    rgb(160, 144, 52)
  );
  overflow: hidden;
}

.box {
  position: absolute;
  height: 100%;
  right: var(--cw);
  top: 20px;
  animation: boxWalk var(--time) linear infinite;
}

@keyframes boxWalk {
  0% {
    right: 0;
  }
  100% {
    right: var(--cw2);
  }
}

.bajie {
  position: absolute;
  top: 0;
  right: -205px;
  width: 200px;
  height: 200px;
  z-index: 9999;
  background: url("~@/assets/o_bajie.png") 0 0 no-repeat;
  animation: bjWalk 1s steps(8) infinite;
}
.tangseng {
  position: absolute;
  top: 0;
  right: -390px;
  width: 170px;
  height: 200px;
  z-index: 9999;
  background: url("~@/assets/o_tangseng.png") 0 0 no-repeat;
  animation: tsWalk 1s steps(8) infinite;
}
.shaseng {
  position: absolute;
  top: 0;
  right: -590px;
  width: 210px;
  height: 200px;
  z-index: 9999;
  background: url("~@/assets/o_shaseng.png") 0 0 no-repeat;
  animation: ssWalk 1s steps(8) infinite;
}
@keyframes bjWalk {
  100% {
    background-position-x: -1600px;
  }
}
@keyframes tsWalk {
  100% {
    background-position-x: -1360px;
  }
}
@keyframes ssWalk {
  100% {
    background-position-x: -1680px;
  }
}
</style>
