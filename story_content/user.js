function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ToLDz4OPQb":
        Script1();
        break;
  }
}

function Script1()
{
  if (!window.bgAudio) {
    window.bgAudio = new Audio("audio1.mp3");
    window.bgAudio.loop = true;
    window.bgAudio.volume = 0.7; // atur volume jika perlu
    window.bgAudio.play();
}
}

