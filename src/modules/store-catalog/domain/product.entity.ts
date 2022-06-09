import { AggregateRoot } from "../../@shared/domain/entity/aggregate-root.interface";
import { BaseEntity } from "../../@shared/domain/entity/base.entity";
import { Uuid } from "../../@shared/domain/value-object/uuid.value-object";

type ProductProps = {
  id: Uuid;
  name: string;
  description: string;
  salesPrice: number;
};

class ProductEntity extends BaseEntity implements AggregateRoot {
  private _name: string;
  private _description: string;
  private _salesPrice: number;

  constructor(props: ProductProps) {
    super(props.id);

    this._name = props.name;
    this._description = props.description;
    this._salesPrice = props.salesPrice;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get salesPrice(): number {
    return this._salesPrice;
  }
}

export { ProductEntity };
