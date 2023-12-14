
api.onAppEvent('post:liked', async(post) => {

    if (Discourse.User.current()) {
      const postId = post.get('id');
      const userId = Discourse.User.current().id;
      console.log("From custom plugin",postId,userId);
    //  await updateRanking(postId, userId);
    }
    console.log("Plugin ran successfully!");
  });
  
//  async function updateRanking(postId, userId) {
//     const apiUrl = 'https://nhlforum.vercel.app/api/rank';
//     try {
//         await fetch(`${apiUrl}?postId=${postId}&userId=${userId}`)
//         console.log("success");
        
//     } catch (error) {
//         console.log("error");
//     }
//   }
  