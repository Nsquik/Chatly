export interface IUserRoom {
  id: string;
  name: string;
}

export interface IUser {
  email: string;
  firstName: string;
  _id: string;
  lastName: string;
  role: string;
}

export interface IMessage {
  _id: string;
  text: string;
  createdAt: Date;
  user: Omit<IUser, "role" | "email">;
}
