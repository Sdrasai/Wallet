import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CreateUserDto } from "./dto/create-user.dto"
import { UpdateUserDto } from "./dto/update-user.dto"
import { User } from "./schema/user.schema"
import { IUser } from "./user.interface"

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<IUser>) {}
  async create(createUserDto: CreateUserDto) {
    return await this.userModel.create(createUserDto)
  }

  async findAll() {
    return await this.userModel.find({})
  }

  async findOne(id: string) {
    return await this.userModel.findById(id)
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    })
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id)
  }
}
