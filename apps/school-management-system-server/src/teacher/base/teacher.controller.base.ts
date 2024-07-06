/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TeacherService } from "../teacher.service";
import { TeacherCreateInput } from "./TeacherCreateInput";
import { Teacher } from "./Teacher";
import { TeacherFindManyArgs } from "./TeacherFindManyArgs";
import { TeacherWhereUniqueInput } from "./TeacherWhereUniqueInput";
import { TeacherUpdateInput } from "./TeacherUpdateInput";
import { ClassModelFindManyArgs } from "../../classModel/base/ClassModelFindManyArgs";
import { ClassModel } from "../../classModel/base/ClassModel";
import { ClassModelWhereUniqueInput } from "../../classModel/base/ClassModelWhereUniqueInput";

export class TeacherControllerBase {
  constructor(protected readonly service: TeacherService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Teacher })
  async createTeacher(
    @common.Body() data: TeacherCreateInput
  ): Promise<Teacher> {
    return await this.service.createTeacher({
      data: data,
      select: {
        contactNumber: true,
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Teacher] })
  @ApiNestedQuery(TeacherFindManyArgs)
  async teachers(@common.Req() request: Request): Promise<Teacher[]> {
    const args = plainToClass(TeacherFindManyArgs, request.query);
    return this.service.teachers({
      ...args,
      select: {
        contactNumber: true,
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Teacher })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async teacher(
    @common.Param() params: TeacherWhereUniqueInput
  ): Promise<Teacher | null> {
    const result = await this.service.teacher({
      where: params,
      select: {
        contactNumber: true,
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Teacher })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTeacher(
    @common.Param() params: TeacherWhereUniqueInput,
    @common.Body() data: TeacherUpdateInput
  ): Promise<Teacher | null> {
    try {
      return await this.service.updateTeacher({
        where: params,
        data: data,
        select: {
          contactNumber: true,
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Teacher })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTeacher(
    @common.Param() params: TeacherWhereUniqueInput
  ): Promise<Teacher | null> {
    try {
      return await this.service.deleteTeacher({
        where: params,
        select: {
          contactNumber: true,
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/classes")
  @ApiNestedQuery(ClassModelFindManyArgs)
  async findClasses(
    @common.Req() request: Request,
    @common.Param() params: TeacherWhereUniqueInput
  ): Promise<ClassModel[]> {
    const query = plainToClass(ClassModelFindManyArgs, request.query);
    const results = await this.service.findClasses(params.id, {
      ...query,
      select: {
        className: true,
        createdAt: true,
        id: true,
        section: true,

        teacher: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/classes")
  async connectClasses(
    @common.Param() params: TeacherWhereUniqueInput,
    @common.Body() body: ClassModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      classes: {
        connect: body,
      },
    };
    await this.service.updateTeacher({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/classes")
  async updateClasses(
    @common.Param() params: TeacherWhereUniqueInput,
    @common.Body() body: ClassModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      classes: {
        set: body,
      },
    };
    await this.service.updateTeacher({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/classes")
  async disconnectClasses(
    @common.Param() params: TeacherWhereUniqueInput,
    @common.Body() body: ClassModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      classes: {
        disconnect: body,
      },
    };
    await this.service.updateTeacher({
      where: params,
      data,
      select: { id: true },
    });
  }
}
