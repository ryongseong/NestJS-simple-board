import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { Board } from 'src/entity/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

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

  async findAll() {
    return this.boardRepository.find();
  }

  async find(id: number) {
    const board = await this.boardRepository.findOne({
      where: { id },
      relations: {
        user: true,
      },
    });

    if (!board) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    return board;
  }

  async create(data: CreateBoardDto) {
    const board = this.boardRepository.create(data);
    return this.boardRepository.save(board);
  }

  async update(id: number, data: UpdateBoardDto) {
    const board = await this.boardRepository.findOneBy({ id });

    if (!board) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    return this.boardRepository.update(
      { id },
      {
        ...data,
      },
    );
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
