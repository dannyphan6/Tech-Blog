const newPostHandler = async (event) => {
  event.preventDefault();
console.log("testing");
  // Grabbing values from main handlebars 
  const title = document.querySelector('#title').value.trim();
  const body = document.querySelector('#postBody').value.trim();

  if (body) {
    await fetch(`/api/post`, {
      method: 'POST',
      // Grabbing the comment and postId from the handlebars and sending it to the route (/api/comment)
      body: JSON.stringify({ title , body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // Reload the page when comment is added 
    document.location.replace('/dashboard');
  }
};

document.querySelector('.new-post').addEventListener('submit', newPostHandler);