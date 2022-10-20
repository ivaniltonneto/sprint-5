import { MigrationInterface, QueryRunner } from "typeorm";

export class isActiveFieldUser1666011337284 implements MigrationInterface {
    name = 'isActiveFieldUser1666011337284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isActive"`);
    }

}
