const deletePost = document.querySelector("#deletePost")
const updatePost = document.querySelector("#updatePost")

const updatePostHandler = async (event) => {
    event.preventDefault();
  
    // Grabbing values from main handlebars 
    const title = document.querySelector('#title').value.trim();
    const postBody = document.querySelector('#postBody').value.trim();
  
    if (postBody) {
      const response = await fetch(`/api/post/${updatePost}`, {
        method: 'PUT',
        // Grabbing the comment and postId from the handlebars and sending it to the route (/api/comment)
        body: JSON.stringify({ title , postBody }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {                                                                        `                                                                                                                                     `
        // Reload the page when comment is added 
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
  };
  
  const delPostHandler = async () => {
    await fetch(`/api/post/${deletePost}`, {
        method: 'DELETE'
    })
    document.location.replace('/dashboard')
  };

  document.querySelector('.update-post').addEventListener('submit', updatePostHandler);
  document.querySelector('.delete-btn').addEventListener('submit', delPostHandler);