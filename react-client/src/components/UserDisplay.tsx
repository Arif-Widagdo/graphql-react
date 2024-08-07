import { User } from "../types";
import MessageDisplay from "./MessageDisplay";

type Props = {
  user: User;
};

function UserDisplay({ user }: Props) {
  return (
    <div className="flex justify-center gap-x-24">
      <div className="flex items-center justify-center w-48 h-20 rounded-sm drop-shadow-md bg-neutral-700">
        <p className="text-xl font-bold text-gray-200">{user.name}</p>
      </div>
      <div>
        {user.messages.map((message, i) => (
          <MessageDisplay key={i} index={i} message={message} />
        ))}
      </div>
    </div>
  );
}

export default UserDisplay;
