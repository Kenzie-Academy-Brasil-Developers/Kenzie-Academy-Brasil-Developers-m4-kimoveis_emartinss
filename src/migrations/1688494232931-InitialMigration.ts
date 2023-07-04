import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1688494232931 implements MigrationInterface {
    name = 'InitialMigration1688494232931'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" RENAME COLUMN "userId" TO "userIdId"`);
        await queryRunner.query(`ALTER TABLE "schedules" ALTER COLUMN "userIdId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_39a75f0ad7d19e3f1238d6a4e9a" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_39a75f0ad7d19e3f1238d6a4e9a"`);
        await queryRunner.query(`ALTER TABLE "schedules" ALTER COLUMN "userIdId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules" RENAME COLUMN "userIdId" TO "userId"`);
    }

}
