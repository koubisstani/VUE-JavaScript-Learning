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
    'demo-code': demoCode
  }
}
</script>

<script setup>
import { nextTick } from 'vue'

nextTick(() => {
  const canvas = document.getElementById('robotCanvas')
  const ctx = canvas.getContext('2d')

  const balls = [
    { x: 100, y: 100, radius: 20, color: 'red', dx: 2, dy: 2 },
    { x: 200, y: 150, radius: 30, color: 'green', dx: 3, dy: 3 },
    { x: 300, y: 200, radius: 40, color: 'blue', dx: 1, dy: 1 }
  ]

  let running = false
  let animationId

  function drawBall(ball) {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
    ctx.fillStyle = ball.color
    ctx.fill()
    ctx.closePath()
  }

  function moveBall(ball) {
    ball.x += ball.dx
    ball.y += ball.dy

    // Check for collisions with the canvas edges
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
      ball.dx = -ball.dx
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
      ball.dy = -ball.dy
    }

    // Check for collisions with other balls
    for (let otherBall of balls) {
      if (otherBall !== ball) {
        const dist = Math.hypot(ball.x - otherBall.x, ball.y - otherBall.y)
        if (dist < ball.radius + otherBall.radius) {
          ball.dx = -ball.dx
          ball.dy = -ball.dy
          otherBall.dx = -otherBall.dx
          otherBall.dy = -otherBall.dy
        }
      }
    }
  }

  function animate() {
    if (!running) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let ball of balls) {
      moveBall(ball)
      drawBall(ball)
    }

    animationId = requestAnimationFrame(animate)
  }

  document.querySelector('#startButton').addEventListener('click', () => {
    console.log('click')
    running = !running
    if (running) {
      animate()
    } else {
      cancelAnimationFrame(animationId)
    }
  })

  function updateCodeDisplay() {
    const codeDisplay = document.getElementById('codeDisplay')
    codeDisplay.textContent = `
  const balls = [
    { x: 100, y: 100, radius: 20, color: 'red', dx: 2, dy: 2 },
    { x: 200, y: 150, radius: 30, color: 'green', dx: 3, dy: 3 },
    { x: 300, y: 200, radius: 40, color: 'blue', dx: 1, dy: 1 }
  ]

  let running = false
  let animationId

  function drawBall(ball) {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
    ctx.fillStyle = ball.color
    ctx.fill()
    ctx.closePath()
  }

  function moveBall(ball) {
    ball.x += ball.dx
    ball.y += ball.dy

    // Check for collisions with the canvas edges
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
      ball.dx = -ball.dx
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
      ball.dy = -ball.dy
    }

    // Check for collisions with other balls
    for (let otherBall of balls) {
      if (otherBall !== ball) {
        const dist = Math.hypot(ball.x - otherBall.x, ball.y - otherBall.y)
        if (dist < ball.radius + otherBall.radius) {
          ball.dx = -ball.dx
          ball.dy = -ball.dy
          otherBall.dx = -otherBall.dx
          otherBall.dy = -otherBall.dy
        }
      }
    }
  }

  function animate() {
    if (!running) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let ball of balls) {
      moveBall(ball)
      drawBall(ball)
    }

    animationId = requestAnimationFrame(animate)
  }

  document.querySelector('#startButton').addEventListener('click', () => {
    console.log('click')
    running = !running
    if (running) {
      animate()
    } else {
      cancelAnimationFrame(animationId)
    }
  })
    `
  }

  updateCodeDisplay() // Initial code display
})
</script>

<script setup></script>

<template>
  <my-container>
    <header>
      <my-title title1="bounce ball"></my-title>
      <p>
        Clicking this button will cause 3 balls to collide and bounce off each
        other
      </p>
      <el-button id="startButton">Start/Stop</el-button>
    </header>
    <main style="margin-top: 20px">
      <canvas id="robotCanvas" width="1200" height="600"></canvas>
      <div id="codeDisplay"></div>
    </main>
    <footer>
      <study-content>
        <!-- 在这里增加你想要的内容 -->
        <code-item>
          <template #code>Boundary detection of small balls</template>
          <template #item>
            The purpose of boundary detection is to make sure that the ball does not go beyond the
             boundaries of the canvas. When the ball moves to the edge of the canvas, it needs to be 
             allowed to bounce back. This is usually done by detecting the centre of the ball and whether 
             its radius exceeds the width and height of the canvas.
          </template>
        </code-item>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
  ball.dx = -ball.dx
}
if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
  ball.dy = -ball.dy
}
                "
            ></demo-code>
          </template>
  
        </my-demo>
        <p>ball.x + ball.radius > canvas.width: detect if the right edge of the ball exceeds the right boundary
           of the canvas. If it exceeds the boundary, reverse the dx (horizontal velocity) direction.</p>
        <br>
        <p>ball.x - ball.radius < 0: detect if the left edge of the ball is beyond the left boundary of the canvas. If it does, invert the dx as well.</p>
        <br>
        <p>ball.y + ball.radius > canvas.height and ball.y - ball.radius < 0: similar logic is used to detect boundary 
          collisions of the ball in the vertical direction and reverse the dy (vertical velocity) accordingly.</p>
          <br>
      
        <code-item>
          <template #code>Collision detection between balls</template>
          <template #item>
            Collision detection between small balls is slightly more complex and involves the calculation
             of the distance between two points. If the distance between two balls is less than the sum of 
             their radii, then a collision is considered to have occurred.
          </template>
        
        </code-item>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
  for (let otherBall of balls) {
  if (otherBall !== ball) {
    const dist = Math.hypot(ball.x - otherBall.x, ball.y - otherBall.y)
    if (dist < ball.radius + otherBall.radius) {
      ball.dx = -ball.dx
      ball.dy = -ball.dy
      otherBall.dx = -otherBall.dx
      otherBall.dy = -otherBall.dy
    }
  }
}
                "
            ></demo-code>
          </template>
  
        </my-demo>
        <p>Math.hypot(ball.x - otherBall.x, ball.y - otherBall.y): calculates the distance between the centroids 
          of the two balls. the Math.hypot function returns the Euclidean distance between the given coordinates,
           simplifying the calculation of Math.sqrt(dx*dx + dy*dy).</p>
        <br>
        <p>dist < ball.radius + otherBall.radius: check if the distance between two balls is less than the sum of their radii. If it is less, it means that there is a collision.
          After a collision is detected, a bounce is simulated simply by reversing the direction of the velocities of the two balls (dx and dy).</p>

        <my-footer week="2" num="3"></my-footer>
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
