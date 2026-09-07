  document.getElementById('year').textContent = new Date().getFullYear();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // growth bar fill
  const growthTrack = document.getElementById('growthTrack');
  const gio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        gio.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  if(growthTrack) gio.observe(growthTrack);

  // nav elevation + hero parallax + sticky call button on scroll
  const navEl = document.querySelector('.site-nav');
  const vineEl = document.querySelector('.vine-svg');
  const stickyCall = document.getElementById('stickyCall');
  const heroH = document.querySelector('.hero') ? document.querySelector('.hero').offsetHeight : 0;

  const onScroll = () => {
    const y = window.scrollY;
    navEl.classList.toggle('scrolled', y > 40);
    if(!reduceMotion && vineEl && y < heroH){
      vineEl.style.transform = `translateY(${y * 0.12}px)`;
    }
    if(stickyCall){
      stickyCall.classList.toggle('visible', y > heroH * 0.6);
    }
  };
  window.addEventListener('scroll', onScroll, { passive:true });
