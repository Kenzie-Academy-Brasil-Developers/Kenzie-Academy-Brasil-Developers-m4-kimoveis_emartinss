import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1688058413758 implements MigrationInterface {
    name = 'InitialMigration1688058413758'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_e64472d578faf91bee90a06ecc0"`);
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "categoryId" TO "categoryIdId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_37a2aa37f1c62797ed4583c87d8" FOREIGN KEY ("categoryIdId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_37a2aa37f1c62797ed4583c87d8"`);
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "categoryIdId" TO "categoryId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_e64472d578faf91bee90a06ecc0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
