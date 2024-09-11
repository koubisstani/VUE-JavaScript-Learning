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
  let x = 100
  let y = 150
  let dx = 2 // Initial speed
  let dy = 0 // Initial speed
  let radius = 20
  let color = 'green'
  let animationId
  let runLeft = false
  let runRight = true
  let runBottom = false
  let runTop = false
  let isRunning = false
  console.log(x, y)

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
      ctx.lineTo(x - 7, y - 17)
      ctx.lineTo(x - 7, y + 17)
      ctx.lineTo(x - 15, y + 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x + 15, y - 17)
      ctx.lineTo(x + 7, y - 17)
      ctx.lineTo(x + 7, y + 17)
      ctx.lineTo(x + 15, y + 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x - 10, y - 1)
      ctx.lineTo(x + 15, y - 1)
      ctx.lineTo(x + 15, y + 1)
      ctx.lineTo(x - 15, y - 1)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()
    }
  }

  function update() {
    if (x + 100 > 1100) {
      runBottom = true
      runLeft = false
      runRight = false
      runTop = false
      dx = 0
      dy = 2
    }
    if (y > 480) {
      runLeft = true
      runRight = false
      runBottom = false
      runTop = true
      dx = -2
      dy = 0
    }
    if (y >= 400 && x <= 100) {
      runLeft = false
      runRight = false
      runBottom = false
      runTop = false
      dx = 0
      dy = 0
    }
    console.log(x, y)
    x += dx
    y += dy
    draw()
    animationId = requestAnimationFrame(update)
  }
  

  function updateCodeDisplay() {
    const codeDisplay = document.getElementById('codeDisplay')
    codeDisplay.textContent = `
  function getNextState(state, direction) {
    let nextState = { ...state };
    
    // Move in the current direction
    if (direction === 'up') nextState.y -= stateSize;
    if (direction === 'down') nextState.y += stateSize;
    if (direction === 'left') nextState.x -= stateSize;
    if (direction === 'right') nextState.x += stateSize;

    // Check if it touches the wall, if it does, return to the current state and don't move.
    if (isWall(nextState)) {
        return state;
    }
    return nextState;
}


function chooseDirection(state) {
    // Determine if it is possible to continue in the current direction
    let nextState = getNextState(state, currentDirection);
    
    // If the current direction can be continued, return to the current direction
    if (nextState.x !== state.x || nextState.y !== state.y) {
        return currentDirection;
    }

    // If you hit a wall in the current direction, try another direction.
    const newDirections = actions.filter(dir => dir !== currentDirection);  // Avoiding regression
    for (let dir of newDirections) {
        let potentialState = getNextState(state, dir);
        if (potentialState.x !== state.x || potentialState.y !== state.y) {
            currentDirection = dir;  // Update direction
            return dir;
        }
    }

    // If all directions fail to advance, stay put
    return currentDirection;
}

function startTraining() {
    let state = { ...startState };
    let steps = 0;

    function step() {
        if (state.x === goalState.x && state.y === goalState.y) {
            console.log("Reached the goal!");
            return;  // The trolley reaches the end of the line.
        }

        steps++;
        let direction = chooseDirection(state);
        state = getNextState(state, direction);

        drawRobot(state.x, state.y);

        if (steps <= 1000) {
            setTimeout(step, 200);  // One step every 200 milliseconds
        } else {
            console.log("Training stopped due to too many steps.");
        }
    }

    step();
}
    `
  }

  document.getElementById('LineButton').addEventListener('click', () => {
    if (isRunning) {
      cancelAnimationFrame(animationId)
      document.getElementById('LineButton').textContent = 'start'
    } else {
      update()
      document.getElementById('LineButton').textContent = 'stop'
    }
    isRunning = !isRunning
  })

  draw()
  updateCodeDisplay() // Initial code display
})
</script>

<script setup></script>

