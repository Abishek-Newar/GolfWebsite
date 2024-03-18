// var crsr = document.querySelector("#cursor")
// var blur = document.querySelector("#cursor-blur")
// document.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x+ "px"
//     crsr.style.top = dets.y+"px"
//     blur.style.left = dets.x - 250+"px"
//     blur.style.top = dets.y - 250 +"px"
// });

// var h4all = document.querySelectorAll("#nav h4")
// h4all.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         crsr.style.scale = 4;
//         crsr.style.border = "1px solid #fff";
//         crsr.style.backgroundColor = "transparent";
//         })
//         elem.addEventListener("mouseleave",function(){
//             crsr.style.scale = 1;
//             crsr.style.border = "0px solid #95c11e";
//             crsr.style.backgroundColor = "#95C11E";
//             })    
// });


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end: "top -11%",
        scrub:1
    }
});
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:1
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger: {
        trigger:"#about-us",
        scroller: "body",
        start:"top 70%",
        end: "top 65%",
        scrub: 3
    }
});

gsap.from(".cards",{
    scale: 0.8,
    duration:1,
    stagger: 0.1,
    scrollTrigger: {
        trigger:".cards",
        scroller: "body",
        start:"top 70%",
        end: "top 65%",
        scrub: 1
    }
});

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
});

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
});

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger:"#page4 h1",
        scroller: "body",
        start:"top 70%",
        end: "top 65%",
        scrub: 3
    },
});







function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("myForm-2").style.display = "none";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("myForm-2").style.display = "none";
  }

function openForm1() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("myForm-2").style.display = "block";
  };

  const firebaseConfig = {
    apiKey: "AIzaSyAPukvcWfSVmu70UszC37RHfUk9WEdxUDI",
    authDomain: "book-course-7f43a.firebaseapp.com",
    databaseURL: "https://book-course-7f43a-default-rtdb.firebaseio.com",
    projectId: "book-course-7f43a",
    storageBucket: "book-course-7f43a.appspot.com",
    messagingSenderId: "751023286507",
    appId: "1:751023286507:web:cbbb27a8636751fee436ae",
    measurementId: "G-ER850E3M3N"
  };
  
  firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var mobile = getElementVal("mobile");
  var subject = getElementVal("subject");
  var msgContent = getElementVal("msgContent");

  console.log(name, emailid, mobile, subject, msgContent);

  saveMessages(name, emailid, mobile, subject, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, mobile, subject, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    mobile: mobile,
    subject: subject,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
    var element = document.getElementById(id);
    return element ? element.value : null;
};




 




  
  
