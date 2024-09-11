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
  let dx = 2 // Initial speed
  let radius = 20
  let color = 'green'
  let animationId
  let isRunning = false
  let runLeft = true
  let runTop = false
  let runRight = false
  let runBottom = false

  function draw() {
    if (runLeft || runRight) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let x1 = x
      var y1 = y
      var radius = 20
      var startAngle = 0
      var endAngle = Math.PI * 2
      ctx.arc(x1, y1, radius, startAngle, endAngle, 0)
      ctx.fillStyle = 'purple'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x - 15, y - 17)
      ctx.lineTo(x + 15, y - 17)
      ctx.lineTo(x + 15, y - 7)
      ctx.lineTo(x - 15, y - 7)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x - 15, y + 7)
      ctx.lineTo(x + 15, y + 7)
      ctx.lineTo(x + 15, y + 17)
      ctx.lineTo(x - 15, y + 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x - 1, y - 17)
      ctx.lineTo(x + 1, y - 17)
      ctx.lineTo(x + 1, y + 17)
      ctx.lineTo(x - 1, y + 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let x1 = x
      var y1 = y
      var radius = 20
      var startAngle = 0
      var endAngle = Math.PI * 2
      ctx.arc(x1, y1, radius, startAngle, endAngle, 0)
      ctx.fillStyle = 'purple'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x - 15, y - 17)
      ctx.lineTo(x - 4, y - 17)
      ctx.lineTo(x - 4, y + 17)
      ctx.lineTo(x - 15, y + 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x + 15, y - 17)
      ctx.lineTo(x + 5, y - 17)
      ctx.lineTo(x + 5, y + 17)
      ctx.lineTo(x + 15, y + 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x - 10, y - 2)
      ctx.lineTo(x + 15, y - 2)
      ctx.lineTo(x + 15, y + 2)
      ctx.lineTo(x - 15, y - 2)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()
    }
  }

  function update() {
    if (runLeft) {
      x -= dx
    } else if (runRight) {
      x += dx
    } else if (runTop) {
      y -= dx
    } else if (runBottom) {
      y += dx
    }
    if (x + radius > canvas.width || x - radius < 0) {
      dx = -dx // Reverse direction
    }
    if (y + radius > canvas.height || y - radius < 0) {
      dx = -dx // Reverse direction
    }

    draw()
    animationId = requestAnimationFrame(update)
  }

  function updateCodeDisplay(speed) {
    const codeDisplay = document.getElementById('codeDisplay')
    codeDisplay.textContent = `
  const canvas = document.getElementById('robotCanvas')
  const ctx = canvas.getContext('2d')
  let x = canvas.width / 2
  let y = canvas.height / 2
  let dx = 2 // Initial speed
  let radius = 20
  let color = 'green'
  let animationId
  let isRunning = false
  let runLeft = true
  let runTop = false
  let runRight = false
  let runBottom = false    

  function draw() {
    if (runLeft || runRight) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let x1 = x
      var y1 = y
      var radius = 20
      var startAngle = 0
      var endAngle = Math.PI * 2
      ctx.arc(x1, y1, radius, startAngle, endAngle, 0)
      ctx.fillStyle = 'purple'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x - 15, y - 17)
      ctx.lineTo(x + 15, y - 17)
      ctx.lineTo(x + 15, y - 7)
      ctx.lineTo(x - 15, y - 7)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x - 15, y + 7)
      ctx.lineTo(x + 15, y + 7)
      ctx.lineTo(x + 15, y + 17)
      ctx.lineTo(x - 15, y + 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x - 1, y - 17)
      ctx.lineTo(x + 1, y - 17)
      ctx.lineTo(x + 1, y + 17)
      ctx.lineTo(x - 1, y + 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let x1 = x
      var y1 = y
      var radius = 20
      var startAngle = 0
      var endAngle = Math.PI * 2
      ctx.arc(x1, y1, radius, startAngle, endAngle, 0)
      ctx.fillStyle = 'purple'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x - 15, y - 17)
      ctx.lineTo(x - 4, y - 17)
      ctx.lineTo(x - 4, y + 17)
      ctx.lineTo(x - 15, y + 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x + 15, y - 17)
      ctx.lineTo(x + 5, y - 17)
      ctx.lineTo(x + 5, y + 17)
      ctx.lineTo(x + 15, y + 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x - 10, y - 2)
      ctx.lineTo(x + 15, y - 2)
      ctx.lineTo(x + 15, y + 2)
      ctx.lineTo(x - 15, y - 2)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()
    }
  }

  function update() {
    if (runLeft) {
      x -= dx
    } else if (runRight) {
      x += dx
    } else if (runTop) {
      y -= dx
    } else if (runBottom) {
      y += dx
    }
    if (x + radius > canvas.width || x - radius < 0) {
      dx = -dx // Reverse direction
    }
    if (y + radius > canvas.height || y - radius < 0) {
      dx = -dx // Reverse direction
    }

    draw()
    animationId = requestAnimationFrame(update)
  }
    `
  }

  document.getElementById('LineButton').addEventListener('click', () => {
    if (isRunning) {
      cancelAnimationFrame(animationId)
      document.getElementById('LineButton').textContent = 'stop'
    } else {
      update()
      document.getElementById('LineButton').textContent = 'start'
    }
    isRunning = !isRunning
  })

  document.getElementById('TurnButton').addEventListener('click', () => {
    if (runLeft) {
      runTop = true
      runBottom = false
      runRight = false
      runLeft = false
      draw()
      return
    }
    if (runTop) {
      runRight = true
      runBottom = false
      runTop = false
      runLeft = false
      draw()
      return
    }
    if (runRight) {
      runBottom = true
      runRight = false
      runTop = false
      runLeft = false
      draw()
      return
    }
    if (runBottom) {
      runLeft = true
      runRight = false
      runTop = false
      runBottom = false
      draw()
      return
    }
  })

  draw()
  updateCodeDisplay() // Initial code display
})
</script>