<template>
  <my-container>
    <header>
      <my-title title1="The car came out of the maze"></my-title>
      <p>
        The car will come out of the maze in a certain way, click the button to
        try
        <el-button id="LineButton" style="margin-left: 20px">start</el-button>
      </p>
    </header>
    <main style="margin-top: 20px; position: relative">
      <canvas id="robotCanvas" width="1200" height="600"></canvas>
      <div class="block block1"></div>
      <div class="block block2"></div>
      <div class="block block3"></div>
      <div class="block block4"></div>
      <div class="line1"></div>
      <div class="block block5"></div>
      <div class="block block6"></div>
      <div class="line2"></div>
      <div id="codeDisplay"></div>
    </main>
    <footer>
      <study-content>
        <p>
          Today's exercise is also the final one and requires the use of reinforcement learning concepts to get the purple cube out of the maze successfully.
        </p>
        <code-item>
          <template #code>requestAnimationFrame(function)</template>
          <template #item>
            Here, we use the update function to constantly update the canvas to
            ensure the movement of the car, and then we use the
            requestAnimationFrame function to record this function, which will
            make the update function we define execute itself. Then keep
            updating the canvas
          </template>
        </code-item>
        <code-item>
          <template #code>Sensor simulation and environment awareness for trolleys</template>
          <template #item>
            This function is used to simulate the detection function of a robot sensor, which detects the distance from the robot's current position to (antX, antY). This is similar to the **observation** part of reinforcement learning, where the agent senses the environment via sensors or other means and makes decisions based on the information in the environment.

In reinforcement learning, this process can be used to detect obstacles, similar to ‘state shifting’ in reinforcement learning - adjusting behavioural strategies based on feedback from the environment. For example, if an obstacle is detected, the robot may need to perform a collision avoidance action.
          </template>
        </code-item>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
function detectObject(antX, antY) {
    // Calculate the line from the robot to (antX, antY), which is the probe beam of a sensor
    var x2 = this.calcX(antX, antY);  // Calculate the actual x-coordinate
    var y2 = this.calcY(antX, antY);  // Calculate the actual y-coordinate
    var distToNearest = testEnvironment(this.robotx, this.roboty, x2, y2, this.robNum);
    return distToNearest;
}
                "
            ></demo-code>
          </template>
  
        </my-demo>
        <code-item>
          <template #code> Action execution and environment interaction</template>
          <template #item>
            The following function shows how the robot's movement and steering can be controlled by the speed of the left and right wheels. The behaviour of an agent in reinforcement learning can be represented as selecting different actions through a policy, in this case adjusting the speed of the left and right wheels.<br><br>

For example, in the Reinforcement Learning framework, the agent can influence the trajectory of the robot by determining its speed and direction through action selection. For example, the agent can decide whether it needs to steer, accelerate or decelerate based on the current sensor input.
          </template>
        </code-item>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
function moveRobot(newlspeed, newrspeed) {
    // newlspeed 和 newrspeed denote the speeds of the left and right wheels, respectively
    var hillType = getAreaType(this.robotx, this.roboty);  // Get the type of area the robot is in
    this.lspeed = calcNewSpeed(this.lspeed, newlspeed, hillType, this.speedControl);
    this.rspeed = calcNewSpeed(this.rspeed, newrspeed, hillType, this.speedControl);
    var dist = (this.rspeed + this.lspeed) * 0.1;  // Calculate distance travelled based on speed
    var sina = (this.lspeed - this.rspeed) * Math.PI / 400;  // Calculating Angle Changes
    var newangle = this.angle + 2 * Math.atan2(sina, Math.sqrt(1 - sina * sina));  // Updated perspective
    this.updateRobot(newangle, dist);  // Updating the robot's position
}
                "
            ></demo-code>
          </template>
  
        </my-demo>
        <code-item>
          <template #code>The introduction of the integration of reinforcement learning</template>
          <template #item>
            Information such as the robot's position (robotx, robot), sensor readings (sensorReadings[]), etc. can be entered into the RL model as state vectors.<br><br>
            Through reinforcement learning algorithms (e.g., Q-learning), we can allow the robot to choose its actions autonomously, rather than being controlled by predefined keyboard input. For example, moveRobot() can be controlled by a policy function that allows the robot to autonomously choose to turn left, right, forward or stop.<br><br>
            Introduce a reward system, such as a positive reward if the robot avoids an obstacle or stays on the path, and a negative reward if it hits an obstacle or deviates from the path. This reward system can be implemented using the detectObject() and moveRobot() functions.
          </template>
        </code-item>

        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
              let startState = { x: 0, y: 50 };  // starting point
