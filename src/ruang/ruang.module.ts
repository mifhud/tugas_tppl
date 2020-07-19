import { Injectable, NotFoundException, Module } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { RuangRepository } from './ruang.respository';
import { GetRuangFilterDto } from './dto/get_ruang_filter.dto';
import { Ruang } from './ruang.entity';
import { RuangController } from './ruang.controller';
import { RuangService } from './ruang.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([RuangRepository]),
    ],
    controllers: [RuangController],
    providers: [RuangService]
})
export class RuangModule{}