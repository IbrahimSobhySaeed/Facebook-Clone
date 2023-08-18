let posts=document.getElementById("posts"),
posterImg=document.getElementById("posterImg"),
friendsChat=document.getElementById("friendsChat");


let friends=[
{
    Fname: 'John',
    FImage:'https://source.unsplash.com/random/12'
},
{
    Fname: 'Ali',
    FImage:'https://source.unsplash.com/random/1'
},{
    Fname: 'Mohamed',
    FImage:'https://source.unsplash.com/random/2'
},
{
    Fname: 'Ahmed',
    FImage:'https://source.unsplash.com/random/3'
},
{
    Fname: 'Fady',
    FImage:'https://source.unsplash.com/random/4'
}
,{
    Fname: 'Peter',
    FImage:'https://source.unsplash.com/random/5'
}
,{
    Fname: 'May',
    FImage:'https://source.unsplash.com/random/6'
}
,{
    Fname: 'Adel',
    FImage:'https://source.unsplash.com/random/7'
}
,{
    Fname: 'Khaled',
    FImage:'https://source.unsplash.com/random/8'
}]

// posts Array
let postsArray=[
    {
        userImage:'https://source.unsplash.com/random/12',
        userName:"Ibrahim Sobhy",
        PostDate:"July 17 at 1:23 pm",
        postDesc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae fuga incidunt consequatur tenetur doloremque officia corrupti provident tempore vitae labore?",
        postImage:"https://source.unsplash.com/random/12"
    },
    {
        userImage:'https://source.unsplash.com/random/11',
        userName:"Ahmed Hassan",
        PostDate:"July 17 at 1:23 pm",
        postDesc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae fuga incidunt consequatur tenetur doloremque officia corrupti provident tempore vitae labore?",
        postImage:''
    },
    {
        userImage:'https://source.unsplash.com/random/4',
        userName:"mai Hassan",
        PostDate:"July 17 at 1:23 pm",
        postDesc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae fuga incidunt consequatur tenetur doloremque officia corrupti provident tempore vitae labore?",
        postImage:"https://source.unsplash.com/random/4"
    },
    {
        userImage:'https://source.unsplash.com/random/1',
        userName:"Ahmed Shaban",
        PostDate:"July 17 at 1:23 pm",
        postDesc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae fuga incidunt consequatur tenetur doloremque officia corrupti provident tempore vitae labore?",
        postImage:"https://source.unsplash.com/random/1"
    },

];



// show poste in timeline 

