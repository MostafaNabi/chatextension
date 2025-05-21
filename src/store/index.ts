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
    messages: [],
    addMessage: (message: Message) => {
      set((state) => {
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
