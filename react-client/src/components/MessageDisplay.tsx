import { Message } from "../types";
import Branch from "./Branch";

type Props = {
  message: Message;
  index: number;
};

function MessageDisplay({ message, index }: Props) {
  return (
    <div className="relative flex items-center w-48 h-20 mb-2 rounded-lg group shrink-0 drop-shadow-md bg-zinc-700">
      <Branch trunk={index === 0} />
      <p className="px-4 text-sm font-bold text-gray-200">{message.body}</p>
    </div>
  );
}

export default MessageDisplay;
