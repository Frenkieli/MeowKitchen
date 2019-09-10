function bread(viewScroll,viewhight){
    var section_step = document.getElementsByClassName('section_step')[0];
    var section_stepTop = section_step.offsetTop;
    var step_back = document.getElementsByClassName('step_back')[0];
    var step_next = document.getElementsByClassName('step_next')[0];
    viewScroll += viewhight - (section_step.scrollHeight / 2);
    if (section_stepTop < viewScroll) {
        section_step.style.opacity='1';
        step_back.style.left='0';
        step_next.style.right='0';
        // console.log('啟動');
    }
    // console.log(section_stepTop,'section_footerTop');
    // console.log(viewScroll,'viewScroll');
}