let wrapper = document.querySelector(".wrapper")
        const blocks = document.getElementsByClassName('block')

        for (let i = 1; i < 400; i++) {
            wrapper.innerHTML += ' <div class="block"></div>';
            const duration = Math.random() * 5
            blocks[i].style.animationDelay = 2+duration+'s'
        }     