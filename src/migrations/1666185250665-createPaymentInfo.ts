import { MigrationInterface, QueryRunner } from "typeorm";

export class createPaymentInfo1666185250665 implements MigrationInterface {
    name = 'createPaymentInfo1666185250665'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "payment_infos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(45) NOT NULL, "number" character varying(45) NOT NULL, "dueDate" date NOT NULL, "code" character varying(3) NOT NULL, CONSTRAINT "PK_ccb7464329b1faa3eed32b3ab1b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "paymentinfoId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_1462cf498c1c35f0b8247c1e3e7" UNIQUE ("paymentinfoId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_1462cf498c1c35f0b8247c1e3e7" FOREIGN KEY ("paymentinfoId") REFERENCES "payment_infos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_1462cf498c1c35f0b8247c1e3e7"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_1462cf498c1c35f0b8247c1e3e7"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "paymentinfoId"`);
        await queryRunner.query(`DROP TABLE "payment_infos"`);
    }

}
