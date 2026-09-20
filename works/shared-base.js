(function () {
    const cur = document.getElementById('cur');
    const curR = document.getElementById('cur-r');
    if (cur && curR) {
      let mx=0,my=0,rx=0,ry=0;
      document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cur.style.left=mx+'px'; cur.style.top=my+'px'; });
      (function tick(){ rx+=(mx-rx)*.13; ry+=(my-ry)*.13; curR.style.left=rx+'px'; curR.style.top=ry+'px'; requestAnimationFrame(tick); })();
    }
  
  
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
      }, { threshold: 0.08 });
      revealEls.forEach(el => io.observe(el));
    }
  })();