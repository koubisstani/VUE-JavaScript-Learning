<template>
  <my-container>
    <header>
      <my-title title1="Line-Following Robot"></my-title>
      <p>The robot moves along a predefined path based on color detection.</p>
      <p>Click the Start button to begin the robot's journey.</p>
      <div class="choices">
        <el-button id="LineButton" style="margin-left: 20px">Start</el-button>
      </div>
    </header>
    <main style="margin-top: 20px">
      <canvas id="robotCanvas" width="1200" height="600"></canvas>
      <div id="codeDisplay"></div> <!-- 代码显示容器 -->
    </main>
    <footer>
      <study-content>
        <code-item>
          <template #code
            >ctx.save() and ctx.restore()</template
          >
          <template #item>
            The save() method is used to push the current drawing state onto the stack. 
            The drawing state includes the transformation matrix (e.g., the state of rotation,
             scaling, and panning), the crop region, the fill style, the stroke style, and so on.
This means that you can save the current state and then perform a series of operations (such as 
rotating, panning, and so on), and then restore() at the end of the drawing to restore the previous
 state, so that these operations don't affect the drawing of other shapes.</template
          >
        </code-item>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
  ctx.save(); // Save current state
ctx.translate(100, 100); // panning canvas (computing)
ctx.rotate(Math.PI / 4); // rotate the canvas (computing)
// Plotting the rotated position
ctx.fillRect(0, 0, 50, 50);
ctx.restore(); // Restore to the state before panning and rotation
// It is now possible to draw shapes that are not affected by rotation and translation
ctx.fillRect(200, 200, 50, 50);
                "
            ></demo-code>
          </template>
  
        </my-demo>
        <code-item>
          <template #code>if-else statements and for loops with break statements</template>
          <template #item
            >Conditional judgements and control structures in JavaScript are the foundation of programming,
             they are used to control the execution flow of a program so that the code can perform different 
             actions based on different conditions. In this project, conditional judgements and control structures 
             are widely used in logic such as steering and path detection of a cart.</template
          >
        </code-item>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
  if (dx === 2 && dy === 0) {
  // The current direction is to the right.
  angle = 0;
} else if (dx === -2 && dy === 0) {
  // The current direction is to the left.
  angle = Math.PI;
}

for (const point of turnPoints) {
  if (Math.abs(x - point.x) < 5 && Math.abs(y - point.y) < 5) {
    // Detects that the trolley has reached the turning point and sets the direction
    if (point.direction === 'down') {
      dx = 0;
      dy = 2;
    } else if (point.direction === 'left') {
      dx = -2;
      dy = 0;
    }
    break; // early exit loop
  }
}
                "
            ></demo-code>
          </template>
  
        </my-demo>
        <p>
          This project demonstrates a basic implementation of a line-following robot using the Canvas API.
          The robot's movement is controlled by detecting the color of the pixels in its proximity, allowing it to follow
          a path drawn on the canvas.
        </p>
        <br>
        <p>For more details, please refer to this address</p>

        <p style="color: lightblue">
          http://www.personal.reading.ac.uk/~shsmchlr/jsrobotstyle/index.html
        </p>
        <my-footer week="4" num="2"></my-footer>
      </study-content>
    </footer>
  </my-container>
</template>


<script>
import MyFooter from '@/components/MyFooter.vue'
import MyContainer from '@/components/MyContainer.vue'
import StudyContent from '@/components/StudyContent.vue'
import MyTitle from '@/components/MyTitle.vue'
import codeItem from '@/components/codeItem.vue'
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
  let x = 100
  let y = 100
  let dx = 2
  let dy = 0
  let isRunning = false
  let animationId

  // Define the turn points on the path
  const turnPoints = [
    { x: 1100, y: 100, direction: 'down' }, // Turn down at the top-right corner
    { x: 1100, y: 500, direction: 'left' }, // Turn left at the bottom-right corner
    { x: 100, y: 500, direction: 'up' }, // Turn up at the bottom-left corner
    { x: 100, y: 100, direction: 'right' } // Turn right at the top-left corner
  ]

  function drawPath() {
  ctx.strokeStyle = 'black'
  ctx.lineWidth = 5
  ctx.beginPath()
  ctx.moveTo(100, 100)
  ctx.lineTo(1100, 100)
  ctx.lineTo(1100, 500)
  ctx.lineTo(100, 500)
  ctx.closePath()
  ctx.stroke()
}

