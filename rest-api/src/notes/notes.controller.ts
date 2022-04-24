import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NoteCreateDto } from './dto/note-create.dto';
import { NoteDto } from './dto/notes-dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
    // eslint-disable-next-line prettier/prettier
    constructor(private readonly notesService: NotesService) { }

    @Get()
    getAll(): NoteDto[] {
        return this.notesService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: string): NoteDto {
        return this.notesService.getById(id);
    }

    @Post()
    create(@Body() note: NoteCreateDto): NoteDto {
        return this.notesService.create(note);
    }

    @Put(':id')
    update(@Body() note: NoteDto): NoteDto {
        return this.notesService.update(note);
    }

    @Delete(':id')
    remove(@Param('id') id: string): NoteDto {
        return this.notesService.remove(id);
    }
}
