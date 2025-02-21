 // JavaScript for typing effect for Home and About sections
 const professionTitles = ["Software Developer", "Java Developer", "Frontend Developer"];
 let index = 0;
 let titleIndex = 0;
 const professionElement = document.getElementById("profession-text");

 function typeText() {
     if (index < professionTitles[titleIndex].length) {
         professionElement.innerHTML += professionTitles[titleIndex].charAt(index);
         index++;
         setTimeout(typeText, 100);
     } else {
         setTimeout(() => {
             reverseText(professionTitles[titleIndex]);
         }, 1000);
     }
 }
 function reverseText(title) {
     let reverseIndex = title.length - 1;
     function eraseText() {
         professionElement.innerHTML = title.substring(0, reverseIndex);
         reverseIndex--;
         if (reverseIndex >= 0) {
             setTimeout(eraseText, 100);
         } else {
             titleIndex = (titleIndex + 1) % professionTitles.length;
             index = 0;
             typeText();
         }
     }
     eraseText();
 }

 const aboutProfessionTitles = ["Software Developer", "Java Developer", "Frontend Developer"];
 let aboutIndex = 0;
 let aboutTitleIndex = 0;
 const aboutProfessionElement = document.getElementById("about-profession-text");

 function typeAboutText() {
     if (aboutIndex < aboutProfessionTitles[aboutTitleIndex].length) {
         aboutProfessionElement.innerHTML += aboutProfessionTitles[aboutTitleIndex].charAt(aboutIndex);
         aboutIndex++;
         setTimeout(typeAboutText, 100);
     } else {
         setTimeout(() => {
             reverseAboutText(aboutProfessionTitles[aboutTitleIndex]);
         }, 1000);
     }
 }

 function reverseAboutText(title) {
     let reverseIndex = title.length - 1;
     function eraseAboutText() {
         aboutProfessionElement.innerHTML = title.substring(0, reverseIndex);
         reverseIndex--;
         if (reverseIndex >= 0) {
             setTimeout(eraseAboutText, 100);
         } else {
             aboutTitleIndex = (aboutTitleIndex + 1) % aboutProfessionTitles.length;
             aboutIndex = 0;
             typeAboutText();
         }
     }
     eraseAboutText();
 }

 window.onload = function () {
     typeText();
     typeAboutText();
 };