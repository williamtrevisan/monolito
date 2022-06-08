import { Uuid } from "../value-object/uuid.value-object";

class BaseEntity {
  private _id: Uuid;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(id?: Uuid) {
    this._id = id || new Uuid();
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }

  get id(): Uuid {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }
}

export { BaseEntity };
