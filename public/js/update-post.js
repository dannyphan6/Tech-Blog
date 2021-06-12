const deletePost = document.querySelector("#deletePost")
const updatePost = document.querySelector("#updatePost")
const urlArray = window.location.toString().split("/")
const lastIndex = urlArray.length - 1 
const postId = urlArray[lastIndex]

const updatePostHandler = async (event) => {
    event.preventDefault();
  
    // Grabbing values from main handlebars 
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#postBody').value.trim();
    const updateBtn = document.querySelector('#updateBtn').value.trim();
  
    console.log("hello world");
    if (body) {
      const response = await fetch(`/api/post/updatepost/${updateBtn}`, {
        method: 'PUT',
        // Grabbing the comment and postId from the handlebars and sending it to the route (/api/comment)
        body: JSON.stringify({ title , body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) { 
        // Reload the page when post is added 
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
  };
  
  const delPostHandler = async () => {
    const response = await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    })
    console.log("response", response);
    document.location.replace('/dashboard')
  };

  document.querySelector('.update-post').addEventListener('submit', updatePostHandler);
  document.querySelector('.delete-btn').addEventListener('submit', delPostHandler);