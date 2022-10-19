import { MigrationInterface, QueryRunner } from "typeorm";

export class isActiveFildUser1666139110464 implements MigrationInterface {
    name = 'isActiveFildUser1666139110464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isActive"`);
    }

}
