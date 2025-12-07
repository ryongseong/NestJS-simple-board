import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  private boards = [
    {
      id: 1,
      name: 'Inez Dooley',
      contents: 'Content 1',
    },
    {
      id: 2,
      name: 'Lula Doyle',
      contents: 'Content 2',
    },
    {
      id: 3,
      name: 'Mckenzie Mccarty',
      contents: 'Content 3',
    },
    {
      id: 4,
      name: 'Hester Mclean',
      contents: 'Content 4',
    },
    {
      id: 5,
      name: 'Freda Mccormick',
      contents: 'Content 5',
    },
    {
      id: 6,
      name: 'Jana Mccarty',
      contents: 'Content 6',
    },
    {
      id: 7,
      name: 'Lila Mccormick',
      contents: 'Content 7',
    },
    {
      id: 8,
      name: 'Cecile Mclean',
      contents: 'Content 8',
    },
    {
      id: 9,
      name: 'Effie Mccormick',
      contents: 'Content 9',
    },
    {
      id: 10,
      name: 'Janie Mccarty',
      contents: 'Content 10',
    },
  ];

  findAll() {
    return this.boards;
  }

  find(id: number) {
    const index = this.getBoardId(id);
    return this.boards[index];
  }

  create(data) {
    const newBoard = {
      id: this.getNextId(),
      ...data,
    };

    this.boards.push(newBoard);
    return newBoard;
  }

  update(id: number, data) {
    const index = this.getBoardId(id);
    if (index > -1) {
      this.boards[index] = {
        ...this.boards[index],
        ...data,
      };
      return this.boards[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.getBoardId(id);
    if (index > -1) {
      const deleted = this.boards.splice(index, 1);
      return deleted[0];
    }
    return null;
  }

  getBoardId(id: number) {
    return this.boards.findIndex((board) => board.id === id);
  }

  getNextId() {
    return this.boards.sort((a, b) => b.id - a.id)[0].id + 1;
  }
}
