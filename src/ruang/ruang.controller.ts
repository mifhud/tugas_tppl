import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards, Logger } from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { RuangService } from './ruang.service';
import { GetRuangFilterDto } from './dto/get_ruang_filter.dto';
import { Ruang } from './ruang.entity';

@ApiTags('ruang')
@Controller('ruang')
export class RuangController{
    private logger = new Logger('TaskController');

    constructor(
        private ruangService : RuangService
    ){}

    @Get()
    @ApiQuery({ name: 'limit'})
    @ApiQuery({ name: 'page' })
    getRuang(
        @Query() filterDto: GetRuangFilterDto,
    ): Promise<Ruang[]>{
        return this.ruangService.getRuang(filterDto);
    }
}