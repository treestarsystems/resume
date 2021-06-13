var resumeConfig = {
 "fullName":"Tree Star Systems",
 "resumeTitle":"Full Stack Developer",
 "resumeBirthDate":"11/20/1985",
 "resumeSiteLink":"https://treestarsystems.com",
 "resumeGithubLink":"https://github.com/treestarsystems",
 "resumeYoutubeLink":"https://www.youtube.com/watch?v=oYOdsJXKPFY&list=PLFwrukKhzwLjHuygfSlw97LGS0g5_pzGM",
 "resumeUpworkLink":"https://www.upwork.com/o/profiles/users/~0137ac5fc8e430492d/",
 "":"",
}

axios.get(`https://api.github.com/users/treestarsystems/repos`, {})
 .then((response) => {
  let targetDiv = document.getElementById('repoList');
  let rawRepoList = response.data;
  let repoListHTML = "";
  for (let i = 0; i < rawRepoList.length; i++) {
   let calc = i%2;
   let createdDate = new Date(rawRepoList[i].created_at);
   let updatedDate = new Date(rawRepoList[i].updated_at);
   let htmlTemplate = `
    <div class="item post-${calc+1}">
     <div class="blog-card">
      <div class="media-block">
       <div class="category">
        <a href="#" title="View all posts in Design">Design</a>
       </div>
       <a href="repo-url">
         <images src="images/blog/blog_post_1.jpg" class="size-blog-masonry-image-two-c" alt="Why I Switched to Sketch For UI Designs" title="" />
         <div class="mask"></div>
       </a>
      </div>
      <div class="post-info">
       <div class="post-date">Created: ${createdDate.toDateString()}</div>
       <div class="post-date">| Updated: ${updatedDate.toDateString()}</div>
       <a href="${rawRepoList[i].html_url}" target="_blank">
         <h3 class="blog-item-title">${rawRepoList[i].name}</h3>
         <h5 class="blog-item-title repo-list-description">${rawRepoList[i].description}</h5>
       </a>
      </div>
     </div>
    </div>
   `;
   repoListHTML += htmlTemplate;
  }
  targetDiv.innerHTML = repoListHTML;
 });

//Source: https://www.javatpoint.com/calculate-age-using-javascript
function calculateAge (birthDay) {
 var dob = new Date(birthDay);
 //calculate month difference from current date in time
 var month_diff = Date.now() - dob.getTime();
 //convert the calculated difference in date format
 var age_dt = new Date(month_diff);
 //extract year from date
 var year = age_dt.getUTCFullYear();
 //now calculate the age of the user
 var age = Math.abs(year - 1970);
 return age;
}

function fillResume (obj) {
 document.title = `Resume: ${obj.fullName} - ${obj.resumeTitle}`;
 let age = calculateAge(obj.resumeBirthDate);
 for (let key in obj) {
  if (key == "fullName") {
   let element = document.querySelectorAll(`.${key}`);
   element.forEach((e) => {
    e.innerHTML = obj[key];
   });
  }
  if (key.includes('Link')) {
   let element = document.querySelectorAll(`.${key}`);
   element.forEach((e) => {
    e.href = obj[key];
   });
  }
 }
}

//Take an array of image file names and the id of the img element
function randomPicture(pa) {
 let selectedObj = pa[Math.floor(Math.random() * pa.length)];
 let link = document.getElementById('artistLink');
 let backgroundImage = document.getElementById('particles-js');
 backgroundImage.style.backgroundImage = `url('images/backgrounds/${selectedObj.image}')`;
 link.href = `${selectedObj.link}`;
 link.innerHTML = `Background Image: ${selectedObj.author}`
}

