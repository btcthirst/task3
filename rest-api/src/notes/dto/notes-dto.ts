export class NoteDto {
    id: number;
    name: string;
    created: Date;
    category: string;
    content: string;
    dates: Date[];
    active: boolean;
    constructor(
        name: string,
        category: string,
        content: string,
        active: boolean,
    ) {
        this.name = name;
        this.category = category;
        this.content = content;
        this.active = active;
        this.id = Date.now() + parseInt((Math.random() * 100).toFixed());
        this.created = new Date();
        this.dates = this.checkDate();
    }

    checkDate() {
        const pattern = new RegExp(
            '(([0-9]{1,2}/[0-9]{1,2}/[0-9]{4})|([0-9]{1,2}.[0-9]{1,2}.[0-9]{4})|([0-9]{1,2}-[0-9]{1,2}-[0-9]{4}))',
        );
        const result = [];
        if (pattern.test(this.content)) {
            const arr = this.content.split(' ');

            for (const el of arr) {
                const res = el.match(pattern);
                if (res) {
                    result.push(res[0]);
                }
            }
        }

        return result;
    }
}