<script setup></script>

<template>
  <my-container>
    <header>
      <my-title
        title1="The trolley travels in a straight line and turns"
      ></my-title>
      <p>The Start/Stop button starts/stops the robot.</p>
      <div class="choices">
        <el-button id="LineButton" style="margin-left: 20px">start</el-button>
        <el-button id="TurnButton" style="margin-left: 20px">turn</el-button>
      </div>
    </header>
    <main style="margin-top: 20px">
      <canvas id="robotCanvas" width="1200" height="600"></canvas>
      <div id="codeDisplay"></div>
    </main>
    <footer>
      <study-content>
        <p>
          Here, we define four variables, runleft runright, runtop runbottom,
          which are used to indicate which direction the car is going to move
        </p>
        <p>
          When the car moves to the right, we set the runright to true and the
          other directions to false, so that the second will conflict
        </p>
        <p>
          When we use the canvas to paint, we use the judgment function to first
          judge the direction in which the car is currently moving, and then
          finally draw the car in different directions
        </p>
        <code-item>
          <template #code>cancelAnimationFrame()</template>
          <template #item
            >This function is a JS function, and this function allows us to
            cancel a function that is looping</template
          >
        </code-item>
        <code-item>
          <template #code>requestAnimationFrame()</template>
          <template #item>
            This function is a JS function, and with this function we can cycle
            through a function all the time</template
          >
        </code-item>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
function update() {
  if (runLeft) {
    x -= dx;
  } else if (runRight) {
    x += dx;
  } else if (runTop) {
    y -= dx;
  } else if (runBottom) {
    y += dx;
  }
  if (x + radius > canvas.width || x - radius < 0) {
    dx = -dx; // Reverse direction
  }
  if (y + radius > canvas.height || y - radius < 0) {
    dx = -dx; // Reverse direction
  }

  draw();
  animationId = requestAnimationFrame(update);
}

                "
            ></demo-code>
          </template>
  
        </my-demo>
        <p>In the code above, the core of the event loop and asynchronous programming is 
          reflected in the use of requestAnimationFrame and nextTick. requestAnimationFrame
           is an asynchronous and important method associated with the event loop. update 
           function uses the requestAnimationFrame to call itself recursively, thus enabling
            continuous animation.</p>
        <p>In this function, every time requestAnimationFrame(update) is called, the browser 
          adds the update function to the message queue to be called before the next redraw. 
          This means that even if you keep changing the x and y values, the browser will only 
          perform these operations at the right point in time (i.e., at the time of the redraw)
          , thus keeping the animation smooth.</p>
          <code-item>
            <template #code>Asynchronous operation of nextTick</template>
            <template #item>
              extTick is used in Vue 3 to perform a delayed callback at the end of the next DOM
               update loop. In your code, it is used to ensure that the DOM has been updated before performing canvas related actions:</template
            >
          </code-item>
          <my-demo>
            <template #code>
              <demo-code
                type="JavaScript"
                code="
  <script setup>
