export interface IUserRoom {
  id: string;
  name: string;
}

export interface IUser {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  role: string;
}

export interface IMessage {
  id: string;
  body: string;
  insertedAt: Date;
  user: Omit<IUser, "role" | "email">;
}
