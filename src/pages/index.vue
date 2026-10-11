<script setup lang="ts">
import {Urls} from '~/data/Constants'
import {getDomIconElement} from '~/utils/utils'
import Background from "~/parts/cassette/Background.vue";
import DarkConnerEffect from "~/components/effect/DarkConnerEffect.vue";
import Button from "~/parts/cassette/Button.vue";
import {computed, onMounted, ref} from "vue";

const props = defineProps<{
    class?: string
    style?: string
}>()

document.title = '9猫猫 / MercuryGryph'
getDomIconElement().href = Urls.Images.Avatar

const ascii_neko =
`__   _ _______ _     _  _____
| \\  | |______ |____/  |     |
|  \\_| |______ |    \\_ |_____|`


let i = 0
const replacing = ref(false)

let newText = ''

const welcomeText = `Loading` + (`.`+`\r`.repeat(100)).repeat(6)
    + `\b`.repeat(13) + `\f${ascii_neko}

Welcome!
`

const profileText = `Profile
=======
Name: MercuryGryph / MercuryNeko / 9Neko / 9猫猫 / 猫猫鹰
Pronoun: she / her / 她 / &lt;Or any non derogatory pronoun&gt;

`

const text = ref<string>("")

function putNext() {
  if (!replacing.value) {
    return;
  }
  if (i >= newText.length) {
    replacing.value = false
    return
  }
  const char = newText[i]
  switch (char) {
    case ' ':
      text.value += '&nbsp;'
      break
    case '\n':
      text.value += '<br/>'
      break
    case '\r':
      break
    case '\f':
      text.value = ''
      break
    case '\b':
      const length = text.value.length
      text.value = text.value.substring(0, length-1)
      break
    default:
      text.value += char
      break
  }
  i++
}

let lastTime = new Date().getTime()
const delay = 1

function putTextAnimation() {
  // const now = new Date().getTime()
  // if (now - lastTime > delay) {
    putNext()
  //   lastTime = now
  // }
  requestAnimationFrame(putTextAnimation)
}

const cursorAnimation = computed<string>(() => {
  if (replacing.value) {
    return ''
  } else {
    return 'animation: cursor-blink 1.2s infinite linear;'
  }
})

function switchText(target: string) {
  i = 0
  replacing.value = true
  newText = target
  text.value = ''
}

function showWelcomeText() {
  switchText(welcomeText)
}

function showProfileText() {
  switchText(profileText)
}

onMounted(() => {
  replacing.value = true
  requestAnimationFrame(putTextAnimation)
  showWelcomeText()
})
</script>

<template>
  <Background />
  <div class="cassette-box">
    <div class="cassette-panel">
      <div class="cassette-panel-inner">
        <div class="cassette-panel-container">
          <span class="cassette-panel-content">
            <span v-html=text />
            <span class="cassette-panel-content-cursor" :style="cursorAnimation" />
          </span>
          <ScanLineEffect />
          <NoiseEffect />
          <DarkConnerEffect />
        </div>
      </div>
      <div class="cassette-panel-controller">
        <Button :onClick="()=>{switchText(profileText)}">
          Profile
          <Br/>
          档案
        </Button>
        <Button>
          Contact
          <br/>
          联系
        </Button>
        <Button>
          TODO
        </Button>
      </div>
    </div>
  </div>
</template>

<style>
.cassette-box {
  --panel-padding: 64px;
  --panel-inner-padding: 32px;
  --panel-box-padding-x: 48px;
  --panel-box-padding-y: 48px;
  --panel-min-x: 500px;
  --panel-max-x: 800px;
  --panel-min-y: 400px;
}
@media (max-height: 752px) {
  .cassette-box {
    --panel-box-padding-y: 32px;
  }
}
@media (max-width: 1290px) {
  .cassette-panel {
    flex-wrap: wrap;
  }
}
@media (max-width: 900px) {
  .cassette-box {
    --panel-padding: 24px;
    --panel-inner-padding: 16px;
    --panel-box-padding-x: 16px;
    --panel-box-padding-y: 16px;
  }
}
@media (max-width: 600px) {
  .cassette-box {
    --panel-min-x: 250px;
    --panel-min-y: 300px;
  }
}

.cassette-box {
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  padding: var(--panel-box-padding-y) var(--panel-box-padding-x);
  font-family: Consolas, monospace;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.cassette-panel {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: var(--panel-padding);
  border-radius: 24px;
  background: radial-gradient(circle, #444544, #222522);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4), 0 16px 24px 0 rgba(0, 0, 0, 0.4);
}
.cassette-panel:before {
  content: "";
  display: block;
  position: absolute;
  top: 4px;
  left: 4px;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  box-sizing: border-box;
  border: #111511 3px solid;
  border-radius: 20px;
  box-shadow: inset 0 0 12px 0 #fff1;
}

.cassette-panel-inner {
  position: relative;
  flex-grow: 1;
  display: flex;
  padding: var(--panel-inner-padding);
  margin: 0 auto;
  max-width: var(--panel-max-x);
  border-radius: 64px;
  background: radial-gradient(circle, #bfbfb4, #bbbba3);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 8px 12px 0 rgba(0, 0, 0, 0.4);
}
.cassette-panel-inner:before {
  content: "";
  display: block;
  position: absolute;
  top: 4px;
  left: 4px;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  box-sizing: border-box;
  border: #919180 3px solid;
  border-radius: 60px;
}

.cassette-panel-container {
  position: relative;
  flex-grow: 1;
  min-width: var(--panel-min-x);
  min-height: var(--panel-min-y);
  border-radius: calc(64px - var(--panel-inner-padding));
  word-break: break-all;
  overflow: hidden;
  border: #444 8px solid;
  background: radial-gradient(ellipse at 20% 30%, #0d2018, #070a09);
}

.cassette-panel-content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 16px;
  overflow-y: auto;
  color: #8bcfa2;
  text-shadow:
      0 0 8px #ffffff,
      0 0 16px #305847,
      0 0 32px #305847;
}

::selection {
  color: #0d2018;
  background-color: #8bcfa2;
}

@keyframes cursor-blink {
  0% {
    visibility: hidden;
  }
  50% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}

.cassette-panel-content-cursor {
  position: relative;
  display: inline-block;
  width: 6px;
  height: 14px;
  background-color: #8bcfa2;
  box-shadow:
      0 0 8px 0 #ffffff,
      0 0 16px 0 #305847,
      0 0 32px 0 #305847;
}

.cassette-panel-controller {
  position: relative;
  display: flex;
  flex-grow: 1;
  min-width: var(--panel-min-x);
  min-height: var(--panel-min-y);
  margin: 64px auto;
  padding: 12px;
}
</style>
