<script>
import MyFooter from '@/components/MyFooter.vue'
import MyContainer from '@/components/MyContainer.vue'
import StudyContent from '@/components/StudyContent.vue'
import codeItem from '@/components/codeItem.vue'
import MyTitle from '@/components/MyTitle.vue'
import mydemo from '@/components/demo.vue'
import demoCode from '@/components/demoCode.vue'

export default {
  components: {
    'my-title': MyTitle,
    'my-footer': MyFooter,
    'my-container': MyContainer,
    'study-content': StudyContent,
    'code-item': codeItem,
    'my-demo': mydemo,
    'demo-code': demoCode,
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
    function draw1() {
    ctx.beginPath()
    var x = 500
    var y = 250
    var radius = 20 
    var startAngle = 0 
    var endAngle = Math.PI * 2 

    ctx.arc(x, y, radius, startAngle, endAngle)

    ctx.stroke()
  }
  function draw2() {
    ctx.beginPath()
    var x = 600
    var y = 250
    var radius = 20 
    var startAngle = 0 
    var endAngle = Math.PI * 2

    ctx.arc(x, y, radius, startAngle, endAngle)

    ctx.stroke()
  }
  function draw3() {
    ctx.beginPath()
    var x = 550
    var y = 250
    var radius = 100 
    var startAngle = 0 
    var endAngle = Math.PI * 2 

    ctx.arc(x, y, radius, startAngle, endAngle)

    ctx.stroke()
  }
  function draw4() {
    ctx.beginPath()
    var x = 550
    var y = 300
    var radius = 20 
    var startAngle = 0 
    var endAngle = Math.PI 

    ctx.arc(x, y, radius, startAngle, endAngle)

    ctx.stroke()
  }
  draw1()
  draw2()
  draw3()
  draw4()
    `
  }

  function draw1() {
    ctx.beginPath()
    var x = 500
    var y = 250
    var radius = 20 // radius of a circle
    var startAngle = 0 // starting point
    var endAngle = Math.PI * 2 // endpoint

    ctx.arc(x, y, radius, startAngle, endAngle)

    ctx.stroke()
  }
  function draw2() {
    ctx.beginPath()
    var x = 600
    var y = 250
    var radius = 20 //  radius of a circle
    var startAngle = 0 // starting point
    var endAngle = Math.PI * 2 // endpoint

    ctx.arc(x, y, radius, startAngle, endAngle)

    ctx.stroke()
  }
  function draw3() {
    ctx.beginPath()
    var x = 550
    var y = 250
    var radius = 100 // radius of a circle
    var startAngle = 0 // starting point
    var endAngle = Math.PI * 2 // endpoint

    ctx.arc(x, y, radius, startAngle, endAngle)

    ctx.stroke()
  }
  function draw4() {
    ctx.beginPath()
    var x = 550
    var y = 300
    var radius = 20 // radius of a circle
    var startAngle = 0 // starting point
    var endAngle = Math.PI // endpoint

    ctx.arc(x, y, radius, startAngle, endAngle)

    ctx.stroke()
  }
  draw1()
  draw2()
  draw3()
  draw4()
  updateCodeDisplay()
})
</script>

<script setup></script>

<template>
  <my-container>
    <header>
      <my-title
        title1="Arcs"
        title2="To draw arcs or circles, we use the arc() or arcTo() methods."
      ></my-title>
    </header>
    <main style="margin-top: 20px">
      <canvas id="robotCanvas" width="1200" height="600"></canvas>
      <div id="codeDisplay"></div>
    </main>
    <footer>
      <study-content>
        <code-item>
          <template #code
            >arc(x, y, radius, startAngle, endAngle, counterclockwise)</template
          >
          <template #item
            >Draws an arc which is centered at (x, y) position with radius r
            starting at startAngle and ending at endAngle going in the given
            direction indicated by counterclockwise (defaulting to
            clockwise).</template
          >
        </code-item>
        <code-item>
          <template #code>arcTo(x1, y1, x2, y2, radius)</template>
          <template #item>
            Draws an arc with the given control points and radius, connected to
            the previous point by a straight line.</template
          >
        </code-item>

        <p>
          Let's have a more detailed look at the arc method, which takes six
          parameters: x and y are the coordinates of the center of the circle on
          which the arc should be drawn. radius is self-explanatory. The
          startAngle and endAngle parameters define the start and end points of
          the arc in radians, along the curve of the circle. 
          <br><br>These are measured
          from the x axis. The counterclockwise parameter is a Boolean value
          which, when true, draws the arc counterclockwise; otherwise, the arc
          is drawn clockwise.
        </p>

        <p>
          Note: Angles in the arc function are measured in radians, not degrees.
          To convert degrees to radians you can use the following JavaScript
          expression: radians = (Math.PI/180)*degrees.
        </p>
        <code-item>
          <template #code
            >Path Drawing in the Canvas API</template
          >
          <template #item
            >One of the core concepts of the Canvas API is the Path. A path is a shape made
             by connecting a series of points, which can include straight lines, arcs, Bezier
              curves, and so on. The concept of a path allows developers to create complex 
              shapes and then draw them all at once.</template
          >
        </code-item>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.arcTo(300, 100, 300, 200, 50);
ctx.lineTo(300, 300);
ctx.closePath();
ctx.stroke();
                "
            ></demo-code>
          </template>
  
        </my-demo>
        <p>beginPath(): start a new path. After calling beginPath(), all drawing commands will form this new path.</p>
        <p>moveTo(x, y): moves the brush to the specified coordinates without drawing anything. Usually used to set the start point.</p>
        <p>lineTo(x, y): draws a line from the current brush position to the specified coordinates.</p>
        <P>closePath(): draw a straight line, connect the last point of the current path with the first point, close the path.</P>
        <p>stroke(): stroke the path, according to the current strokeStyle to draw the outline of the path.</p>
        <p>fill(): fill the path, fill the inside of the path according to the current fillStyle.</p>
        <br><br>
        <p>more look this</p>

        <p>
          https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
        </p>
        <my-footer week="3" num="2"></my-footer>
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
