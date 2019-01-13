import Vuex from "vuex";
//import Cookie from "js-cookie";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null,

    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
      // addPost(state, post) {
      //   state.loadedPosts.push(post);
      // },
      // editPost(state, editedPost) {
      //   const postIndex = state.loadedPosts.findIndex(
      //     post => post.id === editedPost.id
      //   );
      //   state.loadedPosts[postIndex] = editedPost;
      // },
      // setToken(state, token) {
      //   state.token = token;
      // },
      // clearToken(state) {
      //   state.token = null;
      // }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [{
                author: "Chris Bemister",
                category: "portfolio",
                content: "even more content",
                featured: true,
                id: "-LNCHkROSDOfQFl-iHQx",
                pageType: "page",
                previewText: "preview text",
                shortDescription: "beautiful",
                slug: "/portfolio/title",
                thumbnail: "https://images.pexels.com/photos/18396/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
                title: "title",
                updatedDate: "2018-09-24T20:35:11.568Z",
                status: "live"
              },
              {
                author: "Chris Bemister",
                category: "about",
                content: "Just a quick hello",
                featured: true,
                id: "-LSYH-wbP_Wqet5w7EnO",
                pageType: "post",
                shortDescription: "I am going to be the greatest blogger ever.",
                slug: "/about/profile",
                status: "deleted",
                thumbnail: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
                title: "profile",
                updatedDate: "2018-11-30T06:22:03.426Z"
              },
              {
                author: "Chris Bemister",
                category: "technology",
                content: "Is this working?",
                featured: true,
                id: "-LQN3gwdDbXzEXfnV2Ld",
                pageType: "page",
                shortDescription: "yeah yeah yeah",
                slug: "/technology/quick-test-post",
                status: "draft",
                thumbnail: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
                title: "Quick test post",
                updatedDate: "2018-11-03T05:36:42.880Z"
              },
              {
                author: "Chris Bemister",
                category: "sandbox",
                content: "I really need to start populating some real con...",
                featured: false,
                id: "-LShNhXq34_YA1M0hE1c",
                pageType: "page",
                shortDescription: "Just a test",
                slug: "/sandbox/title2",
                status: "draft",
                thumbnail: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
                title: "title2",
                updatedDate: "2018-12-02T05:27:31.059Z"
              }
            ])
            resolve();
          }, 1000);
        })
        // return context.app.$axios
        //     .$get("/posts.json")
        //     .then(data => {
        //       const postsArray = [];
        //       for (const key in data) {
        //         postsArray.push({ ...data[key], id: key });
        //       }
        //       vuexContext.commit("setPosts", postsArray);
        //     })
        //     .catch(e => context.error(e));
      },
      // addPost(vuexContext, post) {
      //   const createdPost = {
      //     ...post,
      //     updatedDate: new Date()
      //   };
      //   return this.$axios
      //     .$post(
      //       "https://chrisbemister83.firebaseio.com/posts.json?auth=" +
      //         vuexContext.state.token,
      //       createdPost
      //     )
      //     .then(data => {
      //       vuexContext.commit("addPost", { ...createdPost, id: data.name });
      //     })
      //     .catch(e => console.log(e));
      // },
      // editPost(vuexContext, editedPost) {
      //   return this.$axios
      //     .$put(
      //       "https://chrisbemister83.firebaseio.com/posts/" +
      //         editedPost.id +
      //         ".json?auth=" +
      //         vuexContext.state.token,
      //       editedPost
      //     )
      //     .then(res => {
      //       vuexContext.commit("editPost", editedPost);
      //     })
      //     .catch(e => console.log(e));
      // },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      // authenticateUser(vuexContext, authData) {
      //   let authUrl =
      //     "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
      //     process.env.apiKey;
      //   if (!authData.isLogin) {
      //     authUrl =
      //       "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
      //       process.env.apiKey;
      //   }
      //   return this.$axios
      //     .$post(authUrl, {
      //       email: authData.email,
      //       password: authData.password,
      //       returnSecureToken: true
      //     })
      //     .then(result => {
      //       vuexContext.commit("setToken", result.idToken);
      //       localStorage.setItem("token", result.idToken);
      //       localStorage.setItem(
      //         "tokenExpiration",
      //         new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
      //       );
      //       Cookie.set("jwt", result.idToken);
      //       Cookie.set(
      //         "expirationDate",
      //         new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
      //       );
      //       return this.$axios.$post('http://localhost:3000/api/track-data', {data: 'Authenticated!'})
      //     })
      //     .catch(e => console.log(e));
      // },
      // initAuth(vuexContext, req) {
      //   let token;
      //   let expirationDate;
      //   if (req) {
      //     if (!req.headers.cookie) {
      //       return;
      //     }
      //     const jwtCookie = req.headers.cookie
      //       .split(";")
      //       .find(c => c.trim().startsWith("jwt="));
      //     if (!jwtCookie) {
      //       return;
      //     }
      //     token = jwtCookie.split("=")[1];
      //     expirationDate = req.headers.cookie
      //       .split(";")
      //       .find(c => c.trim().startsWith("expirationDate="))
      //       .split("=")[1];
      //   } else if (process.client) {
      //     token = localStorage.getItem("token");
      //     expirationDate = localStorage.getItem("tokenExpiration");
      //   }
      //   if (new Date().getTime() > +expirationDate || !token) {
      //     console.log("No token or invalid token");
      //     vuexContext.dispatch("logout");
      //     return;
      //   }
      //   vuexContext.commit("setToken", token);
      // },
      // logout(vuexContext) {
      //   vuexContext.commit("clearToken");
      //   Cookie.remove("jwt");
      //   Cookie.remove("expirationDate");
      //   if (process.client) {
      //     localStorage.removeItem("token");
      //     localStorage.removeItem("tokenExpiration");
      //   }
      // }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      // isAuthenticated(state) {
      //   return state.token != null;
      // }
    }
  });
};

export default createStore;