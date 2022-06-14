import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
@Entity("transactions")
export class Transaction {

    @PrimaryColumn()
    id: string;

    @Column({nullable: true})
    customerId: string;

    @Column({nullable: true})
    inputAmount: number;

    @Column({nullable: true })
    inputCurrency: string;

    @Column({nullable: true })
    outputAmount: number;

    @Column({nullable: false })
    outputCurrency: string;

    @Column({ type: 'boolean', default: false })
    isDeleted: boolean;
  
    @Column({ type: 'timestamp with time zone', default: null })
    deletedAt: Date;

    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
  
    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

}
