
var firebaseConfig= {

    apiKey: "AIzaSyDXazS70_5ZYjPc5xvt5ySrgErA9wTosxQ",
  
    authDomain: "my-blog-d976d.firebaseapp.com",
  
    projectId: "my-blog-d976d",
  
    storageBucket: "my-blog-d976d.appspot.com",
  
    messagingSenderId: "852955138831",
  
    appId: "1:852955138831:web:ddc59c20c27335ba1ecc7a",
  
    measurementId: "G-6EBX4SDNBL"
  
  };
firebase.initializeApp(firebaseConfig);
  
let postCollection = document.querySelector("#posts-collection");

const db = firebase.firestore();

function createPost(title, time, content,author) {
  let div = document.createElement("div");
  div.setAttribute("class","col-md-12");

  let h1 = document.createElement("h1");
  h1.setAttribute("class","text-info");
  let h2 = document.createElement("h2");
  
  let small = document.createElement("small");
  let b=document.createElement("b");
  b.setAttribute("class","text-dark");
  h1.textContent=title;
  b.textContent = author;
  small.textContent = content;
  h2.textContent = time;

  div.appendChild(h1);
  div.appendChild(h2);
  div.appendChild(b);

  

  postCollection.appendChild(div);
}

// Get Posts
function getPosts() {
  db.collection("posts")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(docs => {
        createPost(
          docs.data().author,
          docs.data().postName,
          docs.data().createdAt,
          docs.data().postContent
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
}

getPosts();