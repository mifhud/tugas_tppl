import { EntityRepository, Repository } from 'typeorm';
import { Logger, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Ruang } from './ruang.entity';
import { GetRuangFilterDto } from './dto/get_ruang_filter.dto';

@EntityRepository(Ruang)
export class RuangRepository extends Repository<Ruang>{
    async getRuang(
        filterDto: GetRuangFilterDto,
    ): Promise<Ruang[]> {
        const { page, limit} = filterDto;
        const query = this.createQueryBuilder('ruang');
        
        try{
            const ruang = await query.getMany();
            return ruang;
        }catch(error){
            throw new InternalServerErrorException();
        }
    }
}