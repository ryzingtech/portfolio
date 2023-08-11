var typed = new Typed(".auto-input", {
    strings: ["Niraj Kumar" , "Front-End Web Developer.","Graphic Designer."],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})

// skill bar
document.addEventListener("DOMContentLoaded", function () {
    const skills = [
      { label: "HTML", progress: 90 },
      { label: "CSS", progress: 80 },
      { label: "JavaScript", progress: 30 },
      { label: "Java", progress: 90 },
      { label: "Photoshop", progress: 55 },
      { label: "MS office", progress: 65 },
      { label: "C++", progress: 85 },
    ];

    skills.forEach((skill, index) => {
      const progressBar = new ProgressBar.Line(`#progress${index + 1}`, {
        color: "aqua",
        trailColor: "#f0f0f0",
        strokeWidth: 10,
        duration: 2000,
        easing: "easeInOut",
      });

      progressBar.animate(skill.progress / 100);
    });
  });
