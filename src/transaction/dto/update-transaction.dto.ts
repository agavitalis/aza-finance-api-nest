import { IsBoolean, IsEmpty, IsNotEmpty, isNumber, IsNumber, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class UpdateTransactionDto {

    @ApiProperty({
        description: 'The Transaction id',
        example: 'QwYNx68xEX',
    })
    @IsString()
    @IsNotEmpty()
    public id: string;

    @ApiProperty({
        description: 'The Customer Id',
        example: 'QwYNx68xAY',
    })
    @IsString()
    @IsNotEmpty()
    public customerId?: string;

    @ApiProperty({
        description: 'Input Amount',
        example: 500,
    })
    @IsNumber()
    @IsNotEmpty()
    public inputAmount?: number;

    @ApiProperty({
        description: 'The Input Amount Currency',
        example: 'NGN',
    })
    @IsString()
    @IsNotEmpty()
    public inputCurrency?: string;

    @ApiProperty({
        description: 'Output Amount',
        example: 900,
    })
    @IsNumber()
    @IsNotEmpty()
    public outputAmount?: number;

    @ApiProperty({
        description: 'The Output Amount Currency',
        example: 'USD',
    })
    @IsString()
    @IsNotEmpty()
    public outputCurrency?: string;

}