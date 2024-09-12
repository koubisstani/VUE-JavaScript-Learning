<script setup>
import { ref } from 'vue'

let codeLeft = ref('');

const executeCodeLeft = () => {
  // Get the value of the code
  const code = codeLeft.value;
  // executable code
  try {
    const func = new Function(code);
    func();
  } catch (error) {
    console.error('Code execution error:', error);
  }
};
</script>

<template>
  <div>
    <div class="title">
      <div class="title-content">Code input area</div>
      <div class="title-content">Effect display area</div>
    </div>
    <main>
      <!-- Left code entry area -->
      <div class="code_area">
        <textarea
          v-model="codeLeft"
          placeholder="Enter the javascript code here"
          style="
            width: 763px;
            height: 495px;
            border: none;
            outline: none;
            resize: none;
            font-size: 20px;
          "
        />
      </div>
      <!-- Intermediate execution buttons -->
      <button @click="executeCodeLeft" class="executeButton">run</button>
      <!-- Right effect display area -->
      <div class="effect_area">
        <canvas
          width="768"
          height="500"
          id="canvas-id"
          style="border: 1px solid black"
        ></canvas>
      </div>
    </main>
  </div>
</template>

<style lang="less" scoped>
.title {
  display: flex;
  margin-bottom: 20px;
  .title-content {
    font-size: 40px;
    font-weight: bolder;
    &:nth-child(1) {
      margin-right: 500px;
    }
  }
}
main {
  display: flex;
  justify-content: space-between;
  .code_area {
    width: 48%;
    height: 500px;
    border: 3px solid black;
  }

  .effect_area {
    width: 48%;
    height: 500px;
    border: 2px solid black;
  }
}

.executeButton {
  width: 40px;
  height: 100px;
  margin-top: 200px;
  text-align: center;
  background-color: rgb(24, 163, 24);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
  }
}

.effect_area {
  position: relative;
}
</style>
