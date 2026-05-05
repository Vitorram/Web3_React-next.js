import { create } from 'zustand';



export const useUserStore = create((set) => ({

    //estado global para armazenar a lista de usuários
    //cria um estado inicial vazio para a lista de usuários e uma função setUser para atualizar essa lista
  users: [],
  setUser: (newUsers) => set({ users: newUsers }),

  //criando uma função para adicionar um novo usuário à lista de usuários existente, usando o operador spread para manter os usuários anteriores e adicionar o novo usuário ao final da lista
  setAddUser: (newUser) => set((state) => ({ users: [...state.users, newUser] })),
}));