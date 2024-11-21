import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {Token} from "./token.entity";
import {UserAccount} from "./user-account.entity";

@Entity({ name: 'token_burns' })
export class TokenBurn {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ unique: true })
  txnHash: string;

  @ApiProperty()
  @Column({ type: 'integer' })
  blockNumber: number;

  @ManyToOne(() => UserAccount)
  sender: UserAccount;

  @ManyToOne(() => Token)
  token: Token;

  @ManyToOne(() => Token)
  winnerToken: Token;

  @ApiProperty()
  @Column({ type: 'decimal' })
  burnedAmount: string;

  @ApiProperty()
  @Column({ type: 'decimal' })
  receivedETH: string;

  @ApiProperty()
  @Column({ type: 'decimal' })
  mintedAmount: string;

  @ApiProperty()
  @Column({ type: 'bigint' })
  timestamp: number;

  @ApiProperty()
  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;
}