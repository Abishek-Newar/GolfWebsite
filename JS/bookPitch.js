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
var contactFormDB = firebase.database().ref("bookPitch");

document.getElementById("bookPitch").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var phone = getElementVal("phone");
  var times = getElementVal("time-selection");

  console.log(name, email, phone, times);

  saveMessages(name, email, phone, times);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("bookPitch").reset();
}

const saveMessages = (name, email, phone, times) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    phone: phone,
    times: times,
  });
};

const getElementVal = (id) => {
    var element = document.getElementById(id);
    return element ? element.value : null;
};
 