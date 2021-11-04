const userStore = {
    state: {
        user: {}
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        getUser(context) {
            console.log(context.state.user);
        }
    },
    getters: {
    }
};

export default userStore;
