import { IsBoolean, IsEmpty, IsNotEmpty, isNumber, IsNumber, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class CreateTransactionDto {

    @ApiProperty({
        description: 'The Customer Id',
        example: '605636683f6e29',
    })
    @IsString()
    @IsNotEmpty()
    public customerId: string;

    @ApiProperty({
        description: 'Input Amount',
        example: 500,
    })
    @IsNumber()
    @IsNotEmpty()
    public inputAmount: number;
    
    @ApiProperty({
        description: 'The Input Amount Currency',
        example: 'NGN',
    })
    @IsString()
    @IsNotEmpty()
    public inputCurrency: string;

    @ApiProperty({
        description: 'Output Amount',
        example: 900,
    })
    @IsNumber()
    @IsNotEmpty()
    public outputAmount: number;

    @ApiProperty({
        description: 'The Output Amount Currency',
        example: 'USD',
    })
    @IsString()
    @IsNotEmpty()
    public outputCurrency: string;

}