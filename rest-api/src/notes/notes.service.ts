import { Injectable } from '@nestjs/common';
import { NoteCreateDto } from './dto/note-create.dto';
import { NoteDto } from './dto/notes-dto';

@Injectable()
export class NotesService {
    notes: NoteDto[] = [
        new NoteDto('shoping list', 'Task', 'tomatoes,bread', true),
        new NoteDto('sport', 'Task', 'to go to the football', true),
        new NoteDto('note', 'Idea', 'create web-app Note', true),
        new NoteDto('books', 'Task', 'The Lean Startup', false),
        new NoteDto(
            'bicycle',
            'Idea',
            'In 1.02.2012 i was an idea create a bike with 5 wheels now is 24/04/2022 and nothing.',
            true,
        ),
        new NoteDto(
            'ukraine',
            'Random thought',
            'everything will be Ukraine',
            true,
        ),
        new NoteDto(
            'war',
            'Random thought',
            'coding is my life, coding is my war',
            true,
        ),
    ];

    getAll(): NoteDto[] {
        return this.notes;
    }

    getById(id: string): NoteDto {
        const note: NoteDto = this.notes.find((el) => el.id === Number(id));
        return note;
    }

    create(note: NoteCreateDto): NoteDto {
        const newNote = new NoteDto(
            note.name,
            note.category,
            note.content,
            note.active,
        );
        this.notes.push(newNote);
        return newNote;
    }

    update(note: NoteDto): NoteDto {
        const result: NoteDto[] = [...this.notes];
        const updatedNote = new NoteDto(
            note.name,
            note.category,
            note.content,
            note.active,
        );
        result.map((el: NoteDto): NoteDto => {
            if (el.id === note.id) {
                updatedNote.id = el.id;
                updatedNote.created = el.created;
                return updatedNote;
            }
            return el;
        });
        this.notes = [...result];
        return updatedNote;
    }

    remove(id: string): NoteDto {
        const result: NoteDto[] = [...this.notes];
        const index = result.findIndex((el) => el.id === Number(id));
        const deletedNote: NoteDto = result[index];
        result.splice(index, 1);
        this.notes = [...result];
        return deletedNote;
    }
}