postsArray.forEach((post,index)=>{
  
        posts.innerHTML+=`
        <div class="bg-white p-4 rounded shadow mt-3">
        <!-- author -->
        <div class="d-flex justify-content-between">
          <!-- avatar -->
          <div class="d-flex">
            <img
              src="${post.userImage}"
              alt="avatar"
              class="rounded-circle me-2 imgRounded"
            />
            <div>
              <p class="m-0 fw-bold">${post.userName}</p>
              <span class="text-muted fs-7">${post.PostDate}</span>
            </div>
          </div>
          <!-- edit -->
    
          <i
            class="fas fa-ellipsis-h"
            type="button"
            id="post1Menu"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></i>
    
          <!-- edit menu -->
          <ul
            class="dropdown-menu border-0 shadow"
            aria-labelledby="post1Menu"
          >
            <li class="d-flex align-items-center">
              <a
                class="
                  dropdown-item
                  d-flex
                  justify-content-around
                  align-items-center
                  fs-7
                "
                href="#"
              >
                Edit Post</a
              >
            </li>
            <li class="d-flex align-items-center">
              <a
                class="
                  dropdown-item
                  d-flex
                  justify-content-around
                  align-items-center
                  fs-7
                "
                href="#"
              >
                Delete Post</a
              >
            </li>
          </ul>
        </div>
    
        <!-- post content -->
        <div class="mt-3">
          <!-- content -->
          <div>
            <p>
             ${post.postDesc}
            </p>
            <img
              src="${post?.postImage }"
              alt="post image"
              class="img-fluid rounded"
              id="posterImg"
            />
          </div>
          <!-- likes & comments -->
          <div class="post__comment mt-3 position-relative">
            <div
              class="
                d-flex
                align-items-center
                top-0
                start-0
                position-absolute
              "
              style="height: 50px; z-index: 5"
            >
              <div class="me-2">
                <i class="text-primary fas fa-thumbs-up"></i>
                <i class="text-danger fab fa-gratipay"></i>
                <i class="text-warning fas fa-grin-squint"></i>
              </div>
              <p class="m-0 text-muted fs-7">Phu, Tuan, and <span class="likeCount">3</span> others</p>
            </div>
            <!-- comments start-->
            <div class="accordion" id="accordionExample">
              <div class="accordion-item border-0">
                <!-- comment collapse -->
                <h2 class="accordion-header" id="headingTwo">
                  <div
                    class="
                      accordion-button
                      collapsed
                      pointer
                      d-flex
                      justify-content-end
                    "
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsePost1"
                    aria-expanded="false"
                    aria-controls="collapsePost1"
                  >
                    <p class="m-0 countNum">2 Comments</p>
                  </div>
                </h2>
                <hr />
                <!-- comment & like bar -->
                <div class="d-flex justify-content-around">
                  <div
                    class="
                      dropdown-item
                      rounded
                      d-flex
                      justify-content-center
                      align-items-center
                      pointer
                      text-muted
                      p-1
                      post_like
                    "
                   
                    onclick="changeLikeColor(${index})"
                  >
                    <i class="fas fa-thumbs-up me-3" ></i>
                    <p class="m-0">Like</p>
                  </div>
                  <div
                    class="
                      dropdown-item
                      rounded
                      d-flex
                      justify-content-center
                      align-items-center
                      pointer
                      text-muted
                      p-1
                    "
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsePost1"
                    aria-expanded="false"
                    aria-controls="collapsePost1"
                  >
                    <i class="fas fa-comment-alt me-3"></i>
                    <p class="m-0" >Comment</p>
                  </div>
                </div>
                <!-- comment expand -->
                <div
                  id="collapsePost1"
                  class="accordion-collapse collapse cord"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                  
                >
                  <hr />
                  <div class="accordion-body cord">
                    <!-- comment 1 -->
                    <div class="d-flex align-items-center my-1">
                      <!-- avatar -->
                      <img
                        src="https://source.unsplash.com/collection/happy-people"
                        alt="avatar"
                        class="rounded-circle me-2 imgRounded"
                        
                      />
                      <!-- comment text -->
                      <div class="p-3 rounded comment__input w-100">
                        <p class="fw-bold m-0">John</p>
                        <p class="m-0 fs-7 bg-gray p-2 rounded">
                          Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
                        </p>
                      </div>
                    </div>
                    <!-- comment 2 -->
                    <div class="d-flex align-items-center my-1">
                      <!-- avatar -->
                      <img
                        src="https://source.unsplash.com/random/2"
                        alt="avatar"
                        class="rounded-circle me-2"
                        style="
                          width: 38px;
                          height: 38px;
                          object-fit: cover;
                        "
                      />
                      <!-- comment text -->
                      <div class="p-3 rounded comment__input w-100">
                        <p class="fw-bold m-0">Jerry</p>
                        <p class="m-0 fs-7 bg-gray p-2 rounded">
                          Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
                        </p>
                      </div>
                    </div>
                    <!-- create comment -->
                    <form class="d-flex my-1">
                      <!-- avatar -->
                      <div>
                        <img
                          src="https://source.unsplash.com/collection/happy-people"
                          alt="avatar"
                          class="rounded-circle me-2 imgRounded"
                         
                        />
                      </div>
                      <!-- input -->
                      <input
                        type="text"
                        class="form-control border-0 rounded-pill bg-gray"
                        placeholder="Write a comment"
                      />
                    </form>
                    <!-- end -->
                  </div>
                </div>
              </div>
            </div>
            <!-- end -->
          </div>
        </div>
      </div>
        `


   
})


