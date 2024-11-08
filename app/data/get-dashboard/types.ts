import { TransactionType } from "@prisma/client";

export type TransactionPecentagePerType = {
  [key in TransactionType]: number;
};
