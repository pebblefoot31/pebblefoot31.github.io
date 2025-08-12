const blogPosts = {
  1: {
    title: "my first internship",
    date: "11/20/24",
    content: `SULI at Lawrence Berkeley National Laboratory: 
            In winter of 2023, I reached out to a research group involved in a project of my interest at my top lab preference through a brief email expressing interest. Soon after, I received a response from their group lead, virtually met with 
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
    title: "intern’s insight on small talk: ",
    date: "July 2024",
    content: `I’ve noticed that one of the simplest but most effective ways to build a network is through meaningful small talk. But instead of sticking to surface-level topics like the weather, diving a little deeper can lead to richer conversations and better advice. One question that really stands out to me is the classic: “What are you working on right now?” While it’s a great way to stay in the present moment, it often leads to answers that neglect the story behind someone’s growth.
For a more insightful conversation, I’ve found that asking, “What inspired you to pursue your current work?” opens up a whole new level of discussion. This question encourages people to share the evolution of their passions and gives you a glimpse into their journey. It’s not just about the project they are currently working on, but also about what led them there and what they’ve learned along the way.  In one conversation, you glimpse all the lessons that they have learned throughout their journey. This is key in forming a depthful connection while learning from someone you look up to.
`
  },
  3: {
    title: "homage to Spot It",
    date: "8/09/25",
    content: `One moment I’m reminiscing over memories from board game nights with my cousins, and recollecting the hundreds of card game rounds we played late into the night. One thought leads to another, and I decide I want my next personal project to be exactly that: personal, and meaningful. As a homage to one of my favorite childhood games, I get to work programming a digital version of the Spot It game.

Immediately, my mind jumps to planning the different pieces of this project. I start by mind mapping the flow of the game and sketching out some rough ideas for the UI/UX. As soon as a rough design is in place, I go straight to Figma to create a closer approximation of the final look. After drafting a few different layouts and color scheme combinations, I narrow down to one that feels just right. With the design starting to take shape, I familiarize myself with the basics of frontend-oriented JavaScript, and prepare to weave responsiveness into the app
This project has become more than just a portfolio polish. It’s a chance to blend nostalgia with new skills, turning a childhood memory into something both personal and tangible.
`,
  },
  4: {
    title: "writing cold emails",
    date: "12/16/23",
    content: `Sending a cold email to a company you are interested in can feel a bit like cooking pasta for the first time: nerve-wracking and intimidating. But if you get the basics right, it can turn out to be really rewarding. Just like with pasta, as long as you focus on the key ingredients and put in the effort to connect with the recipient, you’ve got a recipe for success. Here are some key ingredients to keep in mind:
Start with a friendly, thoughtful introduction and support it with research about the person or company you’re reaching out to. It’s also important to be mindful of timing. Sending emails during working hours is usually your best bet, and it’s best to avoid Fridays or weekends when people are winding down.
When cooking pasta, we want it to be satisfying and comforting, nothing too flashy. The same goes for your email. Rather than trying to impress with big names or stats, focus on expressing your genuine interest in the company’s goals and tie that interest back to your own experiences in a meaningful way.
Bon appétit to your cold email!`,
  },
  5: {
    title: "my first part-time job",
    date: "---",
    content: "under construction. will be up soon!",
  },
  6: {
    title: "an ode to design",
    date: "8/12/25",
    content: `One of the coolest things about coding is the process
    of transforming fleeting thoughts into a tangible vision through 
    design. That’s what kicked off my journey with Figma, a tool I 
    had never used before, and it all began with helping out a friend
    redesign her company’s landing page. At first, I had 
    no idea what I was doing. I didn’t know how to navigate Figma, or 
    anything about design theory. But I was up for the challenge. 
    I started watching tutorials, learning about color theory, and figuring 
    out how design could really impact a brand. Gradually, the puzzle pieces 
    started fitting together. With each meeting and feedback session from 
    Bella, I got a little better at spotting common design strategies,
     such as how bold fonts work with thin text or how cursive can soften 
     things up and bring an element of elegance. 

    After months of virtual meetings and design draft reviews, 
    we made it to the final stretch: utilizing the powerful Cursor AI tool 
    for an efficient Figma-to-Code implementation. What started as a simple 
    favor turned into my first big step into the world of UI/UX design, and
    I’m really excited to see where this path takes me next.`,
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