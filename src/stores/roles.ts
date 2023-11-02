import { defineStore } from 'pinia';

export const useRolesStore = defineStore('roles', {
    state: () => ({
        roles: {
            admin: {
                canManageUsers: true,
                canEditPosts: true,
                canDeletePosts: true,
            },
            edit: {
                canEditPosts: true,
            },
            user: {
                canEditPosts: false,
            }
        },
        userRole: 'user',
    }),
    getters: {
        getUserRole(state) {
            return state.roles[state.userRole as keyof typeof state.roles]
        }
    }
})