import { nextTick } from 'vue'

nextTick(() => {
  // Canvas manipulation code 
})
</script>

                  "
              ></demo-code>
            </template>
    
          </my-demo>
          <p>The nextTick works similarly to setTimeout(fn, 0) in JavaScript in that it defers execution 
            of the callback until the start of the next event loop. As a result, nextTick ensures that the
             DOM is already updated by the time you access the canvas element, which is especially important 
             when dealing with complex DOM operations.</p>
             <code-item>
              <template #code>Advanced Usage of the Canvas API</template>
              <template #item>
                When drawing a simple animated robot with the Canvas API, we can also transform, path 
                manipulation and image drawing. For example, you can draw the robot with basic methods 
                such as ctx.arc and ctx.fill, and you can use the Canvas API's transformations to rotate 
                or scale the robot.</template
              >
            </code-item>
            <my-demo>
              <template #code>
                <demo-code
                  type="JavaScript"
                  code="
    function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save(); // Save the current drawing state
  ctx.translate(x, y); // Move to the current position of the robot
  ctx.rotate((Math.PI / 180) * angle); // Rotate at a certain angle
  ctx.translate(-x, -y); // reposition

  // Drawing Robots
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = 'purple';
  ctx.fill();

  ctx.restore(); // Restoring the drawing state
}

                    "
                ></demo-code>
              </template>
      
            </my-demo>
        <p>In this example, we use ctx.save and ctx.restore to save and restore the state of the Canvas.
           ctx.translate and ctx.rotate are used to implement the rotation of the robot around its centre.</p>
        <br><br>
        <p>We can encapsulate these functions into a class to make the code more object-oriented and easily extensible.
           First create a Robot class that encapsulates all the state and behaviour associated with the robot, and then 
           use this class to create an instance of the robot and control its movement.</p>

        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
  class Robot {
  constructor(canvasId, x, y, radius) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = 2;
    this.dy = 2;
    this.isRunning = false;
    this.animationId = null;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = 'purple';
    this.ctx.fill();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.draw();
    this.animationId = requestAnimationFrame(() => this.update());
  }

  start() {
    if (!this.isRunning) {
      this.update();
      this.isRunning = true;
    }
  }

  stop() {
    if (this.isRunning) {
      cancelAnimationFrame(this.animationId);
      this.isRunning = false;
    }
  }
}
const robot = new Robot('robotCanvas', 100, 100, 20);

document.getElementById('LineButton').addEventListener('click', () => {
  if (robot.isRunning) {
    robot.stop();
    document.getElementById('LineButton').textContent = 'Start';
  } else {
    robot.start();
    document.getElementById('LineButton').textContent = 'Stop';
  }
});

document.getElementById('TurnButton').addEventListener('click', () => {
  robot.dx = -robot.dx; // Reverse X-axis direction
  robot.dy = -robot.dy; // Reverse Y-axis direction
});

                "
            ></demo-code>
          </template>
  
        </my-demo>
        <p>By encapsulating functionality into classes, your code becomes easier to understand and maintain. Object-oriented programming allows you to extend classes</p>
        <p>For more details, please refer to this address</p>

        <p style="color: lightblue">
          http://www.personal.reading.ac.uk/~shsmchlr/jsrobotstyle/index.html
        </p>
        <my-footer week="4" num="1"></my-footer>
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
