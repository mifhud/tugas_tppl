import { EntityRepository, Repository } from 'typeorm';
import { Logger, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Mahasiswa } from './mahasiswa.entity';

@EntityRepository(Mahasiswa)
export class MahasiswaRepository extends Repository<Mahasiswa> {

}
