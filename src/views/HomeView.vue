<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import * as THREE from 'three'

const router = useRouter()
const containerRef = ref(null)
const overlayRef = ref(null)

let effect = null
let scatterTimer = null
let isLeaving = false

onMounted(async () => {
  // Vanta 依赖全局 window.THREE，必须先挂上去再加载 vanta 模块
  window.THREE = THREE
  await import('../vendor/vanta.birds.min.js')

  const VANTA = window.VANTA
  if (!VANTA || !VANTA.BIRDS) return

  effect = VANTA.BIRDS({
    el: containerRef.value,
    THREE,
    mouseControls: true, // 鼠标移动时鸟群会避让，可以"玩"
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    scale: 1,
    scaleMobile: 1,
    backgroundColor: 0xffffff, // 白色背景
    backgroundAlpha: 1,
    color1: 0x5e81ac, // 柔和的钢蓝色
    color2: 0x88c0d0, // 浅霜蓝
    colorMode: 'varianceGradient',
    birdSize: 1.1,
    wingSpan: 30,
    quantity: 4, // 2^4=16 → 256 只鸟，性能与观感的平衡
    separation: 20,
    alignment: 20,
    cohesion: 20,
    speedLimit: 5,
  })
})

onUnmounted(() => {
  if (scatterTimer) {
    clearInterval(scatterTimer)
    scatterTimer = null
  }
  if (effect) {
    effect.destroy()
    effect = null
  }
})

// 点击任意处：鸟群从中心飞散 + 画面淡出，然后进入博客
const handleEnter = () => {
  if (isLeaving || !effect) return
  isLeaving = true

  // 持续把"捕食者"定位在屏幕中心，鸟群会向四周飞散
  const cx = effect.width / 2
  const cy = effect.height / 2
  scatterTimer = setInterval(() => {
    if (effect) effect.triggerMouseMove(cx, cy)
  }, 16)

  // 画面淡出
  const canvas = containerRef.value.querySelector('canvas')
  if (canvas) {
    canvas.style.transition = 'opacity 0.8s ease'
    canvas.style.opacity = '0'
  }
  if (overlayRef.value) {
    overlayRef.value.style.transition = 'opacity 0.6s ease'
    overlayRef.value.style.opacity = '0'
  }

  setTimeout(() => {
    if (scatterTimer) {
      clearInterval(scatterTimer)
      scatterTimer = null
    }
    router.push('/blog')
  }, 850)
}
</script>

<template>
  <div class="home" @click="handleEnter">
    <div class="vanta-container" ref="containerRef"></div>
    <div class="overlay" ref="overlayRef">
      <h1 class="title">我的博客</h1>
      <p class="hint">移动鼠标，千纸鹤会为你让路 ✦ 点击任意位置，让它们飞散，进入博客</p>
    </div>
  </div>
</template>

<style scoped>
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #ffffff;
  cursor: pointer;
  font-family: 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.vanta-container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none; /* 让点击穿透到 home */
  z-index: 2;
}

.title {
  font-size: 64px;
  font-weight: 700;
  color: #2d3047;
  margin: 0 0 18px;
  letter-spacing: 3px;
  text-shadow: 0 4px 24px rgba(255, 255, 255, 0.9);
}

.hint {
  font-size: 15px;
  color: #5a6473;
  letter-spacing: 1px;
  background: rgba(255, 255, 255, 0.7);
  padding: 9px 20px;
  border-radius: 999px;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 16px rgba(120, 140, 170, 0.12);
}

@media (max-width: 600px) {
  .title {
    font-size: 40px;
  }
  .hint {
    font-size: 13px;
    padding: 7px 14px;
  }
}
</style>
