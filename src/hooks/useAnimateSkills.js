import { useEffect } from "react";

const useAnimateSkills = () => {
  useEffect(() => {
    const skillBars = document.querySelectorAll(".skill-bar");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const fill = entry.target.querySelector(".fill");
            const targetWidth = entry.target.getAttribute("data-width");
            fill.style.width = targetWidth;
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    skillBars.forEach(bar => observer.observe(bar));

    return () => {
      skillBars.forEach(bar => observer.unobserve(bar));
    };
  }, []);
};

export default useAnimateSkills;


