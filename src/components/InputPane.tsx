import { useMessageStore } from "@/store";
import { useState } from "react";

export default function InputPane() {
  const [messageBeingTyped, setMessageBeingTyped] = useState('');

  const addMessage = useMessageStore((state) => state.addMessage);


  const handleMessageInput = (event: React.ChangeEvent) => {
    const input = event.currentTarget as HTMLInputElement;
    const message = input.value;
    setMessageBeingTyped(message);
  }

  const handleMessageSubmitted = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Enter') ||
      (event.type === 'click')
     ) {
        if (messageBeingTyped) {
          addMessage({
            timestamp: Date.now(),
            text: messageBeingTyped.trim(),
            senderType: 'user',
            senderId: 'user1',
          });
          setMessageBeingTyped('');
        }
    }
  }

  return (
    <div className="flex w-full h-24 bg-indigo-800">
      <div className="flex w-3/4 justify-end items-center p-2">
        <input
          type="text"
          className="w-full h-8 bg-indigo-200 rounded-md p-2"
          placeholder="Type your message here..."
          value={messageBeingTyped}
          onChange={handleMessageInput}
          onKeyDown={handleMessageSubmitted}
        />
        <span
          className="material-symbols-outlined p-2 text-indigo-200"
          onClick={handleMessageSubmitted}
        >send</span>
      </div>
    </div>
  )
}
