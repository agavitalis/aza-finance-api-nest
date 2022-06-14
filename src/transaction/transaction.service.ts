import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { nanoid } from 'nanoid';

@Injectable()
export class TransactionService {

  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) { }

  async create(createTransactionDto: CreateTransactionDto) {

    const transaction = new Transaction();
    transaction.id = nanoid(10);
    transaction.customerId = createTransactionDto.customerId;
    transaction.inputAmount = createTransactionDto.inputAmount;
    transaction.inputCurrency = createTransactionDto.inputCurrency;
    transaction.outputAmount = createTransactionDto.outputAmount;
    transaction.outputCurrency = createTransactionDto.outputCurrency;
   
    return await this.transactionRepository.save(transaction)
  }

  async findAll() {
   return await this.transactionRepository.find();
  }

  async findOne(id: any): Promise<Transaction> {
    const transaction = await this.transactionRepository.findOne(id);

    if (!transaction) {
      throw new HttpException(`Transaction with id: ${id} not found`, HttpStatus.NOT_FOUND)
    }

    return transaction;
  }

  async update(updateTransactionDto: UpdateTransactionDto) {

    let transaction = await this.transactionRepository.findOne(updateTransactionDto.id as any);

    if (!transaction) {
      throw new HttpException(`Transaction with id: ${updateTransactionDto.id} not found`, HttpStatus.NOT_FOUND)
    }
    transaction = Object.assign(transaction, updateTransactionDto);
    await this.transactionRepository.save(transaction);
    return transaction;

  }

  async remove(id: any) {

    const transaction = await this.transactionRepository.findOne(id);

    if (!transaction) {
      throw new HttpException(`Transaction with id: ${id} already deleted`, HttpStatus.NOT_FOUND)
    }

    await this.transactionRepository.remove(transaction);
    return transaction;

  }
}
