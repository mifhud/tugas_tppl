import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RuangRepository } from './ruang.respository';
import { GetRuangFilterDto } from './dto/get_ruang_filter.dto';
import { Ruang } from './ruang.entity';

@Injectable()
export class RuangService{
constructor(
        
    @InjectRepository(RuangRepository)
    private ruangRepository : RuangRepository,
    
    ) {}

    async getRuang(
        filterDto: GetRuangFilterDto,
    ): Promise<Ruang[]> {
        return this.ruangRepository.getRuang(filterDto);
    }
}