function drawRobot() {
  ctx.clearRect(0, 0, canvas.width, canvas.height) // Clearing the canvas
  drawPath() // Redrawing the path

  // Save Canvas State
  ctx.save()

  // Move the origin of the canvas to the centre of the cart
  ctx.translate(x, y)

  // Calculate the angle of rotation based on the current direction of the trolley
  let angle = 0
  if (dx === 2 && dy === 0) {
    angle = 0 // rightwards
  } else if (dx === -2 && dy === 0) {
    angle = Math.PI // leftwards
  } else if (dx === 0 && dy === 2) {
    angle = Math.PI / 2 // downwards
  } else if (dx === 0 && dy === -2) {
    angle = -Math.PI / 2 // upwards
  }

  // rotate the canvas (computing)
  ctx.rotate(angle)

  // Drawing the body of the trolley
  ctx.beginPath()
  ctx.arc(0, 0, 20, 0, Math.PI * 2) // Draw the body of the cart as a circle
  ctx.fillStyle = 'purple'
  ctx.fill()

  // Draw the front wheels of the cart
  ctx.beginPath()
  ctx.moveTo(-15, -17)
  ctx.lineTo(15, -17)
  ctx.lineTo(15, -7)
  ctx.lineTo(-15, -7)
  ctx.closePath()
  ctx.fillStyle = 'black'
  ctx.fill()

  // Drawing the rear wheels of the cart
  ctx.beginPath()
  ctx.moveTo(-15, 7)
  ctx.lineTo(15, 7)
  ctx.lineTo(15, 17)
  ctx.lineTo(-15, 17)
  ctx.closePath()
  ctx.fillStyle = 'black'
  ctx.fill()

  // Drawing axles
  ctx.beginPath()
  ctx.moveTo(-1, -17)
  ctx.lineTo(1, -17)
  ctx.lineTo(1, 17)
  ctx.lineTo(-1, 17)
  ctx.closePath()
  ctx.fillStyle = 'black'
  ctx.fill()

  // Restore canvas state
  ctx.restore()
}






