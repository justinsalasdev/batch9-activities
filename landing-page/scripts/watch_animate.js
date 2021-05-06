let options = {
  root: null,
  threshold: 0.5
};

const animations = {
  features__heading: "fade-zoom-in",
  power__heading: "fade-from-left",
  power__desc: "fade-zoom-in",
  feature__item: "fade-from-right",
  material__desc: "fade-from-left",
  material__feat: "fade-zoom-in",
  visual__heading: "fade-zoom-in",
  visual__desc: "fade-from-left",
  visual__feat: "fade-from-right",
  gaming__heading: "fade-from-right",
  gaming__article: "fade-from-left",
  usage__heading: "fade-zoom-in",
  usage__desc: "fade-from-right",
  promotion__heading: "fade-zoom-in",
  promotion__desc: "fade-from-right",
  promotion__action: "fade-from-left",
  testimonials__heading: "fade-from-left"
};

const watchlist = Object.keys(animations);

function callBack(entries, _) {
  entries.forEach(entry => {
    const rootClass = entry.target.classList[0];
    entry.target.classList.toggle(`${animations[rootClass]}`, entry.isIntersecting);
  });
}

let observer = new IntersectionObserver(callBack, options);
watchlist.forEach(target => {
  if (target === "feature__item") {
    document.querySelectorAll(`.${target}`).forEach(el => observer.observe(el));
  } else {
    observer.observe(document.querySelector(`.${target}`));
  }
});
