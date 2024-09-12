import{M as k,a as D,S as C}from"./StudyContent-DmgqnPrB.js";import{c}from"./codeItem-BKQqYzK7.js";import{M as I}from"./MyTitle-BnWlqeve.js";import{_ as P,a as p}from"./demoCode-Ct16FRVs.js";import{_ as R,n as z,f as T,o as B,c as M,w as i,a as o,b as r,d as a}from"./index-NwAmraC0.js";const A={components:{"my-title":I,"my-footer":D,"my-container":k,"study-content":C,"code-item":c,"my-demo":P,"demo-code":p}},F=Object.assign(A,{__name:"study3new",setup(E){return z(()=>{const s=document.getElementById("robotCanvas"),e=s.getContext("2d");let n=100,t=150,d=2,u=0,v,h=!1,f=!0,m=!1;console.log(n,t);function w(){if(h||f){e.clearRect(0,0,s.width,s.height);let x=n;var l=t,g=20,b=0,y=Math.PI*2;e.arc(x,l,g,b,y,0),e.fillStyle="purple",e.fill(),e.beginPath(),e.moveTo(n-15,t-17),e.lineTo(n+15,t-17),e.lineTo(n+15,t-7),e.lineTo(n-15,t-7),e.closePath(),e.fillStyle="black",e.fill(),e.beginPath(),e.moveTo(n-15,t+7),e.lineTo(n+15,t+7),e.lineTo(n+15,t+17),e.lineTo(n-15,t+17),e.closePath(),e.fillStyle="black",e.fill(),e.beginPath(),e.moveTo(n-1,t-17),e.lineTo(n+1,t-17),e.lineTo(n+1,t+17),e.lineTo(n-1,t+17),e.closePath(),e.fillStyle="black",e.fill()}else{e.clearRect(0,0,s.width,s.height);let x=n;var l=t,g=20,b=0,y=Math.PI*2;e.arc(x,l,g,b,y,0),e.fillStyle="purple",e.fill(),e.beginPath(),e.moveTo(n-15,t-17),e.lineTo(n-7,t-17),e.lineTo(n-7,t+17),e.lineTo(n-15,t+17),e.closePath(),e.fillStyle="black",e.fill(),e.beginPath(),e.moveTo(n+15,t-17),e.lineTo(n+7,t-17),e.lineTo(n+7,t+17),e.lineTo(n+15,t+17),e.closePath(),e.fillStyle="black",e.fill(),e.beginPath(),e.moveTo(n-10,t-1),e.lineTo(n+15,t-1),e.lineTo(n+15,t+1),e.lineTo(n-15,t-1),e.closePath(),e.fillStyle="black",e.fill()}}function S(){n+100>1100&&(h=!1,f=!1,d=0,u=2),t>480&&(h=!0,f=!1,d=-2,u=0),t>=400&&n<=100&&(h=!1,f=!1,d=0,u=0),console.log(n,t),n+=d,t+=u,w(),v=requestAnimationFrame(S)}function N(){const l=document.getElementById("codeDisplay");l.textContent=`
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
    `}document.getElementById("LineButton").addEventListener("click",()=>{m?(cancelAnimationFrame(v),document.getElementById("LineButton").textContent="start"):(S(),document.getElementById("LineButton").textContent="stop"),m=!m}),w(),N()}),(s,e)=>{const n=T("el-button"),t=T("my-demo");return B(),M(k,null,{default:i(()=>[o("header",null,[r(I,{title1:"The car came out of the maze"}),o("p",null,[e[1]||(e[1]=a(" The car will come out of the maze in a certain way, click the button to try ")),r(n,{id:"LineButton",style:{"margin-left":"20px"}},{default:i(()=>e[0]||(e[0]=[a("start")])),_:1})])]),e[17]||(e[17]=o("main",{style:{"margin-top":"20px",position:"relative"}},[o("canvas",{id:"robotCanvas",width:"1200",height:"600"}),o("div",{class:"block block1"}),o("div",{class:"block block2"}),o("div",{class:"block block3"}),o("div",{class:"block block4"}),o("div",{class:"line1"}),o("div",{class:"block block5"}),o("div",{class:"block block6"}),o("div",{class:"line2"}),o("div",{id:"codeDisplay"})],-1)),o("footer",null,[r(C,null,{default:i(()=>[e[10]||(e[10]=o("p",null," Today's exercise is also the final one and requires the use of reinforcement learning concepts to get the purple cube out of the maze successfully. ",-1)),r(c,null,{code:i(()=>e[2]||(e[2]=[a("requestAnimationFrame(function)")])),item:i(()=>e[3]||(e[3]=[a(" Here, we use the update function to constantly update the canvas to ensure the movement of the car, and then we use the requestAnimationFrame function to record this function, which will make the update function we define execute itself. Then keep updating the canvas ")])),_:1}),r(c,null,{code:i(()=>e[4]||(e[4]=[a("Sensor simulation and environment awareness for trolleys")])),item:i(()=>e[5]||(e[5]=[a(" This function is used to simulate the detection function of a robot sensor, which detects the distance from the robot's current position to (antX, antY). This is similar to the **observation** part of reinforcement learning, where the agent senses the environment via sensors or other means and makes decisions based on the information in the environment. In reinforcement learning, this process can be used to detect obstacles, similar to ‘state shifting’ in reinforcement learning - adjusting behavioural strategies based on feedback from the environment. For example, if an obstacle is detected, the robot may need to perform a collision avoidance action. ")])),_:1}),r(t,null,{code:i(()=>[r(p,{type:"JavaScript",code:`\r
function detectObject(antX, antY) {\r
    // Calculate the line from the robot to (antX, antY), which is the probe beam of a sensor\r
    var x2 = this.calcX(antX, antY);  // Calculate the actual x-coordinate\r
    var y2 = this.calcY(antX, antY);  // Calculate the actual y-coordinate\r
    var distToNearest = testEnvironment(this.robotx, this.roboty, x2, y2, this.robNum);\r
    return distToNearest;\r
}\r
                `})]),_:1}),r(c,null,{code:i(()=>e[6]||(e[6]=[a(" Action execution and environment interaction")])),item:i(()=>e[7]||(e[7]=[a(" The following function shows how the robot's movement and steering can be controlled by the speed of the left and right wheels. The behaviour of an agent in reinforcement learning can be represented as selecting different actions through a policy, in this case adjusting the speed of the left and right wheels."),o("br",null,null,-1),o("br",null,null,-1),a(" For example, in the Reinforcement Learning framework, the agent can influence the trajectory of the robot by determining its speed and direction through action selection. For example, the agent can decide whether it needs to steer, accelerate or decelerate based on the current sensor input. ")])),_:1}),r(t,null,{code:i(()=>[r(p,{type:"JavaScript",code:`\r
function moveRobot(newlspeed, newrspeed) {\r
    // newlspeed 和 newrspeed denote the speeds of the left and right wheels, respectively\r
    var hillType = getAreaType(this.robotx, this.roboty);  // Get the type of area the robot is in\r
    this.lspeed = calcNewSpeed(this.lspeed, newlspeed, hillType, this.speedControl);\r
    this.rspeed = calcNewSpeed(this.rspeed, newrspeed, hillType, this.speedControl);\r
    var dist = (this.rspeed + this.lspeed) * 0.1;  // Calculate distance travelled based on speed\r
    var sina = (this.lspeed - this.rspeed) * Math.PI / 400;  // Calculating Angle Changes\r
    var newangle = this.angle + 2 * Math.atan2(sina, Math.sqrt(1 - sina * sina));  // Updated perspective\r
    this.updateRobot(newangle, dist);  // Updating the robot's position\r
}\r
                `})]),_:1}),r(c,null,{code:i(()=>e[8]||(e[8]=[a("The introduction of the integration of reinforcement learning")])),item:i(()=>e[9]||(e[9]=[a(" Information such as the robot's position (robotx, robot), sensor readings (sensorReadings[]), etc. can be entered into the RL model as state vectors."),o("br",null,null,-1),o("br",null,null,-1),a(" Through reinforcement learning algorithms (e.g., Q-learning), we can allow the robot to choose its actions autonomously, rather than being controlled by predefined keyboard input. For example, moveRobot() can be controlled by a policy function that allows the robot to autonomously choose to turn left, right, forward or stop."),o("br",null,null,-1),o("br",null,null,-1),a(" Introduce a reward system, such as a positive reward if the robot avoids an obstacle or stays on the path, and a negative reward if it hits an obstacle or deviates from the path. This reward system can be implemented using the detectObject() and moveRobot() functions. ")])),_:1}),r(t,null,{code:i(()=>[r(p,{type:"JavaScript",code:`\r
              let startState = { x: 0, y: 50 };  // starting point\r
let goalState = { x: 0, y: 450 };  // finishing position\r
let actions = ['up', 'down', 'left', 'right'];  // Executable actions\r
\r
function getNextState(state, direction) {  //function simulates the state transfer process of a robot in a maze\r
    let nextState = { ...state };\r
    \r
    if (direction === 'up') nextState.y -= stateSize;\r
    if (direction === 'down') nextState.y += stateSize;\r
    if (direction === 'left') nextState.x -= stateSize;\r
    if (direction === 'right') nextState.x += stateSize;\r
\r
    if (isWall(nextState)) {\r
        return state;  // Hit the wall. Stay in the current state.\r
    }\r
    return nextState;\r
}\r
\r
function chooseDirection(state) {\r
    let nextState = getNextState(state, currentDirection);\r
    \r
    if (nextState.x !== state.x || nextState.y !== state.y) {\r
        return currentDirection;  // Continue in the current direction\r
    }\r
\r
    // 尝试其他方向\r
    const newDirections = actions.filter(dir => dir !== currentDirection);\r
    for (let dir of newDirections) {\r
        let potentialState = getNextState(state, dir);\r
        if (potentialState.x !== state.x || potentialState.y !== state.y) {\r
            currentDirection = dir;\r
            return dir;\r
        }\r
    }\r
\r
    return currentDirection;  // Maintain original direction when unable to move forward\r
}\r
\r
function startTraining() {\r
    let state = { ...startState };\r
    let steps = 0;\r
\r
    function step() {\r
        if (state.x === goalState.x && state.y === goalState.y) {\r
            console.log('Reached the goal!);\r
            return;\r
        }\r
\r
        steps++;\r
        let direction = chooseDirection(state);\r
        state = getNextState(state, direction);\r
\r
        drawRobot(state.x, state.y);\r
\r
        if (steps <= 1000) {\r
            setTimeout(step, 200);\r
        } else {\r
            console.log('Training stopped due to too many steps.'');\r
        }\r
    }\r
\r
    step();\r
}\r
\r
\r
                `})]),_:1}),e[11]||(e[11]=o("p",null,"These concepts are also closely related to state transfer, action selection, and the training process in reinforcement learning. Although the code does not directly implement reinforcement learning algorithms, it provides a good basis for implementing a training framework for reinforcement learning, e.g., by adding algorithms such as Q-learning, which would allow the robot to autonomously learn how to pass through a maze.",-1)),e[12]||(e[12]=o("br",null,null,-1)),e[13]||(e[13]=o("p",null," If reinforcement learning is to be truly introduced into the system, a reward mechanism could be defined, such as a positive reward for every step the robot takes towards the goal, a penalty for hitting a wall or going in the wrong direction, and learning to update the strategy in order to optimise the robot's path of action.",-1)),e[14]||(e[14]=o("br",null,null,-1)),e[15]||(e[15]=o("p",null,"For more details, please refer to this address",-1)),e[16]||(e[16]=o("p",{style:{color:"lightblue"}}," http://www.personal.reading.ac.uk/~shsmchlr/jsrobotstyle/index.html ",-1)),r(D,{week:"4",num:"3"})]),_:1})])]),_:1})}}}),O=R(F,[["__scopeId","data-v-1b065cb0"]]);export{O as default};
