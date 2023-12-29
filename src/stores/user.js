import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        loggedIn: false,
        userInfo: null,
        users: [
            { id: 1, email: 'user1@google.com', password: 'password1' },
            { id: 2, email: 'user2@google.cbe', password: 'password2' },

        ],
    }),
    actions: {
        login({ email, password }) {
            const user = this.users.find(user => user.email === email && user.password === password);

            if (user) {
                this.user = user;
                return true;
            } else {
                return false;
            }
        },
        logout() {
            this.user = null;
        },
    },
});