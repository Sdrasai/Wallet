import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { IUser } from "../user.interface"

@Schema()
export class User implements IUser {
  @Prop({ required: true, unique: true })
  username: string

  @Prop({ required: true })
  password: string

  @Prop()
  email: string
}

export const UserSchema = SchemaFactory.createForClass(User)