function randomPageColor(ca) {
 let selectedObj = ca[Math.floor(Math.random() * ca.length)];
 let pageContentClass = document.querySelector('.page-content');
 let pageTitleClass = document.querySelectorAll('.page-title');
 let pageTitleAfterClass = document.querySelectorAll('.page-title:after');
 let activeLinkClass = document.querySelector('ul.main-menu a.active');
 let menuIconClass = document.querySelectorAll('.menu-icon');
 let titleClass = document.querySelectorAll('.title');
 let ciIconClass = document.querySelectorAll('.ci-icon > .lnr');
 let lmInfoBlockClass = document.querySelectorAll('.lm-info-block > .lnr');
 let knowledgesClass = document.querySelectorAll('.knowledges > li');
 let skillContainerClass = document.querySelectorAll('.skill-container');
 let skillPercentageClass = document.querySelectorAll('.skill-percentage');
 let linkTextClass = document.querySelectorAll('.link-text');
 pageContentClass.style.background = `${selectedObj.backgroundBasic}`;

 pageTitleClass.forEach((e,i) => {
  e.querySelector('h2').style.color = `${selectedObj.hoverColor}`;
//  e.style.setProperty(':after',`background-image: -webkit-repeating-radial-gradient(center center, ${selectedObj.hoverColor}, ${selectedObj.hoverColor} 1px, transparent 0px, transparent 100%);`)
/*
  let pseudoElement = window.getComputedStyle(e,':after');
  console.log(pseudoElement);
  pseudoElement.color = `${selectedObj.backgroundBasic}`;
*/
 });

// activeLinkClass.style.color = `${selectedObj.hoverColor}`;

 titleClass.forEach((e,i) => {
  e.style.color = `${selectedObj.hoverColor}`;
 });

 ciIconClass.forEach((e,i) => {
  e.style.color = `${selectedObj.hoverColor}`;
 });

 lmInfoBlockClass.forEach((e,i) => {
  e.style.color = `${selectedObj.hoverColor}`;
 });

 knowledgesClass.forEach((e,i) => {
  e.style.backgroundColor = `${selectedObj.hoverColor}`;
 });

 skillContainerClass.forEach((e,i) => {
  e.style.border = `1px solid ${selectedObj.hoverColor}`;
 });

 skillPercentageClass.forEach((e,i) => {
  e.style.backgroundColor = `${selectedObj.hoverColor}`;
 });

 linkTextClass.forEach((e,i) => {
  e.style.backgroundColor = `${selectedObj.hoverColor}`;
 });

 menuIconClass.forEach((e,i) => {
  e.onmouseover = () => {
   e.style.color = `${selectedObj.hoverColor}`;
  };
  e.onmouseout = () => {
   e.style.color = `#b5b6b7`;
  };
 });
}

function modifyStyleSheet () {
 let styleSheets = document.styleSheets;
 for (let i = 0; i < document.styleSheets.length; i++) {
  let targetCSS = document.styleSheets[i].href;
  if (targetCSS.includes('main.css')) {
   let rules = document.styleSheets[i].rules;
   for (let ir = 0; ir < rules.length; ir++) {
    if (rules[ir].cssText.includes('80, 80, 245')) {
//     console.log(rules[ir].cssText);
     console.log(rules[ir]);
    }
   }
  }
 }
}