function updateCodeDisplay(speed) {
  const codeDisplay = document.getElementById('codeDisplay');

  // 定义并转义 HTML 内容
  codeDisplay.textContent = `


  nextTick(() =&gt; {
    const canvas = document.getElementById('robotCanvas')
    const ctx = canvas.getContext('2d')
    let x = 100
    let y = 100
    let dx = 2
    let dy = 0
    let isRunning = false
    let animationId

    // Define the turn points on the path
    const turnPoints = [
      { x: 1100, y: 100, direction: 'down' }, // Turn down at the top-right corner
      { x: 1100, y: 500, direction: 'left' }, // Turn left at the bottom-right corner
      { x: 100, y: 500, direction: 'up' }, // Turn up at the bottom-left corner
      { x: 100, y: 100, direction: 'right' } // Turn right at the top-left corner
    ]

    function drawPath() {
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 5
      ctx.beginPath()
      ctx.moveTo(100, 100)
      ctx.lineTo(1100, 100)
      ctx.lineTo(1100, 500)
      ctx.lineTo(100, 500)
      ctx.closePath()
      ctx.stroke()
    }

    function drawRobot() {
      ctx.clearRect(0, 0, canvas.width, canvas.height) // Clearing the canvas
      drawPath() // Redrawing the path

      // Save Canvas State
      ctx.save()

      // Move the origin of the canvas to the centre of the cart
      ctx.translate(x, y)

      // Calculate the angle of rotation based on the current direction of the trolley
      let angle = 0
      if (dx === 2 && dy === 0) {
        angle = 0 // rightwards
      } else if (dx === -2 && dy === 0) {
        angle = Math.PI // leftwards
      } else if (dx === 0 && dy === 2) {
        angle = Math.PI / 2 // downwards
      } else if (dx === 0 && dy === -2) {
        angle = -Math.PI / 2 // upwards
      }

      // rotate the canvas (computing)
      ctx.rotate(angle)

      // Drawing the body of the trolley
      ctx.beginPath()
      ctx.arc(0, 0, 20, 0, Math.PI * 2) // Draw the body of the cart as a circle
      ctx.fillStyle = 'purple'
      ctx.fill()

      // Draw the front wheels of the cart
      ctx.beginPath()
      ctx.moveTo(-15, -17)
      ctx.lineTo(15, -17)
      ctx.lineTo(15, -7)
      ctx.lineTo(-15, -7)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      // Drawing the rear wheels of the cart
      ctx.beginPath()
      ctx.moveTo(-15, 7)
      ctx.lineTo(15, 7)
      ctx.lineTo(15, 17)
      ctx.lineTo(-15, 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      // Drawing axles
      ctx.beginPath()
      ctx.moveTo(-1, -17)
      ctx.lineTo(1, -17)
      ctx.lineTo(1, 17)
      ctx.lineTo(-1, 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      // Restore canvas state
      ctx.restore()
    }

    function followLine() {
      // Check if the robot has reached any of the turn points
      for (const point of turnPoints) {
        if (Math.abs(x - point.x) &lt; 5 && Math.abs(y - point.y) &lt; 5) {
          // Set direction based on the turn point
          if (point.direction === 'down') {
            dx = 0
            dy = 2
          } else if (point.direction === 'left') {
            dx = -2
            dy = 0
          } else if (point.direction === 'up') {
            dx = 0
            dy = -2
          } else if (point.direction === 'right') {
            dx = 2
            dy = 0
          }
          break
        }
      }

      // Move the robot forward
      x += dx
      y += dy

      drawRobot()
      animationId = requestAnimationFrame(followLine)
    }

    document.getElementById('LineButton').addEventListener('click', () =&gt; {
      if (isRunning) {
        cancelAnimationFrame(animationId)
        document.getElementById('LineButton').textContent = 'Start'
      } else {
        followLine()
        document.getElementById('LineButton').textContent = 'Stop'
      }
      isRunning = !isRunning
    })

    drawPath()
    drawRobot()

  })
  &lt;/script&gt;
  `
}

  function followLine() {
    // Check if the robot has reached any of the turn points
    for (const point of turnPoints) {
      if (Math.abs(x - point.x) < 5 && Math.abs(y - point.y) < 5) {
        // Set direction based on the turn point
        if (point.direction === 'down') {
          dx = 0
          dy = 2
        } else if (point.direction === 'left') {
          dx = -2
          dy = 0
        } else if (point.direction === 'up') {
          dx = 0
          dy = -2
        } else if (point.direction === 'right') {
          dx = 2
          dy = 0
        }
        break
      }
    }

    // Move the robot forward
    x += dx
    y += dy

    drawRobot()
    animationId = requestAnimationFrame(followLine)
  }

  document.getElementById('LineButton').addEventListener('click', () => {
    if (isRunning) {
      cancelAnimationFrame(animationId)
      document.getElementById('LineButton').textContent = 'Start'
    } else {
      followLine()
      document.getElementById('LineButton').textContent = 'Stop'
    }
    isRunning = !isRunning
    
  })
  updateCodeDisplay() // Initial code display
  drawPath()
  drawRobot()
  
  
})
</script>

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
