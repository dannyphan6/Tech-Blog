const newCommentHandler = async (event) => {
  event.preventDefault();

  // Grabbing values from main handlebars 
  const postId = document.querySelector('#post-id').value.trim();
  const comment = document.querySelector('#comment').value.trim();

  if (comment) {
    await fetch(`/api/comment`, {
      method: 'POST',
      // Grabbing the comment and postId from the handlebars and sending it to the route (/api/comment)
      body: JSON.stringify({ postId, comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // Reload the page when comment is added 
      document.location.reload();
    } else {
      alert('Failed to create comment');
    };
  };
};

document.querySelector('.new-comment').addEventListener('submit', newCommentHandler);