import { MigrationInterface, QueryRunner } from 'typeorm';

export class $npmConfigName1701963870562 implements MigrationInterface {
  name = ' $npmConfigName1701963870562';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "userName" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "userName"`);
  }
}
