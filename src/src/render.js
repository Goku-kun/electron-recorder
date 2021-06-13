import { desktopCapturer, remote } from "electron";

const video = document.querySelector("video");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const videoSelectBtn = document.querySelector("#videoSelectBtn");

// var { desktopCapturer, remote } = require("electron");
const { Menu } = remote;

async function getVideoSources() {
  var inputSources = await desktopCapturer({
    types: ["window", "screen"],
  });
  var videoOptionsMenu = Menu.buildFromTemplate(
    inputSources.map(function (source) {
      return { label: source.name, click: () => selectSource(source) };
    })
  );

  videoOptionsMenu.popup();
}

videoSelectBtn.addEventListener("click", getVideoSources);