// change color of button like &&  execute function countLikes to count likes

function changeLikeColor(e) {
  let post_like=document.querySelectorAll(".post_like");
  for (let i=0;i<post_like.length;i++) {
  post_like[e].classList.add("likeColor");
  
};
countLikes();
}

// take likes number from html && count +1 
function countLikes(){
    let likeCount=document.querySelectorAll(".likeCount");
    likeCount.forEach((item)=>{
        let count=+item.innerHTML
        item.innerHTML=count+1;
    })
}


function ShowConnect(){
    friends.forEach((item)=>{
       friendsChat.innerHTML+=
       `
       <li
       class="dropdown-item rounded my-2 px-0"
       type="button"
       data-bs-toggle="modal"
       data-bs-target="#singleChat1"
     >
       <!-- avatar -->
       <div
         class="d-flex align-items-center mx-2 chat-avatar"
         data-bs-custom-class="chat-box"
         data-bs-container="body"
         data-bs-toggle="popover"
         data-bs-placement="left"
         data-bs-trigger="hover"
         data-bs-content='
           <div>
             <div class="popover-body d-flex p-2">
               <div>
                 <img src="${item.FImage}" alt="avatar" class="pop-avatar"  />
               </div>
               <div >
                 <h5>${item.Fname}</h5>
                 <div class="d-flex">
                   <i class="fas fa-user-friends m-1 text-muted"></i>
                   <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
                 </div>
                 <div class="d-flex">
                 <i class="fas fa-graduation-cap m-1 text-muted"></i>
                 <p>Studies at MIT</p>
                 </div>
               </div>
             </div>
           </div>
         '
         data-bs-html="true"
       >
         <div class="position-relative">
           <img
             src="${item.FImage}"
             alt="avatar"
             class="rounded-circle me-2 imgRounded"
            
           />
           <span
             class="
               position-absolute
               bottom-0
               translate-middle
               border border-light
               rounded-circle
               bg-success
               p-1
             "
             style="left: 75%"
           >
             <span class="visually-hidden"></span>
           </span>
         </div>
         <p class="m-0">${item.Fname}</p>
       </div>
     </li>
       `
    })
}

ShowConnect()

function showMsg(){
let chatMsg=document.getElementById('chatMsg');
friends.forEach((msg)=>{
  chatMsg.innerHTML+=
`
<li
                      class="my-2 p-1"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#singleChat1"
                    >
                      <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center justify-content-evenly">
                          <div class="p-2">
                            <img
                              src="${msg.FImage}"
                              alt="avatar"
                              class="rounded-circle ImageBox3"
                             
                            />
                          </div>
                          <div>
                            <p class="fs-7 m-0">${msg.Fname}</p>
                            <span class="fs-7 text-muted"
                              >Lorem ipsum 2m</span
                            >
                          </div>
                        </div>
                        <!-- small avatar -->
                        <div class="p-2">
                          <img
                            src="https://source.unsplash.com/random/1"
                            alt="avatar"
                            class="rounded-circle chatSeen"
                          />
                        </div>
                      </div>
                    </li>`
})
}
showMsg();

// function CalcCommentNum(){
//   let countNum=document.querySelectorAll(".countNum");
//     likeCount.forEach((item)=>{
//         let count=+countNum.innerHTML
//         item.innerHTML=count+1;
// })

// }

// function showStauts(){
//   let StoryContainer=document.querySelector(".StoryContainer");
//   friends.forEach((status) => {
//     StoryContainer.innerHTML+=
//     `
//     <!-- s 6 -->
//     <div
//       class="d-none d-lg-block rounded mx-1 story"
//       type="button">
//       <img
//         src="${status.FImage}"
//         class="card-img-top rounded"
//         alt="story posts"
        
//       />
//     </div>
//     `
//   })
   
// }










