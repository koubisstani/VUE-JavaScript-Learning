<script>
import MyTitle from '@/components/MyTitle.vue'
import MyContainer2 from '@/components/MyContainer2.vue'
import CanvasInputCode from '@/components/CanvasInputCode.vue'

export default {
  components: {
    'my-title': MyTitle,
    'my-container2': MyContainer2,
    'canvas-input-code': CanvasInputCode
  }
}
</script>

<script setup></script>

<template>
  <my-container2>
    <my-title
      title1="Canvas exercises"
      title2="To draw a car, it is an ellipse representing two lines next to the car's
      body On behalf of the wheels, a small rectangle is placed in front of it
      to represent the sensors of the car"
    ></my-title>
    <canvas-input-code></canvas-input-code>
  </my-container2>
</template>

<style lang="less"></style>
