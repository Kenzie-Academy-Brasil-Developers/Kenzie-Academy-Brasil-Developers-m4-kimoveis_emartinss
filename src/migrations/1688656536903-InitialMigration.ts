import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1688656536903 implements MigrationInterface {
    name = 'InitialMigration1688656536903'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_1c7257a6ddd86e8c448649fb9a4"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "realEstateId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_b1789fdaa1e7a49cd8ac01ee03c" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_b1789fdaa1e7a49cd8ac01ee03c"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "realEstateId" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_1c7257a6ddd86e8c448649fb9a4" FOREIGN KEY ("realEstateId") REFERENCES "real_estate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
