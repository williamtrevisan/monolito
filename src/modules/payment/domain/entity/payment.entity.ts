import { AggregateRoot } from "../../../@shared/domain/entity/aggregate-root.interface";
import { BaseEntity } from "../../../@shared/domain/entity/base.entity";
import { Uuid } from "../../../@shared/domain/value-object/uuid.value-object";
import { PaymentStatus } from "../enum/payment_status.enum";

type PaymentProps = {
  id?: Uuid;
  orderId: string;
  amount: number;
  status: PaymentStatus;
  createdAt?: Date;
  updatedAt?: Date;
};

class PaymentEntity extends BaseEntity implements AggregateRoot {
  private _orderId: string;
  private _amount: number;
  private _status: PaymentStatus;

  constructor(props: PaymentProps) {
    super(props.id);

    this._orderId = props.orderId;
    this._amount = props.amount;
    this._status = props.status;

    this.validate();
  }

  validate() {
    if (this._amount < 100) {
      this.approve();

      return;
    }

    this.reject();
  }

  approve() {
    this._status = PaymentStatus.APPROVED;
  }

  reject() {
    this._status = PaymentStatus.REJECTED;
  }

  get orderId(): string {
    return this._orderId;
  }

  get amount(): number {
    return this._amount;
  }

  get status(): PaymentStatus {
    return this._status;
  }
}

export { PaymentEntity };
