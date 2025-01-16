import self from "../img/self.png";
import kaizen from "../img/Kaizen.png";
import ProjectPlanner from "../img/pp.png";
import hirehost from "../img/hirehost.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Jeet",
  lastName: "Mehta",
  initials: "jm", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "🌎",
      text: "Based in the Ahmedabad",
    },
    {
      emoji: "💼",
      text: "Devloper at Techuz Infoweb Pvt Ltd",
    },
    {
      emoji: "📧",
      text: "jeetmehta3012@gmail.com",
    },
    { emoji: "📞", text: "+91 9409078145" },
  ],
  socials: [
    {
      link: "https://github.com/jeet-techuz",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/jeet-mehta3012/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // {
    //   link: "https://twitter.com",
    //   icon: "fa fa-twitter",
    //   label: "twitter",
    // },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "I'm a software developer specializing in building full-stack web applications using the MERN stack. I specialize in Node.js, React.js, Next.js, and SQL to build scalable, high-performance web applications. I've leveraged React.js for frontend development and Next.js for server-side rendering, while using Node.js to design maintainable backend systems. My SQL expertise ensures efficient, reliable database design and optimization. I've consistently delivered quality code, met project deadlines, and collaborated with cross-functional teams to achieve organizational objectives.",
  skills: {
    programming: ["Javascript", "TypeScript"],
    framworks: [
      "ReactJs",
      "NextJs",
      "NodeJs",
      "ObjectionJs",
      "KnexJs",
      "AngularJs",
    ],
    database: ["SQL", " GraphQL"],
  },
  hobbies: [
    {
      label: "Cricket",
      emoji: "🏏",
    },
    {
      label: "Football",
      emoji: "⚽",
    },
    {
      label: "Movies",
      emoji: "🎥",
    },
    {
      label: "Cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Hirehost",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      image: hirehost,
      about:
        "There are two roles: the hoster and the hostee. On the hostee side, job listings posted by the hoster are displayed. Additionally, there is a resume builder feature, along with job-speciqe questions and answers. On the hoster side, they can post jobs, add questions and answers, and manage the applications received from hostees for each particular job. They can then decide to hire, reject, or take other actions accordingly",
    },
    {
      title: "Kaizen",
      live: "https://paytonpierce.dev",
      image: kaizen,
      about:
        "we will manage assessments involving two roles: the reviewer and the reviewee. Me aim to create assessments, assign the reviewee and reviewer roles, launch the assessment, allow reviewers to provide feedback to the reviewee, and based on the review, identify strengths, weaknesses, and opportunities for improvement.",
    },
    {
      title: "Project Planner",
      live: "https://paytonpierce.dev",
      image: ProjectPlanner,
      about:
        "we can manage projects, assign employees to them, maintain daily Minutes of Meeting (MOM), conduct standups, manage employee profiles, and observe employee management as well.",
    },
  ],
};
