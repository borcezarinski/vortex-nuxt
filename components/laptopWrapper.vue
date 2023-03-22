<template>
  <div class="laptop-wrapper" >
  <div v-if="$vuetify.breakpoint.lgAndUp">
    <div class="screen screen__window screen__window--background">
      <div class="screen screen__window screen__window--foreground">
        <div class="screen screen__display" style="color:whitesmoke;text-align:center;">
          <h5 class="text-nowrap">Работно Време:</h5>
          <h5 class="text-nowrap">Понеделник - Петок</h5>
          <h5 class="text-nowrap">10:00 - 17:00</h5>                            </div>
        <div class="screen__base">
          <div class="base base__middle"></div>
          <div class="base base__plugs">
            <div class="plug plug--usb plug--usb--1"></div>
            <div class="plug plug--usb plug--usb--2"></div>
            <div class="plug plug--psu"></div>
          </div>
        </div>
      </div>
      <div class="screen screen__shadow"></div>
    </div>
    <div class="mug">
      <div class="mug__particles">
        <div class="particle particle--cross particle--cross--1 particle--pink"></div>
        <div class="particle particle--cross particle--cross--2 particle--blue"></div>
        <div class="particle particle--cross particle--cross--3 particle--green"></div>
        <div class="particle particle--cross particle--cross--4 particle--yellow"></div>
        <div class="particle particle--diamond particle--diamond--1 particle--yellow"></div>
        <div class="particle particle--diamond particle--diamond--2 particle--pink"></div>
      </div>
      <img class="img img-responsive" style="width:100%;height:100%;" src="vortex-favicon.ico"/>
      <div class="mug__handhelper"></div>
    </div>

  </div>
    <div v-else>
      <h5 class="text-nowrap text-center ">Работно Време:</h5>
      <h5 class="text-nowrap text-center">Понеделник - Петок</h5>
      <h5 class="text-nowrap text-center">10:00 - 17:00</h5>
    </div>
  </div>
</template>
<style>
@keyframes screenOn {

  0% {

    transform: scale3d(0, 0, 1);

  }

  1% {

    transform: scale3d(0.01, 0.01, 1);

  }

  50% {

    transform: scale3d(1, 0.01, 1);

  }

  100% {

    transform: scale3d(1, 1, 1);

  }

}

@keyframes slideMug {

  0% {

    transform-origin: 100% 100%;

    transform: translateX(-50px);

    opacity: 0;

  }

  100% {

    transform: translateX(0px);

    opacity: 1;

  }

}

@keyframes slideDown {

  0% {

    opacity: 0;

    transform: translateY(-24px);

  }

  100% {

    opacity: 1;

    transform: translateY(0px);

  }

}

@keyframes up1 {

  0% {

    transform: rotateZ(45deg) translateY(0px) translateX(0px);

    opacity: 0;

  }

  25% {

    opacity: 1;

  }

  80% {

    opacity: 1;

  }

  100% {

    opacity: 0;

    transform: rotateZ(45deg) translateY(-62px) translateX(-62px);

  }

}

@keyframes up2 {

  0% {

    transform: rotateZ(45deg) translateY(0px) translateX(0px);

    opacity: 0;

  }

  25% {

    opacity: 1;

  }

  80% {

    opacity: 1;

  }

  100% {

    opacity: 0;

    transform: rotateZ(45deg) translateY(-42px) translateX(-42px);

  }

}

@keyframes up3 {

  0% {

    transform: rotateZ(45deg) translateY(0px) translateX(0px);

    opacity: 0;

  }

  25% {

    opacity: 1;

  }

  80% {

    opacity: 1;

  }

  100% {

    opacity: 0;

    transform: rotateZ(45deg) translateY(-82px) translateX(-82px);

  }

}



.laptop-wrapper {
  width: 450px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  transition: 0.25s ease-in-out;
  z-index:3;
}

.screen {

  position: relative;

}

.screen__window {

  width: 304px;

  height: 213px;

}

.screen__window--background {

  background-color: #D3D3D3;

  border-radius: 13px/16px;

}

.screen__window--foreground {

  background-color:#7fc227;

  top: 0;

  left: 16px;

  border-radius: 16px;

  padding: 16px;

}

.screen__display {

  width: 272px;

  height: 172px;

  background-color: black;

  padding: 23px 32px;

  animation: screenOn 1s ease-in-out 0s backwards;

}

