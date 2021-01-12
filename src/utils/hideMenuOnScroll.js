const hideMenuOnScroll = () => {
  const header = document.querySelector('.header');
  let prevScrollPos = window.pageYOffset;
  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    const screenWidth = window.screen.availWidth;
    if (screenWidth < 768) {
      if (currentScrollPos > prevScrollPos) {
        header.style.top = '-50px';
      } else {
        header.style.top = '0';
      }
    }

    if (currentScrollPos === 0) {
      header.style.backgroundColor = 'transparent';
    } else {
      header.style.backgroundColor = 'rgba(0,0,0,0.8)';
    }
    prevScrollPos = currentScrollPos;
  };
};

export default hideMenuOnScroll;
