import type { GetUsersQuery } from "./graphql/generated";

export type User = NonNullable<GetUsersQuery["users"]>[0];

export type Message = NonNullable<NonNullable<User["messages"]>[0]>;

// export type Message = {
//   body: string;
// };
// export type User = {
//   name: string;
//   messages: Message[];
// };