let goalState = { x: 0, y: 450 };  // finishing position
let actions = ['up', 'down', 'left', 'right'];  // Executable actions

function getNextState(state, direction) {  //function simulates the state transfer process of a robot in a maze
    let nextState = { ...state };
    
    if (direction === 'up') nextState.y -= stateSize;
    if (direction === 'down') nextState.y += stateSize;
    if (direction === 'left') nextState.x -= stateSize;
    if (direction === 'right') nextState.x += stateSize;

    if (isWall(nextState)) {
        return state;  // Hit the wall. Stay in the current state.
    }
    return nextState;
}

function chooseDirection(state) {
    let nextState = getNextState(state, currentDirection);
    
    if (nextState.x !== state.x || nextState.y !== state.y) {
        return currentDirection;  // Continue in the current direction
    }

    // 尝试其他方向
    const newDirections = actions.filter(dir => dir !== currentDirection);
    for (let dir of newDirections) {
        let potentialState = getNextState(state, dir);
        if (potentialState.x !== state.x || potentialState.y !== state.y) {
            currentDirection = dir;
            return dir;
        }
    }

    return currentDirection;  // Maintain original direction when unable to move forward
}

function startTraining() {
    let state = { ...startState };
    let steps = 0;

    function step() {
        if (state.x === goalState.x && state.y === goalState.y) {
            console.log('Reached the goal!);
            return;
        }

        steps++;
        let direction = chooseDirection(state);
        state = getNextState(state, direction);

        drawRobot(state.x, state.y);

        if (steps <= 1000) {
            setTimeout(step, 200);
        } else {
            console.log('Training stopped due to too many steps.'');
        }
    }

    step();
}


                "
            ></demo-code>
          </template>
  
        </my-demo>
        
        <p>These concepts are also closely related to state transfer, action selection, and the training process in reinforcement learning. Although the code does not directly implement reinforcement learning algorithms, it provides a good basis for implementing a training framework for reinforcement learning, e.g., by adding algorithms such as Q-learning, which would allow the robot to autonomously learn how to pass through a maze.</p>
        <br>
        <p>

          If reinforcement learning is to be truly introduced into the system, a reward mechanism could be defined, such as a positive reward for every step the robot takes towards the goal, a penalty for hitting a wall or going in the wrong direction, and learning to update the strategy in order to optimise the robot's path of action.</p>
          <br>
          <p>For more details, please refer to this address</p>

          <p style="color: lightblue">
            http://www.personal.reading.ac.uk/~shsmchlr/jsrobotstyle/index.html
          </p>
        <my-footer week="4" num="3"></my-footer>
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
  position: relative;
}
.block {
  position: absolute;
}
.block1 {
  top: 0px;
  left: 0px;
  width: 1200px;
  height: 100px;
  background-color: #555555;
}
.block2 {
  top: 0px;
  right: 0px;
  width: 100px;
  height: 450px;
  background-color: #555555;
}
.block3 {
  top: 200px;
  left: 0px;
  width: 900px;
  height: 100px;
  background-color: #555555;
}
.block4 {
  top: 300px;
  left: 0px;
  width: 500px;
  height: 150px;
  background-color: #555555;
}
.block5 {
  top: 380px;
  left: 700px;
  width: 200px;
  height: 70px;
  background-color: #555555;
}
.line1 {
  position: absolute;
  top: 445px;
  left: 400px;
  width: 400px;
  height: 5px;
  background-color: #555555;
}
.line2 {
  position: absolute;
  top: 0;
  right: 0;
  width: 5px;
  height: 600px;
  background-color: #555555;
}
.block6 {
  top: 530px;
  left: 0;
  width: 1200px;
  height: 70px;
  background-color: #555555;
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
