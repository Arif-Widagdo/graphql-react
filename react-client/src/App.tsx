// import { User } from "./types";
import UserDisplay from "./components/UserDisplay";
import { useQuery } from 'urql'
import { GetUsersDocument } from './graphql/generated'

function App() {
  const [results] = useQuery({
    query: GetUsersDocument
  })
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen p-4 overflow-scroll bg-zinc-800 gap-y-12">
      {
        results.data?.users &&results.data?.users.map((user, i) => <UserDisplay user={user} key={i}/>)
      }
    </div>
    </>
  );
}

export default App;
