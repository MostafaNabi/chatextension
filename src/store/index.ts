import { create } from 'zustand'

interface Message {
  timestamp: number;
  text: string;
  senderType: 'user' | 'internal';
  senderId: string;
}

interface MessageStore {
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessages: () => void;
}

export const useMessageStore = create<MessageStore>()((set) => {
  return {
    messages: localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages') || '') : [],
    addMessage: (message: Message) => {
      set((state) => {
        localStorage.setItem('messages', JSON.stringify([...state.messages, message]));
        return {
          messages: [...state.messages, message],
        }
      });
    },

    clearMessages: () => {
      set(() => {
        return {
          messages: [],
        }
      });
    },
  }
});
