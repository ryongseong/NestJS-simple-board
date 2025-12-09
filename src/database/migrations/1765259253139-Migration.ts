import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1765259253139 implements MigrationInterface {
    name = 'Migration1765259253139'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "board" DROP COLUMN "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "board" ADD "name" character varying NOT NULL`);
    }

}