.screen__base {

  width: 361px;

  height: 40px;

  background-color: #D3D3D3;

  border-radius: 20px;

  position: absolute;

  bottom: -31px;

  left: 0;

  z-index: 10;

}

.screen__base .base {

  position: absolute;

  top: 0;

}

.screen__base .base__middle {

  width: 65px;

  height: 21px;

  left: 208px;

  background-color: black;

  border-radius: 0 0 14px 14px / 0px 0px 18px 18px;

}

.screen__base .base__plugs {

  width: 123px;

  height: 40px;

  background-color: #D3D3D3;

  border-radius: 20px;

}

.screen__base .base .plug {

  top: 15px;

  position: absolute;

  border-radius: 6px;

  height: 11px;

}

.screen__base .base .plug--usb, .screen__base .base .plug--psu {

  background-color: black;

}

.screen__base .base .plug--usb {

  width: 21px;

}

.screen__base .base .plug--usb--1 {

  left: 16px;

  background-color: black;

}

.screen__base .base .plug--usb--2 {

  left: 41px;

}

.screen__base .base .plug--psu {

  width: 11px;

  right: 18px;

}

.screen .row {

  margin-top: 18px;

}

.screen .row:first-child {

  margin-top: 0;

}

.screen .row:nth-child(3n+1) {

  animation: slideDown 0.6s cubic-bezier(0.18, 0.92, 0.71, 1.21) 1.2s both;

}

.screen .row:nth-child(3n+2) {

  animation: slideDown 0.6s cubic-bezier(0.18, 0.92, 0.71, 1.21) 1.4s both;

}

.screen .row:nth-child(3n+3) {

  animation: slideDown 0.6s cubic-bezier(0.18, 0.92, 0.71, 1.21) 1.6s both;

}



.screen__shadow {

  background-color: rgba(0, 0, 0, 0.2);

  width: 439px;

  height: 17px;

  border-radius: 9px;

  top: 24px;

  left: 2px;

}

.mug {

  width: 75px;

  height: 97px;

  background-color:whitesmoke;

  position: absolute;

  top: 147px;

  left: 355px;

  animation: slideMug 1s ease-in-out 1.5s backwards;

}

.mug__liquid {

  width: 19px;

  position: absolute;

  z-index: 6;

  top: 0;

  border-radius: 0 0 10px 10px;

}

.mug__liquid--small {

  background-color: #6f4e37;

  height: 17px;

  left: 28px;

}

.mug__liquid--big {

  background-color: #6f4e37;

  height: 49px;

  left: 47px;

}

.mug__handhelper {

  position: absolute;

  z-index: -1;

  top: 14px;

  left: 72px;

  width: 35px;

  height: 68px;

  border: 14px solid #1e1a17;

  border-left: none;

  border-radius: 0 34px 34px 0;

  animation: slideDown 0.5s ease-in-out 1.4s backwards;

}

.mug__particles {

  position: absolute;

  top: 10px;

  left: 0;

  width: 100%;

  height: 0;

  z-index: -1;

}

.mug .particle {

  position: absolute;

  top: 0;

  transform: rotateZ(45deg);

}

.mug .particle--diamond {

  width: 9px;

  height: 9px;

}

.mug .particle--diamond--1 {

  left: 44px;

  animation: up1 4s ease-in-out 3.7s infinite backwards;

}

.mug .particle--diamond--2 {

  left: 25px;

  animation: up3 5.5s ease-in-out 5s infinite backwards;

}

.mug .particle--cross {

  width: 9px;

  height: 3px;

}

.mug .particle--cross:before {

  content: "";

  display: block;

  height: 9px;

  width: 3px;

  position: absolute;

  top: -3px;

  left: 3px;

  background-color: inherit;

}

.mug .particle--cross--1 {

  left: 5px;

  animation: up1 3.3s ease-in-out 3.5s infinite backwards;

}

.mug .particle--cross--2 {

  left: 11px;

  animation: up2 2.6s ease-in-out 4.2s infinite backwards;

}

.mug .particle--cross--3 {

  left: 22px;

  animation: up3 3s ease-in-out 3.3s infinite backwards;

}

.mug .particle--cross--4 {

  left: 33px;

  animation: up2 4s ease-in-out 3s infinite backwards;

}

.mug .particle--pink {

  background-color: #D4AF37;

}

.mug .particle--blue {

  background-color: #628dd1;

}

.mug .particle--green {

  background-color: #4c988e;

}

.mug .particle--yellow {

  background-color: #7fc227;

}

</style>
