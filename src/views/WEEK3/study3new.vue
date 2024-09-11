<script>
import MyFooter from '@/components/MyFooter.vue'
import MyContainer from '@/components/MyContainer.vue'
import StudyContent from '@/components/StudyContent.vue'
import codeItem from '@/components/codeItem.vue'
import MyTitle from '@/components/MyTitle.vue'

export default {
  components: {
    'my-title': MyTitle,
    'my-footer': MyFooter,
    'my-container': MyContainer,
    'study-content': StudyContent,
    'code-item': codeItem
  }
}
</script>

<script setup>
import { nextTick } from 'vue'

nextTick(() => {
  const canvas = document.getElementById('robotCanvas')
  const ctx = canvas.getContext('2d')
  let x = canvas.width / 2
  let y = canvas.height / 2

  function updateCodeDisplay() {
    const codeDisplay = document.getElementById('codeDisplay')
    codeDisplay.textContent = `
  function draw() {
    ctx.beginPath()
    ctx.moveTo(500, 300)
    ctx.lineTo(550, 350)
    ctx.lineTo(500, 400)
    ctx.closePath()
    ctx.fillStyle = 'yellow'
    ctx.fill()
  }
  draw()
    `
  }
  function draw() {
    // 描边三角形
    ctx.beginPath()
    ctx.moveTo(500, 300)
    ctx.lineTo(550, 350)
    ctx.lineTo(500, 400)
    ctx.closePath()
    ctx.fillStyle = 'yellow'
    ctx.fill()
  }
  draw()
  updateCodeDisplay()
})
</script>

<script setup></script>

<template>
  <my-container>
    <header>
      <my-title title1="canvas line"></my-title>
    </header>
    <main style="margin-top: 20px">
      <canvas id="robotCanvas" width="1200" height="600"></canvas>
      <div id="codeDisplay"></div>
    </main>
    <footer>
      <study-content>
        <p>For drawing straight lines, use the lineTo() method.</p>

        <code-item>
          <template #code>lineTo(x, y)</template>
          <template #item
            >Draws a line from the current drawing position to the position
            specified by x and y</template
          >
        </code-item>
        <p>
          This method takes two arguments, x and y, which are the coordinates of
          the line's end point. The starting point is dependent on previously
          drawn paths, where the end point of the previous path is the starting
          point for the following, etc. The starting point can also be changed
          by using the moveTo() method.
        </p>
        <code-item>
          <template #code>beginPath()</template>
          <template #item>
            Creates a new path. Once created, future drawing commands are
            directed into the path and used to build the path up.</template
          >
        </code-item>

        <code-item>
          <template #code>closePath()</template>
          <template #item
            >Adds a straight line to the path, going to the start of the current
            sub-path.</template
          >
        </code-item>

        <code-item>
          <template #code>stroke()</template>
          <template #item>Draws the shape by stroking its outline.</template>
        </code-item>

        <code-item>
          <template #code>fill()</template>
          <template #item
            >Draws a solid shape by filling the path's content area.</template
          >
        </code-item>

        <p>
          The first step to create a path is to call the beginPath().
          Internally, paths are stored as a list of sub-paths (lines, arcs,
          etc.) which together form a shape. Every time this method is called,
          the list is reset and we can start drawing new shapes.
        </p>
        <br>
        <p>
          The second step is calling the methods that actually specify the paths
          to be drawn
        </p>
        <br>
        <p>
          The statement for the clockwise parameter results in the first and
          third row being drawn as clockwise arcs and the second and fourth row
          as counterclockwise arcs. Finally, the if statement makes the top half
          stroked arcs and the bottom half filled arcs.
        </p>
        <br>
        <p>
          The third, and an optional step, is to call closePath(). This method
          tries to close the shape by drawing a straight line from the current
          point to the start. If the shape has already been closed or there's
          only one point in the list, this function does nothing.
        </p>
        <br>
        <p>more look this</p>
        <p>
          https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
        </p>
        <my-footer week="3" num="3"></my-footer>
      </study-content>
    </footer>
  </my-container>
</template>

<style lang="less" scoped>
.choices {
  label {
    margin-left: 20px;
  }
}
#robotCanvas {
  background-color: #d3d3d3; /* Light grey background for the canvas */
}

#codeDisplay {
  width: 100%;
  margin: 20px auto;
  padding: 10px;
  border: 1px solid black;
  background-color: #f4f4f4;
  font-family: monospace;
  white-space: pre-wrap; /* Ensure code formatting is preserved */
  font-size: 18px;
}
</style>
