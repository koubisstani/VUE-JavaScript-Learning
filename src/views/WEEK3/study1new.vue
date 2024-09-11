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

  function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(450, 200, 200, 200)
    ctx.clearRect(480, 280, 100, 100)
    ctx.strokeRect(490, 320, 50, 50)
  }

  function updateCodeDisplay() {
    const codeDisplay = document.getElementById('codeDisplay')
    codeDisplay.textContent = `
  function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(450, 200, 200, 200)
    ctx.clearRect(480, 280, 100, 100)
    ctx.strokeRect(490, 320, 50, 50)
  }
    `
  }

  drawCircle()
  updateCodeDisplay()
})
</script>

<script setup></script>

<template>
  <my-container>
    <header>
      <my-title title1="Drawing rectangles"></my-title>
      <p>
        Unlike SVG, canvas only supports two primitive shapes: rectangles and
        paths (lists of points connected by lines). All other shapes must be
        created by combining one or more paths. Luckily, we have an assortment
        of path drawing functions which make it possible to compose very complex
        shapes.
      </p>
    </header>
    <main style="margin-top: 20px">
      <canvas id="robotCanvas" width="1200" height="600"></canvas>
      <div id="codeDisplay"></div>
    </main>
    <footer>
      <study-content>
        <p>
          canvas is an element introduced by HTML5, which provides an area for
             drawing through JavaScript. canvas itself does not have drawing capabilities,
              it is only a canvas, the real work of drawing is done through JavaScript.
        </p>
        <br>
        <p>
          The fillRect() function draws a large black square 100 pixels on each
          side. The clearRect() function then erases a 60x60 pixel square from
          the center, and then strokeRect() is called to create a rectangular
          outline 50x50 pixels within the cleared square.
        </p>
        <br>
        <p>
          In upcoming pages we'll see two alternative methods for clearRect(),
          and we'll also see how to change the color and stroke style of the
          rendered shapes.
        </p>
        <p>
          First let's look at the rectangle. There are three functions that draw
          rectangles on the canvas:
        </p>
        <code-item>
          <template #code>var ctx = canvas.getContext("2d");</template>
          <template #item> This is the starting point for drawing, through which you 
            get a drawing environment and can use various drawing commands in this environment.
             It is the foundation of 2D drawing, providing a rich API for manipulating pixels, 
             drawing shapes, and processing images.</template>
        </code-item>
        <code-item>
          <template #code>fillRect(x, y, width, height)</template>
          <template #item> The fillRect function is used to draw a filled rectangle. The upper
             left corner of the rectangle is specified by x and y. width and height specify the 
             width and height of the rectangle. It is used to draw a solid rectangle for use in 
             backgrounds, buttons, base construction of graphics, and so on. The rectangle will 
             be filled using the currently set fillStyle.</template>
        </code-item>

        <code-item>
          <template #code>strokeRect(x, y, width, height)</template>
          <template #item>strokeRect is used to draw a rectangular border, the style of the border is
             determined by the current strokeStyle (stroke style) and lineWidth (line width). Its role
              is to draw the outline of the rectangle, such as for the content of the box, or the design
               of UI elements such as button borders.</template>
        </code-item>

        <code-item>
          <template #code>clearRect(x, y, width, height)</template>
          <template #item
            >clearRect is used to clear a rectangular area on the Canvas, making the area transparent.
             For example, before each screen update, we can clear the entire canvas (using clearRect
             (0, 0, canvas.width, canvas.height)) and then redraw the new content.</template
          >
        </code-item>
        <code-item>
          <template #code>canvas</template>
          <template #item> Scope of application: games, animation, real-time data visualisation, etc.
             Canvas draws faster and is suitable for scenes with frequent updates and redraws.</template>
             
        </code-item>
        <p>Benefits: Direct manipulation of pixels, suitable for complex graphical operations and high
           frequency updates and suitable for complex graphics, animations and games.</p>
        <p>Disadvantages: drawn graphics can not be directly manipulated like DOM elements, you must
           implement your own interaction and Canvas is pixel-based, when the graphics are zoomed in, 
           it may appear blurred and distorted.</p>
           <code-item>
        <br><br>
           <template #code>SVG</template>
           <template #item> Scope of application: icons, maps, flowcharts, etc. SVG has good scalability
             and is suitable for graphics that require high quality scaling. Each SVG element is part of
              the DOM and can be manipulated directly through CSS and JavaScript, making it suitable for
               complex interaction scenarios.</template>
              
         </code-item>
        <p>Benefits: vector graphics, no distortion at any zoom. svg graphic elements can be manipulated independently
           and are easy to interact with. svg is part of the DOM and can be accessed through assistive technologies
            such as screen readers.</p>
        <p>Disadvantages: Browser rendering slows down when SVG contains a large number of elements and SVG's performance
           bottleneck makes it unsuitable for complex real-time animations or game graphics.</p>
        <br><br><br>
        <br>
        <p>
          Each of these three functions takes the same parameters. x and y
          specify the position on the canvas (relative to the origin) of the
          top-left corner of the rectangle. width and height provide the
          rectangle's size.
        </p>
        <p>
          Below is the draw() function from the previous page, but now it is
          making use of these three functions.
        </p>
        <p>more look this</p>
        <br>
        <p>
          https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
        </p>
        <my-footer week="3" num="1"></my-footer>
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
