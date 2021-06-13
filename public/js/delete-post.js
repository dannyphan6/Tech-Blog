const delPostHandler = async () => {
    const deleteId = document.querySelector('#deletePost').value.trim()

    await fetch(`/api/post/${deleteId}`, {
        method: 'DELETE'
    })
    document.location.replace('/dashboard')
};

document.querySelector('#deletePost').addEventListener('click', delPostHandler);