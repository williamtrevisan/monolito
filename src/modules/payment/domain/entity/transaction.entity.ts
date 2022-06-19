import { AggregateRoot } from "../../../@shared/domain/entity/aggregate-root.interface";
import { BaseEntity } from "../../../@shared/domain/entity/base.entity";
import { Uuid } from "../../../@shared/domain/value-object/uuid.value-object";
import { TransactionStatus } from "../enum/transaction_status.enum";

type TransactionProps = {
  id?: Uuid;
  orderId: string;
  amount: number;
  status: TransactionStatus;
  createdAt?: Date;
  updatedAt?: Date;
};

class TransactionEntity extends BaseEntity implements AggregateRoot {
  private _orderId: string;
  private _amount: number;
  private _status: TransactionStatus;

  constructor(props: TransactionProps) {
    super(props.id);

    this._orderId = props.orderId;
    this._amount = props.amount;
    this._status = props.status;

    this.validate();
  }

  validate() {
    if (this._amount <= 0) throw new Error("Amount must be greater than 0");
  }

  process() {
    if (this._amount < 100) {
      this.reject();

      return;
    }

    this.approve();
  }

  approve() {
    this._status = TransactionStatus.APPROVED;
  }

  reject() {
    this._status = TransactionStatus.REJECTED;
  }

  get orderId(): string {
    return this._orderId;
  }

  get amount(): number {
    return this._amount;
  }

  get status(): TransactionStatus {
    return this._status;
  }
}

export { TransactionEntity };
