import { EntityRepository, Repository } from 'typeorm';
import { Logger, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Karyawan } from './karyawan.entity';

@EntityRepository(Karyawan)
export class KaryawanRepository extends Repository<Karyawan> {

}
