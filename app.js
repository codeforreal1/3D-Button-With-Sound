;(function () {
  const button = document.querySelector('button')

  if (button) {
    const audio = new Audio('./click.mp3')
    button.addEventListener('click', () => {
      audio.play()
    })
  }
})()
