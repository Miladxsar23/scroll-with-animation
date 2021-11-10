/* create a class for scroll animation for To keeping scroll status*/
class ScrollAnim {
  constructor(scrollDiff) {
    this.scrollDiff = scrollDiff, this.requestAnimId = 0,
      this.current = window.pageYOffset, this.regHref = /^(#.\w+)$/;
  }
  //This method is called when the target position is below the current position
  scrollDown(time, lastTime, targetPosition) {
    this.current += this.scrollDiff;
    if (this.current > targetPosition) {
      this.reset(targetPosition)
      return;
    }
    window.scrollTo(0, this.current);
    this.requestAnimId = requestAnimationFrame(newTime =>
      this.scrollDown(newTime, time, targetPosition))
  }
  //This method is called when the target position is above the current position
  scrollUp(time, lastTime, targetPosition) {
    this.current -= this.scrollDiff;
    if (this.current < targetPosition) {
      this.reset(targetPosition);
      return;
    }
    window.scrollTo(0, this.current)
    this.requestAnimId = requestAnimationFrame(newTime => this.scrollUp(newTime, time, targetPosition))
  }
  //check href attribute , return true?<Array match>:NULL
  checkHref(href) {
    return this.regHref.exec(href);
  }
  //This method is called when the scroll reaches the target   
  reset(currentPosition) {
    window.scrollTo(0, currentPosition);
    window.cancelAnimationFrame(this.requestAnimId);
    this.requestAnimId = 0;
    this.current = currentPosition;
  }
}

/* create a instance of ScrollAnim as global Object and define with 'var' */
var scrollAnim = new ScrollAnim(50);

//event for all <a> elements with validate href
Array.from(document.querySelectorAll('a')).forEach(elem => {
  let match = scrollAnim.checkHref(elem.getAttribute("href"))
  if (match) {
    match = match.slice(1)[0]
    elem.addEventListener('click', e => {
      e.preventDefault();
      let targetElem = document.querySelector(match);
      if (targetElem) {
        let top = targetElem.offsetTop;
        if (top < scrollAnim.current) requestAnimationFrame((time) => scrollAnim.scrollUp(time, null, top))
        else requestAnimationFrame((time) => scrollAnim.scrollDown(time, null, top))
      }
    })
  }
})

window.addEventListener('scroll', e => {
  scrollAnim.current = pageYOffset;
})

