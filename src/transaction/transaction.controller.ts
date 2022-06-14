import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Transaction')
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto) {

    const transaction = await this.transactionService.create(createTransactionDto);

    return {
      message: 'Transaction successfully created',
      data: transaction
    }
  }

  @Get()
  async findAll() {

    const transactions = await this.transactionService.findAll();

    return {
      message: 'Transactions successfully fetched',
      data: transactions
    }

  }

  @Get(':id')
  async findOne(@Param('id') id: string) {

    const transaction =  this.transactionService.findOne(id);

    return {
      message: 'Transaction successfully found',
      data: transaction
    }

  }

  @Patch()
  async update(@Body() updateTransactionDto: UpdateTransactionDto) {

    const transaction = await this.transactionService.update(updateTransactionDto);

    return {
      message: 'Transaction successfully found',
      data: transaction
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    const transaction = await this.transactionService.remove(id);
    
    return {
      message: 'Transaction removed',
      data: transaction
    }
  }
}