var pictureArray = [
 {"image":"joshua-brian-smith-ornn-base-splash-web2.jpg","link":"https://www.artstation.com/artwork/LwAOK","author":"Joshua Brian Smith"},
 {"image":"artem-rhx-41-dive-sq1080.jpg","link":"https://www.artstation.com/artwork/WEbAy","author":"Artem Chebokha"},
 {"image":"artem-rhx-everyday-discoverer-1024.jpg","link":"https://www.artstation.com/artwork/8Nr0Q","author":"Artem Chebokha"},
 {"image":"artem-rhx-generator-of-ideas-1200.jpg","link":"https://www.artstation.com/artwork/qXxvz","author":"Artem Chebokha"},
 {"image":"artem-rhx-1200-1.jpg","link":"https://www.artstation.com/artwork/3gYNJ","author":"Artem Chebokha"},
 {"image":"artem-rhx-when-the-time-has-stopped.jpg","link":"https://www.artstation.com/artwork/xboKE","author":"Artem Chebokha"},
 {"image":"artem-rhx-09-3-reg1280.jpg","link":"https://www.artstation.com/artwork/X9xLD","author":"Artem Chebokha"},
 {"image":"artem-rhx-magic-night-1200.jpg","link":"https://www.artstation.com/artwork/LwKQv","author":"Artem Chebokha"},
 {"image":"artem-chebokha-the-begining-of-the-end-1600.jpg","link":"https://www.artstation.com/artwork/RYrQXr","author":"Artem Chebokha"},
 {"image":"artem-chebokha-dreams-cont1538.jpg","link":"https://www.artstation.com/artwork/aYDkzL","author":"Artem Chebokha"},
 {"image":"artem-chebokha-1313.jpg","link":"https://www.artstation.com/artwork/QzZrZd","author":"Artem Chebokha"},
 {"image":"artem-chebokha-ghost-of-the-war-1538.jpg","link":"https://www.artstation.com/artwork/OvKeb","author":"Artem Chebokha"},
 {"image":"artem-chebokha-000002-1538.jpg","link":"https://www.artstation.com/artwork/LZZNR","author":"Artem Chebokha"},
 {"image":"artem-chebokha-sky-for-dreamers1600.jpg","link":"https://www.artstation.com/artwork/5X0G8","author":"Artem Chebokha"},
 {"image":"artem-chebokha-tenkhariis1280.jpg","link":"https://www.artstation.com/artwork/ykZ5J","author":"Artem Chebokha"},
 {"image":"artem-chebokha-view-from-above-1538.jpg","link":"https://www.artstation.com/artwork/B25E4","author":"Artem Chebokha"},
 {"image":"artem-chebokha-ns-1538.jpg","link":"https://www.artstation.com/artwork/rlnVJ","author":"Artem Chebokha"},
 {"image":"g-mdk-ddddddd-2.jpg","link":"https://www.artstation.com/artwork/B14bED","author":"Artem Chebokha"},
 {"image":"artem-chebokha-1538.jpg","link":"https://www.artstation.com/artwork/5dKEO","author":"Artem Chebokha"},
 {"image":"artem-chebokha-11-1538.jpg","link":"https://www.artstation.com/artwork/eP6xJ","author":"Artem Chebokha"},
 {"image":"artem-chebokha-dreaming-light-1538.jpg","link":"https://www.artstation.com/artwork/a0J5R","author":"Artem Chebokha"},
 {"image":"artem-chebokha-nice-place-to-sketch-1538.jpg","link":"https://www.artstation.com/artwork/Kry0R","author":"Artem Chebokha"},
 {"image":"artem-cheboha-2-1024.jpg","link":"https://www.artstation.com/artwork/mD5o8","author":"Artem Chebokha"},
 {"image":"artem-chebokha-perian-spring1538.jpg","link":"https://www.artstation.com/artwork/ykZGJ","author":"Artem Chebokha"},
 {"image":"artem-rhx-danger-water1280.jpg","link":"https://www.artstation.com/artwork/neGXe","author":"Artem Chebokha"},
 {"image":"artem-chebokha-17-final-illumination-1538.jpg","link":"https://www.artstation.com/artwork/agG52","author":"Artem Chebokha"},
 {"image":"artem-chebokha-11regular-magic-1385.jpg","link":"https://www.artstation.com/artwork/ox4RB","author":"Artem Chebokha"},
 {"image":"artem-chebokha-1540.jpg","link":"https://www.artstation.com/artwork/YGvbw","author":"Artem Chebokha"},
 {"image":"artem-rhx-chebokha-nightdrawer1200-900l.jpg","link":"https://www.artstation.com/artwork/XAXLY","author":"Artem Chebokha"}
];

var colorArray = [
 {"backgroundBasic":"linear-gradient(#fe6d72, #fea621)","backgroundWebkit":"-webkit-gradient(linear, left top, left bottom, from(#fe6d72), to(#fea621))","hoverColor":"#fea621"},
 {"backgroundBasic":"linear-gradient(#21e1ae, #09aeea)","backgroundWebkit":"-webkit-gradient(linear, left top, left bottom, from(#21e1ae), to(#09aeea))","hoverColor":"#09aeea"},
 {"backgroundBasic":"linear-gradient(#0b7080, #0ba376)","backgroundWebkit":"-webkit-gradient(linear, left top, left bottom, from(#0b7080), to(#0ba376))","hoverColor":"#0ba376"},
 {"backgroundBasic":"linear-gradient(#9d2bf3, #5050f5)","backgroundWebkit":"-webkit-gradient(linear, left top, left bottom, from(#9d2bf3), to(#5050f5))","hoverColor":"#5e2fd6","hoverColor":"#5e2fd6"}
];

randomPicture(pictureArray);
randomPageColor(colorArray);
fillResume(resumeConfig);
modifyStyleSheet();
