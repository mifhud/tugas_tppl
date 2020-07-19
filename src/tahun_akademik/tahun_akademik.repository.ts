import { EntityRepository, Repository } from 'typeorm';
import { Logger, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { TahunAkademik } from './tahun_akademik.entity';

@EntityRepository(TahunAkademik)
export class TahunAkademikRepository extends Repository<TahunAkademik> {

}
