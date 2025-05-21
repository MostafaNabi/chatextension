import { useMessageStore } from "@/store";

export default function ContentPane() {
  const messages = useMessageStore((state) => state.messages);

  return (
    <div className="flex flex-col flex-grow bg-gray-100">
      {
        messages.map((message) => {
          return (
            <div key={message.timestamp} className={`flex gap-2 p-2 ${message.senderType === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-2 rounded-lg ${message.senderType === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                {message.text}
              </div>
            </div>
          );
        })
      }
    </div>
  )
}
