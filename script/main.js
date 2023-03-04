const cur = document.querySelector('.cursor');
const minCur = document.querySelector('.miniCursor');

const locoScroll = new LocomotiveScroll({
  el: document.querySelector('.smooth-scroll'),
  smooth: true,
});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on('scroll', ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy('.smooth-scroll', {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector('.smooth-scroll').style.transform
    ? 'transform'
    : 'fixed',
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

gsap.set('.cursor', {
  xPercent: -50,
  yPercent: -50,
});

gsap.set('.miniCursor', {
  xPercent: -50,
  yPercent: -50,
});

window.addEventListener('mousemove', (e) => {
  gsap.to(cur, 0.4, { x: e.clientX, y: e.clientY, ease: 'easeIn' });
  gsap.to(minCur, 0.6, { x: e.clientX, y: e.clientY, ease: 'easeIn' });
});

// let tl = gsap.timeline({ repeat: -1 });
// tl.to('.b-1', {
//   bottom: '150%',
//   duration: 2,
// })
//   .to('.b-2', {
//     bottom: '150%',
//     duration: 2,
//   })
//   .to('.b-3', {
//     bottom: '150%',
//     duration: 2,
//   })
//   .to('.b-4', {
//     bottom: '150%',
//     duration: 2,
//   })
//   .to('.b-5', {
//     bottom: '150%',
//     duration: 2,
//   });

gsap.to('.b-1', {
  bottom: '150%',
  duration: 10,
  delay: 0.25,
  repeat: -1,
});
gsap.to('.b-12', {
  bottom: '150%',
  duration: 10,
  delay: 0.5,
  repeat: -1,
});
gsap.to('.b-7', {
  bottom: '150%',
  duration: 10,
  delay: 0.75,
  repeat: -1,
});
gsap.to('.b-2', {
  bottom: '150%',
  duration: 10,
  delay: 1,
  repeat: -1,
});
gsap.to('.b-5', {
  bottom: '150%',
  duration: 10,
  delay: 1.25,
  repeat: -1,
});
gsap.to('.b-9', {
  bottom: '150%',
  duration: 10,
  delay: 1.5,
  repeat: -1,
});
gsap.to('.b-6', {
  bottom: '150%',
  duration: 10,
  delay: 1.75,
  repeat: -1,
});
gsap.to('.b-10', {
  bottom: '150%',
  duration: 10,
  delay: 2,
  repeat: -1,
});
gsap.to('.b-3', {
  bottom: '150%',
  duration: 10,
  delay: 2.25,
  repeat: -1,
});
gsap.to('.b-4', {
  bottom: '150%',
  duration: 10,
  delay: 2.5,
  repeat: -1,
});
gsap.to('.b-11', {
  bottom: '150%',
  duration: 10,
  delay: 2.5,
  repeat: -1,
});
gsap.to('.b-8', {
  bottom: '150%',
  duration: 10,
  delay: 0.5,
  repeat: -1,
});

// Navigation Bar Script
const bars = document.querySelector('.bars');
if (bars) {
  bars.addEventListener('click', function () {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      gsap.to('.bar.one', {
        rotate: '-45deg',
        top: '50%',
        y: '-50%',
        transformOrigin: 'center',
      });
      gsap.to('.bar.two', {
        rotate: '45deg',
        top: '50%',
        y: '-50%',
        transformOrigin: 'center',
      });
      gsap.to('.closed', {
        marginTop: '-24px',
      });
      gsap.to('.navMenu', {
        bottom: '-85%',
        y: '85%',
        display: 'grid',
        opacity: 1,
      });
    } else {
      gsap.to('.bar.one', {
        rotate: '0deg',
        top: '40%',
        y: '-40%',
      });
      gsap.to('.bar.two', {
        rotate: '0deg',
        top: '60%',
        y: '-60%',
      });
      gsap.to('.closed', {
        marginTop: '0',
      });
      gsap.to('.navMenu', {
        bottom: '-100%',
        y: '100%',
        display: 'none',
        opacity: 0,
      });
    }
  });
}
