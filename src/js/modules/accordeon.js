const accordeon = (btnSelector) => {
    const btns = document.querySelectorAll(btnSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');
            if (this.classList.contains('active-style')){
this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            }else {
                this.nextElementSibling.style.maxHeight = "0px";
            }
        })
    });


    //   const  blocks = document.querySelectorAll(blockSelector);
    //
    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });
    //
    // btns.forEach(btn => {
    //     btn.addEventListener('click', function () {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(el => { el.classList.remove('active') });
    //             this.classList.add('active');
    //         }else{
    //             btns.forEach(el => { el.classList.remove('active') });
    //         }
    //     })
    // })


};

export default accordeon;