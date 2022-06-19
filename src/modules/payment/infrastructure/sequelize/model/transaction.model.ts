import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

import { TransactionStatus } from "../../../enum/transaction-status.enum";

@Table({
  tableName: "transactions",
  timestamps: false,
})
class TransactionModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  id: string;

  @Column({ allowNull: false, field: "id_order" })
  orderId: string;

  @Column({ allowNull: false })
  amount: number;

  @Column({
    allowNull: false,
    type: DataType.ENUM(...Object.values(TransactionStatus)),
  })
  status: TransactionStatus;

  @Column({ allowNull: false, field: "created_at" })
  createdAt: Date;

  @Column({ allowNull: false, field: "update_at" })
  updatedAt: Date;
}

export { TransactionModel };
