const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  ScrollReveal().reveal(".main-container img", {
    ...scrollRevealOption,
    origin:"bottom",
    delay: 300,
  });
  ScrollReveal().reveal(".main-container h3", {
    ...scrollRevealOption,
    delay: 600,
  });  
  ScrollReveal().reveal(".main-container p", {
    ...scrollRevealOption,
    delay: 900,
  });  

  ScrollReveal().reveal(".social-media a", {
    ...scrollRevealOption,
    delay: 1200,
    interval: 500,
  });  

  ScrollReveal().reveal("button", {
    ...scrollRevealOption,
    delay: 3000,
  });  