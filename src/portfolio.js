/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Devin Jaya Nugraha",
  title: "Hi! I'm Devin",
  subTitle: emoji(
    "Certified TensorFlow Developer 🚀 experienced in building machine learning and deep learning applications with PyTorch and TensorFlow"
  ),
  resumeLink: "https://bit.ly/ResumeDevinJan2024", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/devinjnugraha",
  linkedin: "https://www.linkedin.com/in/devinjnugraha/",
  gmail: "devinjn123@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "CRAZY MACHINE LEARNING DEVELOPER WHO WANTS TO EXPLORE A LOT OF DATA",
  skills: [
    emoji(
      "⚡ Develop and deploy machine learning models to analyze data and improve decision-making processes"
    ),
    emoji(
      "⚡ Stay updated on industry trends, focusing on Convolutional Neural Networks (CNN) to enhance expertise in image processing and computer vision"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fab fa-google"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Brawijaya University",
      logo: require("./assets/images/brawijayaLogo.png"),
      subHeader: "Bachelor of Computer Science in Informatics Engineering",
      duration: "Aug 2020 - Jan 2024",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "GPA 3.87",
        "Graduated in 3.5 years with Cum Laude predicate",
        "Thesis: Optimizing Convolutional Neural Network Using Weighted Loss for Glaucoma Detection (2023)",
        "Deputy Head of Information Technology Department at Eksekutif Mahasiswa Informatika (2022-2023)",
        "7th Place of Data Competition in Predicting House Prices in Jabodetabek (ISFEST UMN 2023)"
      ]
    },
    {
      schoolName: "SMAN 63 Jakarta",
      logo: require("./assets/images/logoSMA.png"),
      subHeader: "High School - Mathematics and Natural Science",
      duration: "Aug 2017 - Jun 2020",
      // desc: "Senior High School",
      descBullets: ["GPA 3.37", "Basketball Team Captain (2018-2019)"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning / Deep Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Analytics",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Computer Lab Assistant for Database System",
      company: "FILKOM UB",
      companylogo: require("./assets/images/logoFilkom.png"),
      date: "Aug 2022 – Dec 2022",
      desc: "Taught Database System Concepts using MSQL Server, including Entity Relational Model, Entity Relationship Diagram, Relational Algebra, Data Definition Language, Data Manipulation Language, Joins, SQL Operator, Column Function and Grouping, SQL Subquery, SQL Transaction, and T-SQL for 31 Brawijaya University students majoring in Informatics."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Computer Lab Assistant for Algorithm and Data Structures",
      company: "FILKOM UB",
      companylogo: require("./assets/images/logoFilkom.png"),
      date: "Aug 2022 – Dec 2022",
      desc: "Taught Algorithms and Data Structures using Java, including Linked List, Stack, Queue, Binary Tree, Heap Tree, and Graph for 30 Brawijaya University students majoring in Information Systems."
    },
    {
      role: "Computer Lab Assistant for Operating System",
      company: "FILKOM UB",
      companylogo: require("./assets/images/logoFilkom.png"),
      date: "Feb 2022 – Jul 2022",
      desc: "Taught Operating System Concepts using Linux, including Shell Scripting, Process and Thread, Synchronization, CPU Scheduling, Deadlock, Memory Allocation, File System and Directory, Input Output, and Virtualization & Container for 31 Brawijaya University students majoring in Informatics."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME COOL MACHINE LEARNING APPLICATIONS THAT I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/logoTresure.png"),
      projectName: "Tresure",
      projectDesc:
        "Tresure utilizes machine learning algorithms to help you find vacation packages that suit your budget and preferences",
      footerLink: [
        {
          name: "Visit Project Repo",
          url: "https://github.com/Tresure-Bangkit2023/"
        }
        //  you can add extra buttons here.
      ]
    }
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Certified TensorFlow Developer",
      subtitle:
        "Certified developer skilled in using TensorFlow to build advanced machine learning models for tasks such as image recognition, object detection, text recognition, and natural language processing",
      image: require("./assets/images/logoTensorFlowCertified.png"),
      imageAlt: "TensorFlow Developer Certificate Logo",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.credential.net/435d5e25-dccf-4a8f-94b6-2df144777e47"
        }
      ]
    },
    {
      title: "Mathematics for Machine Learning Specialization",
      subtitle:
        "Skilled in translating data into a mathematical framework using linear algebra, summarizing dataset characteristics, employing principal component analysis for simplifying complex data, solving optimization problems, and applying these abilities to train models, including neural networks, for comprehensive data understanding.",
      image: require("./assets/images/logoImperialCollegeLondon.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Credential",
          url: "https://coursera.org/share/b24a6203527022165e3e56134d6d9c14"
        }
      ]
    },

    {
      title: "Machine Learning Specialization",
      subtitle:
        "Completed the Machine Learning Specialization with a focus on modern concepts like supervised and unsupervised learning, recommender systems, and reinforcement learning, equipped with practical skills to effectively apply machine learning techniques to real-world challenges",
      image: require("./assets/images/logoDeeplearningAI.png"),
      imageAlt: "Deeplearning.AI Logo",
      footerLink: [
        {
          name: "View Credential",
          url: "https://coursera.org/share/6d32e035293f6f946b663cb59b92d1c6"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "devinjn123@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "deeviiin", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
