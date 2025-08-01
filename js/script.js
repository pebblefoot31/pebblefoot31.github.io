const blogPosts = {
  1: {
    title: "my first internship",
    date: "11/20/24",
    content: `SULI at Lawrence Berkeley National Laboratory: 
          "In winter of 2023, I reached out to a research group involved in a project of my interest at my top lab preference through a brief email expressing interest. Soon after, I received a response from their group lead, virtually met with 
            my mentor, and before I knew it- I was booking a flight to California for my first
            internship.
            
            In the summer of 2024, I had the privilege of collaborating with my
            mentor, Prabhat Kumar, within the Applied Mathematics and Computational Research (AMCR)
            division on a project centered around FerroX, a simulation code that models low-power
            microelectronics to combat high levels of computational energy consumption via
            differential-equation-based calculations through time integration.

            <p> To improve FerroX's performance, my goal was to lengthen the time step size such that
            the program took fewer steps per computation in an effort to reduce the overall runtime. Our
            approach involved systematically implementing and then validating powerful time integration
            features from the SUite of Nonlinear and DIfferential/ALgebraic equation Solvers (SUNDIALS).
            Each week was an opportunity for me to understand the mathematical reasoning for the tests we
            ran on FerroX after implementing a new SUNDIALS method into the source code. On another
            note, partaking in LBNL's first Ignite Off! competition with the encouragement of mentors and
            coworkers alike helped me become more comfortable with public speaking and the art of concise
            scientific communication. This event also helped me broaden my network as I worked closely
            with individuals other than my mentor to design and practice the presentation.</p>

            While the technical work shaped my understanding of the cyclical process of
            computational science, the mentors and fellow interns I interacted with everyday instilled a
            fondness for collaborative research. This program has given me first-hand exposure to the
            breakthrough applications of computer science and is a memorable first step into the research
            community.`,
  },
  2: {
    title: "how to gym",
    date: "---",
    content: "Under construction. Will be up soon!",
  },
  3: {
    title: "art is life",
    date: "---",
    content: "Under construction. Will be up soon!",
  },
  4: {
    title: "writing emails",
    date: "---",
    content: "Under construction. Will be up soon!",
  },
  5: {
    title: "my first part-time job",
    date: "---",
    content: "Under construction. Will be up soon!",
  },
};

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function loadBlogPost() {
  const postId = getQueryParam("id");

  const post = blogPosts[postId];
  const container = document.getElementById("blog-post");

  if (!post) {
    container.innerHTML = `<p>Post not found.</p>`;
    return;
  }

  container.innerHTML = `
    <h1 class="post-title">${post.title}</h1>
    <p class="post-date">${post.date}</p>
    <div class="post-content">${post.content}</div>
  `;
}

window.addEventListener("DOMContentLoaded", loadBlogPost);